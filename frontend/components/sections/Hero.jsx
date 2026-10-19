import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/data/site";

const HERO_IMAGES = {
  main: {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
    alt: "Elegant restaurant dining hall at Bodhi Villa",
  },
  top: {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=90",
    alt: "Freshly plated dish from the Bodhi Villa kitchen",
  },
  bottom: {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=90",
    alt: "Warm table setting at Bodhi Villa restaurant",
  },
};

const mapsHref = `https://www.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`;

function Tile({ image, sizes, priority = false, className = "" }) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-1000 hover:scale-105"
      />
    </div>
  );
}

function PinIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col bg-[#F9F8F6] text-[#1A1A1A] overflow-hidden selection:bg-[#C6A87C] selection:text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0EDE6] -z-10 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F9F8F6] to-transparent z-10 pointer-events-none" />

      {/* Content aligned to the top with small padding to close the gap under the navbar */}
      <Container className="relative z-20 grid items-start lg:items-center gap-8 lg:gap-14 lg:grid-cols-12 pt-[calc(var(--navbar-height)+0.75rem)] lg:pt-[calc(var(--navbar-height)+1rem)] pb-12 lg:pb-16">

        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <Reveal variant="fade-in" delay={100}>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#C6A87C] font-semibold mb-3 lg:mb-4">
              {siteConfig.nepaliWelcome}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <h1 className="font-heading text-[2.1rem] sm:text-4xl lg:text-[2.9rem] xl:text-[3.25rem] font-normal leading-[1.12] tracking-tight max-w-md text-[#111111]">
              Where every <br className="hidden lg:block" />
              celebration{" "}
              <span className="italic text-[#C6A87C] font-light">finds</span> <br className="hidden lg:block" />
              its home.
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={300}>
            <p className="mt-4 max-w-[24rem] text-sm sm:text-[15px] text-[#555555] leading-relaxed font-light">
              Dine with us any day, or celebrate your wedding on our lawns. We bring your vision to life with unparalleled elegance.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={400} className="mt-6 lg:mt-8 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/reservations?type=table"
                className="group inline-flex items-center justify-center h-12 px-7 text-[10px] uppercase tracking-[0.2em] font-medium text-[#F5EFE3] bg-gradient-to-b from-[#1F4A39] to-[#14322A] border border-[#C6A87C]/40 shadow-[0_8px_20px_-8px_rgba(20,50,42,0.6)] transition-all duration-300 hover:from-[#265A46] hover:to-[#1A3F33] hover:border-[#C6A87C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A87C] focus-visible:ring-offset-2"
              >
                Reserve a Table
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                href="/reservations?type=wedding"
                className="inline-flex items-center justify-center h-12 px-7 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#14322A] text-[#14322A] transition-all duration-300 hover:bg-[#14322A] hover:text-[#F5EFE3] hover:border-[#C6A87C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A87C] focus-visible:ring-offset-2"
              >
                Book Your Wedding
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] lg:h-[540px] w-full mt-4 lg:mt-0">
          <Reveal variant="scale-in" delay={300} className="absolute top-0 right-0 w-[70%] h-[65%] z-10">
            <div className="absolute -inset-2 border border-[#C6A87C]/30 translate-x-4 translate-y-4 pointer-events-none" />
            <Tile image={HERO_IMAGES.main} sizes="(min-width: 1024px) 50vw, 70vw" priority className="shadow-2xl" />
          </Reveal>

          <Reveal variant="scale-in" delay={500} className="absolute bottom-[5%] left-0 w-[55%] h-[45%] z-20">
            <div className="absolute -inset-1 bg-[#F9F8F6] z-0" />
            <Tile image={HERO_IMAGES.top} sizes="(min-width: 1024px) 35vw, 55vw" priority className="shadow-xl relative z-10" />
          </Reveal>

          <Reveal variant="scale-in" delay={700} className="absolute bottom-[15%] right-[5%] w-[40%] h-[30%] z-0 hidden sm:block">
            <Tile image={HERO_IMAGES.bottom} sizes="(min-width: 1024px) 25vw, 40vw" className="shadow-lg opacity-90" />
          </Reveal>
        </div>
      </Container>

      <div className="relative z-20 border-t border-[#1A1A1A]/10 bg-[#F9F8F6]/80 backdrop-blur-md">
        <Container className="grid gap-6 sm:grid-cols-3 py-6 text-[11px] uppercase tracking-[0.15em] font-medium text-[#1A1A1A]/70">
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 transition-colors duration-300 hover:text-[#C6A87C]"
          >
            <PinIcon />
            <span>{siteConfig.address}</span>
          </a>
          <p className="hidden sm:flex items-center justify-center gap-3">
            <ClockIcon />
            <span>{siteConfig.hours}</span>
          </p>
          <a
            href={siteConfig.phoneHref}
            className="hidden sm:flex items-center sm:justify-end gap-3 transition-colors duration-300 hover:text-[#C6A87C]"
          >
            <PhoneIcon />
            <span>{siteConfig.phone}</span>
          </a>
        </Container>
      </div>
    </section>
  );
}