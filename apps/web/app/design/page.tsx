import Image from "next/image";
import Link from "next/link";
import data from "@/content/figma.json";

type Node = { id: string; name: string; thumb: string | null };

export const dynamic = "force-static";

export default function DesignPage() {
  const nodes = (data as Node[]).filter(Boolean);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 className="text-2xl font-semibold">Design preview</h1>
        <Link className="underline" href="/">Back to site</Link>
      </div>
      {nodes.length === 0 ? (
        <p className="opacity-70">No frames found. Run the Figma pull script.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nodes.map((n) => (
            <li key={n.id} className="rounded-xl border bg-white/50 p-3 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
                {n.thumb ? (
                  /* Using next/image with remote URL is fine in dev; if needed, adjust next.config for remotePatterns later */
                  <Image src={n.thumb} alt={n.name} fill sizes="(min-width: 1024px) 33vw, 100vw" />
                ) : (
                  <div className="grid h-full w-full place-items-center text-sm opacity-60">No preview</div>
                )}
              </div>
              <p className="mt-3 truncate text-sm font-medium">{n.name}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
