import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { STATS } from "@/data/site";

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setStart(true), {
      threshold: 0.3,
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-card p-10 text-center">
            <div className="text-5xl font-bold tracking-tight text-gradient">
              {start ? <CountUp end={s.value} duration={2.2} separator="," /> : 0}
              {s.suffix}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
