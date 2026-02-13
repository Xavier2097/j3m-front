// src/components/MapView.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mockHoops, incidentCategories } from '../data/mockData';
import type { Hoop } from '../data/mockData';
import { SearchBar } from './SearchBar';
import { FloatingActions } from './FloatingActions';
import { MessageSquare, ThumbsUp } from 'lucide-react';

// Fix Leaflet default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// Google Maps API Key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBQ1GqVWCmfaDf-pZyA5YbrcFqKA1WEg9w';

// Custom marker component
function IncidentMarker({ hoop }: { hoop: Hoop }) {
  const category = incidentCategories[hoop.category];
  
  // Create custom icon
  const customIcon = new DivIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background-color: ${category.color};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border: 3px solid white;
      ">
        ${category.icon}
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  return (
    <Marker position={[hoop.location.lat, hoop.location.lng]} icon={customIcon}>
      <Popup className="custom-popup">
        <div className="p-2 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{category.icon}</span>
            <span className="text-xs font-bold text-gray-soft uppercase">{category.label}</span>
          </div>
          <h3 className="font-bold text-sm text-text mb-1">{hoop.title}</h3>
          <p className="text-xs text-gray-soft mb-2">{hoop.description}</p>
          <div className="flex items-center gap-3 text-xs text-gray-soft">
            <div className="flex items-center gap-1">
              <ThumbsUp size={12} />
              <span>{hoop.validations}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={12} />
              <span>{hoop.comments}</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-soft">Por {hoop.author.name}</p>
            <p className="text-xs text-gray-400">{hoop.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export function MapView({ onOpenCreateModal }: { onOpenCreateModal: () => void }) {
  // Center on Barcelona
  const barcelonaCenter: [number, number] = [41.3874, 2.1686];

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={barcelonaCenter}
        zoom={13}
        className="w-full h-full"
        zoomControl={false}
      >
        {/* Google Maps Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
          url={`https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_API_KEY}`}
          maxZoom={20}
        />
        
        {mockHoops.map((hoop) => (
          <IncidentMarker key={hoop.id} hoop={hoop} />
        ))}
      </MapContainer>

      <SearchBar />
      <FloatingActions onOpenCreateModal={onOpenCreateModal} />
    </div>
  );
}

