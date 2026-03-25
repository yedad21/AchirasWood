import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#F5F1E9] overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content — 5 columns for asymmetry */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <p className="text-[#C5A059] font-body font-light tracking-[0.3em] text-xs uppercase">
                Lujo Accesible
              </p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#3D4B3A] leading-[1.05]">
                Historias que Perduran.
              </h1>
              <p className="font-body font-light text-lg md:text-xl text-[#2C2621] max-w-md leading-relaxed">
                No vendemos objetos de madera; facilitamos la inmortalización de
                momentos. Cada pieza que sale de nuestro taller está diseñada
                para ser un tesoro definitivo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#coleccion"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#3D4B3A] text-[#F5F1E9] font-body text-sm font-normal tracking-widest rounded-sm hover:bg-[#3D4B3A]/90 transition-all duration-500 hover:shadow-xl hover:shadow-[#3D4B3A]/15 hover:-translate-y-0.5"
              >
                Descubrir Colecciones de Autor
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center px-10 py-4 border border-[#C5A059]/40 text-[#2C2621]/70 font-body text-sm font-normal tracking-widest rounded-sm hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all duration-500"
              >
                Nuestra Filosofía
              </a>
            </div>
          </div>

          {/* Hero Image — 7 columns for asymmetric weight */}
          <div className="relative hidden lg:block lg:col-span-7">
            <div className="aspect-[4/5] rounded-sm shadow-2xl shadow-[#2C2621]/8 overflow-hidden relative">
              <Image
                src="/images/hero.jpg"
                alt="Tesoro artesanal Johnny + Joey — madera noble con Moissanita"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 58vw"
              />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-[#C5A059]/25 rounded-sm -z-10" />
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#C5A059]/8 rounded-sm -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C5A059]/60 animate-bounce">
        <span className="font-body text-[10px] tracking-[0.4em] uppercase">Descubrir</span>
        <div className="w-[1px] h-10 bg-[#C5A059]/30" />
      </div>
    </section>
  );
}
