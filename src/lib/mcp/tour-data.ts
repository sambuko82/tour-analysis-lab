// Static tour data exposed via MCP tools. Kept import-safe (no I/O, no env reads).
export const tourData = {
  id: "SUB-5D4N-001",
  title:
    "Leisurely Java Nature Trip: 5D 4N Surabaya - Mount Ijen - Papuma Beach - Tumpak Sewu Waterfall - Mount Bromo",
  location: "East Java, Indonesia",
  duration: "5 days, 4 nights",
  groupSize: "1-15+ people",
  languages: ["English"],
  rating: 4.6,
  reviewCount: 127,
  operatorName: "Java Volcano Tour Operator",
  currency: "IDR",
  basePrice: 3650000,
  description:
    "A 5-day East Java adventure covering Mount Ijen's blue fire, Papuma Beach, Tumpak Sewu Waterfall, and Mount Bromo sunrise. Includes private transport, English-speaking guides, hotel accommodation, and most meals.",
  highlights: [
    "Iconic sunrise viewpoint and hike to Bromo crater across sea of sand",
    "Scenic white-sand beach, dramatic rocks, sunrise/sunset spot",
    "Spectacular tiered waterfall with a trek to the base and panoramic view",
    "Witness rare blue flames at Ijen Crater",
    "Enjoy comfortable accommodations",
    "Benefit from private transportation",
    "Guided by experienced English-speaking guides",
  ],
  pricingTiers: [
    { groupSize: "Solo Traveler", pricePerPerson: 9050000 },
    { groupSize: "2 Pax", pricePerPerson: 5050000 },
    { groupSize: "3 Pax", pricePerPerson: 4850000 },
    { groupSize: "4 - 5 Pax", pricePerPerson: 4550000 },
    { groupSize: "6 - 7 Pax", pricePerPerson: 4250000 },
    { groupSize: "8 - 10 Pax", pricePerPerson: 3850000 },
    { groupSize: "11 + Pax", pricePerPerson: 3650000 },
  ],
  included: [
    "Private Transport: Air-conditioned private vehicles with a dedicated driver",
    "Tour Guides: Experienced English-speaking guides",
    "Mineral Water: Daily supply",
    "Complimentary Travel T-Shirt: One custom travel T-shirt per participant",
    "Quality Hotel Accommodation: For 4 nights, including daily breakfast",
    "All Entrance Fees & Permits to Mount Ijen, Papuma Beach, Tumpak Sewu Waterfall, Mount Bromo",
    "Meals: 4x Breakfast, 2x Lunch, 1x Dinner",
    "Private 4WD Jeep for the Mount Bromo sunrise tour",
    "Medical Check-up required by Ijen authorities, arranged at your hotel",
    "Trekking Equipment: Gas masks and trekking poles for Ijen, headlamps for night hikes",
  ],
  notIncluded: [
    "International/Domestic Air Tickets",
    "Indonesian VISA (if applicable)",
    "Travel Insurance (optional but recommended)",
    "Meals not stated in itinerary",
    "Personal Expenses (snacks, souvenirs, beverages, laundry)",
    "Tips for drivers and guides",
    "Optional Activities: Horse ride at Mount Bromo, Ijen Ojek Trolley Service",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Surabaya and Journey to Bondowoso",
      accommodation: "Riverside Homestay - Bondowoso City",
      meals: "Dinner",
    },
    {
      day: 2,
      title: "Ijen Crater Adventure and Papuma Beach Sunset",
      accommodation: "Doho Homestay - Jember City",
      meals: "Breakfast, Lunch",
    },
    {
      day: 3,
      title: "Tumpak Sewu Waterfall and Journey to Bromo",
      accommodation: "Joglo Kecombrang Bromo - Bromo Area",
      meals: "Breakfast, Lunch",
    },
    {
      day: 4,
      title: "Bromo Sunrise Adventure and Return to Surabaya",
      accommodation: "Holiday Inn Express Surabaya Centerpoint",
      meals: "Breakfast",
    },
    {
      day: 5,
      title: "Departure from Surabaya",
      accommodation: null,
      meals: "Breakfast",
    },
  ],
  faq: [
    { q: "What kind of tours do you offer?", a: "All tour packages are private and all-inclusive." },
    { q: "Can I customize my tour?", a: "Yes, minor adjustments are allowed; major detours are discouraged." },
    { q: "How do I confirm my booking?", a: "A 20% deposit confirms the booking; the balance is due 3 days before departure." },
    { q: "What payment methods are accepted?", a: "Cash, bank transfer, major credit cards, and Wise." },
    { q: "What happens if the weather is bad?", a: "Itineraries may be adjusted for safety in extreme weather; light rain tours continue." },
    { q: "Is this tour suitable for children or elderly people?", a: "It requires good physical fitness; early starts and hiking are involved." },
    { q: "Do you cater to dietary restrictions?", a: "Yes — vegetarian, vegan, halal, and basic allergies can be accommodated." },
    { q: "What languages do the guides speak?", a: "All guides speak English fluently." },
    { q: "What is your safety record?", a: "100% safety record with local, dedicated crew." },
  ],
} as const;

export function priceForTravelers(travelers: number) {
  const t = tourData.pricingTiers;
  if (travelers <= 1) return t[0];
  if (travelers === 2) return t[1];
  if (travelers === 3) return t[2];
  if (travelers <= 5) return t[3];
  if (travelers <= 7) return t[4];
  if (travelers <= 10) return t[5];
  return t[6];
}
