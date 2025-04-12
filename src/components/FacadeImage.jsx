import React, { useState } from 'react';

export default function FacadeImage() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="relative group cursor-pointer">
      <img
        src="/images/new-ccc02.jpeg'"
        alt="Façade du Centre culturel du chablais"
        className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
        onError={() => setImageError(true)}
      />
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <p className="text-gray-500">Image non disponible</p>
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg" />
    </div>
  );
}