import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";
import CountUp from "@/components/animations/CountUp";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "About Us | Our Story & Philosophy",
  description:
    "Learn about Bodhi Villa in Bhairahawa, Nepal. Our philosophy of bringing a couple's vision to life, serene garden architecture, and culinary dedication.",
};

// ============================================================
// Custom Cultural SVGs
// ============================================================

/* Traditional Nepali Dhaka topi – detailed woven version */
function DhakaTopi({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Crown outline — tall sloping cap */}
      <path d="M14 40 L18 20 Q24 10 32 10 Q40 10 46 20 L50 40 Z" />

      {/* Crown vertical seams (the stitched panels) */}
      <path d="M32 10 L32 40" strokeWidth="0.8" />
      <path d="M24 14 L26 40" strokeWidth="0.8" />
      <path d="M40 14 L38 40" strokeWidth="0.8" />
      <path d="M19 24 L21 40" strokeWidth="0.6" />
      <path d="M45 24 L43 40" strokeWidth="0.6" />

      {/* Small top fold / peak cap */}
      <path d="M27 12 Q32 8 37 12" strokeWidth="1" />

      {/* Folded brim band */}
      <path d="M11 40 Q32 44 53 40 L52 47 Q32 51 12 47 Z" />

      {/* Dhaka woven zig-zag pattern on the band (top row) */}
      <path
        d="M14 42.5 L16 45 L18 42.5 L20 45 L22 42.5 L24 45 L26 42.5 L28 45 L30 42.5 L32 45 L34 42.5 L36 45 L38 42.5 L40 45 L42 42.5 L44 45 L46 42.5 L48 45 L50 42.5"
        strokeWidth="0.7"
      />
      {/* Bottom row (offset for woven look) */}
      <path
        d="M15 45.5 L17 48 L19 45.5 L21 48 L23 45.5 L25 48 L27 45.5 L29 48 L31 45.5 L33 48 L35 45.5 L37 48 L39 45.5 L41 48 L43 45.5 L45 48 L47 45.5 L49 48"
        strokeWidth="0.7"
      />

      {/* Tiny diamond accents at seams */}
      <path d="M20 41 L21 42 L20 43 L19 42 Z" strokeWidth="0.5" />
      <path d="M32 41 L33 42 L32 43 L31 42 Z" strokeWidth="0.5" />
      <path d="M44 41 L45 42 L44 43 L43 42 Z" strokeWidth="0.5" />
    </svg>
  );
}

/* Momo – crescent body with pleats */
function Momo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 18c-4.4 0-8-3.6-8-8 0-1 .2-2 .6-2.9L8 10V6l4 3 4-3v4l3.4-2.9c.4.9.6 1.9.6 2.9 0 4.4-3.6 8-8 8z" />
      <path d="M12 18v3M10 21h4" />
    </svg>
  );
}

/* Multi-petal lotus */
function Lotus({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20c-4 0-7-2.5-7-6 0-2 1-4 3-5.5 0 0 1 2.5 4 2.5s4-2.5 4-2.5c2 1.5 3 3.5 3 5.5 0 3.5-3 6-7 6z" />
      <path d="M12 20c-2.5 0-4.5-1.5-4.5-4 0-1.5 1-2.5 2-3.5 0 0 .5 1.5 2.5 1.5s2.5-1.5 2.5-1.5c1 1 2 2 2 3.5 0 2.5-2 4-4.5 4z" />
    </svg>
  );
}

/* Shrivatsa / endless knot – auspicious Buddhist symbol */
function EndlessKnot({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 C7 3 3 7 3 12 C3 17 7 21 12 21 C17 21 21 17 21 12 C21 7 17 3 12 3 Z" />
      <path d="M12 7 C9 7 7 9 7 12 C7 15 9 17 12 17 C15 17 17 15 17 12 C17 9 15 7 12 7 Z" />
      <path
        d="M12 3 L12 7 M12 17 L12 21 M3 12 L7 12 M17 12 L21 12"
        strokeWidth="0.6"
      />
    </svg>
  );
}

