import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Load the Google Maps script dynamically
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

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bodrum mb-3">Informations de Contact</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p key="address">
                  <strong>Adresse :</strong> 2 Avenue de Champagne, 74200 Thonon-les-Bains
                </p>
                <p key="email">
                  <strong>Email :</strong> mosqueeamtthonon@gmail.com
                </p>
                <p key="phone">
                  <strong>Téléphone :</strong> +33666474681
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}