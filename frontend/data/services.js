/**
 * Primary services definitions for Bodhi Villa.
 * Strict service scope: Restaurant Dining (served daily) and Weddings (venue + styling).
 */

export const primaryServices = [
  {
    id: "dine",
    slug: "menu",
    title: "Restaurant Dining",
    eyebrow: "Served Daily",
    subtitle: "Artisanal flavours, serene garden ambiance, and genuine hospitality.",
    description: "Immerse yourself in elevated Nepali heritage cuisine and contemporary pan-Asian delicacies. Set within airy botanical verandas and tranquil garden courtyards, our culinary team prepares fresh, soul-nourishing meals every day of the week.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Open daily for lunch, dinner & high tea",
      "Signature charcoal-smoked Sekuwa & royal Thakali sets",
      "Serene indoor & open-air garden seating",
      "Family-friendly celebrations & private dining cabanas",
    ],
    ctaText: "Explore Our Menu",
    ctaHref: "/menu",
    reserveHref: "/reservations?type=table",
  },
  {
    id: "wed",
    slug: "weddings",
    title: "Weddings & Celebrations",
    eyebrow: "Venue & Bespoke Styling",
    subtitle: "Bringing your unique love story and celebration vision to life.",
    description: "From intimate Mehendi gatherings to royal wedding banquets, Bodhi Villa provides Bhairahawa's most exquisite backdrop. Our full-service wedding team coordinates manicured open lawns, custom mandap architecture, floral mastery, and grand feasts.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Expansive outdoor lawns accommodating up to 1,200 guests ",
      "In-house floral styling, stages & immersive lighting",
      "Comprehensive live catering stations & custom banquets",
      "Dedicated bride & groom luxury suites on-site",
    ],
    ctaText: "Discover Weddings",
    ctaHref: "/weddings",
    reserveHref: "/reservations?type=wedding",
  },
];

export const weddingOfferings = [
  {
    id: "ceremony",
    title: "Sacred Ceremonies & Mandap",
    description: "Traditional Vivah rituals performed under bespoke floral mandaps thoughtfully positioned amidst landscaped gardens.",
    icon: "mandap",
  },
  {
    id: "reception",
    title: "Grand Receptions & Banquets",
    description: "Evening festivities under starlit skies with fairy-light canopies, curated seating lounges, and refined service.",
    icon: "reception",
  },
  {
    id: "decor-styling",
    title: "Design & Floral Styling",
    description: "Our hallmark capability: turning moodboards into breathtaking reality with customized stage sets, florals, and mood lighting.",
    icon: "styling",
  },
  {
    id: "catering",
    title: "Artisanal Wedding Banquets",
    description: "Lavish multi-course culinary spreads, live interactive chaat and tandoor counters, and signature sweet confections.",
    icon: "catering",
  },
  {
    id: "pre-wedding",
    title: "Sangeet, Mehendi & Haldi",
    description: "Vibrant daytime celebrations filled with marigold color palettes, traditional seating, and celebratory music ambiance.",
    icon: "mehendi",
  },
  {
    id: "hospitality",
    title: "Dedicated Event Coordination",
    description: "On-site managers and attentive hospitality coordinators ensuring you and your families celebrate with peace of mind.",
    icon: "hospitality",
  },
];

export const venueSpaces = [
  {
    id: "lawn",
    name: "The Grand Bodhi Lawn",
    tagline: "Expansive greenery under open skies",
    capacity: "Up to 1,200 Guests", 
    idealFor: "Grand Wedding Receptions, Sangeet & Large Banquets",
    description: "Our crown jewel: a manicured, emerald-green lawn framed by palm trees and heritage foliage. Accommodates extensive stage sets, multi-aisle guest seating, and panoramic dining counters.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    specs: ["Area: 25,000+ sq. ft.", "Natural grass turf", "Integrated high-load electrical grid"], 
  },
  {
    id: "pavilion",
    name: "The Royal Glass Pavilion",
    tagline: "Weather-proof indoor elegance with garden views",
    capacity: "Up to 350 Guests", 
    idealFor: "Engagements, Haldi, Weather-Safe Banquets & Indoor Dining",
    description: "High ceilings, crystal pendant fixtures, and full-height glass walls that merge the beauty of our gardens with climate-controlled indoor comfort.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    specs: ["Full Climate Control (A/C & Heating)", "Dimmable architectural lighting", "Acoustic ceiling"], 
  },
  {
    id: "courtyard",
    name: "The Lotus Courtyard",
    tagline: "Intimate and atmospheric open-air haven",
    capacity: "Up to 150 Guests", 
    idealFor: "Intimate Mehendi, Family Dinners & Private Parties",
    description: "Paved in warm natural stone with a serene water fountain and low ambient lantern light. An unforgettable setting for smaller, high-touch gatherings.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80",
    specs: ["Ambient water features", "Overhead string lighting", "Private bar and lounge corner"], 
  },
];

export const weddingProcessSteps = [
  {
    step: "01",
    title: "Consult",
    subtitle: "Listening to your dream",
    description: "We sit down with a warm cup of Himalayan tea to discuss your cultural traditions, guest expectations, color palettes, and budget.",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Concept & spatial blueprint",
    description: "Our stylists translate your ideas into 3D floorplans, moodboards, custom floral palettes, and curated banquet tasting menus.",
  },
  {
    step: "03",
    title: "Style",
    subtitle: "Flawless craft in motion",
    description: "Drawing from our extensive inventory and artisan florist partners, we fabricate and dress the venue with precision and love.",
  },
  {
    step: "04",
    title: "Celebrate",
    subtitle: "A day without worry",
    description: "Our experienced captains orchestrate every entry, cue, and dish so you and your families can immerse yourselves in the joy of the union.",
  },
];

export const whyChooseUs = [
  {
    id: "vision",
    title: "Your Vision Brought to Life",
    description: "We don't impose generic templates. Every mandap, table setting, and centerpiece is sculpted around your personal narrative.",
    icon: "sparkle",
  },
  {
    id: "peaceful-location",
    title: "Tranquil Oasis in Tillotama",
    description: "Conveniently accessible in Manglapur yet tucked into serene countryside greenery away from highway bustle.",
    icon: "location",
  },
  {
    id: "culinary-excellence",
    title: "Artisanal Kitchen & Banquets",
    description: "From royal Thakali recipes to international banquets, our culinary team delivers hot, hygienic, and memorable feasts.",
    icon: "dining",
  },
  {
    id: "seamless-care",
    title: "Stress-Free Hospitality",
    description: "From your first walkthrough to the final farewell, our dedicated management team stands by your side at every step.",
    icon: "care",
  },
];

