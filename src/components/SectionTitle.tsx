export function SectionTitle(props: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold tracking-widest text-[color:var(--primary2)]">
        {props.eyebrow.toUpperCase()}
      </div>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{props.title}</h2>
      {props.subtitle ? (
        <p className="mt-3 text-sm text-[color:var(--muted)] md:text-base">{props.subtitle}</p>
      ) : null}
    </div>
  );
}
