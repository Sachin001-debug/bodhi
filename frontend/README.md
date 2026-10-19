# Bodhi Villa — Premium Restaurant & Wedding Villa Website

A quiet-luxury, clean, typography-led frontend web application for **Bodhi Villa**, a premier restaurant and wedding villa in Manglapur, Tillotama, Bhairahawa, Nepal.

Built with Next.js (App Router, JavaScript JSX only), Tailwind CSS via CSS variables, and native IntersectionObserver animations.

---

## 🌿 Quick Start

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📞 How to Change the WhatsApp Number (Important)

The WhatsApp number is configured in one single place. Phone, WhatsApp digits, and WhatsApp display text are kept as separate values:

1. Open `data/site.js`.
2. Locate the following lines:
   ```javascript
   whatsappNumber: "9779864578179", // Digits only, country code included (no +, no spaces, no dashes)
   whatsappDisplay: "+977 986-4578179", // Text shown visually to visitors
   phone: "+977 986-4578179",
   phoneHref: "tel:+9779864578179",
   ```
3. To change the WhatsApp number, edit `whatsappNumber` and `whatsappDisplay` in `data/site.js`.
4. All `wa.me` chat links, reservation submissions, enquiry buttons, and footer links automatically use the updated number via `lib/contact.js` (`buildWhatsAppLink(message)`).

---

## 🎨 How to Retheme Colors & Typography

All design tokens are defined as CSS variables in `app/globals.css` under `:root` and mapped in `tailwind.config.js`. **Editing `:root` rethemes the entire site without touching any component code.**

Open `app/globals.css`:
```css
:root {
  --color-primary: #1F4D3A;        /* Deep Botanical Green */
  --color-primary-hover: #173C2D;  /* Rich Dark Forest Green */
  --color-primary-soft: #E8F0EB;   /* Gentle Sage Tint Wash */
  --color-accent: #B8975A;         /* Muted Champagne Gold */

  --color-bg: #FFFFFF;             /* Pure White Background */
  --color-bg-alt: #F7F8F6;         /* Soft Off-White Neutral */
  --color-surface: #FFFFFF;        /* Surface Cards */
  --color-text: #1A1F1C;           /* Deep Charcoal Typography */
  --color-text-muted: #5E6A63;     /* Muted Grey-Green Subcopy */
  --color-border: #E3E8E4;         /* Delicate Hairline Border */
  --color-overlay: rgba(15, 30, 22, 0.45); /* High-Legibility Photo Overlay */
}
```

### Fonts
The site loads:
- **Cormorant Garamond** (display & headlines, 400/500/600/700 with italic accent highlights)
- **Inter** (clean readable UI & body copy)
Both are configured via `next/font/google` in `app/layout.jsx`.

---

## 🍽️ How to Edit the Restaurant Menu

The entire restaurant menu lives in `data/menu.js`. The owner can edit this single file to change categories, dish names, descriptions, prices, or badges:

```javascript
// data/menu.js
export const menuData = {
  currency: "NPR",
  priceNote: "All prices are in Nepalese Rupees (NPR)...",
  menuPdf: "", // Set to "/documents/menu.pdf" when a PDF menu is uploaded
  categories: [
    {
      id: "starters",
      name: "Starters & Small Plates",
      description: "Crisp, aromatic bites crafted to awaken the palate.",
      items: [
        {
          id: "s1",
          name: "Timur Spiced Paneer Tikka",
          description: "Fresh cottage cheese marinated in mountain timur...",
          price: 520,
          tags: ["Veg", "Chef's Pick"], // Options: "Veg", "Spicy", "Chef's Pick"
        },
        // ...
      ],
    },
    // ...
  ],
};
```

---

## 📸 How to Replace Images

The project currently uses curated high-resolution photography placeholders with remote Unsplash authorization in `next.config.mjs`.

To swap in authentic local photographs:
1. Place images into the appropriate subfolder in `public/images/`:
   - `public/images/hero/`
   - `public/images/restaurant/`
   - `public/images/weddings/`
   - `public/images/gallery/`
   - `public/images/about/`
   - `public/images/menu/`
2. Update the `src` path in `data/gallery.js`, `data/services.js`, or the respective page heroes to `/images/your-photo.jpg`.

---

## 📑 Content Data Maps (`data/`)

All site content is decoupled from layout components and lives in `data/`:
- `data/site.js` — Single source of truth for business details, phone, WhatsApp, email, hours, coordinates.
- `data/menu.js` — Restaurant categories, items, prices in NPR, dietary tags, PDF download link.
- `data/gallery.js` — All photography metadata, categories (All, Weddings, Restaurant), aspect ratios, and captions.
- `data/services.js` — Core Dine and Wed services, wedding offerings, 3 venue spaces (Grand Lawn, Pavilion, Courtyard), and 4-step wedding journey.
- `data/packages.js` — 3 wedding celebration package tiers and inclusions.
- `data/seasonal.js` — Active festival and seasonal promotions (Haritalika Teej special, Father's Day).
- `data/testimonials.js` — Word-of-mouth feedback from couples and guests.

---

## 💍 Reservations & Lead Conversion (`/reservations`)

The reservations hub is designed exclusively around two conversion paths:
1. **Table Reservation** (`?type=table`): Name, phone, email, dining date, time slot, guest count, and special requests.
2. **Wedding & Event Booking** (`?type=wedding`): Bride/groom contact, phone, email, preferred wedding date, alternate date, guest count, multi-select services chips, budget range, and vision description.

### Form Submission Handoff
Forms feature full client-side validation. Upon clicking submit, `lib/submitReservation.js` formats a clean, structured payload and offers:
- **Send via WhatsApp** (one tap opens direct WhatsApp chat with the owner pre-filled with the reservation details)
- **Send via Email** (opens client's email application with pre-composed subject and details)

*Note: Marked with `// TODO: replace with real API / database service` for future backend integration.*

---

## ♿ Accessibility & Mobile-First Standards

- **360px Mobile-First**: Tested across 360px, 768px, and 1280px+ viewports without horizontal scrolling.
- **Touch Targets**: Minimum 44x44px touch targets. Form inputs use 16px minimum font size to prevent iOS automatic zoom.
- **Mobile Sticky Reserve Bar**: Quick access buttons for "Reserve Table" and "Book Wedding" that respect `env(safe-area-inset-bottom)`.
- **Keyboard & Screen Reader Support**: Semantic landmarks, `aria-invalid`, `aria-describedby`, accessible tabs (`role="tablist"`), and escape/arrow keyboard controls in the gallery lightbox.
- **Motion Accessibility**: Full support for `prefers-reduced-motion: reduce`. Animations gracefully disable if requested by system settings.
