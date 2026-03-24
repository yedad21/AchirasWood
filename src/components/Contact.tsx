export function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-amber-700 font-medium tracking-widest text-sm uppercase mb-4">
          Contacto
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
          ¿Tienes un proyecto
          <br />
          en mente?
        </h2>
        <p className="text-stone-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Creamos muebles a medida para tu espacio. Cuéntanos tu idea y te
          ayudaremos a hacerla realidad.
        </p>
        <a
          href="mailto:contacto@artesania.com"
          className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white text-sm font-medium tracking-wide rounded-sm hover:bg-stone-800 transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/20 hover:-translate-y-0.5"
        >
          Solicitar Cotización
        </a>
      </div>
    </section>
  );
}
