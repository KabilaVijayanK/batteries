import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function CTABanner() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-10 text-background shadow-card-premium sm:p-16">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 70%, transparent), transparent)" }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-20 grid-bg" />

        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-glow">Need a battery today?</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Get genuine power, <span className="text-gradient">delivered fast</span>.
            </h2>
            <p className="mt-5 max-w-xl text-base text-background/70">
              Free pickup, free fitment, real warranty. Anywhere in Chennai.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-4 text-sm font-semibold text-foreground hover:scale-105"
            >
              Book now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-4 text-sm font-semibold hover:bg-background/10"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
