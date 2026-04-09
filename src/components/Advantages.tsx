import { Clock, Shield, Users, Award } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Tiempo Récord",
    description: "Agilizamos tu proceso para que obtengas resultados en el menor tiempo posible. Tu tiempo es nuestra prioridad.",
    gradient: "from-[hsl(188,69%,49%)] to-[hsl(203,100%,28%)]",
    delay: "0s",
  },
  {
    icon: Shield,
    title: "Servicio Exclusivo",
    description: "Atención personalizada y dedicada. Cada cliente recibe un servicio adaptado a sus necesidades específicas.",
    gradient: "from-[hsl(339,61%,57%)] to-[hsl(346,66%,52%)]",
    delay: "0.1s",
  },
  {
    icon: Users,
    title: "Familias Satisfechas",
    description: "Hemos ayudado a decenas de familias a cumplir su sueño americano con tasas de éxito comprobadas.",
    gradient: "from-[hsl(192,74%,23%)] to-[hsl(189,100%,12%)]",
    delay: "0.2s",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Años de experiencia en consultoría de visas con resultados que hablan por sí mismos.",
    gradient: "from-[hsl(203,100%,28%)] to-[hsl(188,69%,49%)]",
    delay: "0.3s",
  },
];

const Advantages = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background with depth */}
      <div className="absolute inset-0 gradient-section" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(188 69% 49% / 0.4), transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, hsl(339 61% 57% / 0.3), transparent 70%)" }} />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4" style={{ background: "hsl(188 69% 49% / 0.12)", color: "hsl(192 74% 23%)" }}>
            Nuestras ventajas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            ¿Por Qué <span className="bg-gradient-to-r from-[hsl(188,69%,49%)] to-[hsl(339,61%,57%)] bg-clip-text text-transparent">Elegirnos</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nos especializamos en un servicio exclusivo que valora tu tiempo. Hemos ayudado a decenas de familias a obtener sus visas en plazos récord.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: advantage.delay, animationFillMode: "both" }}
              >
                {/* Glow behind card on hover */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative h-full rounded-2xl border border-border/20 bg-card/80 backdrop-blur-sm p-8 text-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl overflow-hidden">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${advantage.gradient} p-[2px] group-hover:shadow-lg transition-shadow duration-500`}>
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center p-4 group-hover:bg-transparent transition-colors duration-500">
                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-foreground transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
