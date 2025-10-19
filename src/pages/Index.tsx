import Hero from "@/components/Hero";
import ClientCarousel from "@/components/ClientCarousel";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import VisaGuideSection from "@/components/VisaGuideSection";
import InstagramVideos from "@/components/InstagramVideos";
import CallToAction from "@/components/CallToAction";
import DreamSection from "@/components/DreamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientCarousel />
      <Advantages />
      <DreamSection />
      <Testimonials />
      <VisaGuideSection />
      <InstagramVideos />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
