import { Calendar, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="glass-panel space-y-8">
        <span className="badge-chip">Concierge access</span>
        <h1 className="font-display text-4xl text-foreground sm:text-5xl">Let’s compose your next chapter</h1>
        <p className="text-sm text-muted-foreground">
          Our advisory team orchestrates private tours, bespoke negotiation strategies, and seamless relocation services. Share your ambitions and we’ll craft a cinematic buying experience.
        </p>
        <ContactForm />
      </div>
      <aside className="space-y-6">
        <div className="card-floating space-y-4 p-8">
          <h2 className="font-display text-2xl text-foreground">Aurora Studio</h2>
          <p className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-1 h-4 w-4 text-primary" />
            845 Sunset Boulevard Suite 320<br />Los Angeles, CA 90069
          </p>
          <div className="gradient-divider" />
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" />(310) 555-0190</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" />concierge@auroraestates.com</li>
            <li className="flex items-center gap-3"><Calendar className="h-4 w-4 text-primary" />Monday – Saturday · 9am – 7pm</li>
          </ul>
        </div>
        <div className="card-floating space-y-4 p-8">
          <h3 className="font-display text-xl text-foreground">Global concierge network</h3>
          <p className="text-sm text-muted-foreground">
            Schedule a flash briefing with our advisors in Beverly Hills, New York, Dubai, or London. We respond within 90 minutes, guaranteed.
          </p>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Concierge promise</p>
          <p className="text-sm text-muted-foreground">
            Private dossiers delivered before your first tour. Negotiation strategy drafted before any offer is presented.
          </p>
        </div>
      </aside>
    </div>
  );
}
