import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { WhatsAppFab } from "@/components/common/WhatsAppFab";
import { BackToTop } from "@/components/common/BackToTop";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { CursorGlow } from "@/components/common/CursorGlow";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NS-PowerCrop — Premium Car,Bike & Inverter Battery Shop in Chennai" },
      {
        name: "description",
        content:
          "Premium quality car and bike batteries in Chennai — Exide, Amaron, Microtek, Luminous, SF Sonic, Livguard, Tata Green. Doorstep installation, warranty support, 24×7 emergency service.",
      },
      { name: "author", content: "NS-PowerCrop" },
      {
        name: "keywords",
        content:
          "Chennai battery shop, car battery Chennai, bike battery Chennai, Exide battery Chennai, Amaron battery Chennai, battery installation Chennai",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NS-PowerCrop" },
      { property: "og:title", content: "NS-PowerCrop — Premium Battery Shop in Chennai" },
      {
        property: "og:description",
        content: "Genuine car & bike batteries with doorstep installation across Chennai.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/images/logo/logo.png" },
      { rel: "apple-touch-icon", href: "/images/logo/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "NS-PowerCrop",
          image: "/images/products/car-battery-hero.png",
          telephone: "+91-98765-43210",
          address: {
            "@type": "PostalAddress",
            streetAddress: "No.3, Pallavaram main road, manancheri, kundrathur",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600069",
            addressCountry: "IN",
          },
          areaServed: "Chennai",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
    </QueryClientProvider>
  );
}
