import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from '../components/Navbar';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login falhou");
        return;
      }

      setSuccess(data.message || "Login Realizado");
      router.push("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.2),transparent_35%)]" />

      <section className="relative w-full max-w-md rounded-2xl border border-slate-700/50 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
        <h1 className="text-3xl font-bold tracking-tight text-white">Entrar</h1>
        <p className="mt-2 text-sm text-slate-300">Acesse seu painel para acompanhar os resultados.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              required
            />
          </div>

          {error ? (
            <p className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">{error}</p>
          ) : null}

          {success ? (
            <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">{success}</p>
          ) : null}
        <div className="flex-col mt-4 flex gap-4 sm:flex-row sm:items-center ">
          <button
            type="submit"
            disabled={loading}
            className="
            rounded-xl 
            bg-cyan-500 px-4 
            py-3 text-sm font-semibold 
            text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar no dashboard"}
          </button>
          <a href="/" 
            className="
            rounded-xl 
            bg-cyan-500 px-4 
            py-3 text-sm font-semibold 
            text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
             Retornar a pagina inicial
          </a>
          </div>
        </form>

        <p className="mt-5 text-xs text-slate-400">Teste rapido: teste@teste.com / 123456</p>
      </section>
    </main>
    </>
  );
}
