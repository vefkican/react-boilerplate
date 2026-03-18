@"

# React Boilerplate

Vite + React + TypeScript + Tailwind + shadcn/ui ile hazır proje şablonu.

## İçerik

- **Vite + React + TypeScript** — Modern build tooling
- **Tailwind CSS v4** — Utility-first CSS
- **shadcn/ui** — Hazır component kütüphanesi
- **Axios Instance + Interceptor** — Otomatik token yenileme
- **Auth Context + Protected Routes** — Hazır kimlik doğrulama
- **GitHub Actions CI/CD** — Otomatik build

## Kullanım

### 1. Template'den repo oluştur

GitHub'da Use this template butonuna tıkla.

### 2. Bağımlılıkları kur

npm install

### 3. .env dosyası oluştur

VITE_API_URL=http://localhost:8080

### 4. Çalıştır

npm run dev

## Klasör Yapısı

src/
├── api/ # Axios instance + API fonksiyonları
├── context/ # Auth context
├── components/ # shadcn/ui componentleri
├── pages/ # Sayfalar
└── router/ # Protected + Public routes
"@ | Out-File -FilePath README.md -Encoding utf8
