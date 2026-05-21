import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card-premium"
        >
          <div className="absolute inset-0 bg-electric" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <img
            src="/images/products/car-battery-hero.png"
            alt="VoltCore battery hero"
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 m-auto h-3/4 w-auto object-contain drop-shadow-2xl float-y"
          />
          <div className="glass-strong absolute bottom-6 left-6 right-6 rounded-2xl p-5">
            <div className="text-2xl font-bold">18+ Years</div>
            <div className="text-sm text-muted-foreground">Powering Chennai's vehicles</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">About VoltCore</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Trusted battery solutions for{" "}
            <span className="text-gradient">modern vehicles</span> in Chennai.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From a single workshop on Anna Salai to a city-wide network of certified
            technicians — we've built our reputation on genuine products, transparent
            pricing and obsessive attention to fitment.
          </p>
          <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
            {["Authorized Multi-Brand", "Doorstep Installation", "Eco-Safe Disposal", "Lifetime Advisory"].map((x) => (
              <li key={x} className="glass flex items-center gap-2 rounded-full px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                {x}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:scale-105"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
