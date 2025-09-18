export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  type: "House" | "Apartment" | "Townhome" | "Condo" | "Villa";
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
  images: string[];
};

export const properties: Property[] = [
  {
    id: "modern-villa-la",
    title: "Modern Hillside Villa",
    location: "Los Angeles, CA",
    price: 2450000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    description:
      "This architectural masterpiece offers panoramic city views, floor-to-ceiling windows, and seamless indoor-outdoor living with an infinity pool.",
    features: ["Infinity Pool", "Smart Home", "3-Car Garage", "Guest House"],
    images: [
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: "skyline-penthouse-nyc",
    title: "Skyline Penthouse",
    location: "New York, NY",
    price: 3880000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: 2550,
    description:
      "A luxurious penthouse in the heart of Manhattan featuring wrap-around terraces, private elevator access, and designer interiors.",
    features: ["Private Terrace", "24/7 Concierge", "Fitness Center", "Wine Cellar"],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: "coastal-cottage-miami",
    title: "Coastal Cottage Retreat",
    location: "Miami, FL",
    price: 1125000,
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 2680,
    description:
      "Bright and breezy coastal cottage with a private dock, lush landscaping, and open-concept living spaces designed for entertaining.",
    features: ["Private Dock", "Outdoor Kitchen", "Hurricane Windows", "Fire Pit"],
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: "urban-loft-austin",
    title: "Downtown Creative Loft",
    location: "Austin, TX",
    price: 875000,
    type: "Condo",
    bedrooms: 2,
    bathrooms: 2,
    area: 1550,
    description:
      "Industrial-inspired loft with soaring ceilings, polished concrete floors, and expansive windows overlooking the downtown skyline.",
    features: ["Rooftop Deck", "Coworking Lounge", "Secure Parking", "Pet Spa"],
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: "suburban-haven-denver",
    title: "Family Suburban Haven",
    location: "Denver, CO",
    price: 729000,
    type: "Townhome",
    bedrooms: 4,
    bathrooms: 3,
    area: 2380,
    description:
      "Spacious townhome in a quiet community featuring a gourmet kitchen, finished basement, and access to top-rated schools.",
    features: ["Finished Basement", "Community Pool", "Walking Trails", "Home Office"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: "lakeview-retreat-seattle",
    title: "Lakeview Contemporary Retreat",
    location: "Seattle, WA",
    price: 1645000,
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 3120,
    description:
      "Modern retreat with walls of glass, terraces on every level, and unobstructed views of Lake Washington and the Cascade Mountains.",
    features: ["Home Theater", "Radiant Heating", "Terraced Gardens", "Boat Slip"],
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: "desert-oasis-phoenix",
    title: "Desert Oasis Estate",
    location: "Scottsdale, AZ",
    price: 1950000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 3980,
    description:
      "Gated desert estate with resort-style outdoor living, negative-edge pool, and expansive entertaining pavilion.",
    features: ["Outdoor Pavilion", "Wine Room", "Private Gym", "Solar Panels"],
    images: [
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1600&q=80"
    ]
  }
];