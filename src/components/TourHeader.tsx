import { Search, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TourHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-ocean"></div>
            <span className="text-xl font-bold text-foreground">TravelCo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="pl-10 pr-4 py-2 w-80 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button variant="ghost" size="sm">Help</Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex justify-between">
              <Button variant="ghost" size="sm">Help</Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default TourHeader;