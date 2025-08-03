import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Utensils } from "lucide-react";

interface Accommodation {
  day: number;
  name: string;
  location: string;
  description: string;
  rating: number;
  facilities: string[];
}

interface AccommodationCardProps {
  accommodations: Accommodation[];
}

const AccommodationCard = ({ accommodations }: AccommodationCardProps) => {
  const getFacilityIcon = (facility: string) => {
    const facilityLower = facility.toLowerCase();
    if (facilityLower.includes('wifi')) return <Wifi className="h-4 w-4" />;
    if (facilityLower.includes('restaurant') || facilityLower.includes('café')) return <Utensils className="h-4 w-4" />;
    if (facilityLower.includes('coffee')) return <Coffee className="h-4 w-4" />;
    if (facilityLower.includes('parking')) return <Car className="h-4 w-4" />;
    return <MapPin className="h-4 w-4" />;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🏨</span>
          Your Accommodations
        </CardTitle>
        <CardDescription>
          Comfortable stays throughout your journey
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {accommodations.map((accommodation) => (
          <div key={accommodation.day} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    Night {accommodation.day}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{accommodation.rating}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-lg">{accommodation.name}</h4>
                <p className="text-sm text-muted-foreground">{accommodation.location}</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed">{accommodation.description}</p>
            
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Facilities:</h5>
              <div className="flex flex-wrap gap-2">
                {accommodation.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                    {getFacilityIcon(facility)}
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;