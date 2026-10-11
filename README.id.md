# Template Portofolio Pesisir

Starter portofolio interaktif berbasis React, TypeScript, Vite, dan Tailwind CSS. Visual pesisir berpadu dengan UI neo-brutalist, fisika interaktif, dan section portofolio yang siap disesuaikan.

[English](README.md) · [Bahasa Indonesia](README.id.md)

## Gambaran

Website satu halaman untuk developer, designer, pelajar, dan pembuat produk digital. Ganti data demo dengan data Anda tanpa perlu mengubah struktur komponen.

## Fitur

- Canvas laut interaktif dengan ombak, gelembung, ikan, dan riak saat diklik
- Bebek karet yang dapat digeser, kepiting pantai, dan burung camar
- Showcase proyek dengan filter, modal studi kasus, metrik, dan ilustrasi custom
- Pipeline tech stack yang terhubung ke proyek portofolio
- Timeline milestone yang mengikuti scroll
- Section aktivitas kontribusi GitHub
- Area kontak bergaya bento dengan kartu interaktif
- Desain neo-brutalist pesisir yang responsif
- Aset demo SVG lokal tanpa ketergantungan gambar eksternal

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animasi | Framer Motion |
| Scroll | Lenis |
| Ikon | Lucide React, Simple Icons |

## Mulai cepat

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite.

## Kustomisasi

Sebagian besar konten portofolio berada di `src/data/portfolioData.ts`.

1. Ganti `NAMA ANDA`, bio, pendidikan, minat, dan link kontak.
2. Ganti proyek demo, metrik, milestone, dan relasi teknologi.
3. Simpan foto profil dan gambar proyek di dalam `public/`.
4. Perbarui nilai `avatarUrl` dan `imageUrl` proyek.
5. Tambahkan CV Anda lalu ubah link download di `src/components/hero/HeroSection.tsx`.
6. Ubah username GitHub pada data kontak agar kartu aktivitas memakai profil Anda.

Jangan commit password, API key, token, dokumen privat, atau data pribadi yang tidak ingin dipublikasikan.

## Perintah

```bash
npm run dev       # server development
npm run build     # type-check dan build produksi
npm run preview   # preview build produksi
npm run lint      # pemeriksaan ESLint
```

## Deploy

Deploy folder `dist/` ke GitHub Pages, Vercel, Netlify, atau layanan hosting statis lain.

Jika GitHub Pages memakai subpath repository, atur `base` di `vite.config.ts` sebelum build.

## Struktur project

```text
public/                 aset statis dan artwork proyek
src/components/         section halaman reusable
src/data/               data portofolio
src/hooks/              hook interaksi dan scroll
src/types/              model TypeScript
src/App.tsx              komposisi halaman
src/index.css            style global dan setup Tailwind
```

## Lisensi

MIT. Lihat [LICENSE](LICENSE).

---

[Read this README in English](README.md)
