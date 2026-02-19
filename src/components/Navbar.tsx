import { Button } from "./Button";
import logo from "../assets/buildash_b.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-[color:var(--primary)]/20 ring-1 ring-[color:var(--border)] grid place-items-center">
            <img src={logo} alt="logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-bold">Buildash</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
          <a className="hover:text-[color:var(--text)]" href="#problema">Problema</a>
          <a className="hover:text-[color:var(--text)]" href="#features">Features</a>
          <a className="hover:text-[color:var(--text)]" href="#pricing">Precios</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => window.alert("TODO: link a login / demo")}>
            Ver demo
          </Button>
          <Button onClick={() => window.location.assign("#cta")}>Empezar</Button>
        </div>
      </div>
    </header>
  );
}
