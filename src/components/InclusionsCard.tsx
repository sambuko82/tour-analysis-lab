import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InclusionsCardProps {
  included: string[];
  notIncluded: string[];
}

const InclusionsCard = ({ included, notIncluded }: InclusionsCardProps) => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">What's Included</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Included Items */}
          <div className="space-y-4">
            <h4 className="font-medium text-success">✓ Included</h4>
            <div className="space-y-3">
              {included.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Included Items */}
          <div className="space-y-4">
            <h4 className="font-medium text-destructive">✗ Not Included</h4>
            <div className="space-y-3">
              {notIncluded.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InclusionsCard;