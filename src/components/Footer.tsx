import { Instagram, Facebook, Mail } from "lucide-react";
import logoClaro from "@/assets/logo-claro.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <img 
                src={logoClaro} 
                alt="American Dream Consulting" 
                className="h-36 w-auto mb-4"
              />
              <p className="text-primary-foreground/80">
                Tu camino hacia el sueño americano comienza aquí.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Espacio para agregar tus redes sociales
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-primary-foreground/70 text-sm">
            <p>&copy; {currentYear} American Dream Consulting. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
