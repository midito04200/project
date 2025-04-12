import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PrayerTimes() {
  // ... keep all existing state and effects exactly as they are ...

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Existing Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          HORAIRES DES PRIÈRES (15°)
        </h2>
        <p className="text-xl text-white mb-2">
          {formatDate(currentDate)}
        </p>
        {hijriDate && (
          <p className="text-xl text-white">
            {hijriDate.day} {hijriDate.month.ar} {hijriDate.year}
          </p>
        )}
      </div>

      {/* Prayer Times Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 shadow-xl rounded-lg overflow-hidden">
          {prayerTimesConfig.map((prayer, index) => (
            <div
              key={index}
              className={`${prayer.bgColor} p-8 text-white flex flex-col items-center justify-center`}
            >
              {/* Keep existing prayer time card content */}
            </div>
          ))}
        </div>
      )}

      {/* Embedded Mawaqit Widget - Added here */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-2 md:p-4">
        <iframe
          title="Mawaqit Prayer Times"
          src="https://mawaqit.net/fr/w/thonon?showOnly5PrayerTimes=0"
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          allow="geolocation"
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-[500px] md:h-[600px] rounded-lg border-none"
        />
      </div>
    </div>
  );
}