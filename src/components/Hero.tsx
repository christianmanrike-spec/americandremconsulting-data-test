import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoClaro from "@/assets/logo-negativo-nuevo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden kv-halo">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="American Dream - Visa Consulting" 
              className="w-full h-full object-cover"
            />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg, rgba(0,49,60,0) 0%, rgba(0,49,60,0.35) 60%, rgba(0,49,60,0.55) 100%)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logoClaro} 
              alt="American Dream Consulting" 
              className="h-auto max-h-24 md:max-h-30 w-auto max-w-full"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Obtén Tu Visa en Tiempo Récord{" "}
            <span className="text-accent font-extrabold drop-shadow-[0_0_20px_rgba(42,187,211,0.6)]">
              ¡Menos de un mes!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-titillium font-normal">
            Servicio exclusivo, rápido y a tu medida.
          </p>

          {/* Price Card */}
          <div className="bg-white/95 backdrop-blur-sm text-primary rounded-2xl p-8 mb-10 max-w-2xl mx-auto shadow-brand-2 glow">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm font-titillium text-foreground/70 mb-2">Inversión</p>
                <p className="text-4xl md:text-5xl font-montserrat font-bold text-primary">$2.700.000</p>
                <p className="text-xl font-titillium text-secondary mt-1">COP</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-[var(--border-weak)]"></div>
              <div className="text-center md:text-left">
                <p className="text-sm font-titillium text-foreground/70 mb-2">Equivalente</p>
                <p className="text-4xl md:text-5xl font-montserrat font-bold text-secondary">$750</p>
                <p className="text-xl font-titillium text-secondary mt-1">USD</p>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="relative rounded-3xl p-1 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ background: 'linear-gradient(135deg, hsl(188 69% 49%), hsl(203 100% 28%), hsl(192 74% 23%))' }}>
            <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/40"></div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-primary whitespace-nowrap">
                  ✨ Tu inversión incluye
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/40"></div>
              </div>

              {/* Highlighted item - Pago de derechos consulares */}
              <div className="mb-6 rounded-xl p-4 md:p-5 border-2 border-accent/30 shadow-md" style={{ background: 'linear-gradient(135deg, hsl(188 69% 49% / 0.08), hsl(199 86% 96%))' }}>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-accent" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-primary font-montserrat text-lg md:text-xl font-bold">
                      Pago de derechos consulares
                    </p>
                    <p className="text-primary/60 font-titillium text-sm mt-0.5">Incluido en tu inversión — no pagas nada adicional</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {[
                  { text: "Diligenciamiento completo del formulario DS-160", icon: "📋" },
                  { text: "Diagnóstico estratégico", icon: "🎯" },
                  { text: "Preparación psicológica para entrevista", icon: "🧠" },
                  { text: "Optimización de perfil financiero", icon: "💼" },
                  { text: "Asesoría personalizada durante todo el proceso", icon: "🤝" },
                  { text: "Simulacros para entrevista consular", icon: "🎤" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted/60 transition-colors duration-200 group">
                    <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                    <p className="text-primary font-titillium text-base md:text-lg">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlighted bottom item */}
              <div className="mt-5 rounded-xl p-4 md:p-5 text-center border-2 border-accent/30 shadow-md" style={{ background: 'linear-gradient(135deg, hsl(188 69% 49% / 0.08), hsl(199 86% 96%))' }}>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <p className="text-primary font-montserrat text-lg md:text-xl font-bold">
                    Adelantamiento de cita a tan solo 1 mes de espera
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Check className="w-5 h-5 text-accent" />
              <span>Servicio Exclusivo</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Check className="w-5 h-5 text-accent" />
              <span>Tiempo Récord</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Check className="w-5 h-5 text-accent" />
              <span>Resultados Comprobados</span>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="cta"
            className="text-lg px-10 py-6 h-auto"
            asChild
          >
            <a 
              href="https://wa.me/573133906650?text=Hola,%20vengo%20desde%20tu%20p%C3%A1gina%20web%20y%20quiero%20obtener%20mi%20visa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu Consulta Ahora
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative Bottom Wave - matches DreamSection gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(192, 74%, 23%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
