import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Familia González",
    location: "Bogotá, Colombia",
    text: "Gracias a American Dream Consulting, obtuvimos nuestras visas en tiempo récord. El servicio fue excepcional y personalizado. Nunca pensamos que sería tan rápido y eficiente. ¡Totalmente recomendados!",
    rating: 5
  },
  {
    name: "María Rodríguez",
    location: "Medellín, Colombia",
    text: "Excelente atención y profesionalismo. Nos guiaron en cada paso del proceso y resolvieron todas nuestras dudas. La inversión valió totalmente la pena por la tranquilidad y rapidez del servicio.",
    rating: 5
  },
  {
    name: "Carlos Martínez",
    location: "Cali, Colombia",
    text: "Después de varios intentos fallidos por mi cuenta, decidí contratar a American Dream Consulting. Fue la mejor decisión. Su experiencia y conocimiento hicieron la diferencia. ¡Ahora toda mi familia tiene visa!",
    rating: 5
  },
  {
    name: "Familia Pérez",
    location: "Barranquilla, Colombia",
    text: "Un servicio que realmente valora tu tiempo. Desde la primera consulta sentimos la confianza y profesionalismo. El equipo estuvo disponible en todo momento y cumplieron con todo lo prometido. ¡Gracias!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Historias de Éxito
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Lo que dicen nuestros clientes satisfechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-xl transition-all duration-300 bg-card relative overflow-hidden"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-card-foreground mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  {/* Placeholder for client photo */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
