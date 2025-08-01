'use client';

import HeroSlider from '../components/HeroSlider'; // 🟩 Hero Slider menggantikan hero statis
import KenapaMemilihKami from '../components/KenapaMemilihKami'; // 🟦 Komponen Mengapa Memilih Kami
import LayananKami from '../components/LayananKami';             // 🟦 Komponen Layanan Kami

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* 🟩 Hero Slider */}
      <HeroSlider />

      {/* Tentang Kami */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Tentang TombatuDev</h2>
            <p className="mb-4">
              Kami adalah tim profesional yang fokus pada pengembangan website, aplikasi custom, dan solusi digital yang tepat guna untuk bisnis Anda.
            </p>
            <p>
              Dengan pengalaman di berbagai sektor, kami siap membantu transformasi digital bisnis Anda.
            </p>
          </div>
          <div>
            <img src="/images/logo.png" alt="Tentang Kami"  />
          </div>
        </div>
      </section>

      {/* Mengapa Memilih Kami */}
      <KenapaMemilihKami />

      {/* Layanan Kami */}
      <LayananKami />

      {/* Portofolio */}
      {/* TODO: Tambahkan komponen Portofolio di sini */}

      {/* Testimoni */}
      {/* TODO: Tambahkan komponen Testimoni di sini */}

      {/* CTA */}
      {/* TODO: Tambahkan komponen CTA di sini */}

      {/* Footer */}
      {/* TODO: Tambahkan komponen Footer di sini */}
    </div>
  );
}
