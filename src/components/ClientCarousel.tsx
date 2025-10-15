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
  { src: cliente2, alt: "Cliente American Dream Consulting - caso exitoso 1" },
  { src: cliente3, alt: "Cliente American Dream Consulting - caso exitoso 2" },
  { src: cliente4, alt: "Cliente American Dream Consulting - caso exitoso 3" },
  { src: cliente5, alt: "Cliente American Dream Consulting - caso exitoso 4" },
  { src: cliente6, alt: "Cliente American Dream Consulting - caso exitoso 5" },
  { src: cliente7, alt: "Cliente American Dream Consulting - caso exitoso 6" },
  { src: cliente8, alt: "Cliente American Dream Consulting - caso exitoso 7" },
  { src: cliente9, alt: "Cliente American Dream Consulting - caso exitoso 8" },
  { src: cliente10, alt: "Cliente American Dream Consulting - caso exitoso 9" },
  { src: cliente11, alt: "Cliente American Dream Consulting - caso exitoso 10" },
];

const ClientCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsPaused(true);
      return;
    }

    let currentRotation = rotationY;

    const animate = () => {
      if (!isPaused && !isDragging) {
        currentRotation += 0.1;
        setRotationY(currentRotation);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging, rotationY]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setRotationY(rotationY + delta * 0.5);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    setRotationY(rotationY + delta * 0.5);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Historias de Éxito
        </h2>
        <p className="text-center text-xl md:text-2xl mb-12 text-muted-foreground font-medium">
          Cada historia comienza con un sueño... y una visa aprobada
        </p>

        <div
          ref={carouselRef}
          className="relative h-[420px] md:h-[600px] perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            className="carousel-3d"
            style={{
              transform: `rotateY(${rotationY}deg)`,
              transition: isDragging ? 'none' : 'transform 0.1s linear',
            }}
          >
            {clientImages.map((client, index) => {
              const angle = (360 / clientImages.length) * index;
              const radius = 280;
              
              return (
                <div
                  key={index}
                  className="carousel-item"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-accent/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Arrastra para rotar • Pasa el cursor para pausar
        </p>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .carousel-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          left: 50%;
          top: 50%;
          margin-left: -50%;
          margin-top: -50%;
        }

        .carousel-item {
          position: absolute;
          left: 50%;
          top: 50%;
          transform-style: preserve-3d;
          backface-visibility: visible;
        }

        .carousel-item img {
          transform: translateX(-50%) translateY(-50%);
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-3d {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;
