import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Users, Clock, CheckCircle, Heart, Info } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface BookingWidgetProps {
  price: number;
  currency?: string;
  tourTitle: string;
}

const BookingWidget = ({ price, currency = "EUR", tourTitle }: BookingWidgetProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg animate-slide-up">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">From</p>
              <p className="text-xl font-bold text-foreground">
                {currency === "EUR" ? "€" : "$"}{price.toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">per adult</p>
            </div>
            <Button variant="cta" size="lg" className="flex-1 ml-4">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="sticky top-24 shadow-booking border-0 bg-card animate-fade-in">
      <CardHeader className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-sm text-muted-foreground">From</span>
            <span className="text-3xl font-bold text-foreground">
              {currency === "EUR" ? "€" : "$"}{price.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">per adult</p>
        </div>

        <div className="flex items-center space-x-2 text-sm text-success">
          <Info className="h-4 w-4" />
          <span className="font-medium">Reserve Now & Pay Later</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Adults</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Children</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <select
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <Button variant="booking" size="lg" className="w-full">
          Check Availability
        </Button>

        <Button variant="ghost" size="sm" className="w-full">
          <Heart className="h-4 w-4 mr-2" />
          Add to Wishlist
        </Button>

        <div className="flex items-center space-x-2 text-sm text-success">
          <CheckCircle className="h-4 w-4" />
          <span>Free cancellation up to 24 hours in advance</span>
        </div>

        <div className="pt-3 border-t space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Duration: 12 hours</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Mobile ticket • English guide included
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingWidget;