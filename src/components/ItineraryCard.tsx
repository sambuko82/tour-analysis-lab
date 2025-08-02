import { Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ItineraryStop {
  title: string;
  duration: string;
  description: string;
  highlights?: string[];
}

interface ItineraryCardProps {
  stops: ItineraryStop[];
}

const ItineraryCard = ({ stops }: ItineraryCardProps) => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">What To Expect</CardTitle>
        <p className="text-sm text-muted-foreground">
          Detailed day-by-day itinerary of your luxurious French Coast experience
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stops.map((stop, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < stops.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-border"></div>
              )}
              
              <div className="flex space-x-4">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {index + 1}
                </div>
                
                {/* Stop Content */}
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{stop.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{stop.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Stop {index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground leading-relaxed">{stop.description}</p>
                  
                  {stop.highlights && stop.highlights.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Highlights:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {stop.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ItineraryCard;