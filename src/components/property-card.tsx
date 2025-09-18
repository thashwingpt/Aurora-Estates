"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Expand, Heart, Bath } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  highlight?: boolean;
}

export function PropertyCard({ property, highlight = false }: PropertyCardProps) {
  const { id, title, location, price, type, bedrooms, bathrooms, area, description, images } = property;
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Card
      className={`group relative flex h-full flex-col overflow-hidden border-white/10 bg-card/80 shadow-glow-soft backdrop-blur ${
        highlight ? "card-floating" : "transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
      }`}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
          priority={highlight}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge className="border-white/30 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white backdrop-blur" variant="secondary">
            {type}
          </Badge>
          {highlight && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white backdrop-blur">
              Signature
            </span>
          )}
        </div>
        <button
          type="button"
          aria-label={isSaved ? "Remove from saved residences" : "Save residence"}
          className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/30 p-2 text-white backdrop-blur transition hover:scale-105 hover:bg-black/50"
          onClick={() => setIsSaved((prev) => !prev)}
        >
          <Heart className={`h-4 w-4 transition ${isSaved ? "fill-current text-rose-400" : "text-white"}`} />
        </button>
      </div>
      <CardHeader className="space-y-3 px-6 pt-6">
        <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{location}</span>
        <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4 px-6">
        <p className="text-3xl font-semibold text-primary">{formatCurrency(price)}</p>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Bed className="h-4 w-4" />{bedrooms} Suites</span>
          <span className="inline-flex items-center gap-2"><Bath className="h-4 w-4" />{bathrooms} Baths</span>
          <span className="inline-flex items-center gap-2"><Expand className="h-4 w-4" />{area.toLocaleString()} sqft</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between px-6 pb-6 pt-0">
        <div className="flex -space-x-2 overflow-hidden">
          {images.slice(0, 3).map((img, index) => (
            <Image
              key={img}
              src={img}
              alt={`${title} thumbnail ${index + 1}`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl border-2 border-background object-cover"
            />
          ))}
        </div>
        <Button asChild variant="ghost" className="gap-2 text-primary hover:bg-primary/10">
          <Link href={`/listings/${id}`}>
            View details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
