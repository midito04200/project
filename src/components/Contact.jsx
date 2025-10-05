import React, { useEffect, useRef, useState } from 'react';

const GMAPS_SCRIPT_ID = 'gmaps-js';
const API_KEY = 'AlzaSyBGarT49cDBO3-l1gu9ALEtLqO21LWmYE'; // verify in Google Console

function loadGoogleMaps(key) {
  if (typeof window === 'undefined') return Promise.reject(new Error('no-window'));
  if (window.google && window.google.maps) return Promise.resolve(window.google.maps);

  const existing = document.getElementById(GMAPS_SCRIPT_ID) || document.querySelector('script[src*="maps.googleapis.com"]');
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) return resolve(window.google.maps);
      existing.addEventListener('load', () => (window.google && window.google.maps) ? resolve(window.google.maps) : reject(new Error('google-maps-not-available')));
      existing.addEventListener('error', () => reject(new Error('google-maps-load-error')));
    });
  }

  const script = document.createElement('script');
  script.id = GMAPS_SCRIPT_ID;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`; // no callback param
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  return new Promise((resolve, reject) => {
    script.onload = () => (window.google && window.google.maps) ? resolve(window.google.maps) : reject(new Error('google-maps-not-available'));
    script.onerror = (e) => reject(new Error('google-maps-load-error'));
  });
}

export default function Contact() {
  const mapRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    let mounted = true;

    loadGoogleMaps(API_KEY)
      .then((maps) => {
        if (!mounted) return;
        const el = mapRef.current;
        if (!el) {
          console.warn('Contact: map element not found');
          return;
        }
        // create map only once
        if (!el.__mapInitialized) {
          new maps.Map(el, {
            center: { lat: 46.3713716, lng: 6.4706476 },
            zoom: 15
          });
          el.__mapInitialized = true;
        }
      })
      .catch((err) => {
        // show useful info in console for troubleshooting (InvalidKeyMapError will appear too)
        console.error('Google Maps load error:', err.message || err);
      });

    return () => {
      mounted = false;
      // do NOT remove the script tag here (prevents multiple load cycles)
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@mosqueedethonon.fr?subject=Message de ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0ADe: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bodrum text-gray-900 mb-8 text-center">
          Contactez-nous
        </h2>

        {/* Map Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div id="map" ref={mapRef} className="w-full h-[500px]" />
        </div>

      </div>
    </div>
  );
}