import { useState } from "react";
import TourHero from "@/components/TourHero";
import TourBookingWidget from "@/components/TourBookingWidget";
import TourInfoCard from "@/components/TourInfoCard";
import ItineraryCard from "@/components/ItineraryCard";
import InclusionsCard from "@/components/InclusionsCard";
import ReviewsSection from "@/components/ReviewsSection";
import RatingDisplay from "@/components/RatingDisplay";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EastJavaTour = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);

  const tourData = {
    id: "SUB-5D4N-001",
    title: "Ultimate East Java Experience: 5D4N Ijen Crater, Tumpak Sewu & Bromo",
    location: "East Java, Indonesia",
    duration: "5 days, 4 nights",
    groupSize: "1-15+ people",
    languages: ["English"],
    rating: 0,
    reviewCount: 0,
    operatorName: "East Java Tours",
    basePrice: 3600000,
    currency: "IDR",
    images: [
      "/src/assets/french-coast-hero.jpg", // Using existing image as placeholder
      "/src/assets/french-coast-hero.jpg",
      "/src/assets/french-coast-hero.jpg",
      "/src/assets/french-coast-hero.jpg"
    ],
    highlights: [
      "Witness rare blue flames at Ijen Crater",
      "Experience sunrise over Mount Bromo caldera", 
      "Visit majestic Tumpak Sewu waterfall",
      "Relax at pristine Papuma Beach",
      "Private transportation throughout",
      "Experienced English-speaking guides",
      "4 nights accommodation included",
      "All entrance fees covered"
    ],
    description: `Embark on an exciting 5-day journey through East Java's most iconic landscapes. This adventure is perfect for nature enthusiasts and explorers eager to witness breathtaking sights.

Begin with a trek to Ijen Crater to witness the rare blue flames and the stunning turquoise crater lake at sunrise. Next, relax at the pristine shores of Papuma Beach, known for its white sands and clear waters. The journey continues to the majestic Tumpak Sewu Waterfall, a multi-tiered waterfall surrounded by lush greenery. Finally, experience the mesmerizing sunrise over Mount Bromo, illuminating the vast caldera and surrounding peaks.

Throughout the tour, enjoy comfortable accommodations, private transportation, and the guidance of experienced English-speaking guides. This expedition is designed to provide a seamless and enriching exploration of Java's natural wonders, ensuring an unforgettable experience for all participants.`,
    
    pricingTiers: [
      { groupSize: "1 person", pricePerPerson: 9000000 },
      { groupSize: "2 people", pricePerPerson: 5000000 },
      { groupSize: "3 people", pricePerPerson: 4800000 },
      { groupSize: "4-5 people", pricePerPerson: 4500000 },
      { groupSize: "6-7 people", pricePerPerson: 4200000 },
      { groupSize: "8-10 people", pricePerPerson: 3800000 },
      { groupSize: "11+ people", pricePerPerson: 3600000 }
    ],

    included: [
      "Private transportation throughout",
      "4 nights accommodation",
      "English-speaking guide/driver",
      "All meals as per itinerary",
      "Entrance fees to all attractions",
      "Medical checkup for Ijen",
      "Jeep service for Bromo",
      "Coffee break during tour"
    ],
    
    notIncluded: [
      "International flights",
      "Personal expenses",
      "Travel insurance",
      "Gratuities",
      "Items not mentioned in itinerary"
    ],

    itinerary: [
      {
        title: "Day 1: Arrival & Preparation",
        duration: "8 hours",
        description: "Begin your East Java adventure with pickup from Surabaya and travel to Bondowoso. Enjoy lunch en route and check into your accommodation. Complete medical checkup required for Ijen trek and enjoy dinner.",
        highlights: [
          "12:00 PM - Pickup from Surabaya",
          "01:00 PM - Lunch break", 
          "05:00 PM - Check-in accommodation",
          "06:00 PM - Medical checkup for Ijen trek",
          "06:30 PM - Dinner"
        ]
      },
      {
        title: "Day 2: Ijen Crater & Papuma Beach",
        duration: "20 hours",
        description: "Experience the magical blue flames of Ijen Crater in the early morning, observe sulfur miners at work, and witness sunrise over the turquoise crater lake. Later, relax at the beautiful Papuma Beach and enjoy the sunset.",
        highlights: [
          "12:00 AM - Depart for Ijen Crater",
          "02:00 AM - Ijen blue fire observation",
          "04:00 AM - Sulfur miner observation",
          "05:00 AM - Ijen crater sunrise viewing",
          "04:00 PM - Papuma Beach sunset",
          "08:00 PM - Check-in Jember accommodation"
        ]
      },
      {
        title: "Day 3: Tumpak Sewu Waterfall",
        duration: "16 hours",
        description: "Early morning departure to the magnificent Tumpak Sewu Waterfall. Trek to the waterfall base and experience one of Indonesia's most spectacular waterfalls surrounded by lush tropical vegetation.",
        highlights: [
          "03:30 AM - Depart for Tumpak Sewu",
          "07:00 AM - Tumpak Sewu viewpoint",
          "07:30 AM - Trek to waterfall base",
          "01:00 PM - Travel to Cemoro Lawang",
          "04:30 PM - Check-in accommodation"
        ]
      },
      {
        title: "Day 4: Mount Bromo Experience", 
        duration: "14 hours",
        description: "The highlight of your journey - witness the spectacular sunrise over Mount Bromo caldera. Explore the Whispering Sands, hike to Bromo crater, and return to Surabaya for your final night.",
        highlights: [
          "02:00 AM - Jeep pickup service",
          "03:00 AM - Bromo stargazing",
          "04:30 AM - Bromo sunrise viewpoint",
          "07:00 AM - Whispering Sands exploration",
          "08:00 AM - Bromo crater hiking",
          "03:00 PM - Check-in Surabaya hotel"
        ]
      },
      {
        title: "Day 5: Departure",
        duration: "3 hours", 
        description: "Enjoy breakfast at your hotel, check out, and transfer to airport or station as needed. End of your unforgettable East Java adventure.",
        highlights: [
          "08:00 AM - Breakfast",
          "09:00 AM - Check-out",
          "Transfer to airport/station (if needed)"
        ]
      }
    ]
  };

  const calculatePrice = (travelers: number) => {
    const tier = tourData.pricingTiers.find(tier => {
      if (tier.groupSize === "1 person" && travelers === 1) return true;
      if (tier.groupSize === "2 people" && travelers === 2) return true;
      if (tier.groupSize === "3 people" && travelers === 3) return true;
      if (tier.groupSize === "4-5 people" && travelers >= 4 && travelers <= 5) return true;
      if (tier.groupSize === "6-7 people" && travelers >= 6 && travelers <= 7) return true;
      if (tier.groupSize === "8-10 people" && travelers >= 8 && travelers <= 10) return true;
      if (tier.groupSize === "11+ people" && travelers >= 11) return true;
      return false;
    });
    return tier ? tier.pricePerPerson : tourData.basePrice;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Tours
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              East Java Tours
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Primary Content */}
          <div className="lg:col-span-2 space-y-6">
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

            {/* Itinerary */}
            <ItineraryCard stops={tourData.itinerary} />

            {/* Inclusions */}
            <InclusionsCard
              included={tourData.included}
              notIncluded={tourData.notIncluded}
            />

            {/* Reviews Section */}
            <ReviewsSection
              averageRating={4.8}
              totalReviews={127}
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
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
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
    </div>
  );
};

export default EastJavaTour;