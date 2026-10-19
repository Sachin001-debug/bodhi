import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileReserveBar from "@/components/layout/MobileReserveBar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bodhivilla.com"), // TODO: confirm domain with owner
  title: {
    default: "Bodhi Villa | Premium Restaurant & Wedding Villa in Bhairahawa",
    template: "%s | Bodhi Villa",
  },
  description:
    "Bodhi Villa is Bhairahawa's premier restaurant and wedding villa located in Manglapur, Tillotama. Offering daily artisan dining, expansive lawns, and bespoke wedding styling.",
  keywords: [
    "Bodhi Villa",
    "Bhairahawa Restaurant",
    "Tillotama Restaurant",
    "Wedding Venue Bhairahawa",
    "Wedding Hall Nepal",
    "Nepali Heritage Dining",
    "Lawn Wedding Nepal",
  ],
  authors: [{ name: "Bodhi Villa" }],
  creator: "Bodhi Villa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bodhivilla.com",
    title: "Bodhi Villa | Restaurant & Wedding Venue in Bhairahawa, Nepal",
    description:
      "Where every celebration finds its home. Daily artisan dining and once-in-a-lifetime wedding celebrations in Manglapur, Tillotama.",
    siteName: "Bodhi Villa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bodhi Villa Garden Wedding Lawn in Bhairahawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodhi Villa | Restaurant & Wedding Villa",
    description: "Daily artisan dining and bespoke weddings in Bhairahawa, Nepal.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "EventVenue"],
    "name": siteConfig.name,
    "description": siteConfig.brandMessagePolished,
    "url": "https://bodhivilla.com",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manglapur, Tillotama",
      "addressLocality": "Bhairahawa",
      "addressRegion": "Lumbini Province",
      "postalCode": siteConfig.postalCode,
      "addressCountry": "NP",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.coordinates.lat,
      "longitude": siteConfig.coordinates.lng,
    },
    "priceRange": siteConfig.priceRange,
    "servesCuisine": ["Nepali", "Pan-Asian", "Himalayan", "Continental"],
    "openingHours": "Mo-Su 10:00-22:00",
    "sameAs": [siteConfig.facebook],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-primary-soft selection:text-primary">
        <Navbar />
        {/* Main wrapper with mobile bottom padding to prevent MobileReserveBar overlap */}
        <main className="flex-1 w-full pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileReserveBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
