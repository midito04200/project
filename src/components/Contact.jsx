import React from 'react';

export default function Contact() {
  const embedSrc = "https://www.google.com/maps/embed/v1/place?q=2+Avenue+de+Champagne+74200+Thonon+les+Bains&key=AIzaSyBGarT49cDBO3-l-1gu9ALEtLqO21LWmYE";

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-[600px]">
          <iframe
            title="AMT-Thonon Localisation"
            src={embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}