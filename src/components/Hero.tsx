import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoNegativo from "@/assets/logo-negativo.png";

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
              src={logoNegativo} 
              alt="American Dream Consulting" 
              className="h-36 md:h-48 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Obtén Tu Visa en Tiempo Récord
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-titillium font-normal">
            Servicio exclusivo, rápido y a tu medida.
          </p>

          {/* Price Card */}
          <div className="bg-white/95 backdrop-blur-sm text-primary rounded-2xl p-8 mb-10 max-w-2xl mx-auto shadow-brand-2 glow">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm font-titillium text-foreground/70 mb-2">Inversión</p>
                <p className="text-4xl md:text-5xl font-montserrat font-bold text-primary">$2.500.000</p>
                <p className="text-xl font-titillium text-secondary mt-1">COP</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-[var(--border-weak)]"></div>
              <div className="text-center md:text-left">
                <p className="text-sm font-titillium text-foreground/70 mb-2">Equivalente</p>
                <p className="text-4xl md:text-5xl font-montserrat font-bold text-secondary">~$650</p>
                <p className="text-xl font-titillium text-secondary mt-1">USD</p>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="bg-light/95 backdrop-blur-sm rounded-2xl p-8 mb-10 max-w-3xl mx-auto shadow-brand-1 border border-[var(--border-weak)] animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-titillium font-bold italic text-primary mb-6">
              Tu inversión incluye:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary font-titillium text-base md:text-lg">
                  Diligenciamiento completo del formulario DS-160
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary font-titillium text-base md:text-lg">
                  Mejoramiento y optimización del perfil del solicitante
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary font-titillium text-base md:text-lg">
                  Asesoría personalizada durante todo el proceso
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary font-titillium text-base md:text-lg">
                  Simulacros para entrevista consular
                </p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2 md:justify-center">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-primary font-titillium text-base md:text-lg font-semibold">
                  Adelantamiento de cita a tan solo 1 mes de espera
                </p>
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
              href="https://api.whatsapp.com/send/?phone=573133906650&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu Consulta Ahora
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
