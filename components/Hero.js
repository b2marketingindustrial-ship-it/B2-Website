import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden bg-slate-950 px-6">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
            border border-blue-500/40 
            bg-blue-500/10 
            text-blue-400 
            text-sm font-extrabold 
            uppercase tracking-widest 
            shadow-[0_0_15px_rgba(59,130,246,0.15)] 
            mb-6">
          Especialistas em B2B
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white !leading-tight drop-shadow-lg">
          Estratégia para a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 
          to-cyan-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Empresas</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-medium mt-2">
          Posicionamos empresas industriais como líderes de mercado através de marketing inteligente, focado em autoridade e vendas complexas B2B.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-6 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-0.5">
            Acelerar Vendas
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded border border-slate-700 bg-slate-900/50 text-slate-300 font-bold tracking-wide hover:bg-slate-800 hover:text-white transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5">
            Conhecer Escopo
          </button>
        </div>
      </motion.div>
    </section>
  );
}