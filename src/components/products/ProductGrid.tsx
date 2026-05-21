import { motion } from "framer-motion";
import { Shield, Zap } from "lucide-react";

type Product = {
  name: string;
  brand: string;
  warranty: string;
  price: string;
  image: string;
};

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p, i) => (
        <motion.article
          key={p.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card-premium"
        >
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-electric/15 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative flex items-center justify-between">
            <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">{p.brand}</span>
            <span className="text-xs text-muted-foreground">{p.warranty}</span>
          </div>
          <div className="relative my-4 h-44">
            <img
              src={p.image}
              alt={`${p.brand} ${p.name}`}
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 m-auto h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="relative text-lg font-bold leading-tight">{p.name}</h3>
          <div className="relative mt-4 flex items-end justify-between">
            <div>
              <div className="text-2xl font-bold text-gradient">{p.price}</div>
              <div className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> Warranty</span>
                <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> Fitted</span>
              </div>
            </div>
            <button className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-105">
              Enquire
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
