import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, DollarSign, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/use-seo";

const CuantoCuestaVisaAmericana = () => {
  useSeo({
    title: "¿Cuánto cuesta la visa americana en Colombia? | American Dream Consulting",
    description: "Conoce todos los costos oficiales, tarifas actuales y próximos aumentos previstos para 2025.",
    ogImage: "https://americandremconsulting-data-test.lovable.app/og-costo-visa.jpg",
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
            ¿Cuánto cuesta la visa americana en Colombia?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Uno de los primeros obstáculos que enfrentan los solicitantes es entender los costos reales involucrados. Aquí te explicamos las tarifas oficiales vigentes, posibles cambios y cómo se complementa con los costos de asesoría.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Tarifas Oficiales */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Tarifas oficiales (MRV)</h2>
            
            <Card className="mb-8 border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-accent" />
                  Tarifa estándar de aplicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-accent">$185</span>
                    <span className="text-xl text-muted-foreground">USD</span>
                  </div>
                  <p className="text-muted-foreground">
                    Esta es la tarifa estándar de aplicación de visa para la categoría B1/B2 (turismo y negocios) para la mayoría de solicitantes. Esta tarifa es <strong>no reembolsable</strong>, incluso si tu solicitud es rechazada.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-800">
                  <AlertCircle className="w-6 h-6" />
                  Cambios previstos para 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-900 mb-4">
                  Se ha informado un posible aumento: <strong>desde el 1 de octubre de 2025 la tarifa de USD 185 podría subir a USD 435</strong> para visas B1/B2, un incremento del ~135%.
                </p>
                <p className="text-sm text-yellow-800">
                  Verifica siempre el sitio oficial Travel.State y de la Embajada antes de hacer el pago (puede variar).
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparación de Costos */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Comparación de costos</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Concepto</th>
                    <th className="p-4 text-left">Valor estimado</th>
                    <th className="p-4 text-left">Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Tarifa MRV (B1/B2)</td>
                    <td className="p-4">USD 185</td>
                    <td className="p-4 text-sm text-muted-foreground">No reembolsable, obligatorio para agendar la entrevista</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-4 font-semibold">Tarifa de emisión (reciprocity)</td>
                    <td className="p-4">Usualmente $0 para Colombia</td>
                    <td className="p-4 text-sm text-muted-foreground">Verifica la tabla oficial de reciprocidad</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Servicio de asesoría profesional</td>
                    <td className="p-4">COP 2.700.000 (~USD 695)</td>
                    <td className="p-4 text-sm text-muted-foreground">Incluye diligenciamiento DS-160, optimización de perfil, simulacros y más</td>
                  </tr>
                  <tr className="border-b bg-muted/30">
                    <td className="p-4 font-semibold">Gastos adicionales</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4 text-sm text-muted-foreground">Traducciones, transporte, fotografías, etc.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Costos Adicionales */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Costos adicionales y de servicio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Si contratas asesoría especializada (como la de American Dream Consulting), habrá un costo extra aparte de las tarifas oficiales.
              </p>
              <p className="text-muted-foreground">
                También puedes tener gastos adicionales: fotos tipo visa, traducciones certificadas, envío de documentos, viajes a Bogotá para la entrevista, entre otros.
              </p>
              <p className="text-muted-foreground font-semibold">
                Es importante que tu inversión sea transparente: nuestro servicio incluye todo lo necesario para maximizar tus posibilidades de éxito.
              </p>
            </CardContent>
          </Card>

          {/* Conclusión */}
          <Card className="bg-primary/5 border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Conclusión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                El costo oficial principal que debe pagar todo solicitante es la tarifa MRV (USD 185, posiblemente USD 435 desde octubre 2025). Sin embargo, al contratar un servicio asesor especializado, se suman costos justificados por el valor agregado: evitar errores costosos, optimizar tu perfil, preparación completa para la entrevista y seguimiento personalizado durante todo el proceso.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent to-accent/90 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres saber qué incluye tu inversión?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Consulta nuestro servicio completo y diferenciales que hacen la diferencia
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
                Consulta tu Inversión Completa
              </a>
            </Button>
          </div>

          {/* Enlaces Relacionados */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Proceso paso a paso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Aprende cómo sacar tu visa por primera vez</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/como-sacar-visa-americana-por-primera-vez-colombia">Ver proceso</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Tiempos de espera</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Conoce cuánto tiempo toma el proceso completo</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/cuanto-tarda-sacar-visa-americana-colombia">Ver tiempos</Link>
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

export default CuantoCuestaVisaAmericana;
