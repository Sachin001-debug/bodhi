import Link from "next/link";
import Container from "@/components/ui/Container";
import LotusMark from "@/components/ornaments/LotusMark";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-center">
      <Container className="max-w-lg space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary-soft flex items-center justify-center text-primary">
          <LotusMark className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.24em] text-accent font-semibold">
            404 • Page Not Found
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl text-text font-normal">
            The pathway you seek is unavailable
          </h1>
          <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed pt-1">
            The page you requested may have been moved or is momentarily resting.
          </p>
          <p className="text-xs font-serif italic text-primary/80 pt-1">
            “पुनः गृहपृष्ठमा फर्कनुहोस्”
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary">
            Return to Home
          </Button>
          <Button href="/reservations" variant="secondary">
            Make a Reservation
          </Button>
        </div>
      </Container>
    </div>
  );
}

