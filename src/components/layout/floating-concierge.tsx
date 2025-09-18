"use client";

import { Calendar, MessageCircle, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingConcierge() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="floating-cta">
      {isOpen && (
        <div className="floating-cta__panel animate-panel-soft">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Concierge</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">Your private showing awaits</h3>
            </div>
            <button
              type="button"
              aria-label="Close concierge"
              className="rounded-full border border-transparent p-1 text-muted-foreground transition hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            "We coordinate white-glove tours, discreet negotiations, and bespoke relocation with a 2-hour response promise."
          </p>
          <div className="gradient-divider my-4" />
          <div className="grid gap-2 text-sm">
            <Button asChild variant="outline" className="justify-start gap-2 bg-primary/5 text-primary hover:bg-primary/15">
              <Link href="/contact">
                <Calendar className="h-4 w-4" />
                Schedule a private tour
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start gap-2 text-foreground hover:bg-primary/10">
              <Link href="tel:3105550190">
                <PhoneCall className="h-4 w-4" />
                Speak with an advisor
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start gap-2 text-foreground hover:bg-primary/10">
              <Link href="mailto:concierge@auroraestates.com">
                <MessageCircle className="h-4 w-4" />
                concierge@auroraestates.com
              </Link>
            </Button>
          </div>
        </div>
      )}
      <button
        type="button"
        className={cn(
          "floating-cta__trigger",
          isOpen && "scale-95 bg-primary/90"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="aurora-concierge"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute inset-0 animate-pulse-soft rounded-full bg-white/50" />
          <span className="relative text-sm font-bold">AE</span>
        </span>
        <span>{isOpen ? "Close concierge" : "Aurora live concierge"}</span>
      </button>
    </div>
  );
}
