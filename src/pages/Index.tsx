import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import InstagramVideos from "@/components/InstagramVideos";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Advantages />
      <Testimonials />
      <InstagramVideos />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
