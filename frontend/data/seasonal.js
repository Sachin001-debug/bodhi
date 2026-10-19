/**
 * Single source of truth for seasonal festival specials and promotions at Bodhi Villa.
 * Easily switch the active promotion or update dates from here.
 * 
 * Reflects authentic Facebook page celebrations:
 * - Haritalika Teej special feasts & music celebrations
 * - Father's Day special ("Celebrate Dad. Share the love. Make memories at Bodhi Villa.")
 * - Dashain & Tihar festive gatherings
 */

export const seasonalPromotion = {
  isActive: true,
  badge: "Festive Celebration at Bodhi Villa",
  nepaliHeading: "चाडपर्वको विशेष रौनकता",
  title: "Haritalika Teej & Festive Dining Specials",
  quote: "Celebrate together. Share the love. Make lifelong memories at Bodhi Villa.",
  description: "Join us for our joyous festival feasts featuring traditional Dar celebrations, live celebratory music in our garden courtyard, and bespoke private banquet cabanas for family reunions.",
  highlights: [
    "Traditional Grand Dar Platter with organic ghee & sweet treats",
    "Live traditional folk & celebratory music evenings",
    "Scenic photo points dressed in fresh marigolds & festive drapery",
    "Special discount on group table reservations (10+ guests)",
  ],
  validity: "Special Festival Dates ",
  primaryCtaText: "Reserve a Festival Table",
  primaryCtaHref: "/reservations?type=table",
  secondaryCtaText: "Inquire for Group Dar",
  secondaryCtaHref: "/contact",
};

