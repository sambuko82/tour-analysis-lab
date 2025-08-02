import TourHeader from "@/components/TourHeader";
import ImageGallery from "@/components/ImageGallery";
import RatingDisplay from "@/components/RatingDisplay";
import BookingWidget from "@/components/BookingWidget";
import TourInfoCard from "@/components/TourInfoCard";
import InclusionsCard from "@/components/InclusionsCard";
import ItineraryCard from "@/components/ItineraryCard";
import ReviewsSection from "@/components/ReviewsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Users, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  // Sample data - in a real app, this would come from an API
  const tourData = {
    title: "The Luxurious French Coast",
    rating: 4.8,
    reviewCount: 1247,
    operatorName: "Riviera Premium Tours",
    price: 189.00,
    duration: "Approximately 12 hours",
    location: "French Riviera",
    groupSize: "Small groups (max 8 people)",
    languages: ["English", "French"],
    highlights: [
      "Exclusive small-group experience with expert local guide",
      "Luxury air-conditioned vehicle with panoramic windows",
      "Visit the glamorous Monaco and Monte Carlo",
      "Explore the medieval village of Eze with perfume factory tour",
      "Discover the ancient Roman monument La Turbie",
      "Stunning photo opportunities along the Mediterranean coast"
    ],
    included: [
      "Professional bilingual guide",
      "Luxury air-conditioned transportation",
      "Entrance to Eze Exotic Garden",
      "Perfume factory tour and tasting",
      "Hotel pickup and drop-off (central Milan)",
      "Small group experience (max 8 people)",
      "Free WiFi on board"
    ],
    notIncluded: [
      "Food and drinks (available for purchase)",
      "Entrance fees to Monaco attractions",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Gratuities for guide and driver"
    ],
    itinerary: [
      {
        title: "Departure from Milan",
        duration: "1 hour",
        description: "Begin your luxurious journey with pickup from your central Milan hotel. Travel in comfort in our premium air-conditioned vehicle as you head towards the stunning French Riviera coastline.",
        highlights: ["Hotel pickup", "Luxury transportation", "Expert guide introduction"]
      },
      {
        title: "Eze Village",
        duration: "2.5 hours",
        description: "Discover the enchanting medieval village of Eze, perched dramatically on a clifftop 400 meters above the Mediterranean Sea. Explore narrow cobblestone streets, visit the exotic garden, and enjoy a guided tour of a traditional perfume factory.",
        highlights: ["Medieval village exploration", "Exotic Garden visit", "Perfume factory tour", "Panoramic sea views"]
      },
      {
        title: "La Turbie",
        duration: "1 hour",
        description: "Visit the impressive Roman monument 'Trophy of Augustus' in La Turbie, offering breathtaking views over Monaco and the Mediterranean coastline. Learn about the rich Roman history of this strategic location.",
        highlights: ["Roman monument visit", "Historical insights", "Spectacular viewpoints"]
      },
      {
        title: "Monaco & Monte Carlo",
        duration: "3 hours",
        description: "Experience the glamour of Monaco with visits to the Prince's Palace, the famous Monte Carlo Casino, and the luxurious yacht harbor. Enjoy free time to explore this sophisticated principality at your own pace.",
        highlights: ["Prince's Palace", "Monte Carlo Casino", "Luxury yacht harbor", "Free exploration time"]
      },
      {
        title: "Return to Milan",
        duration: "4.5 hours",
        description: "Relax and reflect on your incredible day as you journey back to Milan. Enjoy the scenic route along the Mediterranean coast before arriving at your hotel in the evening.",
        highlights: ["Scenic coastal route", "Comfortable return journey", "Hotel drop-off"]
      }
    ],
    reviews: [
      {
        id: "1",
        author: "Sarah M.",
        rating: 5,
        date: "2 weeks ago",
        title: "Absolutely magical day trip!",
        content: "This tour exceeded all expectations. Our guide Marco was incredibly knowledgeable and passionate about the region. The small group size made it feel very personal, and the luxury transportation was a nice touch. Monaco was breathtaking!",
        helpful: 23,
        verified: true
      },
      {
        id: "2", 
        author: "James R.",
        rating: 5,
        date: "1 month ago",
        title: "Perfect organization and stunning locations",
        content: "Everything was perfectly organized from start to finish. The visit to Eze was my favorite part - such a charming village with incredible views. The perfume factory tour was a delightful surprise. Highly recommend!",
        helpful: 18,
        verified: true
      },
      {
        id: "3",
        author: "Maria L.",
        rating: 4,
        date: "6 weeks ago", 
        title: "Great tour with minor timing issues",
        content: "Overall a wonderful experience. The locations were stunning and our guide was very friendly. Only minor complaint was that we felt a bit rushed at some stops, but understandable given the distance traveled. Would book again!",
        helpful: 12,
        verified: true
      }
    ],
    ratingDistribution: {
      5: 856,
      4: 312,
      3: 58,
      2: 15,
      1: 6
    }
  };

  const faqData = [
    {
      question: "What should I bring on this tour?",
      answer: "We recommend bringing comfortable walking shoes, a camera, sun protection (hat, sunglasses, sunscreen), and a light jacket for the evening return. Your passport or ID is required for crossing into Monaco."
    },
    {
      question: "Is this tour suitable for children?",
      answer: "Yes, this tour is family-friendly. Children of all ages are welcome, though the tour involves some walking on uneven surfaces in medieval villages. Children under 3 travel free when not occupying a seat."
    },
    {
      question: "What happens in case of bad weather?",
      answer: "The tour operates in most weather conditions. In case of severe weather that makes travel unsafe, we will contact you to reschedule or provide a full refund."
    },
    {
      question: "Can dietary restrictions be accommodated?",
      answer: "While meals are not included in the tour, our guide will be happy to recommend restaurants that can accommodate various dietary needs during your free time in Monaco."
    },
    {
      question: "Is hotel pickup included?",
      answer: "Yes, we provide complimentary pickup and drop-off from hotels in central Milan. If your hotel is outside the central area, we can arrange pickup from a convenient meeting point."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TourHeader />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-muted/30 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <span>Home</span> <span className="mx-2">{'>'}</span>
            <span>Italy</span> <span className="mx-2">{'>'}</span>
            <span>Lombardy</span> <span className="mx-2">{'>'}</span>
            <span>Milan</span> <span className="mx-2">{'>'}</span>
            <span>Day Trips</span> <span className="mx-2">{'>'}</span>
            <span className="text-foreground font-medium">{tourData.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Above-the-fold Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Information Zone */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                {tourData.title}
              </h1>
              <RatingDisplay
                rating={tourData.rating}
                reviewCount={tourData.reviewCount}
                operatorName={tourData.operatorName}
              />
            </div>
            <ImageGallery />
          </div>

          {/* Right Column - Conversion Zone */}
          <div className="lg:col-span-1">
            <BookingWidget
              price={tourData.price}
              tourTitle={tourData.title}
            />
          </div>
        </div>

        {/* Featured Tours Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Other Popular Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card hover-scale animate-fade-in">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src="/src/assets/french-coast-hero.jpg"
                  alt="East Java Tour"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    5D4N Adventure
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  Ultimate East Java Experience
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ijen Crater, Tumpak Sewu & Bromo
                </p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>East Java, Indonesia</span>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    IDR 3,600,000
                  </div>
                </div>
                <Link to="/tour/east-java">
                  <Button className="w-full" size="sm">
                    View Tour <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Below-the-fold Content */}
        <div className="space-y-12">
          {/* Quick Overview */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Overview</h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Embark on an unforgettable journey from Milan to the glamorous French Riviera. This exclusive small-group tour takes you through some of the most stunning coastal scenery in Europe, combining medieval charm, Roman history, and modern luxury.
              </p>
              <p className="text-foreground leading-relaxed">
                Experience the magic of Eze, a medieval village perched high above the Mediterranean, explore the ancient Roman monument at La Turbie, and immerse yourself in the sophistication of Monaco and Monte Carlo. With an expert local guide and luxury transportation, this is the perfect way to discover the French Coast's most treasured destinations in a single day.
              </p>
              <p className="text-foreground leading-relaxed">
                Our carefully crafted itinerary ensures you have ample time to explore each location while traveling in comfort and style. Whether you're interested in history, culture, luxury, or simply breathtaking views, this tour offers something special for every traveler.
              </p>
              
              <TourInfoCard
                duration={tourData.duration}
                location={tourData.location}
                groupSize={tourData.groupSize}
                languages={tourData.languages}
                highlights={tourData.highlights}
              />
            </div>
          </section>

          {/* What's Included */}
          <section>
            <InclusionsCard
              included={tourData.included}
              notIncluded={tourData.notIncluded}
            />
          </section>

          {/* Meeting & Pickup */}
          <section>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Meeting & Pickup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Pickup Details</h4>
                      <div className="space-y-3 text-sm text-foreground">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Hotel Pickup Included</p>
                            <p className="text-muted-foreground">We pick up from most central Milan hotels</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Pickup Time: 7:00 AM</p>
                            <p className="text-muted-foreground">Please be ready 15 minutes before scheduled pickup</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Return: Approximately 7:00 PM</p>
                            <p className="text-muted-foreground">Drop-off at your original pickup location</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Contact Information</h4>
                      <div className="space-y-3 text-sm text-foreground">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <span>+39 02 1234 5678</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <span>info@rivierapremiumtours.com</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">24/7 Support Available</p>
                            <p className="text-muted-foreground">Emergency contact during tour hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What To Expect - Itinerary */}
          <section>
            <ItineraryCard stops={tourData.itinerary} />
          </section>

          {/* Additional Information */}
          <section>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Confirmation</h4>
                      <p className="text-sm text-muted-foreground">
                        You will receive a confirmation email within 24 hours of booking, subject to availability.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Accessibility</h4>
                      <p className="text-sm text-muted-foreground">
                        This tour involves walking on uneven surfaces and stairs. Not recommended for travelers with mobility impairments.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Health & Safety</h4>
                      <p className="text-sm text-muted-foreground">
                        Not recommended for pregnant travelers or those with serious heart conditions. Comfortable walking shoes required.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Weather Dependency</h4>
                      <p className="text-sm text-muted-foreground">
                        This tour operates in most weather conditions. In case of severe weather, alternative arrangements will be made.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Group Size</h4>
                      <p className="text-sm text-muted-foreground">
                        Maximum of 8 travelers per tour to ensure a personalized experience.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Languages</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional guides available in English and French. Other languages available upon request.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cancellation Policy */}
          <section>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">Free Cancellation</p>
                        <p className="text-sm text-muted-foreground">
                          Cancel up to 24 hours in advance for a full refund
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">Partial Refund</p>
                        <p className="text-sm text-muted-foreground">
                          Cancel 12-24 hours in advance for 50% refund
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">No Refund</p>
                        <p className="text-sm text-muted-foreground">
                          No refund for cancellations less than 12 hours in advance
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Tours cancelled due to weather or unforeseen circumstances by the operator will receive a full refund or the option to reschedule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Reviews */}
          <section>
            <ReviewsSection
              averageRating={tourData.rating}
              totalReviews={tourData.reviewCount}
              ratingDistribution={tourData.ratingDistribution}
              reviews={tourData.reviews}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
