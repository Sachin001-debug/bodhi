import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import DiamondLine from "@/components/ornaments/DiamondLine";
import { seasonalPromotion } from "@/data/seasonal";

/**
 * SeasonalBanner: Festival & seasonal celebration callout driven by data/seasonal.js.
 * Highlights Teej special feasts, Father's Day gatherings, and festival dining.
 */
export default function SeasonalBanner() {
  if (!seasonalPromotion || !seasonalPromotion.isActive) return null;

  return (
    <Section bg="tint" pad="default" className="border-y border-border">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Reveal variant="fade-up">
            <div className="inline-flex items-center gap-2">
              <span className="font-serif italic text-sm text-primary">
                {seasonalPromotion.nepaliHeading}
              </span>
              <span className="text-text-muted/40">•</span>
              <Eyebrow align="center">{seasonalPromotion.badge}</Eyebrow>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={100}>
            <Heading level="h2" accent="Festive Dining">
              {seasonalPromotion.title}
            </Heading>
          </Reveal>

          <Reveal variant="fade-up" delay={200} className="space-y-3">
            <blockquote className="font-serif italic text-lg sm:text-xl text-primary max-w-xl mx-auto">
              “{seasonalPromotion.quote}”
            </blockquote>
            <Paragraph className="mx-auto">
              {seasonalPromotion.description}
            </Paragraph>
          </Reveal>

          {/* Highlights */}
          {seasonalPromotion.highlights && (
            <Reveal variant="fade-up" delay={250}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-2 text-left">
                {seasonalPromotion.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-text-muted bg-surface/80 px-3.5 py-2 rounded-xs border border-border">
                    <span className="text-accent">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal variant="fade-up" delay={300} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={seasonalPromotion.primaryCtaHref} variant="primary">
              {seasonalPromotion.primaryCtaText}
            </Button>
            <Button href={seasonalPromotion.secondaryCtaHref} variant="secondary">
              {seasonalPromotion.secondaryCtaText}
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

