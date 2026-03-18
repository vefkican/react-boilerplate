import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// İstek giderken Access Token ekle
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Cevap gelince 401 kontrolü yap
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;

    // 401 geldi ve daha önce retry yapmadıysak
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("Refresh token yok");

        // Token yenile
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL ?? "http://localhost:8080"}/api/auth/refresh`,
          { refreshToken },
        );

        // Yeni token'ları kaydet
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);

        // Başarısız isteği yeni token ile tekrarla
        original.headers.Authorization = `Bearer ${data.data.accessToken}`;
        return api(original);
      } catch {
        // Refresh token da geçersiz → logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
