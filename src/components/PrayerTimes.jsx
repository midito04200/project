import { useState, useEffect } from 'react';
import { textStyles } from '../config/design';

export default function PrayerTimes() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className={`${textStyles.h2.fontSize} ${textStyles.h2.fontWeight} ${textStyles.h2.fontFamily} text-gray-800 mb-4`}>
          HORAIRES DE PRIÈRES (15°)
        </h2>
        <p className={`${textStyles.h3.fontSize} ${textStyles.h3.fontFamily} text-primary-green`}>
          {formatDate(currentDate)}
        </p>
      </div>

      {/* Prayer Times Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {[
          { name: 'FAJR', time: '7H33', arabic: 'الفجر' },
          { name: 'DOHR', time: '13H00', arabic: 'الظهر' },
          { name: 'ASR', time: '15H26', arabic: 'العصر' },
          { name: 'MAGHRIB', time: '17H45', arabic: 'المغرب' },
          { name: 'ICHA', time: '19H19', arabic: 'العشاء' },
        ].map((prayer, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:scale-105 shadow-lg">
              {/* Mosque Icon */}
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L3 8v14h18V8L12 2zm0 2.73L18.5 9H5.5L12 4.73zM5 20v-9h14v9H5zm7-8a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2z" strokeWidth="1.5"/>
                </svg>
              </div>
              
              {/* Time */}
              <div className={`${textStyles.h2.fontSize} ${textStyles.h2.fontWeight} text-primary-green text-center mb-2`}>
                {prayer.time}
              </div>
              
              {/* Prayer Name */}
              <div className="text-center">
                <div className={`${textStyles.h3.fontSize} ${textStyles.h3.fontWeight} text-gray-800 mb-1`}>
                  {prayer.name}
                </div>
                <div className={`${textStyles.arabic.fontFamily} ${textStyles.arabic.fontSize} text-gray-600`}>
                  {prayer.arabic}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}