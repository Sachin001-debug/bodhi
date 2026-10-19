import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import { weddingProcessSteps } from "@/data/services";

/**
 * ProcessSteps: The 4-step wedding journey: Consult, Design, Style, Celebrate.
 */
export default function ProcessSteps() {
  return (
    <Section bg="alt" pad="lg">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal variant="fade-up">
            <Eyebrow align="center">How We Work</Eyebrow>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <Heading level="h2" accent="vision to life" className="mt-2">
              Bringing your unique vision to life in four thoughtful steps
            </Heading>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <Paragraph className="mx-auto mt-3">
              We replace wedding stress with calm certainty. Here is how your dream unfolds with our dedicated styling and coordination team.
            </Paragraph>
          </Reveal>
        </div>

        {/* 4 Steps Grid */}
        <Stagger
          staggerDelay={110}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {weddingProcessSteps.map((step) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-7 bg-surface border border-border rounded-sm shadow-soft flex flex-col justify-between space-y-4 hover:border-primary/40 transition-colors"
            >
              <div className="space-y-3">
                <span className="font-heading text-4xl text-accent font-light leading-none block select-none">
                  {step.step}
                </span>
                <h3 className="font-heading text-2xl text-text font-medium">
                  {step.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-primary font-medium">
                  {step.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-accent/60" aria-hidden="true" />
            </div>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

