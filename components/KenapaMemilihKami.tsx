'use client';

import { 
  CheckCircleIcon, DevicePhoneMobileIcon, GlobeAltIcon, ShieldCheckIcon, 
  MagnifyingGlassIcon, BookOpenIcon, CurrencyDollarIcon, UsersIcon, LifebuoyIcon 
} from '@heroicons/react/24/outline';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Desain Website Profesional',
      desc: 'Desain website yang profesional menyesuaikan warna, tata letak sesuai keinginan anda, bukan template pasaran seperti diluar sana.',
      icon: CheckCircleIcon,
    },
    {
      title: 'Tampilan Responsive',
      desc: 'Tampilan website yang responsive & menyesuaikan media yang anda gunakan untuk mengakses website. Tampilan tetap rapi, SEO Friendly & disukai Google.',
      icon: DevicePhoneMobileIcon,
    },
    {
      title: 'Gratis Domain & Hosting',
      desc: 'Paket pembuatan website kami sudah termasuk domain & hosting selama 1 tahun dibawah perusahaan jasa Web Hosting Indonesia yang kami miliki sendiri.',
      icon: GlobeAltIcon,
    },
    {
      title: 'GRATIS Sertifikat SSL Selamanya',
      desc: 'Gratis sertifikat SSL yang akan mengamankan website anda lebih baik & menjadi salah satu penilaian perangkingan website di search engine.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Gratis Optimasi SEO',
      desc: 'Gratis optimasi SEO Basic yang akan membuat website anda lebih mudah terindex di mesin pencari.',
      icon: MagnifyingGlassIcon,
    },
    {
      title: 'Gratis Panduan Penggunaan',
      desc: 'Gratis panduan penggunaan website dalam bentuk video ataupun ebook yang mudah dipelajari & dipraktekkan sendiri.',
      icon: BookOpenIcon,
    },
    {
      title: 'Biaya Pembuatan Website Murah',
      desc: 'Biaya pembuatan website yang terjangkau namun tetap berkualitas.',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Tim Developer Berpengalaman',
      desc: 'Website anda akan ditangani oleh tim developer yang berpengalaman lebih dari 10 tahun menangani project website dalam & luar negeri.',
      icon: UsersIcon,
    },
    {
      title: 'Bantuan Support Teknis Handal',
      desc: 'Bantuan support teknis 24×7/365 seputar website & konsultasi digital marketing.',
      icon: LifebuoyIcon,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Mengapa memilih Jasa pembuatan Website dan landing page kami?
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Kami bukan sekedar membuat website. Kami membangun solusi yang benar-benar berfungsi, menciptakan pengalaman pengguna yang kuat & meningkatkan traffic, menghasilkan prospek, dan pada akhirnya, meningkatkan penjualan bisnis anda!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
              <div className="mb-4"><Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
