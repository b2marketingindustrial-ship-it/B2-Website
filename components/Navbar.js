export default function Navbar() {
  return (
    <nav className="navbar-striped fixed inset-x-0 top-0 z-20 border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="brand-b2-simple lowercase animate-blink">b2</span>
          <span className="text-zinc-200 text-[0.72rem] sm:text-sm font-semibold font-sans uppercase tracking-[0.14em]">
            marketing industrial
          </span>
        </div>
        <ul className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] sm:gap-8 sm:text-sm animate-slideup">
          <li>
            <a
              href="/"
              className="relative pb-1 text-zinc-300 transition-all duration-300 hover:text-cyan-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="relative pb-1 text-zinc-300 transition-all duration-300 hover:text-cyan-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="/process"
              className="relative pb-1 text-zinc-300 transition-all duration-300 hover:text-cyan-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              process
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}