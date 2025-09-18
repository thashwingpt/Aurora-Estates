"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = React.useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    setStatus(`Thank you ${name || "there"}. Our concierge will respond within the hour.`);
    event.currentTarget.reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Full name</Label>
          <Input id="name" name="name" placeholder="Avery Laurent" required className="h-12 rounded-xl border border-primary/20 bg-background/90" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required className="h-12 rounded-xl border border-primary/20 bg-background/90" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Phone</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-12 rounded-xl border border-primary/20 bg-background/90" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Tell us about your goals</Label>
        <Textarea id="message" name="message" placeholder="Share desired neighborhoods, investment goals, or architectural style." required className="rounded-xl border border-primary/20 bg-background/90" />
      </div>
      <Button type="submit" className="w-full rounded-full bg-primary/90 py-3 text-base font-semibold shadow-lg hover:bg-primary">
        Initiate concierge call
      </Button>
      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}
