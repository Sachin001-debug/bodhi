import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import FrameCorner from "@/components/ornaments/FrameCorner";
import { galleryItems } from "@/data/gallery";

/**
 * GalleryStrip: Curated horizontal strip of featured photography with lightbox or gallery link.
 */
export default function GalleryStrip() {
  const featured = galleryItems.filter((item) => item.featured).slice(0, 4);

  return (
    <Section bg="default" pad="lg">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-border pb-4">
          <div>
            <Reveal variant="fade-up">
              <Eyebrow>Visual Moments</Eyebrow>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <Heading level="h2" accent="unforgettable days" className="mt-2">
                A glimpse into our unforgettable days
              </Heading>
            </Reveal>
          </div>

          <Reveal variant="fade-left" delay={200}>
            <Button href="/gallery" variant="secondary">
              View Gallery ({galleryItems.length} Photos)
            </Button>
          </Reveal>
        </div>

        {/* 4-Item Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, index) => (
            <Reveal
              key={item.id}
              variant="scale-in"
              delay={index * 100}
              className="h-full"
            >
              <Link
                href="/gallery"
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface border border-border shadow-soft focus:outline-none"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] md:group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <FrameCorner position="top-left" />
                <FrameCorner position="bottom-right" />

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="text-[0.62rem] uppercase tracking-[0.2em] text-accent block mb-1">
                    {item.category}
                  </span>
                  <p className="font-heading text-lg leading-snug line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

