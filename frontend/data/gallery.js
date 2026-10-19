/**
 * Single source of truth for the Bodhi Villa Gallery.
 * All image sources, categories, aspect ratios, and captions are managed here.
 * Real photography can be placed in /public/images/ and linked by updating 'src'.
 */

export const galleryCategories = [
  { id: "all", label: "All Moments" },
  { id: "weddings", label: "Weddings & Ceremonies" },
  { id: "restaurant", label: "Restaurant & Cuisine" },
];

export const galleryItems = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Ethereal outdoor lawn wedding stage with white florals and botanical backdrop at Bodhi Villa",
    caption: "The Grand Lawn Ceremony Stage with natural botanical drapery",
    category: "weddings",
    aspect: "tall",
    featured: true,
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisan grilled tandoori feast and fine presentation served at Bodhi Villa restaurant",
    caption: "Signature charcoal smoked specialties served daily",
    category: "restaurant",
    aspect: "wide",
    featured: true,
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    alt: "Intimate candlelit banquet table arrangement for wedding dinner reception",
    caption: "Bespoke banquet styling with warm candlelight and champagne linen",
    category: "weddings",
    aspect: "square",
    featured: true,
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Bodhi Villa garden dining courtyard shaded by heritage trees and warm ambient lighting",
    caption: "Courtyard dining surrounded by calm gardens and gentle breezes",
    category: "restaurant",
    aspect: "tall",
    featured: true,
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional floral mandap canopy adorned with fresh marigolds and jasmine blossoms",
    caption: "Sacred wedding mandap styled to honour heritage and sacred rituals",
    category: "weddings",
    aspect: "wide",
    featured: true,
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlit restaurant dining hall with comfortable wooden tables and floor-to-ceiling glass",
    caption: "The Villa Dining Room — calm, spacious, and inviting",
    category: "restaurant",
    aspect: "square",
    featured: false,
  },
  {
    id: "gal-7",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    alt: "Delicate wedding decor details featuring golden cutlery, crystal glassware, and floral notes",
    caption: "Curated tabletop elements crafted down to the finest detail",
    category: "weddings",
    aspect: "tall",
    featured: false,
  },
  {
    id: "gal-8",
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisanal clay oven flatbreads and fresh dips on an earthy ceramic plate",
    caption: "Traditional tandoor ovens producing warm, fragrant breads daily",
    category: "restaurant",
    aspect: "wide",
    featured: false,
  },
  {
    id: "gal-9",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    alt: "Evening wedding celebration with sparkling fairy lights draped over the trees at Bodhi Villa",
    caption: "Enchanted evening celebrations under our illuminated heritage canopy",
    category: "weddings",
    aspect: "wide",
    featured: true,
  },
  {
    id: "gal-10",
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef curated organic salad bowl with local greens and toasted nuts",
    caption: "Farm-to-table freshness inspired by fertile Terai harvest",
    category: "restaurant",
    aspect: "tall",
    featured: false,
  },
  {
    id: "gal-11",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    alt: "Newlywed couple walking along the private garden path of Bodhi Villa at golden hour",
    caption: "Endless picture-perfect corners for timeless portraits",
    category: "weddings",
    aspect: "tall",
    featured: false,
  },
  {
    id: "gal-12",
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Refreshing crafted botanical cooler garnished with fresh herbs and citrus slice",
    caption: "Handcrafted mocktails and botanical infusions",
    category: "restaurant",
    aspect: "square",
    featured: false,
  },
];

