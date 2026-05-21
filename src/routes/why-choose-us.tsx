import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { WhyChooseUs } from "@/components/home/WhyChooseUsSection";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose VoltCore — Chennai's Premier Battery Shop" },
      { name: "description", content: "Genuine products, expert support, fast installation and warranty assistance. Discover why Chennai trusts VoltCore for car and bike batteries." },
      { property: "og:title", content: "Why Choose VoltCore" },
      { property: "og:description", content: "Genuine products, expert installation, warranty support — the VoltCore advantage." },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why VoltCore"
        title={<>Six reasons Chennai <span className="text-gradient">trusts us</span>.</>}
        subtitle="We don't compete on price alone. We compete on genuineness, speed, fitment quality, and after-sales care — the things that actually matter once your vehicle leaves the workshop."
      />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTABanner />
    </>
  );
}
