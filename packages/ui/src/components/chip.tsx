import * as React from "react";
import { cn } from "../lib/cn";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, active = false, icon, children, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex min-h-[44px] min-w-[44px] items-center gap-xs rounded-pill border px-md text-sm font-medium transition",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
          active
            ? "border-transparent bg-accent-primary text-accent-primary-foreground shadow-card"
            : "border-[color:var(--chip-border)] bg-surface-base text-text-muted hover:border-accent-primary",
          className
        )}
        aria-pressed={active}
        {...props}
      >
        {icon}
        <span>{children}</span>
      </button>
    );
  }
);

Chip.displayName = "Chip";
