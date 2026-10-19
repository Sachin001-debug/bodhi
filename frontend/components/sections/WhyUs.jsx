import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import { whyChooseUs } from "@/data/services";

/**
 * Renders custom thin botanical / luxury inline SVG icons.
 */
function FeatureIcon({ type }) {
  switch (type) {
    case "sparkle":
      return (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13" />
        </svg>
      );
    case "location":
      return (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 21s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
          <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "dining":
      return (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 4v16m-6-8h12M7 4h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      );
    case "care":
    default:
      return (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
  }
}

/**
 * WhyUs: Highlights 4 key pillars that define the quiet luxury of Bodhi Villa.
 */
export default function WhyUs() {
  return (
    <Section bg="alt" pad="lg">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal variant="fade-up">
            <Eyebrow align="center">The Bodhi Distinction</Eyebrow>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <Heading level="h2" accent="heartfelt care" className="mt-2">
              Why hosts and diners choose our sanctuary
            </Heading>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <Paragraph className="mx-auto mt-3">
              We marry generous natural spaces with bespoke craftsmanship, ensuring you feel deeply cared for from start to finish.
            </Paragraph>
          </Reveal>
        </div>

        {/* 4 Pillars Grid */}
        <Stagger
          staggerDelay={100}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-surface border border-border rounded-sm shadow-soft flex flex-col justify-between space-y-4 hover:border-accent/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-primary-soft/50 border border-border flex items-center justify-center">
                  <FeatureIcon type={item.icon} />
                </div>
                <h3 className="font-heading text-xl text-text font-medium">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border/50">
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-accent font-semibold">
                  Bodhi Guarantee
                </span>
              </div>
            </div>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

