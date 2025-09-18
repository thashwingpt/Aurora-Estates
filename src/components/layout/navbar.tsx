"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/contact", label: "Contact" }
] satisfies Array<{ href: Route; label: string }>;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3 text-lg font-semibold">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-cyan-400 text-sm font-bold text-primary-foreground shadow-glow">
            <span className="absolute inset-0 animate-aurora-wave bg-gradient-to-br from-white/10 via-transparent to-white/30" />
            <span className="relative">AE</span>
          </span>
          <div className="flex flex-col">
            <span className="font-display text-xl text-foreground">Aurora Estates Collective</span>
            <span className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Private residences - Global concierge</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                pathname === link.href && "bg-primary text-primary-foreground shadow-md"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden rounded-full border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 md:inline-flex">
            <Link href="/contact">Schedule</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
