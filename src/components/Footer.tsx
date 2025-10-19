import { Instagram, Facebook, Mail } from "lucide-react";
import logoClaro from "@/assets/logo-claro.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(189, 100%, 12%), hsl(192, 74%, 23%))' }}>
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <img 
                src={logoClaro} 
                alt="American Dream Consulting" 
                className="h-36 w-auto mb-4"
              />
              <p className="text-white/80 font-titillium">
                Tu camino hacia el sueño americano comienza aquí.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-titillium font-bold mb-4 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-white/80 font-titillium">
                <li>
                  <a 
                    href="#servicios" 
                    className="hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonios" 
                    className="hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#testimonios')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a 
                    href="#contacto" 
                    className="hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h4 className="font-titillium font-bold mb-4 text-white">Síguenos</h4>
              <div className="flex gap-4 mb-4">
                <a 
                  href="https://www.instagram.com/american.dream.consulting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:contacto@americandream.com.co"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm font-titillium">
            <p className="mb-2">&copy; 2025 American Dream Consulting S.A.S. Todos los derechos reservados.</p>
            <p className="mb-2">Bogotá D.C, Colombia</p>
            <p>
              Desarrollado por{" "}
              <a 
                href="https://compercreativo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                Comper Creativo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
