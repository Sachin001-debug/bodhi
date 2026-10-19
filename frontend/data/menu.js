/**
 * Single source of truth for the Bodhi Villa Restaurant Menu.
 * Edit categories and items here to update the menu page and home menu preview.
 * 
 * // TODO: confirm all items, prices, and taxes with owner
 */

export const menuData = {
  currency: "NPR",
  priceNote: "All prices are in Nepalese Rupees (NPR). Taxes and service charges applicable as per prevailing regulations.", 
  menuPdf: "", // Set to "/documents/bodhi-villa-menu.pdf" once physical PDF is uploaded. Set empty string to hide download button.
  categories: [
    {
      id: "starters",
      name: "Starters & Small Plates",
      description: "Crisp, aromatic bites crafted to awaken the palate before the feast.",
      items: [
        {
          id: "s1",
          name: "Timur Spiced Paneer Tikka",
          description: "Fresh cottage cheese marinated in mountain timur peppercorns, charred yogurt, and mustard greens emulsion.",
          price: 520,
          tags: ["Veg", "Chef's Pick"],
        },
        {
          id: "s2",
          name: "Charcoal Smoked Chicken Sekuwa",
          description: "Tender chicken fillets basted with cold-pressed mustard oil, fenugreek, and fire-roasted cumin.",
          price: 580,
          tags: ["Spicy"],
        },
        {
          id: "s3",
          name: "Wild Mushroom & Truffle Momo",
          description: "Steamed artisan dumplings filled with sautéed forest mushrooms, scallions, and roasted sesame tomato relish.",
          price: 490,
          tags: ["Veg", "Chef's Pick"],
        },
        {
          id: "s4",
          name: "Crispy Lotus Stem Honey Chili",
          description: "Thinly sliced lotus root tossed in raw wildflower honey, crushed Szechuan chili, and toasted sesame seeds.",
          price: 450,
          tags: ["Veg"],
        },
        {
          id: "s5",
          name: "Mustang Mutton Choila",
          description: "Smoked tender goat meat tossed with heirloom garlic, raw ginger, roasted chilies, and tempered fenugreek oil.",
          price: 680,
          tags: ["Spicy", "Chef's Pick"],
        },
      ],
    },
    {
      id: "nepali-specials",
      name: "Nepali Specials",
      description: "Heritage recipes from the hills and plains, prepared with artisanal care and authentic clay-pot cooking.",
      items: [
        {
          id: "n1",
          name: "Bodhi Royal Thakali Thali",
          description: "A ceremonial platter of Himalayan black lentils (kalo daal), local saag, gundruk sandheko, radish pickle, and steamed premium Basmati.",
          price: 850,
          tags: ["Veg", "Chef's Pick"],
        },
        {
          id: "n2",
          name: "Slow-Braised Bandel Roast",
          description: "Braised pork ribs crusted with Jimbu herb, wild coriander seeds, and caramelized country shallots.",
          price: 820,
          tags: ["Spicy"],
        },
        {
          id: "n3",
          name: "Khas Khas Goat Curry",
          description: "Slow-simmered mountain goat in an aromatic poppy seed, green cardamom, and bay leaf jus.",
          price: 890,
          tags: ["Chef's Pick"],
        },
        {
          id: "n4",
          name: "Tillotama River Fish Curry",
          description: "Fresh river catch prepared in a light mustard seed, fresh turmeric, and green chili broth with sun-dried tomatoes.",
          price: 760,
          tags: ["Spicy"],
        },
      ],
    },
    {
      id: "mains",
      name: "Villa Signature Mains",
      description: "Refined pan-Asian and continental creations inspired by garden-fresh produce.",
      items: [
        {
          id: "m1",
          name: "Tandoori Stuffed Portobello",
          description: "Oven-roasted portobello caps filled with smoked spinach, artisan ricotta, and rich makhani glaze.",
          price: 640,
          tags: ["Veg"],
        },
        {
          id: "m2",
          name: "Butter Chicken Grand Cru",
          description: "Tandoor-charred chicken simmered in a velvety San Marzano tomato, fenugreek, and organic butter sauce.",
          price: 740,
          tags: ["Chef's Pick"],
        },
        {
          id: "m3",
          name: "Dal Makhani Bodhi Reserve",
          description: "Black lentils slow-cooked overnight over glowing charcoal coals with churned farmhouse butter and cream.",
          price: 480,
          tags: ["Veg"],
        },
        {
          id: "m4",
          name: "Herb Crusted Garden Chicken",
          description: "Pan-seared chicken supreme accompanied by garlic tossed baby vegetables and natural thyme jus.",
          price: 780,
          tags: [],
        },
      ],
    },
    {
      id: "rice-noodles",
      name: "Rice & Noodles",
      description: "Fragrant Himalayan grains and hand-tossed noodles.",
      items: [
        {
          id: "r1",
          name: "Awadhi Dum Biryani (Chicken / Veg)",
          description: "Aged Basmati layered with slow-cooked saffron broth, brown onions, mint, and house raita in sealed earthen handi.",
          price: 680,
          tags: ["Chef's Pick"],
        },
        {
          id: "r2",
          name: "Wok-Tossed Hakka Garlic Noodles",
          description: "Hand-pulled wheat noodles tossed with young scallions, crunchy bell peppers, and toasted chili crunch.",
          price: 440,
          tags: ["Veg"],
        },
        {
          id: "r3",
          name: "Jeera Basmati Pulao",
          description: "Long-grain rice perfumed with whole cumin seeds, star anise, and clarified cow ghee.",
          price: 320,
          tags: ["Veg"],
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts & Confections",
      description: "Delicate sweet endings blending classic warmth with modern pastry craft.",
      items: [
        {
          id: "d1",
          name: "Saffron Pistachio Gulab Jamun Cheesecake",
          description: "Baked cream cheese infused with saffron and warm rosewater, studded with baby artisanal jamuns.",
          price: 480,
          tags: ["Chef's Pick"],
        },
        {
          id: "d2",
          name: "Warm Moong Dal Halwa Tart",
          description: "Slow-roasted golden lentil pudding encased in an almond flour crust, topped with roasted silvered almonds.",
          price: 420,
          tags: ["Veg"],
        },
        {
          id: "d3",
          name: "Vanilla Bean Kulfi with Falooda",
          description: "Traditional slow-reduced milk kulfi paired with basil seeds, rose syrup, and fine vermicelli.",
          price: 380,
          tags: ["Veg"],
        },
      ],
    },
    {
      id: "drinks",
      name: "Artisanal Beverages",
      description: "House-crafted coolers, mountain herbal teas, and celebratory refreshments.",
      items: [
        {
          id: "dr1",
          name: "Bodhi Hibiscus & Lychee Cooler",
          description: "Brewed organic hibiscus blossoms, crushed sweet lychee, lime cordial, and sparkling mountain spring water.",
          price: 320,
          tags: ["Chef's Pick"],
        },
        {
          id: "dr2",
          name: "Fresh Mint & Lemongrass Mojito",
          description: "Muddled villa garden mint leaves, bruised lemongrass, cane sugar, and chilled soda.",
          price: 290,
          tags: ["Veg"],
        },
        {
          id: "dr3",
          name: "Himalayan Masala Spiced Chai",
          description: "Hand-blended black tea brewed with fresh ginger, green cardamom, cloves, and whole cream milk.",
          price: 180,
          tags: ["Veg"],
        },
        {
          id: "dr4",
          name: "Fresh Pressed Seasonal Juices",
          description: "Freshly squeezed seasonal fruits pressed to order without added sugar.",
          price: 280,
          tags: ["Veg"],
        },
      ],
    },
  ],
};

