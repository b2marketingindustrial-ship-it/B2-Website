export default function Dashboard() {
  const metrics = [
    { label: "Leads gerados", value: "124", delta: "+18%" },
    { label: "Taxa de conversao", value: "6.4%", delta: "+1.2 p.p." },
    { label: "Custo por lead", value: "R$ 12,30", delta: "-9%" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(34,197,94,0.14),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(14,116,144,0.16),transparent_35%)]" />

      <section className="relative mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">B2 Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Visao geral de performance</h1>
            <p className="mt-2 text-sm text-slate-300">Acompanhamento rapido dos indicadores principais de marketing.</p>
          </div>
          <button className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20">
            Atualizar dados
          </button>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-lg backdrop-blur"
            >
              <p className="text-sm text-slate-300">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                {item.delta}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-8 grid gap-4 lg:grid-cols-5">
          <article className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 lg:col-span-3">
            <h2 className="text-lg font-semibold text-white">Resumo da semana</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              As campanhas de midia paga mantiveram tendencia de crescimento. O melhor desempenho veio do canal
              social, com aumento de CTR e reducao no custo por lead.
            </p>
            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
            </div>
            <p className="mt-2 text-xs text-slate-400">Meta mensal concluida: 67%</p>
          </article>

          <article className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 lg:col-span-2">
            <h2 className="text-lg font-semibold text-white">Proximas acoes</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2">Revisar criativos da campanha A</li>
              <li className="rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2">Ajustar segmentacao para mobile</li>
              <li className="rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2">Validar funil de onboarding</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}
