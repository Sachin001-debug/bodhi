import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/forms/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact & Location | Bodhi Villa Bhairahawa",
  description:
    "Get in touch with Bodhi Villa in Manglapur, Tillotama, Bhairahawa. Phone, WhatsApp concierge, email, operating hours, and Google Maps directions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch • Open Daily"
        title="Connect with our hospitality team"
        accent="hospitality team"
        description="We are delighted to assist with dining reservations, wedding walkthroughs, event proposals, or driving directions."
      />

      <Section pad="lg" bg="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Details & Styled Map */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

