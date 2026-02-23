import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileQuestion, DollarSign, Clock, Calendar, FileCheck } from "lucide-react";
import ogVisaPrimeraVez from "@/assets/og-visa-primera-vez.jpg";
import ogCostoVisa from "@/assets/og-costo-visa.jpg";
import ogTiempoVisa from "@/assets/og-tiempo-visa.jpg";
import ogCitaVisa from "@/assets/og-cita-visa.jpg";
import ogDocumentosVisa from "@/assets/og-documentos-visa.jpg";

const VisaGuideSection = () => {
  const guias = [
    {
      icon: FileQuestion,
      titulo: "¿Cómo sacar la visa por primera vez?",
      descripcion: "Guía paso a paso del proceso completo, desde el formulario DS-160 hasta la entrevista consular.",
      link: "/como-sacar-visa-americana-por-primera-vez-colombia",
      image: ogVisaPrimeraVez,
    },
    {
      icon: DollarSign,
      titulo: "¿Cuánto cuesta la visa americana?",
      descripcion: "Conoce todos los costos oficiales, tarifas actuales y próximos aumentos previstos para 2026.",
      link: "/cuanto-cuesta-visa-americana-colombia",
      image: ogCostoVisa,
    },
    {
      icon: Clock,
      titulo: "¿Cuánto tiempo se demora el proceso?",
      descripcion: "Tiempos de espera actuales, factores que afectan la duración y consejos para agilizar tu trámite.",
      link: "/cuanto-tarda-sacar-visa-americana-colombia",
      image: ogTiempoVisa,
    },
    {
      icon: Calendar,
      titulo: "Citas para visa en 2026",
      descripcion: "Situación actualizada de disponibilidad de citas y estrategias para adelantar tu entrevista.",
      link: "/cita-visa-americana-2026-colombia",
      image: ogCitaVisa,
    },
    {
      icon: FileCheck,
      titulo: "Documentos necesarios",
      descripcion: "Lista completa de documentos esenciales y adicionales para tu entrevista consular.",
      link: "/documentos-entrevista-visa-americana-colombia",
      image: ogDocumentosVisa,
    }
  ];

  return (
    <section className="py-20 bg-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">
            Todo lo que debes saber sobre la visa americana
          </h2>
          <p className="text-xl font-titillium text-foreground/80 max-w-3xl mx-auto">
            Respondemos las preguntas más frecuentes que las personas buscan en Google sobre el proceso de visa americana en Colombia. Accede a nuestra guía completa y resuelve todas tus dudas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guias.map((guia, index) => {
            const Icon = guia.icon;
            return (
              <Card 
                key={index} 
                className="hover:-translate-y-1 border-t-4 border-t-accent overflow-hidden"
              >
                <div className="aspect-[1200/640] overflow-hidden">
                  <img
                    src={guia.image}
                    alt={guia.titulo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-light">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-titillium">{guia.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-titillium text-foreground/70 mb-6 min-h-[60px]">
                    {guia.descripcion}
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={guia.link}>
                      Leer más →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="font-titillium text-foreground/80 mb-6 text-lg">
            ¿Necesitas ayuda personalizada para tu proceso de visa?
          </p>
          <Button size="lg" variant="cta" asChild>
            <a
              href="https://wa.me/573133906650?text=Hola,%20vengo%20desde%20tu%20p%C3%A1gina%20web%20y%20quiero%20obtener%20mi%20visa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu Consulta Gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection;
