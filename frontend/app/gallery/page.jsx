import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GalleryClient from "@/components/gallery/GalleryClient";
import CtaBand from "@/components/sections/CtaBand";

export const metadata = {
  title: "Visual Gallery | Weddings & Fine Dining Photography",
  description:
    "Browse through high-resolution photographs of wedding lawns, mandap styling, intimate courtyards, and signature cuisine at Bodhi Villa in Bhairahawa.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Portfolio"
        title="A collection of celebrations and fine dining"
        accent="fine dining"
        description="Explore the architecture, floral styling, sacred mandaps, and culinary presentations crafted at Bodhi Villa."
      />

      <Section pad="default" bg="default">
        <Container>
          <GalleryClient />
        </Container>
      </Section>

      <CtaBand
        title="Envision your special day with us"
        subtitle="Speak with our event stylists or reserve a dining table to experience Bodhi Villa in person."
      />
    </>
  );
}

