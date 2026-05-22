import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CAR_BATTERIES } from "@/data/site";
import { CTABanner } from "@/components/home/CTABanner";

export const Route = createFileRoute("/car-batteries")({
  head: () => ({
    meta: [
      { title: "Car Batteries in Chennai — Exide, Amaron, Tata Green | NS PowerCrop" },
      {
        name: "description",
        content:
          "Premium car batteries in Chennai for sedans, hatchbacks and SUVs. Exide, Amaron, SF Sonic, Tata Green. Doorstep installation, full warranty.",
      },
      { property: "og:title", content: "Premium Car Batteries in Chennai" },
      {
        property: "og:description",
        content: "Genuine multi-brand car batteries with doorstep fitment.",
      },
      { property: "og:url", content: "/car-batteries" },
      { property: "og:image", content: "/images/products/car-battery-hero.png" },
    ],
    links: [{ rel: "canonical", href: "/car-batteries" }],
  }),
  component: CarBatteries,
});

function CarBatteries() {
  return (
    <>
      <PageHero
        eyebrow="Car Batteries"
        title={
          <>
            Premium starting power for <span className="text-gradient">every car</span>.
          </>
        }
        subtitle="Hand-picked car batteries from India's top brands. Built for Chennai's heat, traffic and monsoon. Doorstep fitment included."
        images={[
          "/images/products/car-battery-hero.png",
          "/images/products/car-battery-2.png",
          "/images/products/microtek-car.png",
          "/images/products/lumi-car.png",
        ]}
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProductGrid products={CAR_BATTERIES} />
      </section>
      <CTABanner />
    </>
  );
}
