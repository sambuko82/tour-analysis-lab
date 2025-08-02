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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg animate-slide-in-right md:hidden">
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="text-lg font-bold text-primary">
            {formatCurrency(price)}
          </div>
          <div className="text-xs text-muted-foreground">per person</div>
        </div>
        <Button 
          onClick={onBookingClick}
          className="px-6 py-3 text-base font-semibold"
        >
          Check Availability
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyFooter;