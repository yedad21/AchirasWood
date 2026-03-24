import Image from "next/image";

const steps = [
  {
    title: "Maderas Nobles Seleccionadas",
    subtitle: "Origen y Materiales",
    description:
      "Trabajamos exclusivamente con maderas nobles de origen responsable. Roble, nogal, cerezo y fresno son cuidadosamente seleccionados por su veta, textura y durabilidad. Cada tabla es escogida a mano para garantizar la máxima calidad en cada pieza.",
    imagePosition: "left" as const,
    image: "/images/proceso-1.jpg",
  },
  {
    title: "Ensamblaje Manual y Artesanal",
    subtitle: "Técnica y Tradición",
    description:
      "Nuestros artesanos emplean técnicas tradicionales de ebanistería: uniones de cola de milano, espigas y ensambles que resisten el paso del tiempo. Cada pieza es lijada, ajustada y terminada a mano, sin atajos industriales.",
    imagePosition: "right" as const,
    image: "/images/proceso-2.jpg",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-amber-700 font-medium tracking-widest text-sm uppercase mb-4">
            Proceso
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            De la madera en bruto a tu hogar. Conoce cada paso de nuestro
            proceso artesanal.
          </p>
        </div>

        {/* Zig-Zag Rows */}
        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                step.imagePosition === "right" ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Reemplaza /images/proceso-N.jpg con tu fotografía del proceso */}
              <div
                className={`${
                  step.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="aspect-square rounded-sm shadow-lg overflow-hidden relative">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  step.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-3">
                  <p className="text-amber-700 font-medium tracking-widest text-sm uppercase">
                    {step.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-stone-500 text-lg leading-relaxed">
                  {step.description}
                </p>
                <div className="w-16 h-[2px] bg-amber-700/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
