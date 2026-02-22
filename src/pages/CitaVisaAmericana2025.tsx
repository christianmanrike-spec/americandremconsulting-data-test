import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/use-seo";

const CitaVisaAmericana2025 = () => {
  useSeo({
    title: "Citas para visa americana 2025 en Colombia | American Dream Consulting",
    description: "Situación actualizada de disponibilidad de citas y estrategias para adelantar tu entrevista consular.",
    ogImage: "https://americandremconsulting-data-test.lovable.app/og-cita-visa.jpg",
  });
  const whatsappLink = "https://wa.me/573133906650?text=Hola,%20vengo%20desde%20tu%20p%C3%A1gina%20web%20y%20quiero%20obtener%20mi%20visa";

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
            ¿Cuánto se está demorando la cita para la visa americana en 2025?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            En 2025, los tiempos para conseguir una cita de entrevista para visas estadounidenses en Colombia han sido especialmente extensos, lo que exige planificación anticipada. Aquí verás los datos más recientes y algunas estrategias para adelantarte.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Situación Actual 2025 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Situación actual de citas en 2025</h2>
            
            <Card className="mb-8 border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-accent" />
                  Tiempo de espera promedio en Bogotá
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-accent">398</span>
                    <span className="text-xl text-muted-foreground">días de espera</span>
                  </div>
                  <p className="text-muted-foreground">
                    La Embajada de EE. UU. en Bogotá reporta esperas de aproximadamente 398 días para citas de visa B1/B2 (turismo y negocios) como promedio actual.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-sm text-yellow-900">
                      <strong>Importante:</strong> Hay fuentes que informan que en ciertas circunstancias las citas pueden tardar hasta dos años dada la sobrecarga de solicitudes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-800">
                  <CheckCircle className="w-6 h-6" />
                  Buenas noticias: Citas adicionales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-900 mb-4">
                  Recientemente, la embajada ha anunciado que <strong>abrirá citas adicionales los miércoles a las 9 a.m.</strong> para quienes tienen más de un año de espera.
                </p>
                <p className="text-sm text-green-800">
                  Esto representa una oportunidad importante para quienes han estado esperando mucho tiempo. Mantente atento a las actualizaciones oficiales.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparativa de Tiempos */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Evolución de los tiempos de espera</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  Tendencia 2024-2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Los tiempos de espera han aumentado significativamente en el último año debido a:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Mayor demanda post-pandemia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Acumulación de solicitudes pendientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Capacidad limitada del personal consular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">Procesos de verificación más rigurosos</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Qué Puedes Hacer */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Qué puedes hacer mientras tanto</h2>
            
            <div className="grid gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold mb-2">Mantén tu documentación actualizada</h3>
                      <p className="text-muted-foreground text-sm">
                        Asegúrate de que tu pago del MRV esté vigente y registra tu DS-160 con antelación para estar listo cuando consigas cita.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold mb-2">Monitorea el sistema constantemente</h3>
                      <p className="text-muted-foreground text-sm">
                        Ingresa al sistema de citas con frecuencia. Los espacios nuevos pueden aparecer espontáneamente cuando otros cancelan o reprograman.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold mb-2">Considera asesoría especializada</h3>
                      <p className="text-muted-foreground text-sm">
                        Tener asesoría profesional puede darte ventaja para detectar aperturas tempranas o reprogramaciones. En American Dream Consulting te ayudamos a adelantar tu cita.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="font-semibold mb-2">Planifica con anticipación</h3>
                      <p className="text-muted-foreground text-sm">
                        Si estás pensando en viajar, inicia tu solicitud al menos con 6 a 12 meses de anticipación para evitar contratiempos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Proyección */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-accent" />
                Proyección hacia adelante
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Dado el nivel de demanda actual, es prudente considerar que la cita podría demorarse varios meses si no cuentas con soporte especializado.
              </p>
              <p className="text-muted-foreground">
                <strong>Nuestra recomendación:</strong> Planifica tu solicitud al menos con 6 a 12 meses de anticipación si estás pensando en viajar pronto. Con nuestro servicio, te ayudamos a reducir ese tiempo a tan solo 1 mes de espera.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent to-accent/90 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Adelanta tu cita a solo 1 mes
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Permítenos ayudarte a monitorear aperturas de citas y acelerar tu proceso
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
                Agenda tu Consulta Ahora
              </a>
            </Button>
          </div>

          {/* Enlaces Relacionados */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Tiempos generales del proceso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Conoce cuánto tiempo toma todo el proceso de visa</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/cuanto-tarda-sacar-visa-americana-colombia">Ver tiempos completos</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Costos actualizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Información sobre tarifas y costos para 2025</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/cuanto-cuesta-visa-americana-colombia">Ver costos 2025</Link>
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

export default CitaVisaAmericana2025;
