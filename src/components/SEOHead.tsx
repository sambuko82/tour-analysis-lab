import { useEffect } from 'react';

interface TourSEOProps {
  title: string;
  description: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  location: string;
  duration: string;
  operatorName: string;
  images: string[];
}

const SEOHead = ({ 
  title, 
  description, 
  price, 
  currency, 
  rating, 
  reviewCount, 
  location, 
  duration, 
  operatorName,
  images 
}: TourSEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} - ${location} | ${operatorName}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description.substring(0, 160));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description.substring(0, 160);
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": title,
      "description": description,
      "image": images[0],
      "brand": {
        "@type": "Organization",
        "name": operatorName
      },
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": currency,
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString().split('T')[0]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": reviewCount,
        "bestRating": 5,
        "worstRating": 1
      },
      "category": "Tour",
      "duration": duration,
      "location": {
        "@type": "Place",
        "name": location
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description.substring(0, 200) },
      { property: 'og:image', content: images[0] },
      { property: 'og:type', content: 'product' },
      { property: 'og:price:amount', content: price.toString() },
      { property: 'og:price:currency', content: currency },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Cleanup function
    return () => {
      // Reset title on unmount
      document.title = 'East Java Tours';
    };
  }, [title, description, price, currency, rating, reviewCount, location, duration, operatorName, images]);

  return null; // This component doesn't render anything
};

export default SEOHead;