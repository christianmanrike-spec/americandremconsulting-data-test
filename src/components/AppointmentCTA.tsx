import { CalendarClock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573133906650?text=Hola,%20necesito%20adelantar%20mi%20cita%20de%20visa";

const AppointmentCTA = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(192 74% 23% / 0.06) 0%, hsl(188 69% 49% / 0.08) 100%)" }} />
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-accent/10 rounded-full px-5 py-2 mb-5">
            <CalendarClock className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Servicio express</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            ¿Necesitas solo adelantar tu cita?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            También lo hacemos. Escríbenos, validamos tu caso y cotizaremos de acuerdo a tu prioridad.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-cta text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
