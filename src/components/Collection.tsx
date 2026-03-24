import Image from "next/image";

const products = [
  {
    name: "Mesa Roble Natural",
    materials: "Roble macizo · Acabado al aceite",
    image: "/images/producto-1.jpg",
  },
  {
    name: "Silla Escandinava",
    materials: "Fresno blanqueado · Tapizado lino",
    image: "/images/producto-2.jpg",
  },
  {
    name: "Estantería Modular",
    materials: "Nogal americano · Herrajes latón",
    image: "/images/producto-3.jpg",
  },
  {
    name: "Banco de Entrada",
    materials: "Pino envejecido · Cuero natural",
    image: "/images/producto-4.jpg",
  },
  {
    name: "Mesa de Centro Ovalada",
    materials: "Cerezo · Patas torneadas",
    image: "/images/producto-5.jpg",
  },
  {
    name: "Aparador Minimalista",
    materials: "Haya vaporizada · Tiradores ocultos",
    image: "/images/producto-6.jpg",
  },
];

export function Collection() {
  return (
    <section id="coleccion" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-amber-700 font-medium tracking-widest text-sm uppercase mb-4">
            Colección
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Piezas Destacadas
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Cada mueble es una obra única, tallada con paciencia y dedicación
            artesanal.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <article
              key={index}
              className="group cursor-pointer rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-stone-200/80 hover:-translate-y-1"
            >
              {/* Reemplaza /images/producto-N.jpg con tu fotografía del producto */}
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-medium tracking-wide px-4 py-2 rounded-sm">
                    Ver Detalle →
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1 group-hover:text-amber-800 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.materials}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
