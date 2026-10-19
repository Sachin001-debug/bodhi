import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import FrameCorner from "@/components/ornaments/FrameCorner";
import { primaryServices } from "@/data/services";

/**
 * ServicesDuo: Two signature service cards representing Dine and Wed with hover zoom.
 */
export default function ServicesDuo() {
  return (
    <Section bg="alt" pad="lg">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Reveal variant="fade-up">
            <Eyebrow align="center">Two Signature Callings</Eyebrow>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <Heading level="h2" accent="celebrate" className="mt-2">
              How you may experience and celebrate with us
            </Heading>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <Paragraph className="mx-auto mt-3">
              We focus our energy with pure dedication on two pillars: daily artisan dining and once-in-a-lifetime weddings.
            </Paragraph>
          </Reveal>
        </div>

        {/* The Duo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {primaryServices.map((service, index) => (
            <Reveal
              key={service.id}
              variant="fade-up"
              delay={index * 150}
              className="h-full"
            >
              <article className="group h-full flex flex-col bg-surface border border-border rounded-sm overflow-hidden shadow-soft transition-all duration-300 hover:shadow-xl">
                {/* Image Container with hover zoom */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] md:group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Ornaments */}
                  <FrameCorner position="top-left" />
                  <FrameCorner position="bottom-right" />

                  {/* Eyebrow badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-surface/90 backdrop-blur-xs text-[0.68rem] uppercase tracking-[0.2em] font-semibold text-primary rounded-xs border border-border">
                      {service.eyebrow}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl sm:text-3xl text-text font-normal group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="pt-2 space-y-2 border-t border-border/60 text-xs sm:text-sm text-text-muted">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-accent mt-0.5" aria-hidden="true">
                            ✦
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Button href={service.ctaHref} variant="secondary" className="flex-1">
                      {service.ctaText}
                    </Button>
                    <Button href={service.reserveHref} variant="primary" className="flex-1">
                      Reserve Now
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

