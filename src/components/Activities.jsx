import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textStyles } from '../config/design';
import { activities as mockActivities } from '../lib/mockData'; // Import activities from mockData.js

gsap.registerPlugin(ScrollTrigger);

export default function Activities() {
  const activitiesRef = useRef(null);

  // Use mock activities as the data source
  const activities = mockActivities;

  useEffect(() => {
    if (activitiesRef.current) {
      const cards = activitiesRef.current.querySelectorAll('.activity-card');
      // Add animations or other effects here if needed
    }
  }, []);

  return (
    <div ref={activitiesRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`${textStyles.h2.fontSize} ${textStyles.h2.fontWeight} ${textStyles.h2.fontFamily} text-gray-900`}>
            Nos Activités
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card bg-white shadow-lg rounded-lg p-6">
              <h3 className={`${textStyles.h3.fontSize} ${textStyles.h3.fontWeight} text-primary-green mb-4`}>
                {activity.title}
              </h3>
              <p className={`${textStyles.body.fontSize} text-gray-600`}>
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}