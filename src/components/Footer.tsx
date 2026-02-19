export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[color:var(--muted)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-[color:var(--text)]">Buildash</span> · {new Date().getFullYear()}
          </div>
          <div className="flex gap-4">
            <a className="hover:text-[color:var(--text)]" href="#cta">Contacto</a>
            <a className="hover:text-[color:var(--text)]" href="#pricing">Precios</a>
            <a className="hover:text-[color:var(--text)]" href="#features">Producto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
