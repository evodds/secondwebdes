import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@pkg/ui";

type PromoContent = {
  message: string;
  expiresAt: string;
  cta: { label: string; href: string };
};

type PromoBannerProps = {
  promo: PromoContent;
  countdown?: ReactNode; // slot for a live timer
};

export function PromoBanner({ promo, countdown }: PromoBannerProps) {
  return (
    <section
      aria-label="Limited time promotion"
      className="w-full border-b border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-sm">
        <p className="truncate">
          <span className="font-semibold">JUST DROPPED</span>{" "}
          {promo.message}
        </p>
        <div className="flex items-center gap-3">
          <time aria-live="polite" className="font-mono tracking-tight">
            {countdown ?? <span className="opacity-70">0d 0h 0m 0s</span>}
          </time>
          <Button asChild size="sm" variant="ghost">
            <Link href={promo.cta.href}>{promo.cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
