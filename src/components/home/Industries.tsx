import { motion } from "framer-motion";
import { INDUSTRIES } from "@/data/site";

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-foreground py-32 text-background">
      <div className="pointer-events-none absolute inset-0 opacity-20 grid-bg" />
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 80%, transparent), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-glow">
            Industries
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Power that moves <span className="text-gradient">every kind</span> of fleet.
          </h2>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          {INDUSTRIES.map((x, i) => (
            <motion.div
              key={x}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-medium backdrop-blur transition-colors hover:border-electric hover:bg-electric/20"
            >
              {x}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
