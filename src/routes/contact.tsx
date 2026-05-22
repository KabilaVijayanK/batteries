import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SITE } from "@/data/site";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NS PowerCrop — Book a Battery Installation in Chennai" },
      {
        name: "description",
        content:
          "Get in touch with NS PowerCrop for car & bike battery sales, installation, replacement and emergency support across Chennai.",
      },
      { property: "og:title", content: "Contact NS PowerCrop — Chennai Battery Shop" },
      {
        property: "og:description",
        content: "Book installation, replacement or emergency battery support across Chennai.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's get you <span className="text-gradient">powered up</span>.
          </>
        }
        subtitle="Tell us your vehicle and we'll send a certified technician with the right battery — anywhere in Chennai."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Workshop", val: SITE.address },
              { icon: Phone, label: "Phone", val: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: Mail, label: "Email", val: SITE.email, href: `mailto:${SITE.email}` },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                val: "Chat with our team",
                href: `https://wa.me/${SITE.whatsapp}`,
              },
            ].map(({ icon: Icon, label, val, href }) => {
              const inner = (
                <div className="glass flex items-start gap-4 rounded-2xl p-5 transition-colors hover:bg-white">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-1 font-medium">{val}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border bg-card p-8 shadow-soft sm:p-10"
          >
            <h2 className="text-2xl font-bold">Request a quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We respond within 15 minutes during business hours.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" required type="tel" />
              <Field label="Vehicle make & model" name="vehicle" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-electric/50 focus:ring-2"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105 disabled:opacity-60"
            >
              {sent ? "Thanks — we'll be in touch" : "Send request"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-electric/50 focus:ring-2"
      />
    </div>
  );
}
