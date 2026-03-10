import Script from "next/script";
import Navbar from '../components/Navbar';

export default function Meeting() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-4xl w-full mx-auto text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            Consultoria Estratégica
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Escalar</span> a sua Indústria?
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Escolha no calendário abaixo o melhor horário para uma reunião estratégica de 30 minutos com nossos diretores.
          </p>
        </div>

       <div className="w-full max-w-5xl bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-4 md:p-8 min-h-[600px] flex items-center justify-center shadow-2xl relative overflow-hidden group">

        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="w-full relative z-10">
    
        <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/augustomatheus162"
            style={{ minWidth: "320px", height: "700px" }}
        />

        <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
        />
    
        </div>

        </div>
      </section>
    </main>
  );
}
