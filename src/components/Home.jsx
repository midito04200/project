import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useContent } from '../hooks/useContent';
import PrayerTimes from './PrayerTimes';
import DonationSlider from './DonationSlider';
import { textStyles, colors } from '../config/design';

export default function Home() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current.querySelector('h1'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(heroRef.current.querySelector('p'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(heroRef.current.querySelectorAll('.hero-button'),
      { opacity: 0, y: 20, rotateX: -15 },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      },
      '-=0.3'
    );
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonStyles = `
    ${textStyles.body.fontFamily}
    ${textStyles.body.fontSize}
    py-3 px-6
    rounded-full
    bg-primary-green
    text-white
    border-2
    border-secondary-green
    shadow-lg
    transform
    transition-all
    duration-300
    hover:shadow-xl
    hover:-translate-y-1
    focus:outline-none
    focus:ring-2
    focus:ring-primary-green
    focus:ring-opacity-50
  `;

  return (
    <div>
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center"
      >
        <DonationSlider opacity={0.4} />
        
        {/* Content */}
        <div className="relative z-10 text-gray-800 text-center px-4 max-w-4xl mx-auto">
          <h1 className={`${textStyles.h1.fontSize} ${textStyles.h1.fontWeight} ${textStyles.h1.fontFamily} mb-6`}>
            Association Musulmans de Thonon
          </h1>
          <p className={`${textStyles.body.fontSize} ${textStyles.body.fontFamily} mb-12 text-xl md:text-2xl`}>
            L'Association Musulmans de Thonon vous accueille pour les cinq prières quotidiennes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('horaires')}
              className={`hero-button ${buttonStyles}`}
            >
              Horaires des prières
            </button>
            <button
              onClick={() => scrollToSection('activites')}
              className={`hero-button ${buttonStyles}`}
            >
              Nos activités
            </button>
            <button
              onClick={() => scrollToSection('projet-mosquee')}
              className={`hero-button ${buttonStyles}`}
            >
              Faire un don
            </button>
          </div>
        </div>
      </div>

      {/* Prayer Times Section */}
      <div id="horaires" className="relative py-20 overflow-hidden">
        <DonationSlider opacity={0.85} />
        <div className="relative z-10">
          <PrayerTimes />
        </div>
      </div>
    </div>
  );
}