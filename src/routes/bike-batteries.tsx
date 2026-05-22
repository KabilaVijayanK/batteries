import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { BIKE_BATTERIES } from "@/data/site";
import { CTABanner } from "@/components/home/CTABanner";

export const Route = createFileRoute("/bike-batteries")({
  head: () => ({
    meta: [
      { title: "Bike Batteries in Chennai — Exide, Amaron, Livguard | NS PowerCrop" },
      {
        name: "description",
        content:
          "Premium two-wheeler batteries in Chennai. Lightweight, high-output power packs for every bike and scooter. Doorstep installation.",
      },
      { property: "og:title", content: "Premium Bike Batteries in Chennai" },
      {
        property: "og:description",
        content: "Lightweight, high-output bike batteries with doorstep fitment.",
      },
      { property: "og:url", content: "/bike-batteries" },
      { property: "og:image", content: "/images/products/bike-battery-hero.png" },
    ],
    links: [{ rel: "canonical", href: "/bike-batteries" }],
  }),
  component: BikeBatteries,
});

function BikeBatteries() {
  return (
    <>
      <PageHero
        eyebrow="Bike Batteries"
        title={
          <>
            Lightweight power for <span className="text-gradient">every ride</span>.
          </>
        }
        subtitle="High-cranking two-wheeler batteries from premium brands. Engineered for instant starts in every Chennai weather."
        images={["/images/products/bike-battery-hero.png", "/images/products/bike-battery-2.png"]}
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProductGrid products={BIKE_BATTERIES} />
      </section>
      <CTABanner />
    </>
  );
}
