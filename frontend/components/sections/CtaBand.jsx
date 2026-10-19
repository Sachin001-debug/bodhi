import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import LotusMark from "@/components/ornaments/LotusMark";
import { siteConfig } from "@/data/site";

/**
 * CtaBand: Full-width solid green reservation call-to-action band with white typography.
 * Offers dual conversion paths for dining tables and wedding celebrations.
 */
export default function CtaBand({
  title = "Begin planning your next memorable celebration",
  subtitle = "Whether it is an intimate family dinner this evening or a grand wedding celebration next season, our team is ready to welcome you.",
}) {
  return (
    <section className="w-full bg-primary text-white py-16 md:py-24 border-y border-primary-hover relative overflow-hidden">
      {/* Subtle background brand mark watermark */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-5 pointer-events-none" aria-hidden="true">
        <LotusMark className="w-96 h-96 text-white" />
      </div>

      <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <Reveal variant="fade-down">
          <Eyebrow align="center" className="text-accent">
            Reservations & Bookings • {siteConfig.name}
          </Eyebrow>
        </Reveal>

        <Reveal variant="fade-up" delay={100}>
          <Heading level="h2" theme="light" className="text-white max-w-2xl mx-auto">
            {title}
          </Heading>
        </Reveal>

        <Reveal variant="fade-up" delay={200}>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Dual Conversion CTAs */}
        <Reveal variant="fade-up" delay={300} className="pt-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/reservations?type=table"
              variant="outline-white"
              size="lg"
              className="w-full sm:w-auto"
            >
              Reserve a Table
            </Button>
            <Button
              href="/reservations?type=wedding"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-white text-primary border-white hover:bg-white/90 hover:border-white/90"
            >
              Book Your Wedding Date
            </Button>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={350}>
          <p className="text-xs text-white/60 tracking-wider uppercase pt-2">
            Open daily for dining • Peak wedding dates book early
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

