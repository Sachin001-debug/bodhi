import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/contact";
import Button from "@/components/ui/Button";

/**
 * ContactInfo: Structured contact details cards, hours, coordinates, and direct links.
 */
export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Primary Details Card */}
      <div className="bg-surface border border-border p-6 sm:p-8 rounded-sm shadow-soft space-y-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent block">
            Direct Contacts
          </span>
          <h3 className="font-heading text-2xl text-text mt-1">
            We are always here to assist you
          </h3>
        </div>

        <div className="space-y-4 text-sm text-text-muted divide-y divide-border/60">
          {/* Address */}
          <div className="pt-3 first:pt-0">
            <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
              Estate Location
            </span>
            <p className="text-text font-medium">{siteConfig.address}</p>
            <p className="text-xs text-text-muted mt-0.5">
              Postal Code: {siteConfig.postalCode} • Coordinates: {siteConfig.coordinates.lat},{" "}
              {siteConfig.coordinates.lng}
            </p>
          </div>

          {/* Operating Hours */}
          <div className="pt-3">
            <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
              Restaurant & Villa Hours
            </span>
            <p className="text-text font-medium">{siteConfig.hours}</p>
            <p className="text-xs text-text-muted mt-0.5">{siteConfig.hoursDetailed}</p>
          </div>

          {/* Phone */}
          <div className="pt-3">
            <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
              Telephone Inquiries
            </span>
            <a
              href={siteConfig.phoneHref}
              className="text-primary font-medium hover:underline text-base"
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="pt-3">
            <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
              WhatsApp Concierge
            </span>
            <a
              href={buildWhatsAppLink("Namaste Bodhi Villa! I have an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline text-base"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
              {siteConfig.whatsappDisplay}
            </a>
          </div>

          {/* Email */}
          <div className="pt-3">
            <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
              Email Dispatch
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary font-medium hover:underline break-all"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Social */}
          <div className="pt-3">
            <span className="text-xs uppercase tracking-wider text-text font-semibold block mb-0.5">
              Social Community
            </span>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Facebook Page (9.8K followers) ↗
            </a>
          </div>
        </div>

        {/* Map CTA Button */}
        <div className="pt-4 border-t border-border">
          <Button
            href={siteConfig.googleMapsUrl}
            variant="secondary"
            fullWidth
          >
            Open Location in Google Maps ↗
          </Button>
        </div>
      </div>

      {/* Styled Map Placeholder */}
      <div className="relative aspect-[16/9] w-full bg-bg-alt border border-border rounded-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-soft">
        <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center text-primary mb-3">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h4 className="font-heading text-xl text-text font-medium">
          Manglapur, Tillotama, Bhairahawa
        </h4>
        <p className="text-xs text-text-muted mt-1 max-w-xs">
          Coordinates: {siteConfig.coordinates.lat}, {siteConfig.coordinates.lng}
        </p>
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs uppercase tracking-widest text-primary font-medium underline"
        >
          View Live GPS Route on Google Maps ↗
        </a>
      </div>
    </div>
  );
}

