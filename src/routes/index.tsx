import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUsSection";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";
import { ContactPreview } from "@/components/home/ContactPreview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NS Power Corp — Premium Car,Bike & Inverter Battery Shop in Chennai" },
      {
        name: "description",
        content:
          "Reliable power for every ride and drive in Chennai. Genuine Exide, Amaron, Microtek, Luminous, SF Sonic, Livguard, Tata Green batteries with doorstep installation.",
      },
      { property: "og:title", content: "NS-PowerCorp — Premium Battery Shop in Chennai" },
      {
        property: "og:description",
        content: "Genuine car and bike batteries with doorstep installation across Chennai.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <ProductShowcase />
      <AboutPreview />
      <WhyChooseUs />
      <Services />
      <Industries />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <ContactPreview />
    </>
  );
}
