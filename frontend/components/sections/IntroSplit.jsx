import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import Parallax from "@/components/animations/Parallax";
import { FrameCorners } from "@/components/ornaments/FrameCorner";
import { siteConfig } from "@/data/site";

/**
 * IntroSplit: Two-column narrative intro pairing a serif statement with a framed villa photo.
 */
export default function IntroSplit() {
  return (
    <Section bg="default" pad="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal variant="fade-up">
              <Eyebrow>Welcome to Bodhi Villa • {siteConfig.nepaliWelcome}</Eyebrow>
            </Reveal>

            <Reveal variant="fade-up" delay={100}>
              <Heading level="h2" accent="vision to life">
                Taking your most cherished moments and bringing your vision to life.
              </Heading>
            </Reveal>

            <Reveal variant="fade-up" delay={200} className="space-y-4">
              <Paragraph lead>
                Tucked in the peaceful greenery of Manglapur, Tillotama, Bodhi Villa was created for life’s most genuine gatherings. We believe true hospitality is unhurried, thoughtful, and deeply personal.
              </Paragraph>
              <Paragraph>
                Whether you join us for a slow afternoon dinner under garden umbrellas or entrust us with the sacred vows of your wedding day, our spaces and team adapt seamlessly to your rhythm. With generous lawns, custom floral styling, and daily artisanal cuisine, we make every celebration feel effortless.
              </Paragraph>
            </Reveal>

            <Reveal variant="fade-up" delay={300} className="pt-2 flex flex-wrap gap-4 items-center">
              <Button href="/about" variant="secondary">
                Our Story & Philosophy
              </Button>
              <span className="text-xs font-serif italic text-primary tracking-wide">
                “Serving You Daily in Bhairahawa”
              </span>
            </Reveal>
          </div>

          {/* Right Column: Framed Luxury Image */}
          <div className="lg:col-span-5">
            <Reveal variant="fade-left" delay={200}>
              <Parallax speed={0.08}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Subtle offset border frame */}
                  <div className="absolute -inset-3 sm:-inset-4 border border-accent/40 rounded-sm pointer-events-none" />

                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface shadow-soft">
                    <Image
                      src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
                      alt="Bodhi Villa candlelit dinner banquet and garden reception"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover"
                      loading="lazy"
                    />

                    {/* Corner Frame Ornaments */}
                    <FrameCorners inset="inset-4" />
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

