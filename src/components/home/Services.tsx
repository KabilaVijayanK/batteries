import { motion } from "framer-motion";
import { Wrench, RefreshCw, Siren, Stethoscope } from "lucide-react";
import { SERVICES } from "@/data/site";

const ICONS = [Wrench, RefreshCw, Siren, Stethoscope];

export function Services() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 flex flex-col items-end justify-between gap-6 sm:flex-row">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">Services</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            End-to-end battery care, on your terms.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          From a routine health check to a 2 AM jump-start, our certified team is one tap away.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden bg-card p-8 transition-colors hover:bg-foreground hover:text-background"
            >
              <Icon className="h-8 w-8 text-electric transition-colors group-hover:text-premium-yellow" />
              <h3 className="mt-8 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-background/70">
                {s.desc}
              </p>
              <span className="absolute bottom-4 right-4 text-xs font-mono opacity-30">
                0{i + 1}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
