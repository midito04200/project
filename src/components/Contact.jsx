import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Check if the Google Maps script is already added
    if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AlzaSyBGarT49cDBO3-l1gu9ALEtLqO21LWmYE&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Initialize the map once the script is loaded
      window.initMap = () => {
        new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 46.3713716, lng: 6.4706476 }, // Coordinates for Thonon-les-Bains
          zoom: 15,
        });
      };

      return () => {
        // Cleanup script if the component unmounts
        document.body.removeChild(script);
      };
    } else {
      // If the script is already loaded, initialize the map directly
      if (window.google && window.google.maps) {
        new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 46.3713716, lng: 6.4706476 }, // Coordinates for Thonon-les-Bains
          zoom: 15,
        });
      }
    }
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
          <div className="aspect-w-16 aspect-h-9 h-[400px]" id="map"></div>
        </div>

      </div>
    </div>
  );
}