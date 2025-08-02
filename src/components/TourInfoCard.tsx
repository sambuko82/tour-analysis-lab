import { Clock, MapPin, Users, Globe, Smartphone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TourInfoCardProps {
  duration: string;
  location: string;
  groupSize: string;
  languages: string[];
  highlights: string[];
}

const TourInfoCard = ({ duration, location, groupSize, languages, highlights }: TourInfoCardProps) => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardContent className="p-6 space-y-6">
        {/* Key Tour Details */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium text-foreground">{duration}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium text-foreground">{location}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Group Size</p>
              <p className="font-medium text-foreground">{groupSize}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Languages</p>
              <p className="font-medium text-foreground">{languages.join(", ")}</p>
            </div>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Tour Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Smartphone className="h-4 w-4" />
            <span>Mobile ticket</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-success">
            <CheckCircle className="h-4 w-4" />
            <span className="font-medium">Free cancellation</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TourInfoCard;