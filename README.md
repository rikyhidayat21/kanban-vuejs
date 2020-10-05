# kanban

## Buatlah aplikasi Kanban menggunakan client-server model dengan spesifikasi sebagai berikut:
- API Documentation (server) yang meliputi:
- URL(s)
- HTTP Method
- Request
- Response (success dan error)
- Membuat routes sesuai standar REST API
- CRUD endpoints untuk Task, dimana minimal inputnya memiliki:
    - title
    - category
- Register dan Login dimana minimal field untuk user memiliki:
    - Email
    - Password
    - Organization (default hacktiv8)
- Atribut Organization pada User, berisikan default value “Hacktiv8”. Atribut ini ditambahkan pada server sehingga akan terinput secara otomatis ketika user baru didaftarkan dan default value tidak boleh diubah dengan value lain selain “Hacktiv8”.
(Note: Untuk case ini kegunaan organization tersebut akan terlihat ketika kalian mengerjakan socket. Ketika terjadi perubahan pada task, maka semua user yang online dan 1 organisasi akan dapat melihat perubahannya. Jika ada pertanyaan lebih lanjut mengenai hal ini, bisa tanyakan instruktur :) )
- Membuat authorization sehingga user hanya bisa melakukan Update dan Delete terhadap task-nya sendiri
- Melakukan Read pada semua card yang tersedia(authentication)
- Social Login (Google/Twitter/Facebook/GitHub)
- Vue component minimal Task dan Category
- No alert()!!!
- Deploy to Heroku (server) + Firebase (client) Hosting

## Rocket 🚀
Challenge nya masih kurang? Coba kerjain ini!
- Buat Kanban Board kamu menjadi real time menggunakan socket.io
- Dragable
- Project
- Dynamic category

## Kompetensi Backend
- REST API
- API Documentation
- Auth
- PostgreSQL + Sequelize + Express

## Kompetensi Client
- Vue.js
- SPA (Single Page Application)
- Vue Component
De

## Deadline
- Week 2 - Jumat 23:59

## Contoh
https://kamvan-6aa69.firebaseapp.com/
https://kanban-83af9.firebaseapp.com/

## Submission
Fork dari organization, lalu open pull request dengan title NAMA LENGKAP KAMU (ex: Dimitri Wahyudiputra) dan assign ke buddy kamu. Tambahkan comment yang berisi environment variables yang dipakai (beserta valuenya), link deploy, fitur tambahannya apa dan kendala saat mengerjakan.
