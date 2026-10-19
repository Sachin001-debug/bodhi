import Hero from "@/components/sections/Hero";
import IntroSplit from "@/components/sections/IntroSplit";
import ServicesDuo from "@/components/sections/ServicesDuo";
import MenuPreview from "@/components/sections/MenuPreview";
import WhyUs from "@/components/sections/WhyUs";
import GalleryStrip from "@/components/sections/GalleryStrip";
import SeasonalBanner from "@/components/sections/SeasonalBanner";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Bodhi Villa | Premium Restaurant & Wedding Villa in Bhairahawa",
  description:
    "Where every celebration finds its home. Experience daily artisan dining and bespoke lawn weddings in Manglapur, Tillotama, Bhairahawa, Nepal.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Intro Split */}
      <IntroSplit />

      {/* 3. Two Signature Services: Dine and Wed */}
      <ServicesDuo />

      {/* 4. Menu Preview */}
      <MenuPreview />

      {/* 5. Why Choose Bodhi Villa */}
      <WhyUs />

      {/* 6. Featured Gallery Strip */}
      <GalleryStrip />

      {/* 7. Seasonal & Festive Celebrations Banner */}
      <SeasonalBanner />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Final Reservation CTA Band */}
      <CtaBand />
    </>
  );
}

