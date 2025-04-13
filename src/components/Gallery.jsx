import { useState } from 'react';

const images = [
  {
    url: '/images/ccc01.jpeg',
    title: 'Nouveau Centre culturel du Chablais ',
    description: 'Vue d\'ensemble du projet de la nouvelle mosquée'
  },
  {
    url: '/images/ccc02.jpeg',
    title: 'Façade Principale',
    description: 'Vue de la façade principale de la nouvelle mosquée'
  },
  {
    url: '/images/ccc03.jpeg',
    title: 'Vue Latérale',
    description: 'Perspective latérale du projet'
  },
  {
    url: '/images/ccc-pancarte-01-.jpeg',
    title: 'Pancarte',
    description: 'Pancarte du futur centre culturel avec Mr le directeur de la mosquée'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-amiri text-primary-green mb-4">
            Notre Projet de Mosquée
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les images du projet de notre futur centre culturel et mosquée
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-7xl max-h-[90vh] p-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-semibold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
