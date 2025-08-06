import { useState, useRef } from "react";
import TourHero from "@/components/TourHero";
import TourBookingWidget from "@/components/TourBookingWidget";
import TourInfoCard from "@/components/TourInfoCard";
import ItineraryCard from "@/components/ItineraryCard";
import InclusionsCard from "@/components/InclusionsCard";
import ReviewsSection from "@/components/ReviewsSection";
import RatingDisplay from "@/components/RatingDisplay";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import MobileNavigation from "@/components/MobileNavigation";
import TourMap from "@/components/TourMap";
import SEOHead from "@/components/SEOHead";
import AccommodationCard from "@/components/AccommodationCard";
import FAQSection from "@/components/FAQSection";
import TourExperiencePhilosophy from "@/components/TourExperiencePhilosophy";
import BookingProcessSection from "@/components/BookingProcessSection";
import VehicleAllocationSection from "@/components/VehicleAllocationSection";
import EnhancedPolicySection from "@/components/EnhancedPolicySection";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const EastJavaTour = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);
  const isMobile = useIsMobile();
  const bookingWidgetRef = useRef<HTMLDivElement>(null);

  const tourData = {
    id: "SUB-5D4N-001",
    title: "Leisurely Java Nature Trip: 5D 4N Surabaya - Mount Ijen - Papuma Beach - Tumpak Sewu Waterfall - Mount Bromo",
    location: "East Java, Indonesia",
    duration: "5 days, 4 nights",
    groupSize: "1-15+ people",
    languages: ["English"],
    rating: 4.6,
    reviewCount: 127,
    operatorName: "Java Volcano Tour Operator",
    basePrice: 3650000,
    currency: "IDR",
    images: [
      "https://javavolcano-touroperator.com/assets/img/destinations/ijen-bromo-tumpak-sewu-malang-sightseeing-tour-1676526893742/1687320433_IJEN31.webp",
      "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/bromo11.webp",
      "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/bromo13.webp",
      "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/papuma.webp",
      "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/papuma3.webp",
      "https://javavolcano-touroperator.com/assets/img/destinations/surabaya-ijen-papuma-beach-tumpak-sewu-bromo-surabaya-(5d-4n)-1688629701719/tumpaksewu6.webp"
    ],
    highlights: [
      "Iconic sunrise viewpoint and hike to Bromo crater across sea of sand",
      "Scenic white-sand beach, dramatic rocks, sunrise/sunset spot",
      "Spectacular tiered waterfall with a trek to the base and panoramic view",
      "Witness rare blue flames at Ijen Crater",
      "Enjoy comfortable accommodations",
      "Benefit from private transportation",
      "Guided by experienced English-speaking guides"
    ],
    description: "Embark on an exciting 5-day journey through East Java's most iconic landscapes. This adventure is perfect for nature enthusiasts and explorers eager to witness breathtaking sights. Begin with a trek to Ijen Crater to witness the rare blue flames and the stunning turquoise crater lake at sunrise. Next, relax at the pristine shores of Papuma Beach, known for its white sands and clear waters. The journey continues to the majestic Tumpak Sewu Waterfall, a multi-tiered waterfall surrounded by lush greenery. Finally, experience the mesmerizing sunrise over Mount Bromo, illuminating the vast caldera and surrounding peaks. Throughout the tour, enjoy comfortable accommodations, private transportation, and the guidance of experienced English-speaking guides. This expedition is designed to provide a seamless and enriching exploration of Java's natural wonders, ensuring an unforgettable experience for all participants.",
    
    pricingTiers: [
      { groupSize: "Solo Traveler", pricePerPerson: 9050000 },
      { groupSize: "2 Pax", pricePerPerson: 5050000 },
      { groupSize: "3 Pax", pricePerPerson: 4850000 },
      { groupSize: "4 - 5 Pax", pricePerPerson: 4550000 },
      { groupSize: "6 - 7 Pax", pricePerPerson: 4250000 },
      { groupSize: "8 - 10 Pax", pricePerPerson: 3850000 },
      { groupSize: "11 + Pax", pricePerPerson: 3650000 }
    ],

    included: [
      "Private Transport: Air-conditioned private vehicles (MPV for 1-3 guests, Minibus for 4-11 guests) with a dedicated driver",
      "Tour Guides: Experienced English-speaking guides",
      "Mineral Water: Daily supply",
      "Complimentary Travel T-Shirt: One custom travel T-shirt per participant",
      "Quality Hotel Accommodation: For 4 nights, including daily breakfast",
      "All Entrance Fees & Permits: To attractions such as Mount Ijen, Papuma Beach, Tumpak Sewu Waterfall, Mount Bromo",
      "Meals: 4x Breakfast, 2x Lunch, 1x Dinner",
      "Private 4WD Jeep: For the Mount Bromo sunrise tour",
      "Medical Check-up: Required by Ijen authorities, arranged at your hotel",
      "Trekking Equipment: Gas masks and trekking poles for Ijen, headlamps for night hikes"
    ],
    
    notIncluded: [
      "International/Domestic Air Tickets: To and from your tour's starting and ending points",
      "Indonesian VISA: (If applicable)",
      "Travel Insurance: Optional but highly recommended",
      "Meals Not Stated in Itinerary: Specific lunches and additional dinners at your own expense",
      "Personal Expenses: Snacks, souvenirs, beverages, laundry (recommended IDR 500,000 per person)",
      "Tips: For drivers and guides (at your discretion)",
      "Optional Activities: Horse ride at Mount Bromo (IDR 150,000–350,000), Ijen Ojek Trolley Service"
    ],

    itinerary: [
      {
        title: "Day 1: Arrival in Surabaya and Journey to Bondowoso",
        duration: "Full day",
        description: "Your exciting Bromo and Ijen adventure begins with a warm welcome at Surabaya Airport. We'll pick you up (best before noon) and start our scenic 5-hour drive to Bondowoso. Along the way, we'll stop at a local restaurant in Probolinggo for lunch at your own expense. After arriving at hotel in Bondowoso, take some time to relax and settle in. Enjoy a delicious dinner and rest up for the next day's adventure.",
        highlights: [
          "Afternoon - Stop for lunch at a local restaurant (own expense)",
          "17:00 - Check in hotel, and take a rest",
          "19:00 - Dinner included"
        ],
        accommodation: "Riverside Homestay - Bondowoso City",
        meals: "Dinner"
      },
      {
        title: "Day 2: Ijen Crater Adventure and Papuma Beach Sunset",
        duration: "Full day",
        description: "Your day starts early at midnight with a drive to Paltuding, the base of Ijen Crater. After about 1.5 hours on the road, you'll begin your 1-1.5 hour trek to the crater rim. Upon reaching the rim, you'll be greeted by the breathtaking sight of the 200-meter deep turquoise sulfuric lake. Witness the extraordinary work of sulfur miners. After enjoying the sunrise at Ijen Crater, we stop at the Malabar Coffee Plantation for a refreshing coffee break. In the afternoon, we journey to Jember City, then set off for Papuma Beach to witness stunning sunset views.",
        highlights: [
          "00:00 - Depart from hotel to Mount Ijen area",
          "02:30 - Start trekking to Ijen Crater from Paltuding",
          "Morning - Enjoy sunrise views and observe sulfur miners",
          "Morning - Coffee break at Malabar Coffee Plantation",
          "08:00 - Return to hotel for shower and check-out",
          "12:00 - Lunch included",
          "16:00 - Explore Papuma Beach",
          "19:00 - Check in Doho Homestay. Take a rest"
        ],
        accommodation: "Doho Homestay - Jember City",
        meals: "Breakfast, Lunch"
      },
      {
        title: "Day 3: Tumpak Sewu Waterfall and Journey to Bromo",
        duration: "Full day",
        description: "Our journey begins early at 4:00 AM as we check out and head to Tumpak Sewu Waterfall, one of the most beautiful waterfalls in Java. Known for its unique half-circle formation, the waterfall consists of multiple mini-waterfalls cascading from a height of around 300 meters. A short, adventurous trek takes you across rocks and streams to reach the waterfall. After exploring the falls, we will have lunch before continuing our journey to the Bromo area.",
        highlights: [
          "03:30 - Check out from Doho Homestay and depart for Tumpak Sewu Waterfall",
          "07:00 - Breakfast Included",
          "07:30 - Explore Tumpak Sewu Waterfall (short, adventurous trek to base)",
          "12:00 - Lunch included",
          "13:00 - Transfer to hotel at Bromo",
          "16:00 - Check in hotel and take a rest"
        ],
        accommodation: "Joglo Kecombrang Bromo - Bromo Area",
        meals: "Breakfast, Lunch"
      },
      {
        title: "Day 4: Bromo Sunrise Adventure and Return to Surabaya",
        duration: "Full day",
        description: "Prepare for an early morning adventure starting at 2:00 AM as we set out for stargazing and a Milky Way view at Mount Bromo. As the first rays of dawn break, witness the spectacular sunrise over the Bromo landscape. After sunrise, we continue our journey on a thrilling 4WD ride over the vast Sand Sea to the Poten Temple. From here, you can either take a 3km hike or a pony ride to the base of Mount Bromo, where you will ascend 253 steps to reach the crater rim. After a morning filled with adventure, we continue our journey to Surabaya for an overnight stay.",
        highlights: [
          "02:00 - Depart from hotel to Bromo sunrise viewpoint by private Jeep for stargazing",
          "03:30 - Witness sunrise over the Bromo landscape",
          "Morning - 4WD ride across Sand Sea to Poten Temple, then optional 3km hike or pony ride to Bromo base and ascend 253 steps to crater rim",
          "09:00 - Back to the hotel and having breakfast",
          "12:00 - Transfer to hotel at Surabaya",
          "15:00 - Check in hotel and take a rest"
        ],
        accommodation: "Holiday Inn Express Surabaya Centerpoint - Surabaya City",
        meals: "Breakfast"
      },
      {
        title: "Day 5: Departure from Surabaya",
        duration: "Half day",
        description: "After breakfast, you will be transferred to Juanda International Airport for your flight back home, reflecting on your amazing adventure in East Java.",
        highlights: [
          "Morning - Breakfast included",
          "Morning/Afternoon - Continue the journey to your hotel or Airport in Surabaya city. End of program"
        ],
        accommodation: null,
        meals: "Breakfast"
      }
    ],

    accommodation: [
      {
        day: 1,
        name: "Riverside Homestay",
        location: "Bondowoso City - Nature Retreat Homestay",
        description: "A peaceful homestay with tropical gardens, a relaxing pool, and an open-air restaurant, ideal for winding down before or after your Ijen adventure.",
        rating: 4.6,
        facilities: ["Free Wifi", "Restaurant", "Air Conditioning", "Guest Service", "Toiletries", "Hairdryer"]
      },
      {
        day: 2,
        name: "Doho Homestay",
        location: "Jember City, Garden Style Family Homestay",
        description: "A cozy homestay with garden and pool ambience, perfect for couples or families visiting Papuma Beach and Tumpak Sewu Waterfall.",
        rating: 4.6,
        facilities: ["Free WiFi", "Outdoor Pool", "On-site Café", "Family-Friendly Rooms", "Tropical Garden Area", "Toiletries"]
      },
      {
        day: 3,
        name: "Joglo Kecombrang Bromo",
        location: "Bromo Area, Javanese-Style Mountain Lodge",
        description: "A charming lodge with traditional Javanese architecture, nestled in the cool mountain slopes of Bromo, offering scenic views and an authentic cultural atmosphere.",
        rating: 4.6,
        facilities: ["Free WiFi", "Hot Shower", "On-site Restaurant", "Mountain View Rooms", "Traditional Javanese Design", "Toiletries"]
      },
      {
        day: 4,
        name: "Holiday Inn Express Surabaya Centerpoint",
        location: "Surabaya City, Modern City Hotel",
        description: "A modern hotel in the heart of Surabaya, offering easy access to malls, restaurants, and entertainment, ideal for business and leisure travelers.",
        rating: 4.5,
        facilities: ["Free WiFi", "24-Hour Front Desk", "Breakfast Included", "Fitness Center", "Business Facilities", "Hairdryer", "Toiletries"]
      }
    ],

    faq: [
      {
        question: "What kind of tours do you offer?",
        answer: "All tour packages are private and structured as all-inclusive packages. We provide personalized experiences with dedicated guides and transportation."
      },
      {
        question: "Can I customize my tour?",
        answer: "Yes, minor adjustments and \"micro-tweaks\" to the itinerary are allowed. However, major detours from the planned route are discouraged to ensure the best experience and safety."
      },
      {
        question: "How do I confirm my booking?",
        answer: "A deposit of 20% is required to confirm your booking. The remaining balance must be paid 3 days before the tour begins. If you book less than 24 hours in advance, 100% upfront payment is required."
      },
      {
        question: "What payment methods are accepted?",
        answer: "Payment can be made via cash, bank transfer, or other Wise-approved channels. We accept major credit cards, bank transfers, and cash (pre-approved)."
      },
      {
        question: "What happens if the weather is bad?",
        answer: "JVTO continuously monitors weather conditions. For safety reasons, we may adjust itineraries during extreme weather (heavy rain, thick fog). Tours typically continue in light rain."
      },
      {
        question: "Is this tour suitable for children or elderly people?",
        answer: "This tour requires good physical fitness due to early starts, hiking, and potentially challenging conditions. Children under 12 and elderly individuals with mobility issues should carefully consider their abilities."
      },
      {
        question: "Do you cater to dietary restrictions?",
        answer: "Yes, we can accommodate most dietary requirements including vegetarian, vegan, halal, and basic food allergies. Please inform us of any dietary restrictions during booking."
      },
      {
        question: "What about transportation and group size?",
        answer: "Transportation is by private air-conditioned vehicle (MPV for 1-3 guests, Toyota Hiace Van for 4-11 guests) with professional driver. For Bromo, we use private 4WD jeeps."
      },
      {
        question: "What languages do the guides speak?",
        answer: "All our guides are experienced and speak English fluently. For groups of 2-3 guests, you'll have a driver-guide. For 4+ guests, we provide separate local guides at each main destination."
      },
      {
        question: "What is your safety record?",
        answer: "The company has a 100% safety record. The team consists of dedicated and respectful local crew who provide extra care for children. Immediate assistance is provided in case of medical issues."
      }
    ],
    
    // Tour locations for map
    locations: [
      {
        name: "Surabaya (Starting Point)",
        coordinates: [112.7521, -7.2575] as [number, number],
        description: "Pick-up location and departure point"
      },
      {
        name: "Ijen Crater",
        coordinates: [114.2421, -8.0587] as [number, number],
        description: "Famous blue fire crater and turquoise lake"
      },
      {
        name: "Papuma Beach",
        coordinates: [113.8067, -8.3103] as [number, number],
        description: "Beautiful white sand beach for relaxation"
      },
      {
        name: "Tumpak Sewu Waterfall",
        coordinates: [112.9204, -8.2594] as [number, number],
        description: "Spectacular multi-tiered waterfall"
      },
      {
        name: "Mount Bromo",
        coordinates: [112.9346, -7.9425] as [number, number],
        description: "Iconic volcano with amazing sunrise views"
      }
    ]
  };

  const calculatePrice = (travelers: number) => {
    const tier = tourData.pricingTiers.find(tier => {
      if (tier.groupSize === "Solo Traveler" && travelers === 1) return true;
      if (tier.groupSize === "2 Pax" && travelers === 2) return true;
      if (tier.groupSize === "3 Pax" && travelers === 3) return true;
      if (tier.groupSize === "4 - 5 Pax" && travelers >= 4 && travelers <= 5) return true;
      if (tier.groupSize === "6 - 7 Pax" && travelers >= 6 && travelers <= 7) return true;
      if (tier.groupSize === "8 - 10 Pax" && travelers >= 8 && travelers <= 10) return true;
      if (tier.groupSize === "11 + Pax" && travelers >= 11) return true;
      return false;
    });
    return tier ? tier.pricePerPerson : tourData.basePrice;
  };

  const handleMobileBookingClick = () => {
    bookingWidgetRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: tourData.title,
        text: `Check out this amazing tour: ${tourData.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const handleSave = () => {
    // Implement save/wishlist functionality
    console.log('Save tour functionality');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Head Component */}
      <SEOHead
        title={tourData.title}
        description={tourData.description}
        price={tourData.basePrice}
        currency={tourData.currency}
        rating={tourData.rating || 4.8}
        reviewCount={tourData.reviewCount || 127}
        location={tourData.location}
        duration={tourData.duration}
        operatorName={tourData.operatorName}
        images={tourData.images}
      />
      
      {/* Enhanced Mobile Navigation */}
      <MobileNavigation 
        onShare={handleShare}
        onSave={handleSave}
        operatorName={tourData.operatorName}
      />

      {/* Desktop Navigation Header */}
      <div className="bg-card border-b sticky top-0 z-40 hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Tours
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              {tourData.operatorName}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with enhanced mobile spacing */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column - Primary Content with improved mobile layout */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Hero Section */}
            <TourHero
              title={tourData.title}
              images={tourData.images}
              badges={["5D4N", "Adventure"]}
              description={tourData.description}
            />

            {/* Rating Display */}
            <RatingDisplay
              rating={tourData.rating || 4.8}
              reviewCount={tourData.reviewCount || 127}
              operatorName={tourData.operatorName}
            />

            {/* Tour Info Card */}
            <TourInfoCard
              duration={tourData.duration}
              location={tourData.location}
              groupSize={tourData.groupSize}
              languages={tourData.languages}
              highlights={tourData.highlights}
            />

            {/* Tour Experience Philosophy */}
            <TourExperiencePhilosophy />

            {/* Tour Map */}
            <TourMap 
              locations={tourData.locations} 
              title="East Java Tour Route"
            />

            {/* Booking Process Section */}
            <BookingProcessSection />

            {/* Vehicle Allocation & Group Benefits */}
            <VehicleAllocationSection />

            {/* Mobile Accordion Layout for key sections */}
            {isMobile ? (
              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="itinerary" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="font-semibold">📅 Day-by-Day Itinerary</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ItineraryCard stops={tourData.itinerary} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="inclusions" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="font-semibold">✅ What's Included & Not Included</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <InclusionsCard
                      included={tourData.included}
                      notIncluded={tourData.notIncluded}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accommodation" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="font-semibold">🏨 Accommodation</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <AccommodationCard accommodations={tourData.accommodation} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="policies" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="font-semibold">🛡️ Policies & Safety</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <EnhancedPolicySection />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="font-semibold">❓ FAQ</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <FAQSection faqs={tourData.faq} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="reviews" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="font-semibold">⭐ Reviews & Ratings</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ReviewsSection
                      averageRating={tourData.rating}
                      totalReviews={tourData.reviewCount}
                      ratingDistribution={{ 5: 89, 4: 25, 3: 8, 2: 3, 1: 2 }}
                      reviews={[
                        {
                          id: "1",
                          author: "Sarah M.",
                          rating: 5,
                          date: "2 weeks ago",
                          title: "Absolutely incredible experience!",
                          content: "The blue flames at Ijen were magical, and Mount Bromo sunrise was breathtaking. Our guide was knowledgeable and the accommodations were comfortable.",
                          helpful: 12,
                          verified: true
                        },
                        {
                          id: "2", 
                          author: "Mike T.",
                          rating: 5,
                          date: "1 month ago",
                          title: "Perfect East Java adventure",
                          content: "Everything was well organized. Tumpak Sewu waterfall was stunning and Papuma Beach was a great relaxing stop. Highly recommend this tour!",
                          helpful: 8,
                          verified: true
                        }
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <>
                {/* Desktop Layout - Full sections */}
                <ItineraryCard stops={tourData.itinerary} />
                <InclusionsCard
                  included={tourData.included}
                  notIncluded={tourData.notIncluded}
                />
                <AccommodationCard accommodations={tourData.accommodation} />
                <EnhancedPolicySection />
                <FAQSection faqs={tourData.faq} />
                <ReviewsSection
                  averageRating={tourData.rating}
                  totalReviews={tourData.reviewCount}
                  ratingDistribution={{ 5: 89, 4: 25, 3: 8, 2: 3, 1: 2 }}
                  reviews={[
                    {
                      id: "1",
                      author: "Sarah M.",
                      rating: 5,
                      date: "2 weeks ago",
                      title: "Absolutely incredible experience!",
                      content: "The blue flames at Ijen were magical, and Mount Bromo sunrise was breathtaking. Our guide was knowledgeable and the accommodations were comfortable.",
                      helpful: 12,
                      verified: true
                    },
                    {
                      id: "2", 
                      author: "Mike T.",
                      rating: 5,
                      date: "1 month ago",
                      title: "Perfect East Java adventure",
                      content: "Everything was well organized. Tumpak Sewu waterfall was stunning and Papuma Beach was a great relaxing stop. Highly recommend this tour!",
                      helpful: 8,
                      verified: true
                    }
                  ]}
                />
              </>
            )}
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24" ref={bookingWidgetRef}>
              <TourBookingWidget
                basePrice={calculatePrice(travelers)}
                currency={tourData.currency}
                pricingTiers={tourData.pricingTiers}
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
                travelers={travelers}
                onTravelersChange={setTravelers}
                calculatePrice={calculatePrice}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <MobileStickyFooter
        price={calculatePrice(travelers)}
        currency={tourData.currency}
        onBookingClick={handleMobileBookingClick}
      />
    </div>
  );
};

export default EastJavaTour;