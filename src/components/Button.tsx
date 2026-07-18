import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  download?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
}

const variantClasses = {
  primary:
    "border border-accent/50 bg-accent text-background hover:bg-accent-muted hover:border-accent-muted shadow-[0_0_24px_rgba(196,168,130,0.15)]",
  secondary:
    "border border-border-strong bg-transparent text-foreground hover:border-accent/60 hover:bg-accent-soft hover:text-accent",
  ghost:
    "border border-transparent bg-transparent text-muted hover:text-foreground hover:bg-surface-elevated",
};

export function Button({
  children,
  className = "",
  as = "button",
  href,
  download,
  type = "button",
  onClick,
  variant = "secondary",
  disabled = false,
}: ButtonProps) {
  const baseClasses = [
    "interactive-surface inline-flex items-center justify-center gap-2",
    "rounded-full px-6 py-2.5 text-base font-medium tracking-wide",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a" && href) {
    return (
      <a href={href} download={download} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
