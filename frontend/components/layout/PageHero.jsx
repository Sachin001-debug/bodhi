import Image from "next/image";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Eyebrow from "@/components/ui/Eyebrow";
import Paragraph from "@/components/ui/Paragraph";
import Reveal from "@/components/animations/Reveal";

/**
 * PageHero: Standardized elegant hero section for inner pages.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  imageSrc,
  imageAlt = "Bodhi Villa Bhairahawa",
  align = "center", // "center" | "start"
  children,
}) {
  const isCentered = align === "center";

  return (
    <section className="relative w-full pt-[calc(var(--navbar-height)+2.5rem)] pb-16 md:pb-24 overflow-hidden border-b border-border bg-bg-alt">
      {/* Optional Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle dark overlay as per Section 3 gradient rules */}
          <div className="absolute inset-0 bg-[var(--color-overlay)] backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
      )}

      <Container className={`relative z-10 ${isCentered ? "text-center" : "text-left"}`}>
        <Reveal variant="fade-up" delay={50}>
          {eyebrow && (
            <div className={`mb-3 flex ${isCentered ? "justify-center" : "justify-start"}`}>
              <Eyebrow align={align}>{eyebrow}</Eyebrow>
            </div>
          )}
        </Reveal>

        <Reveal variant="fade-up" delay={150}>
          <Heading
            level="h1"
            accent={accent}
            theme={imageSrc ? "light" : "dark"}
            className="max-w-3xl mx-auto"
          >
            {title}
          </Heading>
        </Reveal>

        {description && (
          <Reveal variant="fade-up" delay={250}>
            <Paragraph
              lead
              theme={imageSrc ? "light" : "dark"}
              className={`mt-4 ${isCentered ? "mx-auto" : ""}`}
            >
              {description}
            </Paragraph>
          </Reveal>
        )}

        {children && (
          <Reveal variant="fade-up" delay={350} className="mt-8">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}

