import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import { weddingPackages } from "@/data/packages";

/**
 * Packages: 3-tier wedding celebration packages with transparent inclusions and quote CTAs.
 */
export default function Packages() {
  return (
    <Section bg="default" pad="lg" id="packages">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal variant="fade-up">
            <Eyebrow align="center">Curated Collections</Eyebrow>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <Heading level="h2" accent="celebration tiers" className="mt-2">
              Bespoke wedding and celebration tiers
            </Heading>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <Paragraph className="mx-auto mt-3">
              Every couple has unique priorities. We provide three flexible baselines, each fully tailored to your guest size and cultural rituals.
            </Paragraph>
          </Reveal>
        </div>

        {/* 3 Packages Grid */}
        <Stagger
          staggerDelay={120}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {weddingPackages.map((pkg) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-sm bg-surface transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-primary shadow-xl ring-1 ring-primary/20"
                    : "border border-border shadow-soft hover:border-text-muted/40"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[0.68rem] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-xs shadow-xs">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    {!isPopular && (
                      <span className="text-[0.68rem] uppercase tracking-[0.18em] text-accent font-semibold block mb-1">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-2xl text-text font-medium">
                      {pkg.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-text-muted mt-1">
                      {pkg.capacity}
                    </p>
                  </div>

                  <div className="py-3 border-y border-border">
                    <span className="font-heading text-2xl text-primary font-normal block">
                      {pkg.pricing}
                    </span>
                    <span className="text-[0.72rem] text-text-muted italic">
                      
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-[0.16em] font-semibold text-text mb-3">
                      Package Inclusions
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-text-muted">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <Button
                    href="/reservations?type=wedding"
                    variant={isPopular ? "primary" : "secondary"}
                    fullWidth
                  >
                    {pkg.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}

