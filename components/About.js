
import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      title: "Tráfego Pago Especializado",
      desc: "Campanhas cirúrgicas nas principais plataformas para atrair apenas tomadores de decisão da indústria.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Máquinas de Conversão",
      desc: "Landing pages focadas em conversão, testadas e desenhadas B2B para fechar negócios grandes.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Equipe de Excelência",
      desc: "Técnicas validadas no mercado e aplicadas por profissionais extremamente competentes para resultados reais.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-screen py-24 overflow-hidden bg-slate-950 px-6">
      
      <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest w-fit mb-2">
            Nossa Inteligência B2
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl 
          font-black tracking-tight text-white leading-tight">
            Elevamos o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400
             to-cyan-300">Padrão</span> no<br className="hidden lg:block"/> Marketing Industrial
          </h2>
          
          <p className="text-xl text-slate-300 leading-relaxed font-medium mt-4">
            Em vendas complexas, um marketing genérico não basta. Oferecemos um <span className="text-white font-bold tracking-wide">serviço completo 360º</span> feito para indústrias que exigem mais.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Desde a construção de <strong>Landing Pages de altíssima persuasão</strong> até a gestão precisa de <strong>Tráfego Pago</strong>, aplicamos técnicas implacáveis e comprovadas na captação de leads. Nossos profissionais de alto gabarito projetam estratégias que posicionam a sua empresa como autoridade absoluta do setor.
          </p>
          
          <div className="mt-8 flex gap-8">
             <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-4xl font-black text-white">100<span className="text-blue-400">%</span></p>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-bold">Foco em B2B</p>
             </div>
             <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-4xl font-black text-white">Excelentes</p>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-bold">Profissionais</p>
             </div>
          </div>
          <div className="flex justify-center mt-9 md:justify-start">
            <a href="#contact" className="w-full inline-flex sm:w-auto px-20 py-6 rounded-full bg-blue-600 
              hover:bg-blue-500 
              text-white font-bold tracking-wide 
              transition-all duration-300 
              shadow-[0_0_20px_rgba(37,99,235,0.4)] 
              hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] 
              hover:-translate-y-0.5
              hover:scale-105
              text-lg
              animate-bounce">
              Pronto para acelerar suas vendas?
            </a>
        </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-12 lg:mt-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
        >
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-5 p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/80 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] group ${index === 2 ? 'sm:col-span-2' : ''}`}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-400 transition-colors">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide mb-2 group-hover:text-blue-300 transition-colors">{pillar.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}