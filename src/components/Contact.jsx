import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
          <div className="aspect-w-16 aspect-h-9 h-[400px]">
            {/* Static Map Fallback */}
            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Association Mosquée de Thonon</h3>
                <p className="text-gray-600">Avenue de Champagne, 74200 Thonon-les-Bains</p>
              </div>
              <a 
                href="https://www.google.com/maps/place/Association+Mosqu%C3%A9e+de+Thonon/@46.3714039,6.4706116,17z/data=!3m1!4b1!4m6!3m5!1s0x478c3f2e2a405af5:0x7f7f1d43a7c69232!8m2!3d46.3714039!4d6.4731865!16s%2Fg%2F11c5_0_5m3?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-green text-white px-4 py-2 rounded hover:bg-secondary-green transition-colors"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bodrum mb-4">Informations de Contact</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Adresse :</strong> Avenue de Champagne, 74200 Thonon-les-Bains
                </p>
                <p>
                  <strong>Email :</strong> contact@mosqueedethonon.fr
                </p>
                <p>
                  <strong>Téléphone :</strong> 01 23 45 67 89
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}