import Navbar from '../components/Navbar';

export default function Metricas() {
  const metrics = [
    {
      label: "Custo por Arquisição (CPA)",
      value: "R$ 142,50",
      trend: "-12.5%",
      isPositive: true,
      description: "Redução no custo de aquisição de leads qualificados B2B no último trimestre."
    },
    {
      label: "Retorno sobre Investimento (ROI)",
      value: "418%",
      trend: "+45.2%",
      isPositive: true,
      description: "Aumento de receita gerada via campanhas em relação ao investimento em mídia."
    },
    {
      label: "Taxa de Conversão (Landing Pages)",
      value: "11.2%",
      trend: "+3.1%",
      isPositive: true,
      description: "Conversão média de visitantes para leads MQL nas páginas de alta persuasão."
    },
    {
      label: "Ciclo Médio de Vendas",
      value: "45 Dias",
      trend: "-15 Dias",
      isPositive: true,
      description: "Aceleração no tempo de fechamento após nutrição de leads pelo marketing."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <Navbar />

      <section className="flex-1 flex flex-col pt-32 pb-24 px-6 relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Dashboard de Resultados
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              A Prova em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Números</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mt-6 leading-relaxed">
              No mercado B2B industrial, o feeling não paga as contas. Nossa metodologia é baseada em dados concretos, otimização constante e foco em receita.
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl p-4 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Média Global</p>
              <p className="text-2xl font-black text-white">+R$ 15M</p>
            </div>
          </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/60 hover:border-blue-500/40 transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
            >
              <div>
                <h3 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-4">
                  {metric.label}
                </h3>
                
                <div className="flex items-end gap-4 mb-4">
                  <p className="text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {metric.value}
                  </p>
                  <div className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded bg-opacity-10 mb-1 ${metric.isPositive ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'}`}>
                    {metric.isPositive ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    )}
                    {metric.trend}
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fictional Chart/Graph Area */}
        <div className="w-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Evolução de Leads Qualificados (MQLs)</h3>
              <p className="text-slate-400">Comparativo do primeiro semestre de 2025.</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <span className="px-4 py-1.5 rounded-full bg-slate-800 text-xs font-bold text-white uppercase tracking-wider">Mensal</span>
              <span className="px-4 py-1.5 rounded-full bg-slate-950 text-xs font-bold text-slate-400 uppercase tracking-wider border border-slate-800 cursor-pointer hover:text-white transition-colors">Trimestral</span>
            </div>
          </div>

          {/* Fictional CSS Graph representing growth */}
          <div className="relative h-64 w-full flex items-end justify-between gap-2 lg:gap-6 z-10 border-b border-slate-800 pb-2">
            {[35, 45, 40, 60, 85, 100].map((height, i) => (
              <div key={i} className="relative w-full flex flex-col items-center justify-end h-full group">
                {/* Tooltip on hover */}
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-xs font-bold py-1.5 px-3 rounded shadow-xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20 pointer-events-none">
                  {height * 12} Leads
                </div>
                {/* The Bar */}
                <div 
                  className="w-full bg-gradient-to-t from-blue-600/40 to-cyan-400/80 rounded-t-sm transition-all duration-500 group-hover:from-blue-500 group-hover:to-cyan-300 relative overflow-hidden"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/40"></div>
                </div>
                {/* Month Label */}
                <span className="absolute -bottom-8 text-xs font-bold text-slate-500 uppercase">
                  {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'][i]}
                </span>
              </div>
            ))}
            
            {/* Grid Lines Overlay */}
            <div className="absolute top-0 left-0 w-full h-full border-y border-dashed border-slate-800/50 pointer-events-none flex flex-col justify-between">
              <div className="w-full border-t border-dashed border-slate-800/50"></div>
              <div className="w-full border-t border-dashed border-slate-800/50"></div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
