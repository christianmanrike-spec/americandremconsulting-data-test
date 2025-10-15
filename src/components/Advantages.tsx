import { Clock, Shield, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: Clock,
    title: "Tiempo Récord",
    description: "Agilizamos tu proceso para que obtengas resultados en el menor tiempo posible. Tu tiempo es nuestra prioridad."
  },
  {
    icon: Shield,
    title: "Servicio Exclusivo",
    description: "Atención personalizada y dedicada. Cada cliente recibe un servicio adaptado a sus necesidades específicas."
  },
  {
    icon: Users,
    title: "Familias Satisfechas",
    description: "Hemos ayudado a decenas de familias a cumplir su sueño americano con tasas de éxito comprobadas."
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Años de experiencia en consultoría de visas con resultados que hablan por sí mismos."
  }
];

const Advantages = () => {
  return (
    <section id="servicios" className="py-20 gradient-section">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nos especializamos en un servicio exclusivo que valora tu tiempo. Hemos ayudado a decenas de familias a obtener sus visas en plazos récord, porque tu tiempo es nuestra prioridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
