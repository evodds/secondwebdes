"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@pkg/ui";

interface PromoContent {
  message: string;
  expiresAt: string;
  cta: {
    label: string;
    href: string;
  };
}

function formatTimeLeft(target: number) {
  const total = Math.max(target - Date.now(), 0);
  const seconds = Math.floor(total / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return { days, hours, minutes, seconds: secs };
}

export function PromoBanner({ promo }: { promo: PromoContent }) {
  const target = useMemo(() => new Date(promo.expiresAt).getTime(), [promo.expiresAt]);
  const [timeLeft, setTimeLeft] = useState(() => formatTimeLeft(target));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(formatTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(id);
  }, [target]);

  const { days, hours, minutes, seconds } = timeLeft;

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
          <time aria-live="polite" className="flex items-center gap-xs rounded-pill bg-accent-primary-foreground/10 px-sm py-xs text-xs font-semibold uppercase tracking-wider">
            {days}d {hours}h {minutes}m {seconds}s
          </time>
          <Button asChild size="md" variant="ghost" className="bg-accent-primary-foreground text-accent-primary">
            <Link href={promo.cta.href}>{promo.cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
