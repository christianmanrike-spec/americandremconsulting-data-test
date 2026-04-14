import { CalendarClock, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=573223356137&text=Hola%2C+necesito+adelantar+mi+cita+de+visa&type=phone_number&app_absent=0";

const AppointmentCTA = () => {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Fondo degradado que conecta con Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy))] via-[hsl(var(--brand-teal))] to-[hsl(var(--brand-navy))]" />
      
      {/* Líneas decorativas animadas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[hsl(var(--accent-aqua)/0.5)] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[hsl(var(--accent-aqua)/0.5)] to-transparent" />
      </div>

      {/* Glow central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[300px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse, hsl(188 69% 49% / 0.4), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="container px-4 relative z-10 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Icono grande animado */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[hsl(var(--accent-aqua)/0.3)] animate-ping" style={{ animationDuration: '3s' }} />
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[hsl(var(--accent-aqua))] to-[hsl(var(--accent-pink))] flex items-center justify-center shadow-lg">
                  <CalendarClock className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent-aqua))] mb-2 font-montserrat">
                Servicio Express
              </span>
              <h2 className="font-montserrat font-bold italic text-white text-xl md:text-3xl mb-2">
                ¿Necesitas solo adelantar tu cita?
              </h2>
              <p className="font-titillium text-white/80 text-base md:text-lg leading-relaxed">
                También lo hacemos. Escríbenos, validamos tu caso y cotizaremos de acuerdo a tu prioridad.
              </p>
            </div>

            {/* Botón CTA */}
            <div className="flex-shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[hsl(var(--accent-aqua))] to-[hsl(var(--accent-pink))] text-white font-montserrat font-bold italic px-7 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_hsl(var(--accent-aqua)/0.4)]"
              >
                Escríbenos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
