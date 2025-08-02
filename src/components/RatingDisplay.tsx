import { Star } from "lucide-react";

interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
  operatorName: string;
  className?: string;
}

const RatingDisplay = ({ rating, reviewCount, operatorName, className = "" }: RatingDisplayProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-5 w-5 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="h-5 w-5 text-gray-300" />
        );
      }
    }

    return stars;
  };

  return (
    <div className={`space-y-2 animate-fade-in ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          {renderStars()}
        </div>
        <span className="text-lg font-semibold text-foreground">
          {rating.toFixed(1)}
        </span>
        <span className="text-sm text-muted-foreground">
          ({reviewCount.toLocaleString()} reviews)
        </span>
      </div>
      
      <div className="text-sm text-muted-foreground">
        Operated by <span className="font-medium text-foreground">{operatorName}</span>
      </div>
    </div>
  );
};

export default RatingDisplay;