"use client";

import { useState } from "react";
import Image from "next/image";

type Tab = "signature" | "gourmet" | "homeoffice";

interface Product {
  name: string;
  description: string;
  investment: string;
  image: string;
  measure?: string;
}

const tabs: { key: Tab; label: string; subtitle: string }[] = [
  {
    key: "signature",
    label: "Signature",
    subtitle: "La Esencia",
  },
  {
    key: "gourmet",
    label: "Gourmet",
    subtitle: "El Compartir",
  },
  {
    key: "homeoffice",
    label: "Home Office",
    subtitle: "El Propósito",
  },
];

const tabIntro: Record<Tab, string> = {
  signature:
    "Piezas conmemorativas. El regalo con mayor carga emocional.",
  gourmet:
    "El ritual de la mesa elevado al arte.",
  homeoffice:
    "Productividad con bienestar y salud postural.",
};

const tabProducts: Record<Tab, Product[]> = {
  signature: [
    {
      name: "Emblema Lorenzo",
      description:
        "Roble Flor Morado o Teca Premium con Moissanita 0.3 ct. Un tesoro conmemorativo diseñado para perdurar generaciones.",
      investment: "Inversión desde $280.000 COP",
      image: "/images/producto-1.jpg",
    },
    {
      name: "Talismanes con Moissanita",
      description:
        "Símbolos grabados en roble con Moissanita 9.25 Mohs. Pequeños emblemas de protección y significado personal.",
      investment: "Inversión desde $100.000 COP",
      image: "/images/producto-2.jpg",
    },
  ],
  gourmet: [
    {
      name: "Tabla Orgánica",
      description:
        "La fluidez de la naturaleza en tu cocina. Cada veta cuenta su propia historia en madera de carácter.",
      investment: "Inversión desde $280.000 COP",
      image: "/images/producto-4.jpg",
      measure: "Medida Maestra: Forma orgánica natural",
    },
    {
      name: "Línea de Precisión",
      description:
        "Precisión en cada veta para el ritual del corte. El equilibrio entre lo funcional y lo escultórico.",
      investment: "Inversión desde $280.000 COP",
      image: "/images/producto-3.jpg",
      measure: "Medida Maestra: 35×25 cm",
    },
  ],
  homeoffice: [
    {
      name: "Elevador Arquitectónico",
      description:
        "Gestión inteligente del cableado. Ergonomía y orden visual para un espacio de trabajo que inspira.",
      investment: "Inversión desde $180.000 COP",
      image: "/images/producto-5.jpg",
      measure: "Medida Maestra: 50×20×10 cm",
    },
    {
      name: "Reposapiés Ergonómico",
      description:
        "Teca maciza de alta densidad. Bienestar postural con emoción en el tacto.",
      investment: "Inversión desde $180.000 COP",
      image: "/images/producto-6.jpg",
    },
  ],
};

export function Collection() {
  const [activeTab, setActiveTab] = useState<Tab>("signature");

  return (
    <section id="coleccion" className="py-32 lg:py-40 bg-[#F5F1E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[#C5A059] font-body font-light tracking-[0.3em] text-xs uppercase mb-6">
            Colecciones
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D4B3A] mb-6">
            Colecciones de Autor
          </h2>
          <p className="font-body font-light text-[#2C2621]/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada tesoro es único, co-creado con usted en maderas nobles y
            Moissanita.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-3 rounded-full font-body text-sm tracking-wider transition-all duration-500 ${
                activeTab === tab.key
                  ? "bg-[#3D4B3A] text-[#F5F1E9] shadow-lg shadow-[#3D4B3A]/20"
                  : "bg-transparent border border-[#C5A059]/30 text-[#2C2621]/60 hover:border-[#C5A059] hover:text-[#3D4B3A]"
              }`}
            >
              <span className="font-normal">{tab.label}</span>
              <span className="hidden sm:inline text-[#C5A059]/70 ml-2">— {tab.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Tab Intro */}
        <div className="text-center mb-16">
          <p className="font-body font-light text-xl text-[#2C2621]/70 italic max-w-xl mx-auto">
            &ldquo;{tabIntro[activeTab]}&rdquo;
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          {tabProducts[activeTab].map((product, index) => (
            <article
              key={`${activeTab}-${index}`}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] rounded-sm shadow-xl overflow-hidden relative mb-8 bg-[#E8E2D8]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#3D4B3A]/0 group-hover:bg-[#3D4B3A]/5 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block bg-[#F5F1E9]/90 backdrop-blur-sm text-[#3D4B3A] font-body text-xs font-normal tracking-widest px-5 py-2.5 rounded-sm">
                    Celebrar este Tesoro →
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-bold text-[#3D4B3A] group-hover:text-[#C5A059] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-body font-light text-base text-[#2C2621]/60 leading-relaxed">
                  {product.description}
                </p>
                {product.measure && (
                  <p className="font-body text-xs tracking-wider text-[#C5A059] uppercase">
                    {product.measure}
                  </p>
                )}
                <p className="font-body text-sm font-normal text-[#3D4B3A]">
                  {product.investment}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
