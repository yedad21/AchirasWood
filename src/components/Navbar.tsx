import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F5F1E9]/80 backdrop-blur-md border-b border-[#3D4B3A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Lado izquierdo: Marca */}
          <Link href="/" className="font-heading text-lg font-bold text-[#3D4B3A] uppercase tracking-wider">
            Johnny & Joey
          </Link>

          {/* Lado derecho: Navegación */}
          <div className="flex gap-8">
            <Link 
              href="/coleccion" 
              className="font-body text-sm font-medium text-[#2C2621] hover:text-[#C5A059] transition-colors duration-300"
            >
              Colecciones
            </Link>
            <Link 
              href="/seminario" 
              className="font-body text-sm font-medium text-[#2C2621] hover:text-[#C5A059] transition-colors duration-300"
            >
              Investigación
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
