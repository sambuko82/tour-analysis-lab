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
      {/* Enhanced mobile-first hero with larger tap targets and striking visuals */}
      <div className="relative h-80 md:h-96 lg:h-[500px]">
        <img
          src={images[0] || heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Improved gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Enhanced badge positioning for mobile */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white/95 text-foreground shadow-lg backdrop-blur-sm text-xs md:text-sm px-3 py-1"
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Mobile-optimized title overlay with better contrast */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
            {title}
          </h1>
          {/* Clean, minimal description preview for mobile */}
          {description && (
            <div className="md:hidden">
              <p className="text-white/90 text-sm line-clamp-2 drop-shadow-md">
                {description.split('.')[0]}.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Desktop description moved to card content */}
      <CardContent className="p-4 md:p-6">
        {description && (
          <div className="hidden md:block prose prose-sm max-w-none text-muted-foreground">
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