import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import FrameCorner from "@/components/ornaments/FrameCorner";
import { venueSpaces } from "@/data/services";

/**
 * VenueSpaces: Showcases the 3 distinct event spaces at Bodhi Villa.
 */
export default function VenueSpaces() {
  return (
    <Section bg="default" pad="lg" id="spaces">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal variant="fade-up">
            <Eyebrow align="center">Estate Architecture</Eyebrow>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <Heading level="h2" accent="three magnificent spaces" className="mt-2">
              Explore our three magnificent spaces
            </Heading>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <Paragraph className="mx-auto mt-3">
              Thoughtfully laid out across serene acreage in Tillotama, allowing seamless transitions between sacred vows, cocktails, and midnight banquets.
            </Paragraph>
          </Reveal>
        </div>

        {/* 3 Spaces List */}
        <div className="space-y-16">
          {venueSpaces.map((space, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={space.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : ""}`}>
                  <Reveal variant={isReversed ? "fade-left" : "fade-right"}>
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-sm bg-surface border border-border shadow-soft group">
                      <Image
                        src={space.image}
                        alt={space.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] md:group-hover:scale-105"
                        loading="lazy"
                      />
                      <FrameCorner position="top-left" />
                      <FrameCorner position="bottom-right" />
                    </div>
                  </Reveal>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <Reveal variant="fade-up">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent block">
                      {space.capacity}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl text-text mt-1">
                      {space.name}
                    </h3>
                    <p className="text-xs font-serif italic text-primary mt-0.5">
                      {space.tagline}
                    </p>
                  </Reveal>

                  <Reveal variant="fade-up" delay={100}>
                    <Paragraph>{space.description}</Paragraph>
                  </Reveal>

                  {/* Specifications */}
                  <Reveal variant="fade-up" delay={150}>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs uppercase tracking-[0.16em] font-semibold text-text mb-2">
                        Key Features & Capacities
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-text-muted">
                        <li className="flex items-center gap-2">
                          <span className="text-accent">✦</span>
                          <span><strong>Ideal for:</strong> {space.idealFor}</span>
                        </li>
                        {space.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2">
                            <span className="text-accent">✦</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal variant="fade-up" delay={200} className="pt-2">
                    <Button href="/reservations?type=wedding" variant="secondary" size="sm">
                      Check Availability for this Space
                    </Button>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

