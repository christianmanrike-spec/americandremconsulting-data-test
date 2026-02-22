import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/use-seo";

const CuantoTardaVisaAmericana = () => {
  useSeo({
    title: "¿Cuánto tarda sacar la visa americana en Colombia? | American Dream Consulting",
    description: "Tiempos de espera actuales, factores que afectan la duración y consejos para agilizar tu trámite.",
    ogImage: "https://americandremconsulting-data-test.lovable.app/og-tiempo-visa.jpg",
  });
  const whatsappNumber = "573133906650";
  const whatsappMessage = "Hola, quiero información sobre los tiempos para obtener mi visa americana";

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
            ¿Cuánto tiempo se demora sacar una visa americana en Colombia?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            El tiempo total para obtener una visa estadounidense depende de múltiples factores: disponibilidad de citas, capacidad de la embajada, trámites administrativos y posibles retrasos. Aquí te damos estimaciones actuales y consejos para planear tu solicitud.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Tiempos de Espera */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Tiempos de espera para citas consulares</h2>
            
            <Card className="mb-8 border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-accent" />
                  Situación actual en la Embajada de Bogotá
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-accent">398</span>
                    <span className="text-xl text-muted-foreground">días de espera promedio</span>
                  </div>
                  <p className="text-muted-foreground">
                    En la Embajada de Bogotá, las citas para visa no inmigrante (categoría B1/B2) han tenido esperas largas debido a la alta demanda.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Los tiempos pueden variar según la época del año y la capacidad del consulado.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <AlertCircle className="w-6 h-6" />
                  Variaciones en los tiempos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-900 mb-4">
                  Algunas fuentes privadas indican que en ciertas temporadas el tiempo para obtener entrevista puede estar entre 4 y 7 días laborales, aunque esto puede cambiar drásticamente dependiendo de la demanda y disponibilidad.
                </p>
                <p className="text-sm text-blue-800">
                  Es fundamental verificar los tiempos actualizados en el sitio oficial antes de planear tu viaje.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Procesamiento Post Entrevista */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Procesamiento post entrevista</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent" />
                  Revisión administrativa adicional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Luego de la entrevista, muchos casos requieren un procesamiento administrativo adicional, que puede demorar semanas o incluso más.
                </p>
                <p className="text-muted-foreground">
                  El Departamento de Estado sugiere esperar al menos 60 días antes de hacer consultas internas sobre el estado de tu solicitud.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Importante:</p>
                  <p className="text-sm text-muted-foreground">
                    Este tiempo adicional NO está bajo tu control y varía según la complejidad de cada caso individual.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Factores que Afectan el Tiempo */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Factores que afectan el tiempo</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-lg">Demanda alta de solicitudes</h3>
                  <p className="text-muted-foreground text-sm">
                    La cantidad de personas solicitando visas influye directamente en los tiempos de espera.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-lg">Capacidad del consulado</h3>
                  <p className="text-muted-foreground text-sm">
                    El personal disponible y los recursos de la embajada determinan cuántas citas pueden procesar.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-lg">Complejidad del caso</h3>
                  <p className="text-muted-foreground text-sm">
                    Documentación, verificaciones adicionales y circunstancias personales pueden extender el proceso.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-lg">Cambios de política</h3>
                  <p className="text-muted-foreground text-sm">
                    Actualizaciones en las políticas consulares pueden impactar los tiempos de procesamiento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Estimado Total */}
          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Estimado total del proceso completo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-semibold">Desde solicitud hasta fecha de entrevista</p>
                    <p className="text-muted-foreground text-sm">Entre varios meses y hasta más de un año (según la demanda actual)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-semibold">Desde entrevista hasta aprobación / entrega del pasaporte</p>
                    <p className="text-muted-foreground text-sm">Algunas semanas a meses, dependiendo del procesamiento administrativo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consejos para Reducir Tiempos */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Consejos para reducir tiempos de espera</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <p className="text-muted-foreground">Aplica lo antes posible, sin dejar la cita para último momento</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <p className="text-muted-foreground">Si contratas un servicio serio, podrán ayudarte a reprogramar citas cuando haya espacios abiertos</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <p className="text-muted-foreground">Verifica frecuentemente el portal de citas por nuevas disponibilidades</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <p className="text-muted-foreground">Prepara toda tu documentación con anticipación para evitar retrasos</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent to-accent/90 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Adelanta tu proceso con nuestra asesoría
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Te ayudamos a monitorear aperturas de citas y optimizar tu tiempo de espera
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
                Solicita tu Cronograma Personalizado
              </a>
            </Button>
          </div>

          {/* Enlaces Relacionados */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Citas para visa 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Información actualizada sobre tiempos de cita este año</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/cita-visa-americana-2025-colombia">Ver actualización 2025</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Proceso completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Guía paso a paso para solicitar tu visa</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/como-sacar-visa-americana-por-primera-vez-colombia">Ver guía completa</Link>
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

export default CuantoTardaVisaAmericana;
