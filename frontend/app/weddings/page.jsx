import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import VenueSpaces from "@/components/sections/VenueSpaces";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Packages from "@/components/sections/Packages";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import CtaBand from "@/components/sections/CtaBand";
import { weddingOfferings } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Weddings & Celebrations | Lawn Venue & Bespoke Styling",
  description:
    "Plan your dream wedding at Bodhi Villa, Bhairahawa. Featuring expansive lawns for up to 1,200 guests, in-house decor and floral styling, custom mandaps, and grand catering.",
};

export default function WeddingsPage() {
  const weddingPhotos = galleryItems.filter((item) => item.category === "weddings");

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Weddings & Receptions • Bhairahawa"
        title="Where your dream celebration comes to life"
        accent="comes to life"
        description="Bhairahawa’s most serene estate for once-in-a-lifetime Vivah ceremonies, grand evening receptions, and bespoke floral styling."
        imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Bodhi Villa Wedding Lawn Ceremony"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/reservations?type=wedding" variant="primary">
            Reserve Your Date
          </Button>
          <Button href="#spaces" variant="outline-white">
            Explore Venue Spaces
          </Button>
        </div>
      </PageHero>

      {/* 2. What We Offer */}
      <Section bg="default" pad="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal variant="fade-up">
              <Eyebrow align="center">Full-Spectrum Service</Eyebrow>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <Heading level="h2" accent="every detail handled" className="mt-2">
                Everything you need for seamless celebration
              </Heading>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <Paragraph className="mx-auto mt-3">
                From your morning Mehendi rituals to midnight reception toasts, we eliminate coordinator stress with comprehensive on-site solutions.
              </Paragraph>
            </Reveal>
          </div>

          <Stagger
            staggerDelay={90}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {weddingOfferings.map((offer) => (
              <div
                key={offer.id}
                className="p-7 bg-surface border border-border rounded-sm shadow-soft space-y-3 hover:border-accent/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm bg-primary-soft/60 flex items-center justify-center text-primary font-bold">
                  ✦
                </div>
                <h3 className="font-heading text-xl text-text font-medium">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 3. Venue Spaces (Lawn, Pavilion, Courtyard) */}
      <VenueSpaces />

      {/* 4. Decor & Styling Showcase (Brand Message rewrite) */}
      <Section bg="tint" pad="lg" className="border-y border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Reveal variant="fade-up">
              <Eyebrow align="center">Our Creative Philosophy</Eyebrow>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <Heading level="h2" accent="vision to life">
                “What sets Bodhi Villa apart is our ability to take your ideas and bring them to life.”
              </Heading>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <Paragraph className="mx-auto text-base sm:text-lg">
                We maintain an extensive, hand-curated inventory of artisanal mandaps, crystal chandeliers, floral arches, brass lanterns, and silk drapes. But our true craft is listening to your personal story and sculpting an environment that feels authentically, uniquely yours.
              </Paragraph>
            </Reveal>
            <Reveal variant="fade-up" delay={300} className="pt-2">
              <Button href="/reservations?type=wedding" variant="primary">
                Book a Styling Consultation
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Process Timeline */}
      <ProcessSteps />

      {/* 6. Wedding Photo Gallery */}
      <Section bg="default" pad="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Reveal variant="fade-up">
              <Eyebrow align="center">Real Weddings</Eyebrow>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <Heading level="h2" accent="captured romance" className="mt-2">
                Moments of joy and captured romance
              </Heading>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <Paragraph className="mx-auto mt-3">
                Click any photograph to view in our high-definition full-screen viewer.
              </Paragraph>
            </Reveal>
          </div>

          <MasonryGrid items={weddingPhotos} />
        </Container>
      </Section>

      {/* 7. Packages */}
      <Packages />

      {/* 8. Reserve CTA Band */}
      <CtaBand
        title="Secure your wedding date at Bodhi Villa"
        subtitle="Auspicious Vivah dates across Nepal fill rapidly. Speak with our wedding coordinator today to hold your preferred date."
      />
    </>
  );
}

