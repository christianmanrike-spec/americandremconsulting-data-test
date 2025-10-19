import { Button } from "@/components/ui/button";
import clientesDisney from "@/assets/clientes-disney.jpg";
import clientesMickey from "@/assets/clientes-mickey.jpg";
import clientesMiami from "@/assets/clientes-miami.jpg";

const DreamSection = () => {
  const photos = [
    {
      image: clientesDisney,
      caption: "Sueño cumplido: viaje a Disney 🇺🇸",
      rotation: "-3deg",
    },
    {
      image: clientesMickey,
      caption: "Ahora viviendo su sueño americano",
      rotation: "2deg",
    },
    {
      image: clientesMiami,
      caption: "Asesoría exitosa en menos de un mes",
      rotation: "-2deg",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden gradient-hero">
      {/* Portal/Halo central de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-[800px] h-[800px] opacity-40"
          style={{
            background: 'radial-gradient(closest-side, rgba(42, 187, 211, 0.35), rgba(42, 187, 211, 0.12) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-3 h-3 bg-accentColors-aqua rounded-full opacity-60 animate-float"
          style={{ top: '20%', left: '15%', animationDelay: '0s', animationDuration: '8s' }}
        />
        <div 
          className="absolute w-2 h-2 bg-accentColors-pink rounded-full opacity-50 animate-float"
          style={{ top: '40%', right: '20%', animationDelay: '2s', animationDuration: '10s' }}
        />
        <div 
          className="absolute w-4 h-4 bg-accentColors-aqua rounded-full opacity-40 animate-float"
          style={{ bottom: '30%', left: '25%', animationDelay: '4s', animationDuration: '12s' }}
        />
        <div 
          className="absolute w-2 h-2 bg-accentColors-red rounded-full opacity-60 animate-float"
          style={{ top: '60%', right: '30%', animationDelay: '1s', animationDuration: '9s' }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Texto principal */}
          <div className="text-center mb-12 md:mb-16 kv-halo">
            <h2 className="font-montserrat font-bold italic text-white mb-4 md:mb-6" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
              Tú también puedes cumplir tus sueños ✨
            </h2>
            <p className="font-titillium text-white/90 max-w-3xl mx-auto" style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.6' }}>
              Ellos ya lo lograron con la asesoría de American Dream Consulting.<br />
              Da el primer paso hacia tu visa y conviértelo en realidad.
            </p>
          </div>

          {/* Galería de fotos estilo Polaroid */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-16 max-w-5xl mx-auto items-center justify-center px-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="polaroid-photo group w-full max-w-[300px] md:max-w-none"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Halo detrás de cada foto */}
                <div 
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle, rgba(42, 187, 211, 0.4), transparent 70%)',
                    filter: 'blur(30px)',
                    transform: 'scale(1.2)',
                  }}
                />
                
                {/* Marco Polaroid */}
                <div 
                  className="bg-white p-4 pb-12 md:pb-16 shadow-brand-2 hover:shadow-glow-aqua transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  style={{
                    transform: `rotate(${photo.rotation})`,
                  }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-light">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-3 md:mt-4 font-titillium text-[0.95rem] md:text-[1rem] leading-relaxed" style={{ color: 'rgba(0, 49, 60, 0.85)' }}>
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center px-4">
            <Button
              variant="cta"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 h-auto font-montserrat font-bold italic hover:scale-[1.05] transition-all duration-300 hover:shadow-glow-aqua"
              style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=57313390650&text=Hola!%20Quiero%20cumplir%20mi%20sueño%20con%20American%20Dream&type=phone_number&app_absent=0', '_blank')}
            >
              Escríbenos y te contamos cómo hacerlo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
