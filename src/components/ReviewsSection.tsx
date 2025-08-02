import { Star, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
}

interface ReviewsSectionProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: { [key: number]: number };
  reviews: Review[];
}

const ReviewsSection = ({ averageRating, totalReviews, ratingDistribution, reviews }: ReviewsSectionProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Rating Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-foreground">{averageRating.toFixed(1)}</div>
              <div className="flex items-center justify-center space-x-1">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-sm text-muted-foreground">
                Based on {totalReviews.toLocaleString()} reviews
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm font-medium text-foreground w-8">{rating}</span>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Progress 
                  value={(ratingDistribution[rating] / totalReviews) * 100} 
                  className="flex-1 h-2"
                />
                <span className="text-sm text-muted-foreground w-12">
                  {ratingDistribution[rating]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Recent Reviews</h3>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-foreground">{review.author}</span>
                        {review.verified && (
                          <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">{review.title}</h4>
                    <p className="text-foreground leading-relaxed">{review.content}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{review.helpful} people found this helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;