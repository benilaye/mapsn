import React from 'react';
import { Car, CloudRain, Landmark } from 'lucide-react';
import { RegionStats } from '../types';

interface InfoPanelProps {
  regionName: string;
  stats: RegionStats;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ regionName, stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{regionName}</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-red-100 rounded-full">
            <CloudRain className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pollution Index</p>
            <p className="text-lg font-semibold text-gray-800">{stats.pollution}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-green-100 rounded-full">
            <Landmark className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Religious Events</p>
            <p className="text-lg font-semibold text-gray-800">{stats.religiousEvents}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Car className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Registered Vehicles</p>
            <p className="text-lg font-semibold text-gray-800">
              {stats.vehicles.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;