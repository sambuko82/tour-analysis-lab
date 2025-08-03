import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileStickyFooterProps {
  price: number;
  currency: string;
  onBookingClick: () => void;
}

const MobileStickyFooter = ({ price, currency, onBookingClick }: MobileStickyFooterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Show footer after scrolling past hero section
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMobile || !isVisible) return null;

  const formatCurrency = (amount: number) => {
    return `${currency} ${amount.toLocaleString()}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t shadow-lg animate-slide-in-right md:hidden">
      {/* Enhanced mobile footer with better visual hierarchy */}
      <div className="flex items-center justify-between p-4 gap-4">
        <div className="flex-1">
          <div className="text-lg font-bold text-primary">
            {formatCurrency(price)}
          </div>
          <div className="text-xs text-muted-foreground">per person • starting price</div>
        </div>
        
        {/* Enhanced CTA button with better mobile design */}
        <Button 
          onClick={onBookingClick}
          size="lg"
          className="px-8 py-3 text-base font-bold bg-gradient-to-r from-primary to-primary-hover hover:shadow-cta transition-all duration-300 touch-manipulation min-h-[48px]"
        >
          🗓️ Book Now
        </Button>
      </div>
      
      {/* Additional mobile safety padding for gesture navigation */}
      <div className="h-safe-area-inset-bottom" />
    </div>
  );
};

export default MobileStickyFooter;