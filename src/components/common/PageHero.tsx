import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-hero pb-20 pt-40">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-glow" />
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        </div>
        {image && (
          <div className="relative aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-electric/30 blur-3xl" />
            <img
              src={image}
              alt=""
              width={1024}
              height={1024}
              className="relative h-full w-full object-contain float-y drop-shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
