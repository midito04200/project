import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useContent } from '../hooks/useContent';
import PrayerTimes from './PrayerTimes';
import DonationSlider from './DonationSlider';

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

  const styles = {
    buttonContainer: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "18px",
      padding: "15px 25px",
      borderRadius: "30px",
      backgroundColor: "#157a42",
      color: "#ffffff",
      border: "2px solid #105c34",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      transform: "translateY(0)",
      '&:hover': {
        transform: "translateY(-2px)",
        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)",
      }
    }
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Association Musulmans de Thonon
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            L'Association Musulmans de Thonon vous accueille pour les cinq prières quotidiennes
          </p>
          <div style={styles.buttonContainer}>
            <button
              onClick={() => scrollToSection('horaires')}
              className="hero-button"
              style={styles.button}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
              }}
            >
              Horaires des prières
            </button>
            <button
              onClick={() => scrollToSection('activites')}
              className="hero-button"
              style={styles.button}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
              }}
            >
              Nos activités
            </button>
            <button
              onClick={() => scrollToSection('projet-mosquee')}
              className="hero-button"
              style={styles.button}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
              }}
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