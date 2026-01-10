import { motion } from "framer-motion";
import { Sparkles, Heart, Shield, Star, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { icon: Sparkles, text: "Certified Astrologer" },
  { icon: Heart, text: "Master Reikist" },
  { icon: Shield, text: "Trusted Guide" },
  { icon: Star, text: "7+ Years Experience" },
];

const contactInfo = [
  { icon: Phone, label: "+91 93402 16182" },
  { icon: Mail, label: "ashrayspritualsoul@gmail.com" },
  { icon: MessageCircle, label: "+91 93402 16182" },
  { icon: MapPin, label: "Janakpuri Jumerati, Bhopal" },
];

const HomeAbout = () => {
  return (
    <section id="about" className="py-20 lg:py-32 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Services Preview - Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: "Tarot Card Reading", color: "from-primary/20 to-primary/5" },
              { title: "Numerology", color: "from-secondary/30 to-secondary/10" },
              { title: "Reiki Healing", color: "from-tertiary/40 to-tertiary/10" },
              { title: "Psychology Sessions", color: "from-primary/15 to-primary/5" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`aspect-square rounded-full bg-gradient-to-br ${item.color} border border-border flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300`}
              >
                <p className="text-card-foreground font-bold text-center text-sm md:text-base">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              About The
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6 leading-tight">
              Ashray Wellness
            </h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              Whether you're seeking emotional healing, spiritual guidance, or practical solutions to life's challenges, Ashray Wellness is here to guide you every step of the way.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <info.icon className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">{info.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Connect On WhatsApp
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
