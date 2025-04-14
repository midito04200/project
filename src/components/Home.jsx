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
      .fromTo(heroRef.current.querySelector('.hero-button'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
        '-=0.3'
      );
  }, []);

  const scrollToDonation = () => {
    const donationSection = document.getElementById('faire-un-don');
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
      >
        <DonationSlider opacity={0.5} />

        {/* Content */}
        <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto mt-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            L'Association des Musulmans<br />de Thonon
          </h1>
          <p className="text-2xl md:text-3xl mb-12">
            vous accueille pour les cinq prières quotidiennes
          </p>
          <button
            onClick={scrollToDonation}
            className="hero-button bg-[#E6C86E] text-primary-green px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d4b75d] transition-colors duration-300"
          >
            FAIRE UN DON
          </button>
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