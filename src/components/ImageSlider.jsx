import { useState, useEffect } from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53',
    title: 'La Mosquée de Thonon',
    description: 'Un lieu de culte et de rassemblement pour notre communauté'
  },
  {
    url: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7c9',
    title: 'Nos Activités',
    description: 'Découvrez nos programmes éducatifs et culturels'
  },
  {
    url: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b',
    title: 'Projet de Construction',
    description: 'Participez à la construction de notre nouvelle mosquée'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="slider-overlay" />
          <div className="slider-content h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-amiri mb-4">{image.title}</h2>
              <p className="text-xl font-montserrat">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}