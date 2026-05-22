import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Car Batteries",
    desc: "Premium starting power for sedans, hatchbacks and SUVs.",
    image: "/images/products/car-battery-hero.png",
    to: "/car-batteries" as const,
  },
  {
    title: "Bike Batteries",
    desc: "Lightweight, high-output power packs for every two-wheeler.",
    image: "/images/products/bike-battery-hero.png",
    to: "/bike-batteries" as const,
  },
  {
    title: "Household Inverter Batteries",
    desc: "Reliable backup power for homes and small offices.",
    image: "/images/products/exide-inv.png",
    to: "/household-inverter-batteries" as const,
  },
];

export function ProductShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">
          Product Spotlight
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Engineered for <span className="text-gradient">peak performance</span>.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Two categories. Seven premium brands. One uncompromising standard.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border bg-card p-10 shadow-soft transition-all hover:shadow-card-premium"
          >
            <div className="relative flex items-start justify-between">
              <div>
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{it.title}</h3>
                <p className="mt-3 max-w-xs text-muted-foreground">{it.desc}</p>
              </div>
              <Link
                to={it.to}
                aria-label={`Explore ${it.title}`}
                className="glass-strong flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:rotate-45"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative mt-10 h-72">
              <img
                src={it.image}
                alt={it.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 mx-auto h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <Link
              to={it.to}
              className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:gap-3"
            >
              Browse range
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
