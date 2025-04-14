import { useState, useEffect } from 'react';
import eventsData from '../data/events.json'; // Import the local JSON file

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the local JSON file
    const fetchEvents = async () => {
      try {
        // Filter events for the current year
        const currentYear = new Date().getFullYear();
        const filteredEvents = eventsData.filter((event) => {
          if (!event.date || isNaN(new Date(event.date))) {
            return false; // Skip events with invalid or empty dates
          }
          return new Date(event.date).getFullYear() === currentYear;
        });

        setEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            Événements 
          </h2>
          <p className="text-lg text-gray-700">
            Découvrez les événements de cette année
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-green mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <p className="text-gray-500">
                    Date :{' '}
                    {new Date(event.date).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">
              Aucun événement trouvé pour cette année.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
