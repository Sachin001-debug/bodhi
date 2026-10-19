import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import DiamondLine from "@/components/ornaments/DiamondLine";
import { testimonialsData } from "@/data/testimonials";

/**
 * Testimonials: Realistic words of gratitude from wedded couples and villa patrons.
 */
export default function Testimonials() {
  return (
    <Section bg="alt" pad="lg">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal variant="fade-up">
            <Eyebrow align="center">Words of Celebration</Eyebrow>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <Heading level="h2" accent="cherished memories" className="mt-2">
              Stories woven into our cherished memories
            </Heading>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <Paragraph className="mx-auto mt-3">
              Hear from couples and families who shared their milestones with us.
            </Paragraph>
          </Reveal>
        </div>

        {/* Testimonials 3-Card Grid */}
        <Stagger
          staggerDelay={120}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-surface border border-border rounded-sm shadow-soft flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <span className="font-heading text-4xl text-accent/60 leading-none select-none block">
                  “
                </span>
                <p className="font-serif italic text-base sm:text-[17px] text-text leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <p className="font-heading text-lg text-text font-medium">
                  {t.author}
                </p>
                <p className="text-xs text-accent uppercase tracking-widest mt-0.5">
                  {t.event}
                </p>
                <p className="text-[0.72rem] text-text-muted mt-0.5">
                  {t.location} • {t.date}
                </p>
              </div>
            </div>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

