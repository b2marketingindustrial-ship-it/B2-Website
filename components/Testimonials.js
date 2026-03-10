import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Diretor Comercial - Metalúrgica Apex",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "A estratégia da B2 transformou nosso setor de vendas. Saímos de leads desqualificados para reuniões semanais com diretores de grandes indústrias. O ROI da campanha paga se pagou no primeiro mês."
    },
    {
      name: "Fernanda Silveira",
      role: "CEO - TechMaq Equipamentos",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "O nível de sofisticação das landing pages e o entendimento do nosso ciclo de vendas longo foi o que mais me impressionou. Eles realmente entendem como funciona a cabeça da indústria."
    },
    {
      name: "Roberto Almeida",
      role: "Gerente de Engenharia - Polímeros BR",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Trabalhar com a B2 Marketing mudou o nosso posicionamento no digital. Nosso maquinário altamente técnico agora é apresentado de forma clara, cirúrgica e altamente persuasiva."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  return (
    <section id="cases" className="relative py-24 bg-slate-950 overflow-hidden px-6">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
            border border-blue-500/40 
            bg-blue-500/10 
            text-blue-400 
            text-sm font-extrabold 
            uppercase tracking-widest 
            shadow-[0_0_15px_rgba(59,130,246,0.15)] 
            mb-6">
            Cases de Sucesso
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Da estratégia à <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">execução</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto group">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden relative rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 md:p-12 lg:p-16">
                  <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start text-center md:text-left">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex-shrink-0"
                    />
                    <div className="flex-1 relative">
                       {/* Quote mark icon */}
                       <svg className="w-10 h-10 text-blue-500/20 mb-4 mx-auto md:mx-0 absolute -top-4 -left-6 md:-left-12 -z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <p className="text-xl md:text-2xl text-slate-300 font-medium italic mb-8 leading-relaxed">
                        "{t.text}"
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-wide">{t.name}</h4>
                        <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mt-1">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 rounded-full bg-slate-950/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 shadow-xl focus:outline-none z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 rounded-full bg-slate-950/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-slate-900 transition-all duration-300 shadow-xl focus:outline-none z-10"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Bullets/Dots Below */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-10 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' 
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-9">
        <a href="#contact" className="w-full inline-flex sm:w-auto px-20 py-6 rounded-full bg-blue-600 
        animate-pulse
        hover:bg-blue-500 
        text-white font-bold tracking-wide 
        transition-all duration-300 
        shadow-[0_0_20px_rgba(37,99,235,0.4)] 
        hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] 
        hover:-translate-y-0.5
        hover:scale-105
        text-lg">
          Pronto para acelerar suas vendas?
        </a>
      </div>
    </section>
  );
}
