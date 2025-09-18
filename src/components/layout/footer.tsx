export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="container grid gap-6 py-10 text-sm text-muted-foreground md:grid-cols-[2fr_1fr] md:items-center">
        <div className="space-y-2">
          <p className="font-display text-lg text-foreground">Aurora Estates Collective</p>
          <p className="text-xs uppercase tracking-[0.4em]">Cinematic residences · Concierge-led acquisitions</p>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Aurora Estates Collective. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Careers</span>
          <span>Press</span>
        </div>
      </div>
    </footer>
  );
}
