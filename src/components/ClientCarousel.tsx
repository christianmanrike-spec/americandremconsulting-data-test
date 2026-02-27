import cliente1 from "@/assets/cliente-1.jpg";
import cliente2 from "@/assets/cliente-2.jpg";
import cliente3 from "@/assets/cliente-3.jpg";
import cliente4 from "@/assets/cliente-4.jpg";
import cliente5 from "@/assets/cliente-5.jpg";
import cliente6 from "@/assets/cliente-6.jpg";
import cliente7 from "@/assets/cliente-7.jpg";
import cliente8 from "@/assets/cliente-8.jpg";
import cliente9 from "@/assets/cliente-9.jpg";
import cliente10 from "@/assets/cliente-10.jpg";
import cliente11 from "@/assets/cliente-11.jpg";
import cliente12 from "@/assets/cliente-12.jpg";
import cliente13 from "@/assets/cliente-13.jpg";

const clientImages = [
  { src: cliente1, alt: "Cliente American Dream Consulting - visa aprobada" },
  { src: cliente2, alt: "Cliente American Dream Consulting - caso exitoso" },
  { src: cliente3, alt: "Cliente American Dream Consulting - historia de éxito" },
  { src: cliente4, alt: "Cliente American Dream Consulting - testimonio real" },
  { src: cliente5, alt: "Cliente American Dream Consulting - sueño cumplido" },
  { src: cliente6, alt: "Cliente American Dream Consulting - pareja con visa" },
  { src: cliente7, alt: "Cliente American Dream Consulting - familia feliz" },
  { src: cliente8, alt: "Cliente American Dream Consulting - familia reunida" },
  { src: cliente9, alt: "Cliente American Dream Consulting - amigos con visa" },
  { src: cliente10, alt: "Cliente American Dream Consulting - familia completa" },
  { src: cliente11, alt: "Cliente American Dream Consulting - familia con pasaportes" },
  { src: cliente12, alt: "Cliente American Dream Consulting - grupo con pasaportes" },
  { src: cliente13, alt: "Cliente American Dream Consulting - cliente feliz con visa" },
];

const CarouselImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="marquee-item">
    <div className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl shadow-lg overflow-hidden bg-muted/20">
      <img
        src={src}
        alt={alt}
        width="256"
        height="256"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
);

const ClientCarousel = () => {
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
        <div className="marquee-row mb-6 md:mb-8">
          <div className="marquee-content">
            {[...clientImages, ...clientImages].map((client, index) => (
              <CarouselImage
                key={`row1-${index}`}
                src={client.src}
                alt={client.alt}
              />
            ))}
          </div>
        </div>

        {/* Second row - scrolls left to right */}
        <div className="marquee-row-reverse">
          <div className="marquee-content-reverse">
            {[...clientImages, ...clientImages].map((client, index) => (
              <CarouselImage
                key={`row2-${index}`}
                src={client.src}
                alt={client.alt}
              />
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
          animation: scroll-left 80s linear infinite;
        }

        .marquee-content-reverse {
          animation: scroll-right 90s linear infinite;
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

        /* Mobile/Tablet: manual scroll only */
        @media (max-width: 1024px) {
          .marquee-row-reverse {
            display: none;
          }
          
          .marquee-row {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }

          .marquee-row::-webkit-scrollbar {
            display: none;
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
