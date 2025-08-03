import { Button } from "@/components/ui/button";
import { ArrowLeft, Share, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileNavigationProps {
  onShare?: () => void;
  onSave?: () => void;
  operatorName?: string;
}

const MobileNavigation = ({ onShare, onSave, operatorName }: MobileNavigationProps) => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b shadow-sm md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Back button with larger touch target */}
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2 touch-manipulation min-h-[44px] px-3">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm">Tours</span>
          </Button>
        </Link>

        {/* Operator name - clean and minimal */}
        {operatorName && (
          <div className="text-xs text-muted-foreground font-medium truncate max-w-[140px]">
            {operatorName}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onSave}
            className="touch-manipulation min-h-[44px] w-11"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onShare}
            className="touch-manipulation min-h-[44px] w-11"
          >
            <Share className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;