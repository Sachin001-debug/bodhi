import PageHero from "@/components/layout/PageHero";
import MenuContent from "@/components/menu/MenuContent";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Restaurant Menu | Authentic & Artisan Cuisine",
  description:
    "Explore the full menu of Bodhi Villa in Bhairahawa. Himalayan specials, charcoal sekuwa, royal Thakali, artisan starters, and desserts served daily.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Bodhi Villa Restaurant • Open Daily"
        title="Artisan culinary selections, served daily"
        accent="served daily"
        description="Fresh mountain herbs, slow-braised Himalayan spices, and garden-inspired recipes prepared with authentic clay-oven warmth."
        imageSrc="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Bodhi Villa Restaurant Cuisine"
      />

      <MenuContent />

      <CtaBand
        title="Ready to savor an exceptional meal?"
        subtitle="Reserve a table for intimate couples, family celebrations, or garden cabana gatherings. We welcome you daily."
      />
    </>
  );
}

