import Hero from "@/components/Hero";
import ClientCarousel from "@/components/ClientCarousel";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import VisaGuideSection from "@/components/VisaGuideSection";
import InstagramVideos from "@/components/InstagramVideos";
import SocialMediaSection from "@/components/SocialMediaSection";
import CallToAction from "@/components/CallToAction";
import DreamSection from "@/components/DreamSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DreamSection />
      <ClientCarousel />
      <Advantages />
      <Testimonials />
      <InstagramVideos />
      <VisaGuideSection />
      <SocialMediaSection />
      <AppointmentCTA />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
