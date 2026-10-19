import Link from "next/link";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/contact";
import LotusMark from "@/components/ornaments/LotusMark";
import LeafDivider from "@/components/ornaments/LeafDivider";

/**
 * Footer: Quiet luxury footer with structured columns, contact handoffs, and Nepali heritage accent.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface border-t border-border pt-16 pb-24 md:pb-16 text-text">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none"
              aria-label="Bodhi Villa Home"
            >
              <LotusMark className="w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-12" />
              <div>
                <span className="font-heading text-2xl font-medium tracking-[0.03em] block text-text">
                  {siteConfig.name}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent block">
                  Bhairahawa • Nepal
                </span>
              </div>
            </Link>

            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              {siteConfig.brandMessagePolished}
            </p>

            <div className="pt-1">
              <span className="inline-block text-xs font-serif italic text-primary/80 tracking-wide">
                “स्मृतिहरू कोरिने सुन्दर गन्तव्य”
              </span>
            </div>

            {/* Social / Facebook */}
            <div className="pt-2">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-text-muted hover:text-primary transition-colors link-underline"
              >
                <span>Follow on Facebook</span>
                <span className="text-accent font-normal">(9.8K followers)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-text">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About the Villa
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">
                  Restaurant Menu
                </Link>
              </li>
              <li>
                <Link href="/weddings" className="hover:text-primary transition-colors">
                  Weddings & Styling
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Reservations & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-text">
              Reservations
            </h3>
            <ul className="space-y-2.5 text-sm text-text-muted">
              <li>
                <Link
                  href="/reservations?type=table"
                  className="group flex flex-col hover:text-primary transition-colors"
                >
                  <span className="text-text font-medium group-hover:text-primary flex items-center gap-1">
                    Table Reservation <span aria-hidden="true">→</span>
                  </span>
                  <span className="text-xs text-text-muted">Lunch, dinner & garden cabanas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/reservations?type=wedding"
                  className="group flex flex-col hover:text-primary transition-colors"
                >
                  <span className="text-text font-medium group-hover:text-primary flex items-center gap-1">
                    Wedding & Event Booking <span aria-hidden="true">→</span>
                  </span>
                  <span className="text-xs text-text-muted">Lawns, pavilion & bespoke decor</span>
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href={buildWhatsAppLink("Namaste! I would like to make an inquiry with Bodhi Villa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
                  Instant WhatsApp Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-text">
              Visit & Contact
            </h3>
            <div className="space-y-2 text-sm text-text-muted">
              <p className="leading-snug">
                {siteConfig.address}
                <br />
                <span className="text-xs text-text-muted/80">Postal Code: {siteConfig.postalCode}</span>
              </p>
              <p>
                <span className="text-text font-medium">Hours:</span> {siteConfig.hours}
              </p>
              <p>
                <span className="text-text font-medium">Phone:</span>{" "}
                <a href={siteConfig.phoneHref} className="text-primary hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <span className="text-text font-medium">WhatsApp:</span>{" "}
                <a
                  href={buildWhatsAppLink("Namaste Bodhi Villa team!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </p>
              <p className="break-all">
                <span className="text-text font-medium">Email:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-accent hover:text-primary transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Botanical Divider */}
        <LeafDivider className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted/80 gap-3 pt-2 text-center sm:text-left">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="tracking-wide">
            Manglapur, Tillotama, Bhairahawa, Nepal • Approachable Luxury ($$)
          </p>
        </div>
      </div>
    </footer>
  );
}

