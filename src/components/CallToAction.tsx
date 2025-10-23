import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contacto" className="py-24 gradient-hero relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6">
            ¿Listo para Obtener tu Visa en Tiempo Récord?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-titillium">
            Inicia tu proceso hoy y cumple tu sueño americano
          </p>

          {/* Price Reminder */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-10 inline-block shadow-brand-2">
            <p className="text-white/80 mb-2 font-titillium">Inversión total</p>
            <div className="flex items-baseline gap-3 justify-center">
              <p className="text-4xl md:text-5xl font-montserrat font-bold">$2.700.000</p>
              <p className="text-xl text-white/80 font-titillium">COP</p>
              <span className="text-white/60">•</span>
              <p className="text-2xl md:text-3xl font-montserrat font-bold text-white/90">$695</p>
              <p className="text-lg text-white/80 font-titillium">USD</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="cta"
              className="text-lg px-10 py-6 h-auto group"
              asChild
            >
              <a 
                href="https://api.whatsapp.com/send/?phone=573133906650&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctanos Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 text-lg px-10 py-6 h-auto backdrop-blur-sm"
              asChild
            >
              <a 
                href="https://api.whatsapp.com/send/?phone=573133906650&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda una Llamada
              </a>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a 
              href="tel:+573133906650"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:shadow-brand-1 transition-all duration-300 block"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="font-montserrat font-semibold mb-1">Teléfono</p>
              <p className="text-white/80 text-sm font-titillium">313 3906650</p>
            </a>
            <a 
              href="mailto:contacto@americandream.com.co"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:shadow-brand-1 transition-all duration-300 block"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="font-montserrat font-semibold mb-1">Email</p>
              <p className="text-white/80 text-sm font-titillium">contacto@americandream.com.co</p>
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=573133906650&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:shadow-brand-1 transition-all duration-300 block"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="font-montserrat font-semibold mb-1">WhatsApp</p>
              <p className="text-white/80 text-sm font-titillium">313 3906650</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
