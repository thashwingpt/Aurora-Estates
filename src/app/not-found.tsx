import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">We couldn't find that property</h1>
        <p className="text-muted-foreground">
          The page you requested might be archived or relocated. Explore available listings or return home.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Back to homepage</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/listings">Browse listings</Link>
        </Button>
      </div>
    </div>
  );
}
