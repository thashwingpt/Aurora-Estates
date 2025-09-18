import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, MapPin, Sparkles, Waves } from "lucide-react";

import { PropertyGallery } from "@/components/property-gallery";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { properties } from "@/data/properties";
import { formatCurrency } from "@/lib/utils";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;

  const property = properties.find((item) => item.id === id);

  if (!property) {
    return {
      title: "Residence Not Found"
    };
  }

  return {
    title: `${property.title} - ${property.location}`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images.map((image) => ({ url: image })),
      type: "article"
    }
  };
}

export default async function PropertyDetailsPage({ params }: PropertyPageProps) {
  const { id } = await params;

  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  const { title, location, price, bedrooms, bathrooms, area, description, features, images, type } = property;

  return (
    <div className="container space-y-14 py-16">
      <div className="glass-panel flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="border-primary/30 bg-primary/10 text-primary">
              {type}
            </Badge>
            <span className="badge-chip">Aurora Signature Listing</span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 uppercase tracking-[0.35em]"><MapPin className="h-4 w-4 text-primary" />{location}</span>
            <span className="inline-flex items-center gap-2 uppercase tracking-[0.35em]"><Calendar className="h-4 w-4 text-primary" />Immediate availability</span>
          </div>
        </div>
        <div className="space-y-3 text-right">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Offered at</p>
          <p className="font-display text-4xl font-semibold text-primary">{formatCurrency(price)}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Request a private showing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
              <Link href="mailto:concierge@auroraestates.com">
                Download dossier
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <PropertyGallery title={title} images={images} />

      <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
        <section className="card-floating space-y-6 p-10">
          <h2 className="font-display text-2xl text-foreground">Residence narrative</h2>
          <p className="text-base text-muted-foreground">{description}</p>
          <p className="text-base text-muted-foreground">
            Wrapped in glass and light, this residence harmonizes panoramic skyline views with curated interiors. Entertain across tiered terraces, a chef-caliber kitchen, and lounge-ready living spaces that blur indoor and outdoor living.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/15 bg-primary/10 p-4 text-sm text-primary dark:border-primary/25">
              <p className="text-xs uppercase tracking-[0.45em]">Blueprint</p>
              <p className="mt-2 text-base font-semibold text-primary/90">
                {bedrooms} suite{bedrooms > 1 ? "s" : ""} | {bathrooms} bath{bathrooms > 1 ? "s" : ""}
              </p>
              <p className="text-xs text-primary/70">{area.toLocaleString()} sqft of indoor-outdoor flow</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white/70 p-4 text-sm text-muted-foreground shadow-inner-card backdrop-blur dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.45em]">Concierge Insight</p>
              <p className="mt-2 text-base font-semibold text-foreground">
                Crafted for collectors seeking a statement retreat in {location.split(",")[0]}.
              </p>
              <p className="text-xs text-muted-foreground">Private offers entertained upon request.</p>
            </div>
          </div>
          <div className="gradient-divider" />
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">Lifestyle features</h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary">
                  <Sparkles className="h-4 w-4" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <aside className="flex flex-col gap-6">
          <Card className="card-floating space-y-5 p-8">
            <h3 className="font-display text-xl text-foreground">Neighborhood cadence</h3>
            <p className="text-sm text-muted-foreground">
              Nestled within a design-forward enclave, minutes from Michelin-starred dining, private art galleries, and botanical sanctuaries.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" /> 2 minutes to curated retail promenade
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" /> 5 minutes to private aviation terminals
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" /> 12 minutes to coastline boardwalks
              </li>
            </ul>
          </Card>
          <Card className="card-floating space-y-5 p-8">
            <h3 className="font-display text-xl text-foreground">Aurora concierge assurances</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Waves className="h-5 w-5 text-primary" /> Private architecture tour with design principal
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" /> Tailored smart-home and wellness integration plan
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" /> 72-hour closing concierge & bespoke relocation
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
              <Link href="/contact">Speak with the concierge</Link>
            </Button>
          </Card>
        </aside>
      </div>
    </div>
  );
}
