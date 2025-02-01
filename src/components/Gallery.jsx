import React from 'react';

export default function Gallery() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-amiri text-primary-green mb-4">
            Notre Projet : le Centre Culturel du Chablais
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez notre projet de centre culturel, un espace moderne dédié à l'échange, le vivre ensemble,
            l'apprentissage et le partage au cœur du Chablais
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative group cursor-pointer">
            <img
              src="https://myalgeria.com/wp-content/uploads/2020/11/24.jpg"
              alt="Façade du Centre culturel du chablais"
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+non+disponible';
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}