import Link from 'next/link';
import { Armchair, BookOpenText } from 'lucide-react';

export default function GatewayPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E9] flex flex-col md:flex-row text-[#3D4B3A]">
      {/* Flujo Comercial */}
      <Link 
        href="/coleccion" 
        className="flex-1 group relative flex flex-col items-center justify-center p-8 md:p-12 hover:bg-[#3D4B3A] hover:text-[#F5F1E9] transition-all duration-700 ease-in-out border-b md:border-b-0 md:border-r border-[#C5A059]/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <Armchair 
          className="w-24 h-24 mb-10 text-[#C5A059] group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out" 
          strokeWidth={1} 
        />
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-center mb-6 z-10">
          Colecciones de Autor
        </h2>
        
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#C5A059] font-medium z-10">
          Flujo Comercial
        </p>
      </Link>

      {/* Flujo de Investigación */}
      <Link 
        href="/seminario" 
        className="flex-1 group relative flex flex-col items-center justify-center p-8 md:p-12 hover:bg-[#3D4B3A] hover:text-[#F5F1E9] transition-all duration-700 ease-in-out"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <BookOpenText 
          className="w-24 h-24 mb-10 text-[#C5A059] group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out" 
          strokeWidth={1} 
        />
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-center mb-6 z-10">
          Investigación Sistémica
        </h2>
        
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#C5A059] font-medium z-10">
          Flujo de Investigación
        </p>
      </Link>
    </main>
  );
}