/* Lung ta – prayer flag bunting (large, 7 flags) */
function PrayerFlags({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M0 8 Q 30 20 60 8 T 120 8 T 180 8 T 240 8"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />
      <path d="M14 10 L24 34 L34 10 Z" />
      <path d="M46 12 L56 36 L66 12 Z" />
      <path d="M78 8 L88 32 L98 8 Z" />
      <path d="M110 10 L120 34 L130 10 Z" />
      <path d="M142 12 L152 36 L162 12 Z" />
      <path d="M174 8 L184 32 L194 8 Z" />
      <path d="M206 10 L216 34 L226 10 Z" />
    </svg>
  );
}

// ============================================================
// Data
// ============================================================

const STATS = [
  { value: 1200, suffix: "+", label: "Max Guest Capacity" },
  { value: 450, suffix: "+", label: "Celebrations Hosted" },
  { value: 15, suffix: "+", label: "Culinary Specialists" },
  { value: 100, suffix: "%", label: "Bespoke Styling Guarantee" },
];

const VALUES = [
  {
    icon: DhakaTopi,
    title: "Quiet Luxury & Serenity",
    description:
      "We cultivate an unhurried, calm ambiance where natural greenery and architecture take center stage, free of artificial ostentation.",
  },
  {
    icon: Lotus,
    title: "Bespoke Vision Over Templates",
    description:
      "Every couple and host possesses a unique aesthetic. We take the time to listen and build custom mandaps, stages, and banquet courses.",
  },
  {
    icon: Momo,
    title: "Culinary Honesty & Freshness",
    description:
      "Our kitchen honors regional Nepali culinary heritage alongside global delicacies, utilizing pure cold-pressed oils, fresh herbs, and clay pots.",
  },
  {
    icon: EndlessKnot,
    title: "Deeply Personal Hospitality",
    description:
      "From initial consultation to the final departure, our owners and managers stand present on-site to ensure smooth perfection.",
  },
];

// ============================================================
// Page
// ============================================================

