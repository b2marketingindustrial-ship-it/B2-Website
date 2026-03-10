import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3 group">
          <span className="text-4xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300">
            b2
          </span>
          <div className="flex flex-col">
            <span className="text-[0.65rem] font-bold text-slate-300 uppercase tracking-[0.2em] leading-tight">Marketing</span>
            <span className="text-[0.65rem] font-bold text-blue-400 uppercase tracking-[0.2em] leading-tight">Industrial</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-300">
          <Link href="/Metricas" className="hover:text-blue-400 transition-colors duration-300">Metricas</Link>
          <Link href="/#about" className="hover:text-blue-400 transition-colors duration-300">Sobre Nós</Link>
          <Link href="/#cases" className="hover:text-blue-400 transition-colors duration-300">Cases</Link>
          <Link href="/#contato" className="px-5 py-2.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            Falar com Especialista
          </Link>
          <Link href="/Meeting" className="px-5 py-2.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            Agendar Reunião
          </Link>
        </div>
        <button className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>  
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-6 py-8 px-6 text-sm font-medium uppercase tracking-widest text-slate-300">
          <Link href="/Metricas" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition-colors duration-300 w-full text-center">Soluções</Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition-colors duration-300 w-full text-center">Sobre Nós</Link>
          <Link href="/#cases" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition-colors duration-300 w-full text-center">Cases</Link>
          <Link href="/#contato" onClick={() => setMenuOpen(false)} className="mt-2 w-full text-center px-5 py-3 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            Falar com Especialista
          </Link>
          <Link href="/Meeting" onClick={() => setMenuOpen(false)} className="mt-2 w-full text-center px-5 py-3 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            Agendar Reunião
          </Link>
        </div>
      </div>
    </nav>
  );
}