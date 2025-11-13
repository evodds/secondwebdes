import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@pkg/ui";

interface PromoContent {
  message: string;
  expiresAt: string;
  cta: {
    label: string;
    href: string;
  };
}

interface PromoBannerProps {
  promo: PromoContent;
  countdown?: ReactNode;
}

export function PromoBanner({ promo, countdown }: PromoBannerProps) {

  return (
    <section
      aria-label="Limited time promotion"
      className="bg-accent-primary text-accent-primary-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-sm px-xl py-sm text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-xs md:flex-row md:items-center md:gap-sm">
          <span className="font-semibold uppercase tracking-wide">Just dropped</span>
          <p className="text-base md:text-body">{promo.message}</p>
        </div>
        <div className="flex flex-wrap items-center gap-sm">
          <time
            aria-live="polite"
            className="flex items-center gap-xs rounded-pill bg-accent-primary-foreground/10 px-sm py-xs text-xs font-semibold uppercase tracking-wider"
          >
            {countdown ?? <span className="font-mono tracking-tight">0d 0h 0m 0s</span>}
          </time>
          <Button asChild size="md" variant="ghost" className="bg-accent-primary-foreground text-accent-primary">
            <Link href={promo.cta.href}>{promo.cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
