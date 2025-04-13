import { useEffect, useRef } from 'react';
import { useContent } from '../hooks/useContent';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textStyles, icons } from '../config/design';
import DOMPurify from 'dompurify';

function sanitizeHTML(html) {
  return DOMPurify.sanitize(html);
}

gsap.registerPlugin(ScrollTrigger);

export default function Activities() {
  const { data: activities, loading } = useContent('activities');
  const activitiesRef = useRef(null);

  // Fallback hardcoded activities
  const fallbackActivities = [
    {
      id: 1,
      title: "Cours d'Arabe",
      description: "Apprenez la langue arabe avec nos cours adaptés à tous les niveaux.",
      icon: '<img src="/images/amt01.jpeg alt="Cours d\'Arabe Icon" />', // Replaced with amt.svg
    },
    {
      id: 2,
      title: "Cours de Coran",
      description: "Découvrez et mémorisez les versets du Coran avec nos enseignants qualifiés.",              
      icon: '<img src="/public/images/association01.jpeg" alt="Cours de Coran Icon" />', // Replaced with amt.svg
    },
    {
      id: 3,
      title: "Conférences Islamiques",
      description: "Participez à des conférences enrichissantes sur divers sujets islamiques.",
      icon: '<img src="/public/images/amt01.jpeg" alt="Conférences Islamiques Icon" />', // Replaced with amt.svg
    },
    {
      id: 4,
      title: "Activités Jeunesse",
      description: "Des activités éducatives et ludiques pour les jeunes de la communauté.",
      icon: '<img src="/images/amt01.jpeg" alt="Activités Jeunesse Icon" />', // Replaced with amt.svg
    },
  ];

  useEffect(() => {
    if (!loading && activitiesRef.current) {
      const cards = activitiesRef.current.querySelectorAll('.activity-card');

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: activitiesRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [loading, activities]);

  const displayedActivities = activities?.length ? activities : fallbackActivities;

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`${textStyles.h2.fontSize} ${textStyles.h2.fontWeight} ${textStyles.h2.fontFamily} text-gray-900 mb-4`}
          >
            Nos Activités
          </h2>
          <p
            className={`${textStyles.body.fontSize} ${textStyles.body.fontFamily} text-gray-600`}
          >
            Découvrez les activités régulières de notre association
          </p>
        </div>

        <div
          ref={activitiesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary-green border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Chargement des activités...</p>
            </div>
          ) : (
            displayedActivities.map((activity) => (
              <div key={activity.id} className="activity-card">
                <div className="flex justify-center mb-6">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHTML(activity.icon),
                    }}
                    className="w-16 h-16 text-primary-green"
                  />
                </div>
                <h3
                  className={`${textStyles.h3.fontSize} ${textStyles.h3.fontFamily} text-center mb-4`}
                >
                  {activity.title}
                </h3>
                <p
                  className={`${textStyles.body.fontSize} ${textStyles.body.fontFamily} text-gray-600 text-center`}
                >
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