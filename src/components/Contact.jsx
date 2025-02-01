import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem'
};

const MOSQUE_POSITION = {
  lat: 46.3772565,
  lng: 6.4910262
};

const MOSQUE_ADDRESS = "2 Av.de Champagne, 74200 Thonon les bains";

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: true,
  fullscreenControl: true,
  zoom: 15,
  mapTypeId: 'roadmap',
  scrollwheel: true,
  clickableIcons: false
};

const libraries = ["places"];

const ContactInfo = () => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-8">
      <h3 className="text-xl font-bodrum mb-4">Informations de Contact</h3>
      <div className="space-y-4 text-gray-600">
        <p>
          <strong>Adresse :</strong> {MOSQUE_ADDRESS}
        </p>
        <p>
          <strong>Email :</strong> contact@mosqueedethonon.fr
        </p>
        <p>
          <strong>Téléphone :</strong> 01 23 45 67 89
        </p>
      </div>
    </div>
  </div>
);

const FallbackMap = () => (
  <div className="h-full flex flex-col items-center justify-center bg-gray-100 p-8 rounded-lg">
    <div className="text-center max-w-md">
      <svg className="w-16 h-16 text-primary-green mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <p className="text-gray-600 mb-4">Vous pouvez nous trouver à :</p>
      <p className="font-medium text-lg mb-6">{MOSQUE_ADDRESS}</p>
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MOSQUE_ADDRESS)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-primary-green text-white rounded-lg hover:bg-secondary-green transition-colors duration-200"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Ouvrir dans Google Maps
      </a>
    </div>
  </div>
);

export default function Contact() {
  const [mapError, setMapError] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const onLoadError = useCallback(() => {
    console.error('Google Maps failed to load');
    setMapError(true);
  }, []);

  const renderMap = () => {
    if (!apiKey) {
      console.error('Google Maps API key is missing');
      return <FallbackMap />;
    }

    if (mapError) {
      return <FallbackMap />;
    }

    return (
      <LoadScript 
        googleMapsApiKey={apiKey}
        onError={onLoadError}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={MOSQUE_POSITION}
          zoom={15}
          options={options}
        >
          <Marker
            position={MOSQUE_POSITION}
            title="Association Mosquée de Thonon"
          />
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bodrum text-gray-900 mb-8 text-center">
          Contactez-nous
        </h2>

        {/* Map Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="h-[400px] relative">
            {renderMap()}
          </div>
        </div>

        {/* Contact Information */}
        <ContactInfo />
      </div>
    </div>
  );
}