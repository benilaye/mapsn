import React from 'react';
import { Map as MapIcon } from 'lucide-react';
import Map from './components/Map';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <MapIcon className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Senegal Regional Statistics</h1>
          </div>
        </div>
      </header>
      <main>
        <Map />
      </main>
    </div>
  );
}

export default App;