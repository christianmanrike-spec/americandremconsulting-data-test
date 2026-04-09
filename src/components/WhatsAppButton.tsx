import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573133906650?text=Hola,%20vengo%20desde%20tu%20p%C3%A1gina%20web%20y%20quiero%20obtener%20mi%20visa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce-gentle"
    >
      <MessageCircle className="w-8 h-8" fill="white" stroke="none" />
    </a>
  );
};

export default WhatsAppButton;
