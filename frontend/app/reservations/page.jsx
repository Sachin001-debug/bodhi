import { Suspense } from "react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ReservationsPanel from "@/components/sections/ReservationsPanel";

export const metadata = {
  title: "Reservations | Table & Wedding Bookings",
  description:
    "Reserve your dining table or inquire about wedding dates at Bodhi Villa, Bhairahawa. Instant WhatsApp & email confirmation handoff.",
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Direct Reservations"
        title="Reserve your dining table or wedding celebration"
        accent="wedding celebration"
        description="Select whether you are joining us for daily restaurant dining or planning an unforgettable wedding in Bhairahawa."
      />

      <Section pad="lg" bg="default">
        <Container>
          <Suspense
            fallback={
              <div className="py-16 text-center text-xs uppercase tracking-widest text-text-muted">
                Loading reservation system...
              </div>
            }
          >
            <ReservationsPanel />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}

