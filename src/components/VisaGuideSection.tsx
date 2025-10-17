import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileQuestion, DollarSign, Clock, Calendar, FileCheck } from "lucide-react";

const VisaGuideSection = () => {
  const guias = [
    {
      icon: FileQuestion,
      titulo: "¿Cómo sacar la visa por primera vez?",
      descripcion: "Guía paso a paso del proceso completo, desde el formulario DS-160 hasta la entrevista consular.",
      link: "/como-sacar-visa-americana-por-primera-vez-colombia",
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      titulo: "¿Cuánto cuesta la visa americana?",
      descripcion: "Conoce todos los costos oficiales, tarifas actuales y próximos aumentos previstos para 2025.",
      link: "/cuanto-cuesta-visa-americana-colombia",
      color: "text-green-600"
    },
    {
      icon: Clock,
      titulo: "¿Cuánto tiempo se demora el proceso?",
      descripcion: "Tiempos de espera actuales, factores que afectan la duración y consejos para agilizar tu trámite.",
      link: "/cuanto-tarda-sacar-visa-americana-colombia",
      color: "text-orange-600"
    },
    {
      icon: Calendar,
      titulo: "Citas para visa en 2025",
      descripcion: "Situación actualizada de disponibilidad de citas y estrategias para adelantar tu entrevista.",
      link: "/cita-visa-americana-2025-colombia",
      color: "text-purple-600"
    },
    {
      icon: FileCheck,
      titulo: "Documentos necesarios",
      descripcion: "Lista completa de documentos esenciales y adicionales para tu entrevista consular.",
      link: "/documentos-entrevista-visa-americana-colombia",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Todo lo que debes saber sobre la visa americana
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respondemos las preguntas más frecuentes que las personas buscan en Google sobre el proceso de visa americana en Colombia. Accede a nuestra guía completa y resuelve todas tus dudas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guias.map((guia, index) => {
            const Icon = guia.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4"
                style={{ borderTopColor: `var(--${guia.color})` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-lg bg-muted ${guia.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{guia.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 min-h-[60px]">
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
          <p className="text-muted-foreground mb-6 text-lg">
            ¿Necesitas ayuda personalizada para tu proceso de visa?
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
            <a
              href="https://wa.me/573133906650?text=Hola,%20necesito%20asesor%C3%ADa%20para%20mi%20visa%20americana"
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
