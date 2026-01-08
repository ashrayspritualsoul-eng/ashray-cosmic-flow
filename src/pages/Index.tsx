import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeServices from "@/components/HomeServices";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HomeServices />
      <HomeAbout />
      <WhyChooseMe />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
