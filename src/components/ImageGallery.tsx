import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/french-coast-hero.jpg";

const ImageGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // In a real application, these would come from props or API
  const images = [
    {
      url: heroImage,
      alt: "The luxurious French Coast - Monaco harbor with luxury yachts"
    },
    {
      url: heroImage, // Using same image for demo - in real app would be different images
      alt: "Monte Carlo casino and gardens"
    },
    {
      url: heroImage,
      alt: "Eze village perched on clifftop"
    },
    {
      url: heroImage,
      alt: "La Turbie Roman monument"
    },
    {
      url: heroImage,
      alt: "French Riviera coastline panorama"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="space-y-3 md:space-y-4 animate-fade-in">
        {/* Enhanced main image with mobile-optimized height and touch targets */}
        <div 
          className="relative h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden cursor-pointer group shadow-card hover:shadow-lg transition-all duration-300"
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0].url}
            alt={images[0].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-black/70 text-white px-4 py-3 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base backdrop-blur-sm">
                📸 View all {images.length} photos
              </span>
            </div>
          </div>
          
          {/* Mobile-prominent photo count badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {images.length} photos
            </span>
          </div>
        </div>

        {/* Enhanced thumbnail grid with better mobile touch targets */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index + 1}
              className="relative h-24 md:h-28 lg:h-32 rounded-lg overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300 touch-manipulation"
              onClick={() => openLightbox(index + 1)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-lg">🔍</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/20"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Current Image */}
            <div className="relative max-w-6xl max-h-full">
              <img
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/20"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;