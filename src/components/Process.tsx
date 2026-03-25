import Image from "next/image";

const blocks = [
  {
    number: "01",
    title: "Lujo Accesible",
    description:
      "Trabajamos con maderas de carácter como Teca Premium y Flor Morado, y curaduría de Moissanita. Materiales nobles, al alcance de quien valora lo significativo.",
    image: "/images/proceso-1.jpg",
    accent: false,
    showSeal: false,
  },
  {
    number: "02",
    title: "Artesanía Viva",
    description:
      "Rechazamos la producción en serie. Nuestro valor es la escucha activa y el diálogo para co-crear anclas personales. Cada pieza nace de una conversación, no de una fábrica.",
    image: "/images/proceso-2.jpg",
    accent: false,
    showSeal: true,
  },
  {
    number: "03",
    title: "Ritual de Cuidado",
    description:
      "Nuestras piezas son materia viva. Preserve la madera con aceite mineral y recupere el fuego de la Moissanita (9.25 Mohs) con paño de microfibra. Un tesoro que mejora con el tiempo.",
    image: "/images/proceso-3.jpg",
    accent: true,
    showSeal: false,
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-32 lg:py-40 bg-[#F5F1E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-32">
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

        {/* Zig-Zag Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {blocks.map((block, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={block.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  block.accent ? "relative" : ""
                }`}
              >
                {/* Image — 7 columns */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="aspect-[4/3] rounded-sm shadow-xl overflow-hidden relative bg-[#E8E2D8]">
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>

                {/* Text — 5 columns */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  } ${
                    block.accent
                      ? "border-l-4 border-[#C5A059] pl-8 lg:pl-10"
                      : ""
                  }`}
                >
                  <span className="font-heading text-5xl lg:text-6xl font-bold text-[#C5A059]/30">
                    {block.number}
                  </span>
                  <h3 className="font-heading text-3xl lg:text-4xl font-bold text-[#3D4B3A]">
                    {block.title}
                  </h3>
                  <p className="font-body font-light text-lg text-[#2C2621]/70 leading-relaxed">
                    {block.description}
                  </p>
                  {block.showSeal && (
                    <div className="pt-4">
                      <img
                        src="/images/sello-certificado.svg"
                        alt="Sello de Autenticidad Johnny + Joey"
                        className="w-28 h-28 opacity-90"
                      />
                    </div>
                  )}
                  {block.accent && (
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-12 h-[1px] bg-[#C5A059]" />
                      <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C5A059]">
                        Cuidado esencial
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
