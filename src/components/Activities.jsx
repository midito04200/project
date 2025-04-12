import { useEffect, useRef } from 'react';
import { useContent } from '../hooks/useContent';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textStyles, icons } from '../config/design';

gsap.registerPlugin(ScrollTrigger);

export default function Activities() {
  const { data: activities, loading } = useContent('activities');
  const activitiesRef = useRef(null);

  useEffect(() => {
    if (!loading && activities && activitiesRef.current) {
      const cards = activitiesRef.current.querySelectorAll('.activity-card');
      
      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: activitiesRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [loading, activities]);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`${textStyles.h2.fontSize} ${textStyles.h2.fontWeight} ${textStyles.h2.fontFamily} text-gray-900 mb-4`}>
            Nos Activités
          </h2>
          <p className={`${textStyles.body.fontSize} ${textStyles.body.fontFamily} text-gray-600`}>
            Découvrez les activités régulières de notre mosquée
          </p>
        </div>

        <div ref={activitiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary-green border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Chargement des activités...</p>
            </div>
          ) : (
            activities?.map((activity) => (
              <div
                key={activity.title} // Using title as a unique key since it should be unique for each activity
                className="activity-card bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div 
                    dangerouslySetInnerHTML={{ __html: icons[activity.icon] || activity.icon }} 
                    className="w-16 h-16 text-primary-green"
                  />
                </div>
                <h3 className={`${textStyles.h3.fontSize} ${textStyles.h3.fontFamily} text-center mb-4`}>
                  {activity.title}
                </h3>
                <p className={`${textStyles.body.fontSize} ${textStyles.body.fontFamily} text-gray-600 text-center`}>
                  {activity.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}