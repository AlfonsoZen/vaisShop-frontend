import type { Route } from "./+types/home";
import EarphonesScene from "../components/World/EarphonesScene";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VAIS - Sonido Absoluto" },
    { name: "description", content: "Audífonos premium con calidad OEM y cancelación de ruido activa." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-light font-sans selection:bg-accent/20 overflow-x-hidden">
      {/* Header Minimalista */}
      <nav className="flex justify-between items-center px-8 lg:px-12 py-6 lg:py-8 bg-transparent border-b border-black/5">
        <div className="flex items-center gap-3">
          <img src="/assets/earphones.svg" alt="logo" className="w-7 opacity-80" />
          <h1 className="text-xl font-black tracking-widest uppercase text-dark/90">VAIS</h1>
        </div>
        
        <ul className="hidden md:flex gap-12 font-medium text-sm tracking-[0.2em] uppercase text-dark/70">
          <li className="hover:text-dark cursor-pointer transition-colors border-b-2 border-transparent hover:border-dark pb-1">Series</li>
          <li className="hover:text-dark cursor-pointer transition-colors border-b-2 border-transparent hover:border-dark pb-1">Studio</li>
          <li className="hover:text-dark cursor-pointer transition-colors border-b-2 border-transparent hover:border-dark pb-1">Explore</li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="relative group">
            <ShoppingBag className="w-5 h-5 text-dark/80 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 bg-primary text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 lg:px-12 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-12 min-h-[85vh] lg:min-h-[80vh] items-center">
        
        {/* BLOQUE A: Título y Texto (Optimizado para móvil) */}
        <div className="space-y-4 lg:space-y-10 order-1 text-center lg:text-left z-20 relative">
          {/* Badge oculto en móvil: hidden lg:inline-flex */}
          <div className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full border border-black/5 text-xs font-bold tracking-widest text-primary uppercase mx-auto lg:mx-0">
            <Star className="w-3 h-3 fill-primary" /> Nuevo Lanzamiento
          </div>

          <h2 className="text-5xl lg:text-9xl font-black leading-[0.9] lg:leading-[0.85] tracking-tighter text-dark">
            Sonido <br />
            <span className="text-gradient">Absoluto.</span>
          </h2>

          <p className="text-sm lg:text-xl text-dark/60 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light px-4 lg:px-0">
            Diseñados para desaparecer. La nueva generación de audífonos con cancelación de ruido activa.
          </p>
        </div>

        {/* BLOQUE B: Canvas 3D (Reducido en móvil para subir los botones) */}
        <div className="order-2 lg:row-span-2 relative h-[300px] lg:h-[700px] w-full flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-accent/10 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="w-full h-full flex items-center justify-center scale-100 lg:scale-100">
            <EarphonesScene />
          </div>
        </div>

        {/* BLOQUE C: Botones (Suben de posición en móvil) */}
        <div className="order-3 flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center lg:justify-start z-20 px-4 lg:px-0">
          <button className="bg-dark text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto">
            Comprar Ahora <ArrowRight className="w-4 h-4" />
          </button>
          <button className="hidden sm:flex border-2 border-dark/20 text-dark px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold lg:text-sm tracking-widest uppercase hover:border-dark transition-all items-center justify-center">
            Especificaciones
          </button>
        </div>

      </main>

      {/* Footer Minimalista */}
      <footer className="px-12 py-8 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/5 opacity-40 text-[10px] lg:text-xs font-bold tracking-widest uppercase">
        <p>© 2026 VAIS. By Alfonso Zendejas.</p>
        <div className="flex gap-10">
          <span>Privacidad</span>
          <span>Términos</span>
        </div>
      </footer>
    </div>
  );
}
