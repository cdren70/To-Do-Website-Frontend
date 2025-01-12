# To-Do List Manager

To-Do List Manager adalah aplikasi web sederhana yang membantu Anda mengelola daftar tugas dan tetap terorganisir. Aplikasi ini memiliki antarmuka yang bersih dan intuitif, yang memudahkan Anda untuk menambahkan, melihat, dan menyelesaikan tugas.

## Fitur
![Tampilan Awal To-Do List](img/Tampilan%20Awal%20To-Do%20List.png)

Berdasarkan gambar, aplikasi ini tampaknya memiliki fitur-fitur berikut:

*   **Pembuatan Daftar:**
    *   Pengguna dapat membuat beberapa daftar tugas untuk mengkategorikan tugas mereka (misalnya, "Pekerjaan", "Pribadi", "Belanja").
    *   Tombol "+ New List" di pojok kanan atas digunakan untuk membuat daftar baru.
*   **Manajemen Tugas:**
    *   **Menambahkan Tugas:**
        *   Pengguna dapat menambahkan tugas baru ke daftar yang dipilih.
        *   Formulir penambahan tugas meminta informasi berikut:
            *   **Task Title:** Judul singkat untuk tugas.
            *   **Task Description:** Deskripsi yang lebih rinci untuk tugas (opsional).
            *   **mm/dd/yyyy:** Tanggal jatuh tempo untuk tugas, dapat dipilih menggunakan date picker.
            *   **Priority (Prioritas):** Prioritas tugas (default-nya "High", tapi kemungkinan ada pilihan lain seperti "Medium" atau "Low" di dropdown).
        *   Tombol "Add Task" untuk menambahkan tugas ke daftar.
    *   **Memilih Daftar:** Pengguna dapat memilih daftar yang ingin mereka lihat tugasnya dari dropdown "Select List".
*   **Tampilan Daftar dan Tugas:**
    *   **Your Lists:** Panel kiri menampilkan daftar tugas yang telah dibuat pengguna.
    *   **Tasks:** Panel kanan menampilkan detail tugas untuk daftar yang dipilih.

## Teknologi

Deskripsi ini berdasarkan gambar, sehingga teknologi yang digunakan belum bisa dipastikan. Namun, kemungkinan aplikasi ini dibangun menggunakan:

*   **Frontend:** HTML, CSS, JavaScript (mungkin dengan framework seperti React, Vue, atau Angular)
*   **Backend:** (Jika ada) - Bisa menggunakan Node.js, Python (dengan framework seperti Flask atau Django), atau teknologi server-side lainnya.
*   **Database:** (Jika ada) -  Untuk menyimpan data daftar dan tugas, bisa menggunakan database seperti MySQL, PostgreSQL, atau MongoDB.

## Cara Menggunakan

1.  **Membuat Daftar Baru:** Klik tombol "+ New List" di pojok kanan atas.
2.  **Menambahkan Tugas:**
    *   Pilih daftar dari dropdown "Select List".
    *   Isi formulir "Task Title", "Task Description" (opsional), "mm/dd/yyyy", dan pilih prioritas.
    *   Klik tombol "Add Task".
