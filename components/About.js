"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaBrain } from "react-icons/fa";
import Image from "next/image";

const pillars = [
  {
    title: "Aquisição de Alto Nível",
    desc: "Atraímos decisores prontos para comprar — não curiosos.",
    icon: FaChartLine,
  },
  {
    title: "Conversão Agressiva",
    desc: "Transformamos tráfego em oportunidades reais de negócio.",
    icon: FaCogs,
  },
  {
    title: "Execução Estratégica",
    desc: "Cada ação orientada por dados, margem e previsibilidade.",
    icon: FaBrain,
  },
];

export default function About() {
  return (
    <section className="bg-slate-950 text-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* BADGE */}
          <span className="inline-block px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] 
          uppercase rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
            Marketing Industrial de Alta Performance
          </span>

          {/* HEADLINE */}
          <h2 className="text-4xl md:text-6xl font-extrabold mt-6 leading-[1.1] tracking-tight">
            Pare de investir em marketing que{" "}
            <span className="text-slate-500 line-through">não retorna</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Comece a gerar contratos previsíveis
            </span>
          </h2>

          {/* TEXTOS */}
          <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-xl">
            Empresas industriais não precisam de mais campanhas.
            Precisam de um sistema estruturado que transforma investimento em receita.
          </p>

          <p className="text-slate-400 mt-4 text-base max-w-lg">
            Nós construímos esse sistema. Do primeiro clique até o fechamento,
            cada etapa é desenhada para aumentar margem, autoridade e escala.
          </p>

          {/* CEO */}
          <div className="flex items-center gap-4 mt-10 p-5 rounded-xl border border-slate-800 bg-slate-900/60">
            
            {/* IMAGEM CORRIGIDA */}
            <Image
              src="/ceoBg.jpg"
              alt="CEO B2 Marketing Industrial"
              width={56}
              height={56}
              className="rounded-full object-cover border border-blue-500 shrink-0"
            />

            {/* TEXTO */}
            <div className="flex-1">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                “Se o marketing não gera previsibilidade, ele é apenas custo.”
              </p>
              <span className="text-xs text-slate-400 font-semibold">
                CEO • B2 Marketing Industrial
              </span>
            </div>

          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block mt-12 px-10 py-5 rounded-full 
            bg-gradient-to-r from-blue-600 to-blue-400 
            text-lg font-semibold tracking-wide
            hover:scale-105 transition-all duration-300 
            shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          >
            Quero gerar mais contratos →
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`p-7 rounded-2xl border border-slate-800 
                bg-slate-900/50 hover:border-blue-500/40 
                transition-all hover:-translate-y-1 ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-11 h-11 flex items-center justify-center 
                rounded-lg bg-blue-500/10 text-blue-400 mb-5">
                  <Icon />
                </div>

                <h3 className="font-semibold text-xl leading-tight">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}