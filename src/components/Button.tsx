import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:ring-offset-2 focus:ring-offset-[color:var(--bg)]";

  const styles =
    variant === "primary"
      ? "bg-[color:var(--primary)] text-white hover:opacity-90"
      : "bg-transparent border border-[color:var(--border)] text-[color:var(--text)] hover:bg-white/5";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
