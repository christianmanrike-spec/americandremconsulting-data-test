import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";

const InstagramVideos = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-10 h-10 text-accent" />
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Síguenos en Instagram
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground">
            Conoce más historias de éxito y consejos para tu proceso de visa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Video Placeholder 1 */}
          <Card className="border-border overflow-hidden bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-0">
              <div className="aspect-[9/16] bg-muted flex items-center justify-center relative group">
                <div className="text-center p-6">
                  <Instagram className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">
                    Espacio para video de Instagram #1
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Inserta el iframe o enlace aquí
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
              </div>
            </CardContent>
          </Card>

          {/* Video Placeholder 2 */}
          <Card className="border-border overflow-hidden bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-0">
              <div className="aspect-[9/16] bg-muted flex items-center justify-center relative group">
                <div className="text-center p-6">
                  <Instagram className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">
                    Espacio para video de Instagram #2
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Inserta el iframe o enlace aquí
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
              </div>
            </CardContent>
          </Card>

          {/* Video Placeholder 3 */}
          <Card className="border-border overflow-hidden bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-0">
              <div className="aspect-[9/16] bg-muted flex items-center justify-center relative group">
                <div className="text-center p-6">
                  <Instagram className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">
                    Espacio para video de Instagram #3
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Inserta el iframe o enlace aquí
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Para agregar videos de Instagram, reemplaza los placeholders con los iframes de Instagram embed
          </p>
          <p className="text-sm text-muted-foreground italic">
            Ejemplo: {"<blockquote class=\"instagram-media\" ...> código del embed de Instagram </blockquote>"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;
