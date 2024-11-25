import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { senegalRegions } from '../data/senegalData';
import InfoPanel from './InfoPanel';

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(senegalRegions[0]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-2/3 h-[60vh] md:h-screen">
        <MapContainer
          center={[14.4974, -14.4524]}
          zoom={7}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {senegalRegions.map((region) => (
            <Marker
              key={region.name}
              position={region.coordinates}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelectedRegion(region),
              }}
            >
              <Popup>
                <div className="font-semibold">{region.name}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="w-full md:w-1/3 p-6 overflow-y-auto">
        <InfoPanel
          regionName={selectedRegion.name}
          stats={{
            pollution: selectedRegion.pollution,
            religiousEvents: selectedRegion.religiousEvents,
            vehicles: selectedRegion.vehicles,
          }}
        />
      </div>
    </div>
  );
};

export default Map;