export default function AboutPage() {
  return (
    <div className="bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#C6A87C] selection:text-white overflow-hidden">
      {/* 1. Hero */}
      <section className="relative w-full pt-[calc(var(--navbar-height)+5rem)] pb-24 lg:pt-[calc(var(--navbar-height)+7rem)] lg:pb-32">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#1A1A1A 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10 flex flex-col items-center text-center">
          <Reveal variant="fade-in" delay={100}>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#C6A87C] font-semibold mb-6">
              The Bodhi Villa Heritage
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <h1 className="font-heading text-[3rem] sm:text-6xl lg:text-7xl xl:text-[5rem] font-normal leading-[1.05] tracking-tight max-w-4xl text-[#111111]">
              A sanctuary born for <br />
              <span className="italic text-[#C6A87C] font-light">
                authentic gatherings
              </span>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <p className="mt-8 max-w-xl text-sm sm:text-base text-[#555555] leading-relaxed font-light mx-auto">
              Nestled in Manglapur, Tillotama, Bodhi Villa represents a refined
              marriage between nature's tranquility and celebrations of life.
            </p>
          </Reveal>

          {/* Overlapping Asymmetrical Image Composition */}
          <div className="relative w-full max-w-5xl mt-16 sm:mt-24 h-[400px] sm:h-[500px] lg:h-[600px]">
            <Reveal
              variant="scale-in"
              delay={400}
              className="absolute top-0 left-0 w-[60%] sm:w-[55%] h-[80%] z-10"
            >
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=90"
                  alt="Bodhi Villa Estate View"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 55vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal
              variant="scale-in"
              delay={600}
              className="absolute bottom-0 right-0 w-[50%] sm:w-[45%] h-[60%] z-20"
            >
              <div className="absolute -inset-2 border border-[#C6A87C]/50 translate-x-4 translate-y-4 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden shadow-xl border-4 border-[#F9F8F6]">
                <Image
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=90"
                  alt="Traditional wedding mandap setup"
                  fill
                  sizes="(max-width: 1024px) 50vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Story Narrative with Cultural Divider */}
      <Section bg="default" pad="lg" className="relative pt-0">
        <Container>
          <Reveal
            variant="fade-up"
            className="flex justify-center mb-16 opacity-40"
          >
            <PrayerFlags className="w-full max-w-[420px] h-auto text-[#C6A87C]" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Reveal variant="fade-right" delay={200}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-8 bg-[#C6A87C]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A87C] font-semibold">
                    Our Origins
                  </span>
                </div>
                <Heading
                  level="h2"
                  accent="heart of Tillotama"
                  className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight"
                >
                  A tranquil retreat in the heart of Tillotama
                </Heading>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-6 lg:pt-8">
              <Reveal variant="fade-up" delay={100}>
                <p className="text-lg sm:text-xl text-[#1A1A1A] leading-relaxed font-light border-l-2 border-[#C6A87C] pl-6">
                  Bodhi Villa was founded on a simple conviction: that
                  celebrations are sacred milestones deserving of space, grace,
                  and heartfelt attention.
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={200} className="space-y-5 pl-6">
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                  Located in Manglapur, just a short drive from the Gautam
                  Buddha International Airport corridor in Bhairahawa, our
                  property offers a rare sanctuary away from highway noise.
                  Surrounded by tall shade trees, fragrant botanical gardens,
                  and spacious lawns, guests step into an atmosphere that feels
                  immediate, calm, and elevated.
                </p>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                  Over the years, we have grown from a peaceful dining garden
                  into Bhairahawa’s most coveted wedding destination. Yet
                  through every season, our founding spirit remains unchanged:
                  welcoming every guest with warmth, respect, and authentic
                  Nepali hospitality.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Stats Section with Watermark */}
      <Section
        bg="alt"
        pad="default"
        className="border-y border-[#1A1A1A]/10 bg-[#F0EDE6] relative overflow-hidden"
      >
        {/* Subtle Mandala/Geometric Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <svg
            width="600"
            height="600"
            viewBox="0 0 100 100"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="0.5"
          >
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            <path d="M50 0 L50 100 M0 50 L100 50 M15 15 L85 85 M15 85 L85 15" />
            <polygon points="50,10 90,50 50,90 10,50" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
            {STATS.map((stat, idx) => (
              <Reveal key={idx} variant="fade-up" delay={idx * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-light mb-3">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="h-px w-8 bg-[#C6A87C] mb-4" />
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Values - Using Custom Cultural SVGs */}
      <Section bg="default" pad="lg">
        <Container>
          <div className="max-w-2xl mb-16">
            <Reveal variant="fade-up">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A87C] font-semibold mb-3">
                Guiding Principles
              </p>
              <Heading
                level="h2"
                accent="how we serve"
                className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight"
              >
                The values that shape how we serve you
              </Heading>
            </Reveal>
          </div>

          <Stagger
            staggerDelay={100}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
          >
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="border-t border-[#1A1A1A]/10 pt-8 flex flex-col group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#C6A87C] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-10 h-10" />
                    </span>
                    <span className="font-heading italic text-[#C6A87C]/50 text-xl">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-[#1A1A1A] font-normal mb-3">
                    {val.title}
                  </h3>
                  <p className="text-[#555555] text-sm leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* 5. Process Steps */}
      <ProcessSteps />

      {/* 6. Location Teaser */}
      <Section
        bg="default"
        pad="lg"
        className="border-t border-[#1A1A1A]/10 bg-[#F9F8F6]"
      >
        <Container>
          <div className="bg-[#F0EDE6] py-16 px-8 sm:px-16 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C6A87C]/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C6A87C]/40 to-transparent" />

            <Reveal variant="fade-up">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C6A87C] font-semibold">
                Visiting Us
              </p>
              <Heading
                level="h2"
                accent="Manglapur, Tillotama"
                className="mt-4 text-3xl sm:text-4xl font-normal"
              >
                Conveniently located in Manglapur
              </Heading>
            </Reveal>

            <Reveal variant="fade-up" delay={100}>
              <p className="mx-auto max-w-xl text-[#555555] font-light leading-relaxed">
                Easily reachable from Butwal, Bhairahawa city center, and the
                international airport, yet sheltered in serene rural beauty.
              </p>
            </Reveal>

            <Reveal
              variant="fade-up"
              delay={200}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center h-[3rem] px-8 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#162A21] text-[#F9F8F6] border border-[#162A21] transition-all duration-300 hover:bg-[#223F31] hover:border-[#223F31] hover:shadow-lg"
              >
                View Location &amp; Contact
              </Link>
              <Link
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[3rem] px-8 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#1A1A1A]/20 text-[#1A1A1A] transition-all duration-300 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
              >
                Get Directions ↗
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 7. CTA Band */}
      <CtaBand />
    </div>
  );
}