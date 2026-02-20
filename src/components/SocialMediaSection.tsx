import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
  </svg>
);

const socials = [
  {
    name: "Instagram",
    icon: <Instagram className="w-8 h-8" />,
    url: "https://www.instagram.com/american.dream.consulting/",
    handle: "@american.dream.consulting",
    color: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    name: "TikTok",
    icon: <TikTokIcon className="w-8 h-8" />,
    url: "https://www.tiktok.com/@americandream.co",
    handle: "@americandream.co",
    color: "from-[#00f2ea] to-[#ff0050]",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-8 h-8" />,
    url: "#",
    handle: "American Dream Consulting",
    color: "from-[#1877f2] to-[#0a5dc2]",
  },
];

const SocialMediaSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            ¡Síguenos en redes sociales!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Mantente al día con consejos, historias de éxito y todo lo que necesitas saber sobre tu proceso de visa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-card border border-border p-8 text-center hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white`}>
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{social.name}</h3>
                <p className="text-muted-foreground font-titillium">{social.handle}</p>
                <span className="mt-2 inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Seguir
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
