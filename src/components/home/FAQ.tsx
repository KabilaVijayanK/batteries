import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-32">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">FAQ</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Answers, before you ask.
        </h2>
      </div>
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`rounded-2xl border bg-card p-6 transition-all ${isOpen ? "shadow-card-premium" : "shadow-soft"}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold sm:text-lg">{f.q}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-electric transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
