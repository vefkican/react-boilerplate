import api from "./axiosInstance";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: string;
  refreshTokenExpires: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: string | null;
}

export const authApi = {
  login: (dto: LoginDto) =>
    api.post<ApiResponse<AuthResponse>>("/api/auth/login", dto),

  register: (dto: RegisterDto) =>
    api.post<ApiResponse<AuthResponse>>("/api/auth/register", dto),

  refresh: (refreshToken: string) =>
    api.post<ApiResponse<AuthResponse>>("/api/auth/refresh", { refreshToken }),

  revoke: (refreshToken: string) =>
    api.post("/api/auth/revoke", { refreshToken }),
};
