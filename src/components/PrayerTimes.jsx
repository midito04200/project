import React from 'react';

export default function PrayerTimes() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <iframe
        src="/.netlify/functions/prayer-times" // Netlify function URL
        frameBorder="0"
        scrolling="no"
        className="widget w-full h-[600px] border-0 shadow-lg rounded-lg"
        title="Prayer Times"
      ></iframe>
    </div>
  );
}