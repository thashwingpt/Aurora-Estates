"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FilterSidebarProps {
  locations: string[];
  propertyTypes: string[];
}

type FilterState = {
  location: string;
  type: string;
  minPrice: string;
  maxPrice: string;
};

const defaultState: FilterState = {
  location: "",
  type: "",
  minPrice: "",
  maxPrice: ""
};

const pricePresets = [
  { label: "<$1M", min: "", max: "1000000" },
  { label: "$1M - $2M", min: "1000000", max: "2000000" },
  { label: "$2M+", min: "2000000", max: "" }
];

export function FilterSidebar({ locations, propertyTypes }: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const serializedParams = searchParams.toString();

  const [filters, setFilters] = React.useState<FilterState>(() => ({
    location: searchParams.get("location") ?? "",
    type: searchParams.get("type") ?? "",
    minPrice: searchParams.get("minPrice") ?? "",
    maxPrice: searchParams.get("maxPrice") ?? ""
  }));

  React.useEffect(() => {
    setFilters({
      location: searchParams.get("location") ?? "",
      type: searchParams.get("type") ?? "",
      minPrice: searchParams.get("minPrice") ?? "",
      maxPrice: searchParams.get("maxPrice") ?? ""
    });
  }, [serializedParams, searchParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = React.useCallback(
    (nextFilters: FilterState) => {
      const params = new URLSearchParams();
      Object.entries(nextFilters).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        }
      });
      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname);
    },
    [pathname, router]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    applyFilters(filters);
  };

  const handleReset = () => {
    setFilters(defaultState);
    router.push(pathname);
  };

  const handlePricePreset = (min: string, max: string) => {
    const nextFilters = { ...filters, minPrice: min, maxPrice: max };
    setFilters(nextFilters);
    applyFilters(nextFilters);
  };

  return (
    <aside className="glass-panel sticky top-24 flex w-full flex-col gap-6 rounded-3xl">
      <div>
        <p className="badge-chip mb-3">Refine search</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Curate your next viewing</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Filter by destination, architectural style, and investment range. Our concierge updates inventory hourly.
        </p>
      </div>
      <div className="grid gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
        <span>Instant budgets</span>
        <div className="flex flex-wrap gap-2">
          {pricePresets.map((preset) => {
            const isActive = filters.minPrice === preset.min && filters.maxPrice === preset.max;
            return (
              <button
                type="button"
                key={preset.label}
                onClick={() => handlePricePreset(preset.min, preset.max)}
                className={`filter-chip ${isActive ? "bg-primary/20" : "bg-primary/10"}`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="location" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Location
          </Label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="h-11 w-full rounded-xl border border-primary/20 bg-background/90 px-4 text-sm shadow-inner-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <option value="">All locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="type" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Property Type
          </Label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="h-11 w-full rounded-xl border border-primary/20 bg-background/90 px-4 text-sm shadow-inner-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <option value="">All types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="minPrice" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Minimum Price
            </Label>
            <Input
              id="minPrice"
              name="minPrice"
              type="number"
              min={0}
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="500000"
              className="h-11 rounded-xl border border-primary/20 bg-background/90"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxPrice" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Maximum Price
            </Label>
            <Input
              id="maxPrice"
              name="maxPrice"
              type="number"
              min={0}
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="2500000"
              className="h-11 rounded-xl border border-primary/20 bg-background/90"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button type="submit" className="w-full rounded-full bg-primary/90 py-3 text-base font-semibold shadow-lg hover:bg-primary">
            Apply filters
          </Button>
          <Button type="button" variant="ghost" onClick={handleReset} className="w-full rounded-full text-sm text-muted-foreground hover:bg-primary/10">
            Reset
          </Button>
        </div>
      </form>
    </aside>
  );
}
