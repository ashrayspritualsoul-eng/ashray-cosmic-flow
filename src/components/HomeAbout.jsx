import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { icon: Sparkles, text: "Certified Astrologer" },
  { icon: Heart, text: "Master Reikist" },
  { icon: Shield, text: "Trusted Guide" },
  { icon: Star, text: "7+ Years Experience" },
];

const services = [
  { title: "Tarot Card Reading", image: "/images/tarot.jpg" },
  { title: "Numerology Consultation", image: "/images/numerology.jpg" },
  { title: "Reiki Healing", image: "/images/reiki.jpg" },
  { title: "Psychology Sessions", image: "/images/psychology.jpg" },
];

const contactInfo = [
  { icon: Phone, label: "+91 93402 16182" },
  { icon: Mail, label: "ashrayspritualsoul@gmail.com" },
  { icon: MessageCircle, label: "+91 93402 16182" },
  { icon: MapPin, label: "Janakpuri Jumerati, Bhopal" },
];

const HomeAbout = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Services – Enhanced Visual Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <a
                key={index}
                href="/services"
                className="block focus:outline-none"
              >
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="relative h-56 rounded-2xl overflow-hidden border border-border bg-black shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover 
                             transition-all duration-500 
                             group-hover:scale-110 group-hover:blur-[1px]"
                  />

                  {/* Base Overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-20" />

                  {/* Hover Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <h3
                      className="text-lg font-semibold text-white tracking-wide 
                                 transform transition-transform duration-300 
                                 group-hover:-translate-y-2"
                    >
                      {service.title}
                    </h3>

                    {/* CTA Hint */}
                    <span
                      className="mt-1 text-sm text-white/80 opacity-0 
                                   transform translate-y-2 
                                   group-hover:opacity-100 group-hover:translate-y-0 
                                   transition-all duration-300"
                    >
                      Explore Service →
                    </span>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ashray Wellness
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ashray Wellness is a holistic guidance platform designed for
              individuals seeking clarity, emotional balance, and mindful
              growth. Our approach blends spiritual wisdom with practical
              understanding to support life decisions, healing, and inner
              alignment.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <info.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {info.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href="https://wa.me/919340216182"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on WhatsApp
                </a>
              </Button>

              <Button variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
