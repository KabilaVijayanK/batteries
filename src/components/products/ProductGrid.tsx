import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Shield, Zap } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Product = {
  name: string;
  brand: string;
  warranty: string;
  price: string;
  image: string;
};

export function ProductGrid({ products }: { products: Product[] }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    vehicle: "",
    notes: "",
  });

  const openEnquiryForm = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      vehicle: "",
      notes: "",
    });
    setIsDialogOpen(true);
  };

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedProduct) {
      return;
    }

    setIsSubmitting(true);

    const message = [
      "New Enquiry from NS PowerCrop website",
      "",
      `Product: ${selectedProduct.name}`,
      `Brand: ${selectedProduct.brand}`,
      `Price: ${selectedProduct.price}`,
      `Warranty: ${selectedProduct.warranty}`,
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Location: ${formData.location || "Not provided"}`,
      `Vehicle Model: ${formData.vehicle || "Not provided"}`,
      `Notes: ${formData.notes || "None"}`,
    ].join("\n");

    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    setIsSubmitting(false);
    setIsDialogOpen(false);
  };

  return (
    <>
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
              <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                {p.brand}
              </span>
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
                  <span className="flex items-center gap-1">
                    <Shield className="h-3 w-3" /> Warranty
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3" /> Fitted
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openEnquiryForm(p)}
                className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-105"
              >
                Enquire
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="!left-2 !right-2 !top-2 !translate-x-0 !translate-y-0 w-auto border-0 bg-surface p-0 sm:!left-[50%] sm:!right-auto sm:!top-[50%] sm:!translate-x-[-50%] sm:!translate-y-[-50%] sm:w-[min(90vw,980px)] sm:max-w-none sm:rounded-3xl">
          <div className="relative overflow-hidden rounded-2xl border bg-background/95 p-2.5 sm:p-5">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-electric/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-premium-yellow/10 blur-3xl" />

            <DialogHeader className="relative pr-8">
              <DialogTitle className="text-base font-black tracking-tight sm:text-2xl">
                Quick Enquiry
              </DialogTitle>
              <DialogDescription className="text-[11px] sm:text-sm">
                Share your details and we&apos;ll contact you with pricing, compatibility, and
                installation support.
              </DialogDescription>
            </DialogHeader>

            {selectedProduct ? (
              <div className="relative mt-3 rounded-2xl border bg-card/90 p-2.5 shadow-soft sm:mt-3.5 sm:p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Selected Product
                </p>
                <h4 className="mt-1.5 line-clamp-2 text-sm font-bold sm:text-lg">
                  {selectedProduct.name}
                </h4>
                <p className="mt-1 text-[11px] text-muted-foreground sm:text-sm">
                  {selectedProduct.brand} • {selectedProduct.warranty} • {selectedProduct.price}
                </p>
              </div>
            ) : null}

            <form
              onSubmit={submitEnquiry}
              className="relative mt-3 space-y-2.5 sm:mt-3.5 sm:space-y-3"
            >
              <section className="rounded-2xl border bg-card/70 p-2.5 sm:p-4">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                  Contact Details
                </h5>
                <div className="mt-2.5 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
                  <div className="space-y-1 md:col-span-1">
                    <Label htmlFor="enquiry-name" className="text-sm">
                      Full Name
                    </Label>
                    <Input
                      id="enquiry-name"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, name: event.target.value }))
                      }
                      placeholder="Enter your full name"
                      className="h-9"
                      required
                    />
                  </div>

                  <div className="space-y-1 md:col-span-1">
                    <Label htmlFor="enquiry-phone" className="text-sm">
                      Phone Number
                    </Label>
                    <Input
                      id="enquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, phone: event.target.value }))
                      }
                      placeholder="10-digit mobile number"
                      className="h-9"
                      required
                    />
                  </div>

                  <div className="space-y-1 md:col-span-1">
                    <Label htmlFor="enquiry-email" className="text-sm">
                      Email (Optional)
                    </Label>
                    <Input
                      id="enquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, email: event.target.value }))
                      }
                      placeholder="name@example.com"
                      className="h-9"
                    />
                  </div>

                  <div className="space-y-1 md:col-span-1">
                    <Label htmlFor="enquiry-location" className="text-sm">
                      Location / Pincode
                    </Label>
                    <Input
                      id="enquiry-location"
                      value={formData.location}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, location: event.target.value }))
                      }
                      placeholder="Chennai, 6000XX"
                      className="h-9"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border bg-card/70 p-2.5 sm:p-4">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                  Vehicle & Requirement
                </h5>
                <div className="mt-2.5 grid grid-cols-1 gap-2.5 md:grid-cols-12 md:gap-3">
                  <div className="space-y-1 md:col-span-5">
                    <Label htmlFor="enquiry-vehicle" className="text-sm">
                      Vehicle Model
                    </Label>
                    <Input
                      id="enquiry-vehicle"
                      value={formData.vehicle}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, vehicle: event.target.value }))
                      }
                      placeholder="Eg: Hyundai i20 1.2 Petrol"
                      className="h-9"
                    />
                  </div>

                  <div className="space-y-1 md:col-span-7">
                    <Label htmlFor="enquiry-notes" className="text-sm">
                      Additional Details
                    </Label>
                    <Textarea
                      id="enquiry-notes"
                      value={formData.notes}
                      onChange={(event) =>
                        setFormData((prev) => ({ ...prev, notes: event.target.value }))
                      }
                      rows={2}
                      placeholder="Share battery issue or preferred installation time"
                      className="resize-none"
                    />
                  </div>
                </div>
              </section>

              <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-full bg-electric px-5 text-white hover:bg-electric/90 sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
