import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { SITE } from "@/data/site";

export function ContactPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 rounded-3xl border bg-card p-10 shadow-soft lg:grid-cols-2 lg:p-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">Visit us</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Drop by the workshop.</h2>
          <p className="mt-3 text-muted-foreground">
            Walk-ins welcome. Free diagnostic with every visit.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:gap-3"
          >
            Full contact details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="space-y-5 text-sm">
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
              <div className="mt-1 font-medium">{SITE.address}</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
              <a href={`tel:${SITE.phone}`} className="mt-1 block font-medium hover:text-electric">
                {SITE.phone}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 block font-medium hover:text-electric"
              >
                {SITE.email}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
