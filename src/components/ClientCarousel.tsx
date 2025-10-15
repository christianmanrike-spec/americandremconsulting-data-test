import { useEffect, useRef, useState } from "react";
import cliente2 from "@/assets/cliente-2.png";
import cliente3 from "@/assets/cliente-3.png";
import cliente4 from "@/assets/cliente-4.png";
import cliente5 from "@/assets/cliente-5.png";
import cliente6 from "@/assets/cliente-6.png";
import cliente7 from "@/assets/cliente-7.png";
import cliente8 from "@/assets/cliente-8.png";
import cliente9 from "@/assets/cliente-9.png";
import cliente10 from "@/assets/cliente-10.png";
import cliente11 from "@/assets/cliente-11.png";

const clientImages = [
  { src: cliente2, alt: "Cliente American Dream Consulting - historia de éxito" },
  { src: cliente3, alt: "Cliente American Dream Consulting - visa aprobada" },
  { src: cliente4, alt: "Cliente American Dream Consulting - caso exitoso" },
  { src: cliente5, alt: "Cliente American Dream Consulting - testimonio real" },
  { src: cliente6, alt: "Cliente American Dream Consulting - éxito garantizado" },
  { src: cliente7, alt: "Cliente American Dream Consulting - sueño cumplido" },
  { src: cliente8, alt: "Cliente American Dream Consulting - familia feliz" },
  { src: cliente9, alt: "Cliente American Dream Consulting - nueva vida" },
  { src: cliente10, alt: "Cliente American Dream Consulting - aprobación exitosa" },
  { src: cliente11, alt: "Cliente American Dream Consulting - historia inspiradora" },
];

const ClientCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPaused(true);
    }
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background overflow-hidden">
      <div className="container px-4 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-primary">
          Historias Reales de Éxito
        </h2>
        <p className="text-center text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
          Cada historia comienza con un sueño… y termina con una visa aprobada
        </p>
      </div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolls right to left */}
        <div 
          className="marquee-row mb-6 md:mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className={`marquee-content ${isPaused ? 'paused' : ''}`}>
            {[...clientImages, ...clientImages].map((client, index) => (
              <div key={`row1-${index}`} className="marquee-item">
                <img
                  src={client.src}
                  alt={client.alt}
                  loading="lazy"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolls left to right */}
        <div 
          className="marquee-row-reverse"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className={`marquee-content-reverse ${isPaused ? 'paused' : ''}`}>
            {[...clientImages, ...clientImages].map((client, index) => (
              <div key={`row2-${index}`} className="marquee-item">
                <img
                  src={client.src}
                  alt={client.alt}
                  loading="lazy"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-row,
        .marquee-row-reverse {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-content,
        .marquee-content-reverse {
          display: flex;
          gap: 1.5rem;
          padding: 0 0.75rem;
          flex-shrink: 0;
        }

        .marquee-content {
          animation: scroll-left 40s linear infinite;
        }

        .marquee-content-reverse {
          animation: scroll-right 45s linear infinite;
        }

        .marquee-content.paused,
        .marquee-content-reverse.paused {
          animation-play-state: paused;
        }

        .marquee-item {
          flex-shrink: 0;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content,
          .marquee-content-reverse {
            animation: none !important;
          }
        }

        /* Mobile: single scrollable row */
        @media (max-width: 768px) {
          .marquee-row-reverse {
            display: none;
          }
          
          .marquee-row {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }

          .marquee-content {
            animation: none;
            padding: 0 1rem;
          }

          .marquee-item {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;
