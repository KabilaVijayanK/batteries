import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { HOUSEHOLD_INVERTER_BATTERIES } from "@/data/site";
import { CTABanner } from "@/components/home/CTABanner";

export const Route = createFileRoute("/household-inverter-batteries")({
  head: () => ({
    meta: [
      { title: "Household Inverter Batteries in Chennai - Microtek, Luminous | NS Power Corp" },
      {
        name: "description",
        content:
          "Reliable household inverter batteries and backup power for homes and small offices. Genuine brands with doorstep installation and warranty.",
      },
      { property: "og:title", content: "Household Inverter Batteries in Chennai" },
      {
        property: "og:description",
        content:
          "Backup power solutions for homes - Microtek, Luminous, Exide. Doorstep delivery and installation.",
      },
      { property: "og:url", content: "/household-inverter-batteries" },
      { property: "og:image", content: "/images/products/exide-inv.png" },
    ],
    links: [{ rel: "canonical", href: "/household-inverter-batteries" }],
  }),
  component: HouseholdInverterBatteries,
});

function HouseholdInverterBatteries() {
  return (
    <>
      <PageHero
        eyebrow="Household Inverter Batteries"
        title={
          <>
            Reliable backup power for <span className="text-gradient">homes & offices</span>.
          </>
        }
        subtitle="Selection of high-capacity inverter batteries from trusted brands. Built for Chennai's power needs with warranty and installation included."
        images={[
          "/images/products/exide-inv.png",
          "/images/products/ama-inv.png",
          "/images/products/micro-inv.png",
          "/images/products/lumi-inv.png",
        ]}
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProductGrid products={HOUSEHOLD_INVERTER_BATTERIES} />
      </section>
      <CTABanner />
    </>
  );
}
