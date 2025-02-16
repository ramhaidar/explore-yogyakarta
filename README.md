# Tugas Akhir: Membuat Website - Belajar Dasar Pemrograman Web (Dicoding)

## Daftar Isi

1. [Deskripsi Proyek](#-deskripsi-proyek)
2. [Kriteria Wajib yang Dipenuhi](#-kriteria-wajib-yang-dipenuhi)
3. [Fitur Tambahan yang Diimplementasikan](#-fitur-tambahan-yang-diimplementasikan)
4. [Struktur Proyek](#-struktur-proyek)
5. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
6. [Preview Website](#-preview-website)
7. [Cara Menjalankan Proyek](#-cara-menjalankan-proyek)
8. [Kontributor](#-kontributor)
9. [Catatan Tambahan](#-catatan-tambahan)

## 📌 Deskripsi Proyek

Website ini dibuat sebagai submission akhir dari course _Belajar Dasar Pemrograman Web_ di Dicoding. Proyek ini menerapkan konsep HTML semantik, Flexbox untuk layout, dan JavaScript untuk memanipulasi DOM. Tema yang digunakan adalah **Website Travel Blog Yogyakarta** yang memperkenalkan destinasi wisata populer di Yogyakarta.

---

## ✅ Kriteria Wajib yang Dipenuhi

1. **Struktur HTML Semantik**:
    - Terdapat elemen `<header>`, `<footer>`, `<main>`, `<article>`, dan `<aside>` dengan konten sesuai fungsinya.
    - Struktur HTML mematuhi kaidah semantik:
        - `<main>` berada di antara `<header>` dan `<footer>`.
        - Tidak ada duplikasi elemen `<main>`.
        - `<header>` terletak sebelum `<main>`, dan `<footer>` terletak setelah `<main>`.
        - Elemen `<header>` dan `<footer>` di dalam `<article>` atau `<aside>` diperbolehkan.
2. **Tampilan Foto pada `<aside>`**:

    - Foto ditampilkan di dalam `<aside>` berupa image slider.
    - Foto yang digunakan: **Foto destinasi wisata Yogyakarta seperti Candi Borobudur, Candi Prambanan, dan Malioboro**.

3. **Layout Menggunakan Flexbox**:

    - Seluruh tata letak halaman disusun menggunakan Flexbox.
    - Tidak ada penggunaan teknik float dalam layout.

4. **Tema Bebas Selain Bandung**:
    - Tema website: **Website Travel Blog Yogyakarta yang menampilkan destinasi wisata populer seperti Candi Borobudur, Candi Prambanan, dan Malioboro**.

---

## 🖥️ Fitur Tambahan yang Diimplementasikan

1. **Tampilan yang Menarik**:

    - Pemilihan warna yang sesuai tema menggunakan palet warna dari [colorhunt.co](https://colorhunt.co).
    - Font yang dipilih sesuai tema dari Google Fonts.
    - Tata letak yang rapi dengan pengaturan margin dan padding yang sesuai.

2. **Layout Responsif**:

    - Menggunakan media query untuk tampilan pada perangkat:
        - 🖥️ Desktop
        - 📱 Tablet
        - 📲 Mobile
    - Tampilan responsif diuji pada berbagai ukuran layar.

3. **JavaScript untuk Manipulasi DOM**:
    - ✅ Dropdown Menu: **Menu navigasi dropdown untuk menampilkan daftar destinasi wisata**.
    - ✅ Looping untuk Konten: **Menampilkan daftar artikel blog secara dinamis menggunakan array of objects dan DOM manipulation**.
    - ✅ Slider: **Image slider pada sidebar yang menampilkan foto-foto destinasi wisata Yogyakarta dengan auto-slide dan navigasi manual**.

---

## 💾 Struktur Proyek

```
📂 proyek-website
├── 📂 assets
│   ├── 📂 images
│   │   └── profile.jpg
│   ├── 📂 css
│   │   └── style.css
│   └── 📂 js
│       └── script.js
├── 📂 pages
│   └── about.html
└── index.html
└── README.md
```

---

## 🛠️ Teknologi yang Digunakan

-   **HTML5**: Membuat struktur halaman dengan elemen semantik.
-   **CSS3 (Flexbox, Media Queries)**: Menata tampilan halaman dan membuat desain responsif.
-   **JavaScript (DOM Manipulation)**: Membuat fitur interaktif seperti dropdown, slider, dan menampilkan konten dengan looping.
-   **Font**: Google Fonts.
-   **Color Palette**: ColorHunt.

---

## 📸 Preview Website

**Tampilan Desktop:**  
![Desktop View](/docs/desktop.jpg)

**Tampilan Mobile:**  
![Mobile View](/docs/mobile.jpg)

---

## 📝 Cara Menjalankan Proyek

1. **Akses Live Demo** [disini](https://ramhaidar.github.io/explore-yogyakarta) (https://ramhaidar.github.io/explore-yogyakarta)

2. **Clone repository ini**:
    ```bash
    git clone https://github.com/ramhaidar/explore-yogyakarta.git
    ```
3. **Buka file `index.html` dengan browser**:
    - Klik dua kali pada file `index.html`, atau
    - Jalankan dengan _Live Server_ di Visual Studio Code.

---

## 🚀 Kontributor

-   Nama: **Haidaruddin Muhammad Ramdhan**
-   Dicoding Username: **[ramhaidar](https://www.dicoding.com/users/ramhaidar)**
-   Submission untuk: **Course Belajar Dasar Pemrograman Web**

---

## 🏆 Catatan Tambahan

-   Semua resource menggunakan _relative path_, bukan _absolute path_.
-   Penamaan file dan folder sesuai dengan yang di-_import_ dalam kode (peka terhadap huruf besar/kecil).
-   IDE yang digunakan: **Visual Studio Code**.

**Catatan Penutup**  
Terima kasih telah membaca README ini dan semoga proyek ini dapat bermanfaat.

---

**Terima kasih! 😊🚀**
