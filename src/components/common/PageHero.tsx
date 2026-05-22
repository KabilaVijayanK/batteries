import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  images,
  imageClass,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image?: string;
  images?: string[];
  imageClass?: string;
}) {
  const heroImages = images?.length ? images : image ? [image] : [];
  const heroImagesKey = heroImages.join("|");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [heroImagesKey]);

  useEffect(() => {
    if (heroImages.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [heroImages.length]);

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
        {heroImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className={"relative aspect-square w-full " + (imageClass ?? "max-w-sm")}
          >
            <div className="absolute inset-0 rounded-full bg-electric/30 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.img
                key={heroImages[activeImageIndex]}
                src={heroImages[activeImageIndex]}
                alt={eyebrow}
                width={1024}
                height={1024}
                initial={{ opacity: 0, x: 56, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.96 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="relative h-full w-full object-contain drop-shadow-2xl"
              />
            </AnimatePresence>

            {heroImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/40 px-3 py-2 backdrop-blur-sm">
                {heroImages.map((heroImage, index) => (
                  <button
                    key={heroImage}
                    type="button"
                    aria-label={`Show hero image ${index + 1}`}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeImageIndex ? "w-6 bg-electric" : "w-2 bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
