import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

const reels = [
  "DWzm0udj-bl",
  "DQP-9dijYoR",
  "DQr_aOdAZ4r",
  "DQU-QG9gSCr",
  "DQaQNTDDUI2",
  "DTtoPOqDNCq",
];

const InstagramVideos = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reels.map((id) => (
            <Card key={id} className="border-border overflow-hidden bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
              <CardContent className="p-0">
                <iframe
                  src={`https://www.instagram.com/reel/${id}/embed`}
                  className="w-full aspect-[9/16]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  loading="lazy"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramVideos;
