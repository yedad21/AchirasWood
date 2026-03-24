import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center bg-stone-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-amber-700 font-medium tracking-widest text-sm uppercase">
                Hecho a mano
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1]">
                Muebles con{" "}
                <span className="italic text-amber-800">carácter</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-500 max-w-md leading-relaxed">
                Muebles de madera hechos a mano con alma. Cada pieza cuenta una
                historia de tradición y belleza natural.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#coleccion"
                className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-sm font-medium tracking-wide rounded-sm hover:bg-stone-800 transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/20 hover:-translate-y-0.5"
              >
                Ver Colección
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 text-stone-700 text-sm font-medium tracking-wide rounded-sm hover:border-stone-400 hover:bg-stone-100 transition-all duration-300"
              >
                Nuestro Proceso
              </a>
            </div>
          </div>

          {/* Hero Image — Reemplaza /images/hero.jpg con tu fotografía */}
          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] rounded-sm shadow-2xl shadow-stone-300/50 overflow-hidden relative">
              <Image
                src="/images/hero.jpg"
                alt="Mueble artesanal de madera hecho a mano"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-sm -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-amber-700/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-stone-300" />
      </div>
    </section>
  );
}
