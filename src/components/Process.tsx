"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  {
    number: "01",
    title: "Lujo Accesible",
    description:
      "Trabajamos con maderas de carácter como Teca Premium y Flor Morado, y curaduría de Moissanita. Materiales nobles, al alcance de quien valora lo significativo.",
    image: "/images/proceso-1.jpg",
    accent: "Materiales Premium",
  },
  {
    number: "02",
    title: "Artesanía Viva",
    description:
      "Rechazamos la producción en serie. Nuestro valor es la escucha activa y el diálogo para co-crear anclas personales. Cada pieza nace de una conversación, no de una fábrica.",
    image: "/images/proceso-2.jpg",
    accent: "Co-creación",
  },
  {
    number: "03",
    title: "Ritual de Cuidado",
    description:
      "Nuestras piezas son materia viva. Preserve la madera con aceite mineral y recupere el fuego de la Moissanita (9.25 Mohs) con paño de microfibra. Un tesoro que mejora con el tiempo.",
    image: "/images/proceso-3.jpg",
    accent: "Cuidado esencial",
  },
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="proceso" className="py-32 lg:py-40 bg-[#F5F1E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[#C5A059] font-body font-light tracking-[0.3em] text-xs uppercase mb-6">
            Filosofía
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D4B3A] mb-6">
            El Ritual
          </h2>
          <p className="font-body font-light text-[#2C2621]/60 max-w-xl mx-auto text-lg leading-relaxed">
            Tres pilares que sostienen cada pieza que sale de nuestro taller.
          </p>
        </div>
      </div>

      {/* Coverflow Carousel — full-width for depth effect */}
      <div className="process-coverflow max-w-6xl mx-auto px-4">
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          initialSlide={1}
          pagination={{ clickable: true }}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          className="pb-16"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide.number}
              className="!w-[85vw] sm:!w-[70vw] md:!w-[50vw] lg:!w-[40vw]"
            >
              <div
                className={`rounded-sm overflow-hidden shadow-xl transition-all duration-500 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-40"
                }`}
              >
                {/* Card Image */}
                <div className="aspect-[4/3] relative bg-[#E8E2D8]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                  {/* Number overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="font-heading text-5xl lg:text-6xl font-bold text-white/30">
                      {slide.number}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="bg-[#3D4B3A] p-8 lg:p-10 space-y-4">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-[#F5F1E9]">
                    {slide.title}
                  </h3>
                  <p className="font-body font-light text-base text-[#F5F1E9]/70 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-[1px] bg-[#C5A059]" />
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C5A059]">
                      {slide.accent}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
