"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#coleccion", label: "Colección" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            className="font-serif text-xl font-bold tracking-tight text-stone-900"
          >
            Artesanía<span className="text-amber-700">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors"
            aria-label="Menú de navegación"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-3 bg-white/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
