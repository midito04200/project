import React from 'react';

export default function PrayerTimes() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          HORAIRES DES PRIÈRES (15°)
        </h2>
      </div>
      <iframe
        src="https://mawaqit.net/fr/w/thonon?showOnly5PrayerTimes=0"
        frameBorder="0"
        scrolling="no"
        className="widget w-full h-screen"
        title="Prayer Times"
      ></iframe>
    </div>
  );
}