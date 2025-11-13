import * as React from "react";
import { cn } from "../lib/cn";

type BadgeTone = "success" | "warning" | "info";
type BadgeVariant = "solid" | "soft";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
}

const toneStyles: Record<BadgeTone, { solid: string; soft: string }> = {
  success: {
    solid: "bg-[color:var(--badge-success-solid-bg)] text-[color:var(--badge-success-solid-fg)]",
    soft: "bg-[color:var(--badge-success-soft-bg)] text-[color:var(--badge-success-soft-fg)]"
  },
  warning: {
    solid: "bg-[color:var(--badge-warning-solid-bg)] text-[color:var(--badge-warning-solid-fg)]",
    soft: "bg-[color:var(--badge-warning-soft-bg)] text-[color:var(--badge-warning-soft-fg)]"
  },
  info: {
    solid: "bg-[color:var(--badge-info-solid-bg)] text-[color:var(--badge-info-solid-fg)]",
    soft: "bg-[color:var(--badge-info-soft-bg)] text-[color:var(--badge-info-soft-fg)]"
  }
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone = "info", variant = "soft", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex h-8 items-center gap-xs rounded-pill px-sm text-sm font-medium",
          toneStyles[tone][variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
