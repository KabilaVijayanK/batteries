import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="relative bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Loved by drivers, riders & fleet owners.
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          className="!pb-14"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <figure className="glass-strong h-full rounded-3xl p-8 shadow-soft">
                <Quote className="h-8 w-8 text-electric" />
                <blockquote className="mt-5 text-lg leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
