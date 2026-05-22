import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_US } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="relative bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Built different. <span className="text-gradient">Built for Chennai.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-card-premium"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-xl font-bold">{item.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
