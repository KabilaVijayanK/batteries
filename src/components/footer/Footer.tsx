import { Link } from "@tanstack/react-router";
import { Zap, MapPin, Phone, Mail } from "lucide-react";
import { NAV, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t bg-surface">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-electric text-white shadow-glow">
                <Zap className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold">{SITE.name}</span>
            </Link>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Reliable Battery Solutions For Every Ride & Drive Across Chennai.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-electric" /> {SITE.address}
              </span>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-electric" /> {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-electric" /> {SITE.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Battery Installation</li>
              <li>Battery Replacement</li>
              <li>Emergency Support</li>
              <li>Vehicle Battery Checkup</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Crafted in Chennai • For drivers, riders & fleets.</p>
        </div>
      </div>
    </footer>
  );
}
