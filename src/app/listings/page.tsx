import Link from "next/link";

import { FilterSidebar } from "@/components/filter-sidebar";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/data/properties";
import { formatCurrency } from "@/lib/utils";

type ListingsPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

function parseParam(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value[0] : value;
}

function createFilterLink(searchParams: Record<string, string | string[] | undefined>, key: string) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([paramKey, paramValue]) => {
    if (!paramValue) return;
    const normalizedValue = Array.isArray(paramValue) ? paramValue[0] : paramValue;
    if (paramKey === key) return;
    if (normalizedValue) {
      params.set(paramKey, normalizedValue);
    }
  });
  return params.toString() ? `/listings?${params.toString()}` : "/listings";
}

export default function ListingsPage({ searchParams }: ListingsPageProps) {
  const filters = {
    location: parseParam(searchParams.location),
    type: parseParam(searchParams.type),
    minPrice: parseParam(searchParams.minPrice),
    maxPrice: parseParam(searchParams.maxPrice)
  };

  const locations = Array.from(new Set(properties.map((property) => property.location))).sort();
  const propertyTypes = Array.from(new Set(properties.map((property) => property.type))).sort();

  const filteredProperties = properties.filter((property) => {
    const matchesLocation = filters.location ? property.location === filters.location : true;
    const matchesType = filters.type ? property.type === filters.type : true;
    const matchesMinPrice = filters.minPrice ? property.price >= Number(filters.minPrice) : true;
    const matchesMaxPrice = filters.maxPrice ? property.price <= Number(filters.maxPrice) : true;
    return matchesLocation && matchesType && matchesMinPrice && matchesMaxPrice;
  });

  const activeFilters = [
    filters.location && {
      label: filters.location,
      href: createFilterLink(searchParams, "location")
    },
    filters.type && {
      label: filters.type,
      href: createFilterLink(searchParams, "type")
    },
    filters.minPrice && {
      label: `Min ${formatCurrency(Number(filters.minPrice))}`,
      href: createFilterLink(searchParams, "minPrice")
    },
    filters.maxPrice && {
      label: `Max ${formatCurrency(Number(filters.maxPrice))}`,
      href: createFilterLink(searchParams, "maxPrice")
    }
  ].filter(Boolean) as { label: string; href: string }[];

  const resultsLabel = filteredProperties.length === 1 ? "residence" : "residences";

  return (
    <div className="container grid gap-10 py-16 lg:grid-cols-[320px_1fr]">
      <FilterSidebar locations={locations} propertyTypes={propertyTypes} />
      <section className="space-y-8">
        <header className="space-y-4 rounded-3xl border border-white/10 bg-white/60 p-6 shadow-inner-card backdrop-blur dark:bg-white/5">
          <p className="text-xs uppercase tracking-[0.45em] text-muted-foreground">Live portfolio</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <h1 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              {filteredProperties.length} {resultsLabel} available
            </h1>
            <p className="text-sm text-muted-foreground">
              Across {locations.length} curated neighborhoods and {propertyTypes.length} architectural typologies.
            </p>
          </div>
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <Link key={filter.label} href={filter.href} className="filter-chip">
                  {filter.label}
                  <span className="text-xs uppercase text-primary">×</span>
                </Link>
              ))}
            </div>
          )}
        </header>
        {filteredProperties.length ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="card-floating grid h-80 place-items-center p-12 text-center">
            <div className="space-y-3">
              <h2 className="font-display text-2xl text-foreground">No residences match your filters</h2>
              <p className="text-sm text-muted-foreground">
                Adjust your criteria or reach out to our concierge for private, off-market releases ahead of public listings.
              </p>
              <Link href="/contact" className="text-sm font-semibold text-primary hover:text-primary/80">
                Connect with the concierge
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
