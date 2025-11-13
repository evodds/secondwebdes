import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Button } from "@pkg/ui";

export const metadata: Metadata = {
  title: "Second Studio",
  description: "Creative tools curated for modern makers"
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "About", href: "/about" }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-body leading-body">
        <header className="sticky top-0 z-50 border-b border-[color:var(--chip-border)] bg-surface-base/95 backdrop-blur">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-6xl items-center justify-between gap-lg px-xl py-md"
          >
            <Link href="/" className="text-lg font-semibold text-text-strong">
              Second Studio
            </Link>
            <div className="hidden items-center gap-md md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-pill px-sm py-xs text-sm font-medium text-text-muted transition hover:text-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-sm">
              <Button size="md" variant="ghost" aria-label="Open search">
                Search
              </Button>
              <Button size="md" aria-label="View cart">
                Cart
              </Button>
            </div>
          </nav>
        </header>
        <main role="main" className="bg-surface-subtle">
          {children}
        </main>
        <footer className="border-t border-[color:var(--chip-border)] bg-surface-base">
          <div className="mx-auto flex max-w-6xl flex-col gap-sm px-xl py-lg text-sm text-text-muted md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Second Studio. Crafted for creators.</p>
            <div className="flex gap-md">
              <Link
                href="/privacy"
                className="rounded-pill px-sm py-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="rounded-pill px-sm py-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
