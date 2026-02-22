import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/use-seo";

const DocumentosEntrevistaVisa = () => {
  useSeo({
    title: "Documentos para entrevista de visa americana | American Dream Consulting",
    description: "Lista completa de documentos esenciales y adicionales para tu entrevista consular en Colombia.",
    ogImage: "https://americandremconsulting-data-test.lovable.app/og-documentos-visa.jpg",
  });
  const whatsappLink = "https://wa.me/573133906650?text=Hola,%20vengo%20desde%20tu%20p%C3%A1gina%20web%20y%20quiero%20obtener%20mi%20visa";

  const documentosEsenciales = [
    {
      titulo: "Pasaporte válido",
      descripcion: "Debe tener validez de al menos 6 meses más allá del período de estadía planificado en EE. UU."
    },
    {
      titulo: "Página de confirmación del DS-160",
      descripcion: "Con código de barras, imprescindible. Sin este documento no podrás realizar la entrevista."
    },
    {
      titulo: "Recibo del pago de la tarifa MRV",
      descripcion: "El comprobante es obligatorio para ingresar a la entrevista. Guárdalo en un lugar seguro."
    },
    {
      titulo: "Foto tipo visa",
      descripcion: "Cumple con las especificaciones requeridas por el consulado (fondo blanco, 5x5 cm, reciente)."
    },
    {
      titulo: "Documentación de respaldo de vínculos con Colombia",
      descripcion: "Contrato laboral, certificados de estudio, títulos de propiedad, estados financieros, extractos bancarios, certificados de empresa, etc."
    },
    {
      titulo: "Itinerario de viaje (opcional pero recomendado)",
      descripcion: "Plan de vuelo, reservas de alojamiento, actividades previstas durante tu estadía en EE. UU."
    }
  ];

  const documentosAdicionales = [
    "Si tuviste visas previas, lleva evidencia de tus viajes anteriores",
    "Cartas de invitación si vas a visitar familiares o amigos",
    "Documentos académicos si el propósito es educativo",
    "Carta de empleador confirmando tu posición y permiso de viaje",
    "Estados financieros que demuestren solvencia económica",
    "Documentos que prueben tu intención de regresar a Colombia"
  ];

  const consejos = [
    {
      titulo: "Organiza los documentos en una carpeta ordenada y limpia",
      descripcion: "Facilita el acceso rápido a cualquier documento que te soliciten."
    },
    {
      titulo: "No entregues documentos innecesarios",
      descripcion: "Lleva solo los esenciales y ten los adicionales a mano por si te los piden."
    },
    {
      titulo: "En la entrevista, entrega solo lo que te soliciten",
      descripcion: "No satures al oficial consular con información que no ha pedido."
    },
    {
      titulo: "Mantén copias digitales de todos los documentos",
      descripcion: "Por si se te piden más tarde o necesitas hacer seguimiento a tu caso."
    },
    {
      titulo: "Verifica que todos los documentos estén actualizados",
      descripcion: "Revisa fechas de vencimiento y vigencia antes de la entrevista."
    }
  ];

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
            Documentos necesarios para la entrevista de visa americana
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Uno de los aspectos clave para tener éxito en tu entrevista consular es llevar toda la documentación correcta y bien organizada. En esta página te mostramos los documentos que necesitas con base en información oficial y experiencias de solicitantes exitosos.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Documentos Esenciales */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <FileText className="w-8 h-8 text-accent" />
              Documentos esenciales
            </h2>
            <p className="text-muted-foreground mb-8">
              Estos documentos son <strong>obligatorios</strong> y sin ellos no podrás realizar tu entrevista consular:
            </p>
            
            <div className="space-y-6">
              {documentosEsenciales.map((doc, index) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <span>{doc.titulo}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-muted-foreground">{doc.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Documentos Adicionales */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Documentos adicionales (en casos específicos)</h2>
            <p className="text-muted-foreground mb-8">
              Dependiendo de tu situación particular, es posible que necesites presentar documentos adicionales:
            </p>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {documentosAdicionales.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-blue-900">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Especificaciones Foto */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Especificaciones de la foto tipo visa</h2>
            
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Requisitos técnicos:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Tamaño: 5x5 cm (2x2 pulgadas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Fondo completamente blanco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Tomada en los últimos 6 meses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Sin gafas (salvo prescripción médica)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Características de la pose:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Rostro frontal mirando a la cámara</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Expresión neutral (sin sonreír)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Cabeza sin cubrimiento (salvo motivos religiosos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Orejas visibles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Consejos para Presentación */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-accent" />
              Consejos para la presentación de documentos
            </h2>
            
            <div className="space-y-6">
              {consejos.map((consejo, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{consejo.titulo}</h3>
                        <p className="text-muted-foreground text-sm">{consejo.descripcion}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Importante */}
          <Card className="mb-12 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-yellow-800">
                <AlertTriangle className="w-6 h-6" />
                Importante: Procesamiento administrativo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-900 mb-3">
                Si hubo visas previas, decisiones anteriores, negaciones o recusaciones, es importante que lo menciones y lleves la documentación relacionada.
              </p>
              <p className="text-yellow-900">
                Si hay procesos administrativos requeridos por el consulado, pueden solicitar documentos suplementarios específicos. En estos casos, el oficial te informará qué documentos adicionales necesitas proporcionar.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent to-accent/90 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prepárate con nuestro simulacro de entrevista
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Agenda tu simulacro con nuestros expertos y afina tu presentación de documentos
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-accent hover:bg-white/90 font-semibold text-lg px-8"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda tu Simulacro Ahora
              </a>
            </Button>
          </div>

          {/* Enlaces Relacionados */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Proceso completo paso a paso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Guía completa para sacar tu visa por primera vez</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/como-sacar-visa-americana-por-primera-vez-colombia">Ver proceso completo</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Tiempos de espera 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Información actualizada sobre citas y tiempos</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/cita-visa-americana-2025-colombia">Ver tiempos actuales</Link>
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

export default DocumentosEntrevistaVisa;
