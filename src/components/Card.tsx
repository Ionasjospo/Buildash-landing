import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
      {children}
    </div>
  );
}
