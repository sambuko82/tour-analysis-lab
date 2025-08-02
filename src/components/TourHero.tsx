import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/french-coast-hero.jpg";

interface TourHeroProps {
  title: string;
  images: string[];
  badges?: string[];
  description?: string;
}

const TourHero = ({ title, images, badges = [], description }: TourHeroProps) => {
  return (
    <Card className="overflow-hidden shadow-card animate-fade-in">
      <div className="relative h-64 md:h-96">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white/90 text-foreground shadow-sm"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h1>
        {description && (
          <div className="prose prose-sm max-w-none text-muted-foreground">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TourHero;