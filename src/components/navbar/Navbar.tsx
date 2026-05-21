import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-strong shadow-soft" : "glass"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-electric text-white shadow-glow">
            <Zap className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">{SITE.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.slice(0, 2).map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
          <li
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Products <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="glass-strong absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl p-2 shadow-card-premium"
                >
                  <Link
                    to="/car-batteries"
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-accent"
                  >
                    Car Batteries
                  </Link>
                  <Link
                    to="/bike-batteries"
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-accent"
                  >
                    Bike Batteries
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          {NAV.slice(4).map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-full p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto absolute left-4 right-4 top-20 lg:hidden"
          >
            <div className="glass-strong rounded-3xl p-4 shadow-card-premium">
              <ul className="flex flex-col gap-1">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-foreground px-4 py-3 text-center text-base font-semibold text-background"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link
        to={to}
        activeOptions={{ exact: to === "/" }}
        className="group relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        activeProps={{ className: "text-foreground" }}
      >
        {({ isActive }) => (
          <>
            {label}
            {isActive && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </>
        )}
      </Link>
    </li>
  );
}
