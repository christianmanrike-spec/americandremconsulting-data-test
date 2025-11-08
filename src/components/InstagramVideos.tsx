import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

const InstagramVideos = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[src="//www.instagram.com/embed.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

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
          {/* Video 1 */}
          <Card className="border-border overflow-hidden bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-0">
              <iframe
                src="https://www.instagram.com/reel/DQr_aOdAZ4r/embed"
                className="w-full aspect-[9/16]"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                loading="lazy"
              />
            </CardContent>
          </Card>

          {/* Video 2 */}
          <Card className="border-border overflow-hidden bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-0">
              <iframe
                src="https://www.instagram.com/reel/DQU-QG9gSCr/embed"
                className="w-full aspect-[9/16]"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                loading="lazy"
              />
            </CardContent>
          </Card>

          {/* Video 3 */}
          <Card className="border-border overflow-hidden bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-0">
              <iframe
                src="https://www.instagram.com/reel/DQaQNTDDUI2/embed"
                className="w-full aspect-[9/16]"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;
