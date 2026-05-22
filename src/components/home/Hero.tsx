import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BIKE_BATTERIES, CAR_BATTERIES } from "@/data/site";

const HERO_SLIDES = [...CAR_BATTERIES, ...BIKE_BATTERIES].map((item) => ({
  image: item.image,
  alt: `${item.brand} ${item.name}`,
  label: item.brand,
  name: item.name,
  warranty: item.warranty,
}));

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-hero pt-32">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 30%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-electric pulse-glow" />
            Chennai's Premium Battery Specialist
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Reliable Power For
            <span className="text-gradient"> Every Ride & Drive</span>
            <br className="hidden sm:block" /> In Chennai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Premium quality car and bike batteries designed for powerful performance, long-lasting
            durability, and dependable starting power for Chennai roads and everyday travel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/car-batteries"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Explore Batteries
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="glass-strong inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold hover:bg-white"
            >
              Book Installation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6"
          >
            {[
              ["25K+", "Installed"],
              ["60 min", "Doorstep"],
              ["7", "Top Brands"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold tracking-tight">{v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 60%, transparent), transparent)",
              }}
            />
            <div className="relative z-10 h-full w-full">
              {HERO_SLIDES.map((slide, index) => (
                <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  width={1024}
                  height={1024}
                  initial={false}
                  animate={{
                    opacity: index === activeSlide ? 1 : 0,
                    scale: index === activeSlide ? 1 : 0.94,
                    y: index === activeSlide ? 0 : 18,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-contain float-y drop-shadow-2xl"
                />
              ))}
            </div>

            <motion.div
              key={currentSlide.image}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-strong absolute left-4 top-4 z-20 rounded-2xl px-4 py-3 shadow-card-premium"
            >
              <div className="text-xs font-medium text-foreground/80">{currentSlide.label}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {currentSlide.warranty}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
