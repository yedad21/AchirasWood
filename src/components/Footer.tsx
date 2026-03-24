import { Globe, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Globe, href: "#", label: "Sitio Web" },
  { icon: Mail, href: "mailto:contacto@artesania.com", label: "Email" },
  { icon: MapPin, href: "#", label: "Ubicación" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="#inicio"
              className="font-serif text-2xl font-bold text-white tracking-tight"
            >
              Artesanía<span className="text-amber-600">.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Muebles de madera hechos a mano con alma. Tradición y diseño en
              cada pieza.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-medium tracking-wider uppercase">
              Navegación
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#inicio"
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Inicio
              </a>
              <a
                href="#coleccion"
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Colección
              </a>
              <a
                href="#proceso"
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Proceso
              </a>
              <a
                href="#contacto"
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-medium tracking-wider uppercase">
              Síguenos
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-700 text-stone-400 hover:text-white hover:border-amber-600 hover:bg-amber-600/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Artesanía. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-stone-600">
            Diseñado con pasión por la madera.
          </p>
        </div>
      </div>
    </footer>
  );
}
