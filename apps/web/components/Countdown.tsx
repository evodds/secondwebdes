'use client';

import { useEffect, useState } from 'react';

type Props = {
  /** ISO timestamp like "2025-03-01T00:00:00Z" */
  target: string;
  /** Optional label suffix, e.g., " left" */
  suffix?: string;
};

export default function Countdown({ target, suffix = '' }: Props) {
  // render nothing on the server to prevent hydration mismatch
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    // first client paint only; suppress SSR mismatch warning
    return <span suppressHydrationWarning>—d —h —m —s{suffix}</span>;
  }

  const end = new Date(target).getTime();
  const diff = Math.max(0, end - now);

  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff / 3_600_000) % 24);
  const m = Math.floor((diff / 60_000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return <span>{d}d {h}h {m}m {s}s{suffix}</span>;
}
