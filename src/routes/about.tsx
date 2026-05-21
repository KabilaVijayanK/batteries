import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Stats } from "@/components/home/Stats";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { WhyChooseUs } from "@/components/home/WhyChooseUsSection";
import { CTABanner } from "@/components/home/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VoltCore — Trusted Battery Experts in Chennai" },
      { name: "description", content: "Trusted battery solutions for modern vehicles in Chennai. 18+ years powering cars, bikes and fleets across the city." },
      { property: "og:title", content: "About VoltCore — Battery Experts in Chennai" },
      { property: "og:description", content: "18+ years powering Chennai's vehicles with genuine multi-brand batteries." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About VoltCore"
        title={<>Trusted Battery Solutions For <span className="text-gradient">Modern Vehicles</span> In Chennai</>}
        subtitle="From a single workshop on Anna Salai to a city-wide network of certified technicians — we've built our reputation on genuine products, transparent pricing, and obsessive attention to fitment for every car and bike on Chennai roads."
        image="/images/products/car-battery-hero.png"
      />
      <BrandMarquee />
      <Stats />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
