import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Listo para Obtener tu Visa en Tiempo Récord?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Inicia tu proceso hoy y cumple tu sueño americano
          </p>

          {/* Price Reminder */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-10 inline-block">
            <p className="text-white/80 mb-2">Inversión total</p>
            <div className="flex items-baseline gap-3 justify-center">
              <p className="text-4xl md:text-5xl font-bold">$2.500.000</p>
              <p className="text-xl text-white/80">COP</p>
              <span className="text-white/60">•</span>
              <p className="text-2xl md:text-3xl font-bold text-white/90">~$650</p>
              <p className="text-lg text-white/80">USD</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 h-auto shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
            >
              Contáctanos Ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 text-lg px-10 py-6 h-auto backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Agenda una Llamada
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">Teléfono</p>
              <p className="text-white/80 text-sm">[Tu número aquí]</p>
            </div>
            <a 
              href="mailto:contacto@americandream.com.co"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 block"
            >
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-white/80 text-sm">contacto@americandream.com.co</p>
            </a>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <MessageCircle className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">WhatsApp</p>
              <p className="text-white/80 text-sm">[Tu WhatsApp aquí]</p>
            </div>
          </div>

          <div className="mt-12 text-white/70 text-sm">
            <p>Espacio para agregar tus datos de contacto o formulario</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
