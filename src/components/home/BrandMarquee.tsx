import { BRANDS } from "@/data/site";

export function BrandMarquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="relative overflow-hidden border-y bg-background py-10">
      <div className="mx-auto mb-6 max-w-7xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted Brands We Stock
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee flex w-max gap-16 whitespace-nowrap px-8">
          {row.map((b, i) => (
            <span
              key={i}
              className="text-3xl font-bold tracking-tight text-foreground/70 transition-colors hover:text-foreground sm:text-4xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
