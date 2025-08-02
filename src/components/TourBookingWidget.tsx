import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, Shield, Smartphone, Minus, Plus, Eye } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface PricingTier {
  groupSize: string;
  pricePerPerson: number;
}

interface TourBookingWidgetProps {
  basePrice: number;
  currency: string;
  pricingTiers: PricingTier[];
  selectedDate?: Date;
  onDateChange: (date: Date | undefined) => void;
  travelers: number;
  onTravelersChange: (travelers: number) => void;
  calculatePrice: (travelers: number) => number;
}

const TourBookingWidget = ({ 
  basePrice, 
  currency, 
  pricingTiers, 
  selectedDate, 
  onDateChange, 
  travelers, 
  onTravelersChange,
  calculatePrice
}: TourBookingWidgetProps) => {
  const [showPricingTiers, setShowPricingTiers] = useState(false);
  
  const pricePerPerson = calculatePrice(travelers);
  const totalPrice = pricePerPerson * travelers;
  
  const formatCurrency = (amount: number) => {
    return `${currency} ${amount.toLocaleString()}`;
  };

  return (
    <Card className="sticky top-6 shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Book This Tour</CardTitle>
        <div className="space-y-3">
          <div className="text-2xl font-bold text-primary">
            {formatCurrency(basePrice)}
            <span className="text-base font-normal text-muted-foreground"> per person</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Starting price for 11+ people
          </div>
          
          {/* Enhanced Pricing Tiers Display */}
          <Collapsible open={showPricingTiers} onOpenChange={setShowPricingTiers}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-xs text-primary hover:text-primary/80">
                <Eye className="h-3 w-3 mr-1" />
                View all pricing tiers
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 mt-3">
              <div className="text-xs font-medium text-foreground border-b pb-2">Group Size Pricing:</div>
              <div className="space-y-2">
                {pricingTiers.map((tier, index) => {
                  const isCurrentTier = 
                    (tier.groupSize === "1 person" && travelers === 1) ||
                    (tier.groupSize === "2 people" && travelers === 2) ||
                    (tier.groupSize === "3 people" && travelers === 3) ||
                    (tier.groupSize === "4-5 people" && travelers >= 4 && travelers <= 5) ||
                    (tier.groupSize === "6-7 people" && travelers >= 6 && travelers <= 7) ||
                    (tier.groupSize === "8-10 people" && travelers >= 8 && travelers <= 10) ||
                    (tier.groupSize === "11+ people" && travelers >= 11);
                  
                  return (
                    <div 
                      key={index} 
                      className={`flex justify-between p-2 rounded-md transition-colors ${
                        isCurrentTier ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'
                      }`}
                    >
                      <span className={`text-xs ${isCurrentTier ? 'font-medium text-primary' : 'text-muted-foreground'}`}>
                        {tier.groupSize}
                      </span>
                      <span className={`text-xs font-medium ${isCurrentTier ? 'text-primary' : 'text-foreground'}`}>
                        {formatCurrency(tier.pricePerPerson)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="text-xs text-muted-foreground pt-2 border-t">
                💡 Larger groups save more per person
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">📅 Select Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left font-normal"
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                {selectedDate ? (
                  selectedDate.toLocaleDateString()
                ) : (
                  <span className="text-muted-foreground">Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={onDateChange}
                disabled={(date) =>
                  date < new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Travelers Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">👥 Travelers</label>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Adults</span>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onTravelersChange(Math.max(1, travelers - 1))}
                className="h-8 w-8 p-0"
                disabled={travelers <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm font-medium w-8 text-center">{travelers}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onTravelersChange(travelers + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Price Calculation */}
        <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
          <div className="flex justify-between text-sm">
            <span>{travelers} people</span>
            <span>{formatCurrency(pricePerPerson)} per person</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-primary">{formatCurrency(totalPrice)}</span>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <Button className="w-full" size="lg">
          Check Availability
        </Button>

        {/* Trust Badges */}
        <div className="space-y-3 text-xs text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-4 w-4" />
            <span>Mobile ticket</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Free cancellation</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Private transportation included</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>English-speaking guide included</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TourBookingWidget;