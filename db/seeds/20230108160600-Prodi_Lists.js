"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    
    const timestamp = new Date();

    const toInsert = [
      {
        nama_prodi: "D3 Teknik Telekomunikasi ",
        fakultas: "Fakultas Teknik Komunikasi dan Elektro (FTTE)",
        link: "https://d3tt.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Telekomunikasi",
        fakultas: "Fakultas Teknik Komunikasi dan Elektro (FTTE)",
        link: "https://s1tt.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Elektro",
        fakultas: "Fakultas Teknik Komunikasi dan Elektro (FTTE)",
        link: "https://elektro.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Biomedis",
        fakultas: "Fakultas Teknik Komunikasi dan Elektro (FTTE)",
        link: "https://biomedis.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Informatika",
        fakultas: "Fakultas Informatika (FIF)",
        link: "https://s1if.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Software Engineering",
        fakultas: "Fakultas Informatika (FIF)",
        link: "https://se.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Sistem Informasi",
        fakultas: "Fakultas Informatika (FIF)",
        link: "https://si.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Data Science",
        fakultas: "Fakultas Informatika (FIF)",
        link: "https://datascience.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Desain Komunikasi Visual",
        fakultas: "Fakultas Rekayasa Industri dan Desain (FRID)",
        link: "https://dkv.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Industri",
        fakultas: "Fakultas Rekayasa Industri dan Desain (FRID)",
        link: "https://ti.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Logistik",
        fakultas: "Fakultas Rekayasa Industri dan Desain (FRID)",
        link: "https://tekniklogistik.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Bisnis Digital",
        fakultas: "Fakultas Rekayasa Industri dan Desain (FRID)",
        link: "https://bd.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Desain Produk",
        fakultas: "Fakultas Rekayasa Industri dan Desain (FRID)",
        link: "https://dp.ittelkom-pwt.ac.id/",
        id_uni: 1,
        createdAt: timestamp, updatedAt: timestamp
      },

      {
        nama_prodi: "D3 Ilmu Tanah",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Agrobisnis",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Agroteknologi",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Agribisnis",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Pertanian",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Ilmu & Teknologi Pangan",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S2 Agronomi",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S2 Agribisnis",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S2 Ilmu Pangan",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S3 Ilmu Pertanian",
        fakultas: "Fakultas Pertanian",
        link: "http://faperta.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "1.	S1 Mikologi",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Biologi Dasar",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Toksikologi Lingkungan",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Ekologi dan Fisiologi Reproduksi Hewan Ternak",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Imunologi",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Endokrinologi",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Apikultur",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Taksonomi Hewan",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Biologi Jamur Makroskopis",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Toksikologi Industri",
        fakultas: "Fakultas Biologi",
        link: "http://bio.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Administrasi Perkantoran",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Administrasi Bisnis",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Akuntansi",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Bisnis Internasional",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Akuntansi",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Manajemen ",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "1.	D3 Administrasi PerkantoranS1 Pendidikan Ekonomi",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Ekonomi Pembangunan",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        link: "http://feb.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Budidaya Ternak",
        fakultas: "Fakultas Peternakan",
        link: "http://fapet.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Peternakan",
        fakultas: "Fakultas Peternakan",
        link: "http://fapet.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S2 Peternakan",
        fakultas: "Fakultas Peternakan",
        link: "http://fapet.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S3 Ilmu Peternakan",
        fakultas: "Fakultas Peternakan",
        link: "http://fapet.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Kejahatan Korporasi",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hukum Pidana",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hukum Perdata",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hukum Investasi",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hukum Kesehatan Masyarakat",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hukum dan Teknologi",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Kapita Selekta Hukum Pidana",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Cybercrime",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hukum Pidana Khusus",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hukum Tata Negara",
        fakultas: "Fakultas Hukum",
        link: "http://fh.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Ilmu Komunikasi",
        fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
        link: "http://fisip.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Sosiologi",
        fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
        link: "http://fisip.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Ilmu Politik ",
        fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
        link: "http://fisip.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Hubungan Internasional",
        fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
        link: "http://fisip.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Administrasi Publik",
        fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
        link: "http://fisip.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Kedokteran Umum",
        fakultas: "Fakultas Kedokteran",
        link: "http://fk.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Kedokteran Gigi",
        fakultas: "Fakultas Kedokteran",
        link: "http://fk.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Informatika",
        fakultas: "Fakultas Teknik",
        link: "http://ft.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Sipil",
        fakultas: "Fakultas Teknik",
        link: "http://ft.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Geologi",
        fakultas: "Fakultas Teknik",
        link: "http://ft.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Elektro",
        fakultas: "Fakultas Teknik",
        link: "http://ft.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Teknik Industri",
        fakultas: "Fakultas Teknik",
        link: "http://ft.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Ilmu Gizi",
        fakultas: "Fakultas Ilmu-ilmu Kesehatan",
        link: "http://fikes.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Keperawatan",
        fakultas: "Fakultas Ilmu-ilmu Kesehatan",
        link: "http://fikes.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Farmasi",
        fakultas: "Fakultas Ilmu-ilmu Kesehatan",
        link: "http://fikes.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Kesehatan Masyarakat",
        fakultas: "Fakultas Ilmu-ilmu Kesehatan",
        link: "http://fikes.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Pendidikan Jasmani",
        fakultas: "Fakultas Ilmu-ilmu Kesehatan",
        link: "http://fikes.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Bahasa Mandarin",
        fakultas: "Fakultas Ilmu Budaya",
        link: "http://fib.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "D3 Bahasa Inggris",
        fakultas: "Fakultas Ilmu Budaya",
        link: "http://fib.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Sastra Jepang",
        fakultas: "Fakultas Ilmu Budaya",
        link: "http://fib.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Pendidikan Bahasa Inggris",
        fakultas: "Fakultas Ilmu Budaya",
        link: "http://fib.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Pendidikan Bahasa Indonesia",
        fakultas: "Fakultas Ilmu Budaya",
        link: "http://fib.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Sastra Inggris",
        fakultas: "Fakultas Ilmu Budaya",
        link: "http://fib.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Sastra Indonesia",
        fakultas: "Fakultas Ilmu Budaya",
        link: "http://fib.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Budidaya Perairan",
        fakultas: "Fakultas Perikanan dan Ilmu Kelautan",
        link: "http://fpik.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Ilmu Kelautan",
        fakultas: "Fakultas Perikanan dan Ilmu Kelautan",
        link: "http://fpik.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Manajemen Sumber Daya Perairan",
        fakultas: "Fakultas Perikanan dan Ilmu Kelautan",
        link: "http://fpik.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Matematika",
        fakultas: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
        link: "http://fmipa.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Fisika",
        fakultas: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
        link: "http://fmipa.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
      {
        nama_prodi: "S1 Kimia",
        fakultas: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
        link: "http://fmipa.unsoed.ac.id/",
        id_uni: 2,
        createdAt: timestamp, updatedAt: timestamp
      },
    ];

    await queryInterface.bulkInsert("Prodi_Lists", toInsert, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Prodi_Lists", null, {});
  },
};
