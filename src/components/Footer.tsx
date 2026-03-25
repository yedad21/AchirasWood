import { Globe, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Globe, href: "#", label: "Sitio Web" },
  { icon: Mail, href: "mailto:contacto@johnnyjoey.co", label: "Email" },
  { icon: MapPin, href: "#", label: "Bogotá" },
];

export function Footer() {
  return (
    <footer className="bg-[#3D4B3A] text-[#F5F1E9]/50">
      {/* Centered Brand Logo */}
      <div className="flex justify-center pt-20 pb-12">
        <a href="#inicio">
          <img
            src="/images/logo-marca.svg"
            alt="JOHNNY + Joey"
            className="h-28 w-auto brightness-0 invert opacity-90"
          />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Brand */}
          <div className="space-y-5">
            <a
              href="#inicio"
              className="font-heading text-2xl font-bold text-[#F5F1E9] tracking-wider"
            >
              JOHNNY <span className="text-[#C5A059]">+</span> Joey
            </a>
            <p className="font-body font-light text-sm leading-relaxed max-w-xs">
              Facilitamos la inmortalización de momentos en maderas nobles y
              Moissanita. Cada tesoro, una historia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-[#F5F1E9] font-body text-sm font-normal tracking-[0.2em] uppercase">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#inicio"
                className="font-body text-sm font-light hover:text-[#C5A059] transition-colors duration-300"
              >
                Inicio
              </a>
              <a
                href="#coleccion"
                className="font-body text-sm font-light hover:text-[#C5A059] transition-colors duration-300"
              >
                Colecciones de Autor
              </a>
              <a
                href="#proceso"
                className="font-body text-sm font-light hover:text-[#C5A059] transition-colors duration-300"
              >
                Filosofía
              </a>
              <a
                href="#contacto"
                className="font-body text-sm font-light hover:text-[#C5A059] transition-colors duration-300"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h4 className="text-[#F5F1E9] font-body text-sm font-normal tracking-[0.2em] uppercase">
              Encuéntranos
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-[#F5F1E9]/15 text-[#F5F1E9]/40 hover:text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F5F1E9]/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/images/icono-carita.svg"
              alt="Johnny + Joey"
              className="w-6 h-6 brightness-0 invert opacity-40"
            />
            <p className="font-body text-xs font-light text-[#F5F1E9]/25 tracking-wider">
              © {new Date().getFullYear()} Johnny &amp; Joey Bogotá. Lujo Accesible.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
