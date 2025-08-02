import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Temporary interface for locations until Mapbox is set up
interface Location {
  name: string;
  coordinates: [number, number];
  description: string;
}

interface TourMapProps {
  locations: Location[];
  title?: string;
}

const TourMap = ({ locations, title = "Tour Locations" }: TourMapProps) => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');
      
      mapboxgl.default.accessToken = token;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: locations[0]?.coordinates || [112.7521, -7.9797], // Default to East Java
        zoom: 8,
      });

      // Add markers for each location
      locations.forEach((location, index) => {
        new mapboxgl.default.Marker({ color: '#e11d48' })
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.default.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold">${location.name}</h3>
                  <p class="text-sm text-gray-600">${location.description}</p>
                </div>
              `)
          )
          .addTo(map.current);
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      // Fit map to show all locations
      if (locations.length > 1) {
        const bounds = new mapboxgl.default.LngLatBounds();
        locations.forEach(location => bounds.extend(location.coordinates));
        map.current.fitBounds(bounds, { padding: 50 });
      }

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showTokenInput ? (
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              To display the interactive map, please enter your Mapbox public token.
              You can get one at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </div>
            <form onSubmit={handleTokenSubmit} className="space-y-3">
              <div>
                <Label htmlFor="mapboxToken">Mapbox Public Token</Label>
                <Input
                  id="mapboxToken"
                  type="text"
                  placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90"
              >
                Load Map
              </button>
            </form>
            
            {/* Static location list as fallback */}
            <div className="space-y-3 pt-4 border-t">
              <h4 className="font-medium">Tour Locations:</h4>
              <div className="space-y-2">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{location.name}</div>
                      <div className="text-xs text-muted-foreground">{location.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div 
              ref={mapContainer} 
              className="w-full h-96 rounded-lg shadow-sm border"
            />
            <div className="mt-4 text-xs text-muted-foreground">
              Interactive map showing all tour destinations. Click markers for details.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TourMap;