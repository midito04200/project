import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const quranPages = [
  'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1609599006376-7cfca2a24c9d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80'
];

export default function DonationSlider({ opacity = 0.92 }) {
  const containerRef = useRef(null);
  const pagesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const pages = pagesRef.current;
    let currentIndex = 0;

    const animatePages = () => {
      const nextIndex = (currentIndex + 1) % pages.length;
      const currentPage = pages[currentIndex];
      const nextPage = pages[nextIndex];

      gsap.set(pages, {
        opacity: 0,
        rotateY: 0,
        scale: 0.9
      });

      gsap.set(currentPage, {
        opacity: 0.85,
        scale: 1
      });

      const tl = gsap.timeline();
      
      tl.to(currentPage, {
        duration: 2,
        rotateY: -160,
        scale: 0.9,
        opacity: 0,
        ease: "power1.inOut",
        transformOrigin: "left center"
      })
      .fromTo(nextPage, 
        {
          rotateY: 160,
          scale: 0.9,
          opacity: 0,
          transformOrigin: "right center"
        },
        {
          duration: 2,
          rotateY: 0,
          scale: 1,
          opacity: 0.85,
          ease: "power1.inOut"
        },
        "-=2"
      );

      currentIndex = nextIndex;
    };

    gsap.set(container, {
      perspective: 2000
    });

    gsap.set(pages, {
      opacity: 0,
      rotateY: 0,
      scale: 0.9
    });

    gsap.set(pages[0], {
      opacity: 0.85,
      scale: 1
    });

    const interval = setInterval(animatePages, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden"
    >
      {quranPages.map((page, index) => (
        <div
          key={index}
          ref={el => pagesRef.current[index] = el}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity})), url(${page})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      ))}
    </div>
  );
}