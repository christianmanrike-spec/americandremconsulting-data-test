import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/use-seo";

const ComoSacarVisaPorPrimeraVez = () => {
  useSeo({
    title: "¿Cómo sacar la visa americana por primera vez? | American Dream Consulting",
    description: "Guía paso a paso del proceso completo para obtener tu visa americana por primera vez en Colombia.",
    ogImage: "https://americandremconsulting-data-test.lovable.app/og-visa-primera-vez.jpg",
  });
  const pasos = [
    {
      numero: "1",
      titulo: "Determinar el tipo de visa",
      descripcion: "En la mayoría de casos para viajes cortos de turismo o negocios, se aplica la visa no inmigrante B-1/B-2. Si tu viaje tiene otro propósito (estudio, trabajo, intercambio), deberás solicitar la categoría correspondiente y seguir requisitos específicos."
    },
    {
      numero: "2",
      titulo: "Completar el formulario DS-160",
      descripcion: "El formulario DS-160 es obligatorio para casi todas las visas de no inmigrante. Llénalo con cuidado, revisa todos los campos antes de enviar. Después de completar, imprime la página de confirmación con el código de barras (será requerida en el proceso posterior)."
    },
    {
      numero: "3",
      titulo: "Pago de la tarifa de solicitud de visa (MRV)",
      descripcion: "Antes de agendar la cita, debes pagar la tarifa de aplicación (MRV). Para colombianos, la tarifa más común para B1/B2 es USD 185 (puede cambiar). Guarda el recibo del pago: es un requisito para agendar la entrevista."
    },
    {
      numero: "4",
      titulo: "Agendar la cita consular",
      descripcion: "Utiliza el sistema oficial de U.S. Visa Information and Appointment Services o el sitio web del travel.state.gov para programar tu cita. Llena los datos necesarios, incluyendo el número de confirmación del DS-160. Verifica los tiempos de espera actuales para entrevistas en Bogotá."
    },
    {
      numero: "5",
      titulo: "Preparar los documentos para la entrevista",
      items: [
        "Pasaporte válido (al menos 6 meses de vigencia)",
        "Página de confirmación DS-160",
        "Recibo de pago de la tarifa MRV",
        "Foto tipo visa reciente",
        "Documentos que demuestren vínculos con Colombia",
        "Itinerario de viaje (si ya cuentas con él)"
      ]
    },
    {
      numero: "6",
      titulo: "Asistir a la entrevista",
      descripcion: "Llega con anticipación, viste de forma formal. Sé honesto en tus respuestas. El oficial consular valorará principalmente si tienes intención de regresar a Colombia. En algunos casos, después de la entrevista puede haber un proceso administrativo adicional que puede tardar semanas o meses."
    }
  ];

  const consejos = [
    "Revisa constantemente las actualizaciones en la página de la Embajada de EE. UU. en Colombia",
    "No esperes al último momento para agendar la cita, pues los tiempos de espera pueden ser largos",
    "Mantén todos tus documentos organizados y accesibles"
  ];

  const whatsappNumber = "573133906650";
  const whatsappMessage = "Hola, quiero asesoría para sacar mi visa americana por primera vez";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Cómo sacar la visa americana por primera vez en Colombia?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Obtener una visa americana por primera vez puede parecer intimidante, pero con la guía adecuada y la preparación correcta es un proceso manejable. Aquí te explicamos paso a paso lo que debes hacer y cómo evitar errores comunes.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Pasos */}
          <div className="space-y-8 mb-16">
            {pasos.map((paso) => (
              <Card key={paso.numero} className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                      {paso.numero}
                    </span>
                    <span className="text-2xl">{paso.titulo}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-14">
                  {paso.descripcion && (
                    <p className="text-muted-foreground leading-relaxed">{paso.descripcion}</p>
                  )}
                  {paso.items && (
                    <ul className="space-y-2 mt-4">
                      {paso.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Consejos Finales */}
          <Card className="bg-primary/5 border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Consejos finales</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {consejos.map((consejo, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{consejo}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent to-accent/90 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres que te guiemos paso a paso?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Agenda tu asesoría personalizada y evita errores en tu primera solicitud
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-accent hover:bg-white/90 font-semibold text-lg px-8"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda tu Consulta Ahora
              </a>
            </Button>
          </div>

          {/* Enlaces Relacionados */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto cuesta la visa?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Conoce todos los costos involucrados en el proceso</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/cuanto-cuesta-visa-americana-colombia">Ver costos</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Documentos necesarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Lista completa de documentos para tu entrevista</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/documentos-entrevista-visa-americana-colombia">Ver documentos</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComoSacarVisaPorPrimeraVez;
