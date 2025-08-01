'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: (
      <>
        Promo Landing Page <span className="text-red-500 font-bold">500RB</span>
      </>
    ),
    desc: 'Landing page profesional, siap pakai & siap closing via WhatsApp. Gratis domain & hosting!',
    cta: 'Pesan Sekarang',
    link: '/contact',
    image: '/images/promo-landing.jpg',
    bgStyle: 'single',
  },
  {
    title: 'Jasa pembuatan website profesional & berkualitas',
    desc: 'Siap membantu membuat website & landingpage profesional anda dengan desain profesional, SEO Friendly & Menarik! GRATIS KONSULTASI seputar website , Digital Marketing & rencana pengembangan website anda dengan tim support berpengalaman.',
    cta: 'Lihat Layanan',
    link: '#layanan',
    image: '/images/logo.png',
    bgStyle: 'gradient',
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-[90vh]"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          {slide.bgStyle === 'gradient' ? (
            <section
              className="h-full w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
              }}
            >
              <motion.div
                className="w-full md:w-1/2 text-center md:text-left space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                <p className="text-lg md:text-xl">{slide.desc}</p>
                <a
                  href={slide.link}
                  className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-400 transition"
                >
                  {slide.cta}
                </a>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src={slide.image}
                  alt="Hero Slide"
                  className="max-h-[400px] w-auto object-contain rounded-xl shadow-lg"
                />
              </motion.div>
            </section>
          ) : (
            <section className="h-full w-full bg-blue-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
              <motion.div
                className="w-full md:w-1/2 text-center md:text-left space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                <p className="text-lg md:text-xl">{slide.desc}</p>
                <a
                  href={slide.link}
                  className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-400 transition"
                >
                  {slide.cta}
                </a>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src={slide.image}
                  alt="Hero Slide"
                  className="max-h-[400px] w-auto object-contain rounded-xl shadow-lg"
                />
              </motion.div>
            </section>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
