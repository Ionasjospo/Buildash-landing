import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { SectionTitle } from "./components/SectionTitle";

const features = [
  {
    title: "Dashboard Plan vs. Real",
    desc: "Curva S simple, KPIs de avance y alertas tempranas para decidir rápido.",
  },
  {
    title: "Parte diario con evidencia",
    desc: "Registro de avances y notas, con soporte para fotos e hitos.",
  },
  {
    title: "Costos y compras",
    desc: "Control presupuestal básico, compras y seguimiento de desvíos.",
  },
  {
    title: "Roles y permisos",
    desc: "Admin, jefe de obra, cliente/consultor (solo lectura).",
  },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--primary)] blur-3xl" />
          <div className="absolute top-32 left-20 h-64 w-64 rounded-full bg-[color:var(--accent)] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--primary2)]" />
              SaaS para constructoras · 100% web
            </div>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Controlá tus obras con <span className="text-[color:var(--primary2)]">visibilidad diaria</span>
            </h1>

            <p className="mt-4 text-[color:var(--muted)] md:text-lg">
              Buildash centraliza el plan vs. la realidad: avance, costos, alertas y reportes. Menos planillas,
              más decisiones.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => window.alert("TODO: formulario / link a Calendly")}>Pedir demo</Button>
              <Button variant="ghost" onClick={() => window.location.assign("#features")}>
                Ver features
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-[color:var(--muted)]">
              <div className="rounded-xl border border-[color:var(--border)] bg-white/5 p-3">
                <div className="text-[color:var(--text)] font-bold">+50%</div>
                menos tiempo en reportes
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-white/5 p-3">
                <div className="text-[color:var(--text)] font-bold">&lt;5%</div>
                objetivo desvío costo
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-white/5 p-3">
                <div className="text-[color:var(--text)] font-bold">Roles</div>
                acceso cliente/consultor
              </div>
            </div>
          </div>

          {/* Mock UI */}
          <div className="relative">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_10px_40px_rgba(0,0,0,.45)]">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Dashboard · Obra “Torre Centro”</div>
                <div className="text-xs text-[color:var(--muted)]">Hoy</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[color:var(--border)] bg-white/5 p-3">
                  <div className="text-xs text-[color:var(--muted)]">Avance</div>
                  <div className="text-2xl font-black">62%</div>
                </div>
                <div className="rounded-xl border border-[color:var(--border)] bg-white/5 p-3">
                  <div className="text-xs text-[color:var(--muted)]">Desvío costo</div>
                  <div className="text-2xl font-black text-[color:var(--accent)]">+4.8%</div>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-[color:var(--border)] bg-white/5 p-3">
                <div className="text-xs text-[color:var(--muted)]">Alertas</div>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Compra crítica: Plazo comprometido</span>
                    <span className="rounded-full bg-[color:var(--accent)]/20 px-2 py-0.5 text-xs text-[color:var(--accent)]">
                      Alta
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Actividad bloqueada: falta de insumo</span>
                    <span className="rounded-full bg-[color:var(--primary)]/20 px-2 py-0.5 text-xs text-[color:var(--primary2)]">
                      Media
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 rounded-xl border border-[color:var(--border)] bg-white/5 p-3">
                <div className="text-xs text-[color:var(--muted)]">Curva S (mock)</div>
                <div className="mt-3 h-24 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          eyebrow="Por qué existe"
          title="Menos Excel, más control real"
          subtitle="El dolor típico: planillas dispersas, decisiones tarde y reportes manuales. Buildash busca centralizar y dar visibilidad."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-lg font-bold">Desvíos de plazo/costo</div>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Se acumulan silenciosamente hasta que explotan en la última semana.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-bold">Cero trazabilidad</div>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              WhatsApp + planillas + memoria humana = auditoría por “sensaciones”.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-bold">Reportes “a mano”</div>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              El jefe de obra termina siendo un generador de PDFs.
            </p>
          </Card>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          eyebrow="Producto"
          title="MVP enfocado en lo crítico"
          subtitle="Lo mínimo para generar valor rápido: proyectos, parte diario, dashboard y reportes."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((f) => (
            <Card key={f.title}>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-[color:var(--primary2)]" />
                <div>
                  <div className="text-lg font-bold">{f.title}</div>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{f.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          eyebrow="Precios"
          title="Simple y escalable"
          subtitle="MVP: 3 planes de ejemplo. Ajustás cuando tengan validación real con pilotos."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { name: "Starter", price: "USD", who: "1 obra activa", perk: "Dashboard + parte diario" },
            { name: "Pro", price: "USD", who: "hasta 5 obras", perk: "Reportes + roles + alertas" },
            { name: "Business", price: "Hablemos", who: "multi-obra", perk: "Soporte + onboarding" },
          ].map((p) => (
            <Card key={p.name}>
              <div className="text-sm text-[color:var(--muted)]">{p.name}</div>
              <div className="mt-2 text-3xl font-black">{p.price}</div>
              <div className="mt-2 text-sm text-[color:var(--muted)]">{p.who}</div>
              <div className="mt-4 text-sm">{p.perk}</div>
              <Button className="mt-6 w-full" onClick={() => window.location.assign("#cta")}>
                Elegir {p.name}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-[color:var(--border)] bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-black md:text-3xl">¿Querés verla con datos reales de una obra?</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)] md:text-base">
                Con un piloto chico se valida el valor: menos tiempo en reportes, mejor visibilidad y decisiones antes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button onClick={() => window.alert("TODO: link a Calendly / email / form")}>
                Coordinar demo
              </Button>
              <Button variant="ghost" onClick={() => window.alert("TODO: link a WhatsApp / contacto")}>
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
