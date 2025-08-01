'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function LayananKami() {
  const layanan = [
    {
      title: "Website Company Profile",
      desc: "Jasa pembuatan website company profile untuk bisnis / perusahaan dengan profesional sesuai permintaan.",
      link: "/layanan/company-profile",
    },
    {
      title: "Website Toko Online",
      desc: "Jasa Pembuatan website toko online yang dilengkapi dengan keranjang belanja, katalog, cek ongkir & payment gateway banyak bank.",
      link: "/layanan/toko-online",
    },
    {
      title: "Website Sekolah",
      desc: "Jasa pembuatan website sekolah yang dilengkapi dengan informasi seputar sekolah, agenda kegiatan, pengumuman serta info kesiswa & guru yang lengkap.",
      link: "/layanan/sekolah",
    },
    {
      title: "Website Instansi Pemerintahan",
      desc: "Jasa Pembuatan website instansi & pemerintahan / daerah yang menarik, informatif & mudah digunakan.",
      link: "/layanan/instansi-pemerintahan",
    },
    {
      title: "Website Wisata & Rental Mobil",
      desc: "Jasa pembuatan website rental mobil yang dilengkapi dengan informasi harga sewa mobil, jenis & tipe mobil dilengkapi dengan katalog paket tour & objek wisata.",
      link: "/layanan/wisata-rental-mobil",
    },
    {
      title: "Website Hotel & Penginapan",
      desc: "Jasa Pembuatan website hotel & penginapan yang dilengkapi dengan sistem booking kamar & pembayaran online otomatis banyak bank menggunakan payment Gateway.",
      link: "/layanan/hotel-penginapan",
    },
    {
      title: "Website Rumah Sakit & Klinik",
      desc: "Jasa pembuatan website rumah sakit & klinik yang dilengkapi dengan informasi data & jadwal dokter serta fasilitas rumah sakit & klinik.",
      link: "/layanan/rumah-sakit-klinik",
    },
    {
      title: "Website Property",
      desc: "Jasa Pembuatan website penjualan property. Dengan fitur single vendor ataupun multivendor seperti marketplace property.",
      link: "/layanan/property",
    },
    {
      title: "Website Marketplace",
      desc: "Jasa pembuatan website marketplace. Dilengkapi dengan sistem untuk daftar & login banyak user penjual dengan pembeli serta sistem pembayaran online.",
      link: "/layanan/marketplace",
    },
    {
      title: "Website LMS (Pembelajaran Online)",
      desc: "Jasa Pembuatan website LMS (Pembelajaran Online / Kursus Online) yang dilengkapi dengan sistem member, materi video, webinar dengan zoom & integrasi Google Classroom.",
      link: "/layanan/lms",
    },
    {
      title: "Website Organisasi, Lembaga & Partai",
      desc: "Jasa pembuatan website untuk organisasi, lembaga & partai yang dilengkapi dengan informasi pendukung seperti kegiatan / event, informasi anggota & kebutuhan lain yang dapat didiskusikan.",
      link: "/layanan/organisasi-lembaga-partai",
    },
    {
      title: "Website Landingpage Jualan",
      desc: "Jasa Pembuatan website landing page jualan yang cocok untuk menjual produk fisik / digital dengan sistem order yang cepat & efektif. Berfokus pada closing via WhatsApp & sistem pembayaran yang simpel.",
      link: "/layanan/landingpage-jualan",
    },
  ];

  return (
    <section id="layanan" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {layanan.map(({ title, desc, link }) => (
          <a
            key={title}
            href={link}
            className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition no-underline"
          >
            <div className="flex items-center mb-3">
              <CheckCircleIcon className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-700 hover:underline">{title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
