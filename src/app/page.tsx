import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Crown, Sparkles, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/data/properties";

const insightMetrics = [
  {
    label: "Average negotiation advantage",
    value: "4.6%",
    cadence: "below market"
  },
  {
    label: "Private showings arranged",
    value: "38",
    cadence: "last 30 days"
  },
  {
    label: "Concierge response time",
    value: "52m",
    cadence: "avg reply"
  }
];

const lifestyleHighlights = [
  {
    title: "Cinematic Discovery",
    description:
      "Every property is staged with editorial photography, cinematic walkthroughs, and architectural dossiers curated by our creative studio.",
    icon: Sparkles
  },
  {
    title: "White-Glove Negotiation",
    description:
      "Dedicated advisors orchestrate private tours, discreet negotiations, and bespoke financing models tailored to your portfolio goals.",
    icon: Crown
  },
  {
    title: "Global Network",
    description:
      "Tap into an invitation-only network of sellers, developers, and legal counsel across 14 international design capitals.",
    icon: Compass
  }
];

export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <div className="space-y-24 pb-32">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-0 h-[420px] bg-gradient-to-b from-primary/20 via-transparent to-transparent dark:from-primary/15" />
        <div className="container relative grid items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <span className="hero-badge animate-float-slow">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Aurora Estates Concierge
            </span>
            <div className="space-y-5">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 drop-shadow-sm dark:text-slate-50 sm:text-6xl">
                Private residences for design-led living.
              </h1>
              <p className="section-subtitle text-lg">
                Meet the residences that rewrite the skyline. From hillside sanctuaries to penthouse glasshouses, our advisory team navigates every detail—from first viewing to signature.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/listings">
                  Tour the collection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
                <Link href="/contact">
                  Reserve a private showing
                </Link>
              </Button>
            </div>
            <dl className="grid gap-6 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="glass-panel py-6 text-left">
                <dt className="badge-chip mb-3">Bespoke</dt>
                <dd>
                  <span className="text-3xl font-semibold text-foreground">120+</span>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    off-market residences
                  </p>
                </dd>
              </div>
              <div className="glass-panel py-6 text-left">
                <dt className="badge-chip mb-3">Curated</dt>
                <dd>
                  <span className="text-3xl font-semibold text-foreground">19</span>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    global design cities
                  </p>
                </dd>
              </div>
              <div className="glass-panel py-6 text-left">
                <dt className="badge-chip mb-3">Trusted</dt>
                <dd>
                  <span className="text-3xl font-semibold text-foreground">98%</span>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    client retention rate
                  </p>
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="glass-panel space-y-6 shadow-glow">
              <h2 className="text-sm font-semibold uppercase tracking-[0.45em] text-primary">Featured advisor</h2>
              <p className="text-lg text-muted-foreground">
                "Every journey begins with a signature space. Our team orchestrates private tours within 24 hours and crafts negotiation strategies tailored to your portfolio."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-primary/20 shadow-glow-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=320&q=80"
                    alt="Portrait of Taylor Brooks"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Taylor Brooks</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Founding partner · Beverly Hills</p>
                </div>
              </div>
              <div className="gradient-divider" />
              <div className="grid gap-3 text-sm text-muted-foreground">
                {insightMetrics.map(({ label, value, cadence }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/50 px-4 py-3 text-left shadow-inner-card backdrop-blur dark:border-white/10 dark:bg-white/5"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">{label}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{cadence}</p>
                    </div>
                    <span className="font-display text-2xl text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <p className="badge-chip">Featured Residences</p>
            <h2 className="section-heading">A curated gallery of glass, light, and landscape</h2>
            <p className="section-subtitle">
              From hillside sanctuaries to sculptural penthouses, discover best-in-class architecture crafted for elevated living.
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
            <Link href="/listings">
              View all residences
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((property, index) => (
            <div
              key={property.id}
              className="animate-float-slow [animation-delay:calc(var(--index,0)*0.2s)]"
              style={{ "--index": String(index) } as React.CSSProperties}
            >
              <PropertyCard property={property} highlight />
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-x-0 top-0 h-full bg-mesh-light" />
        <div className="container relative space-y-12">
          <div className="space-y-3">
            <p className="badge-chip">Market Pulse</p>
            <h2 className="section-heading">Intelligence crafted for bold decisions</h2>
            <p className="section-subtitle">
              Data storytelling meets boutique advisory. Our analysts distill private market transactions into insight cards, updated hourly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insightMetrics.map(({ label, value, cadence }, idx) => (
              <div key={`${label}-metric`} className="market-card">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  <span>{label}</span>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-semibold text-foreground">{value}</span>
                  <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{cadence}</span>
                </div>
                <div className="mt-8 h-16 w-full overflow-hidden">
                  <svg
                    className="market-sparkline h-full w-full text-primary/70"
                    viewBox="0 0 200 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 55L25 42L45 52L65 30L85 38L105 18L125 40L145 24L165 34L195 15"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 65L45 64L85 60L125 58L165 62L195 61"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeOpacity="0.35"
                    />
                  </svg>
                </div>
                <div className="mt-6 text-xs text-muted-foreground">
                  {idx === 0
                    ? "Sellers accepting curated offers within five days on average."
                    : idx === 1
                    ? "Limited-access showcases for design-forward estates across LA, NYC, and Miami."
                    : "Concierge leads triage private inquiries from partners before public release."}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3">
          <p className="badge-chip">Bespoke experience</p>
          <h2 className="section-heading">Every touchpoint is orchestrated for you</h2>
          <p className="section-subtitle">
            Aurora Estates Collective engineers a lifestyle-first journey. From advisory sessions to relocation, our process is cinematic and data-backed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {lifestyleHighlights.map(({ title, description, icon: Icon }) => (
            <div key={title} className="card-floating p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
