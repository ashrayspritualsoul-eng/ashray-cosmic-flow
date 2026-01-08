import { motion } from "framer-motion";
import { Sparkles, BookOpen, Hash, Heart, Flower2, Star, Brain, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { icon: Sparkles, title: "Psychic Readings" },
  { icon: BookOpen, title: "Tarot Readings & Teaching" },
  { icon: Hash, title: "Numerology Consultations" },
  { icon: Heart, title: "Reiki Healing & Training" },
  { icon: Flower2, title: "Reiki Classes" },
  { icon: Star, title: "Spiritual Remedies" },
  { icon: Brain, title: "Therapy Sessions" },
  { icon: Moon, title: "Mental Health Support" },
];

const HomeServices = () => {
  return (
    <section id="services" className="py-20 lg:py-32 gradient-cosmic">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Welcome To
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              World Of Healing<br />And Transformation
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Ashi Pawaiya Jain, known as Ashray Wellness, is a Psychic, Numerologist, Master Reikist, & Psychologist guiding individuals worldwide with personalized healing, clarity, and balance.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-primary-foreground font-medium text-sm md:text-base">
                    {service.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button variant="golden" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </motion.div>

          {/* Decorative Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              {services.slice(0, 4).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="aspect-square rounded-full bg-background/10 border border-secondary/30 flex flex-col items-center justify-center p-6 hover:bg-background/20 transition-all duration-300"
                >
                  <service.icon className="w-12 h-12 text-secondary mb-3" />
                  <p className="text-primary-foreground font-semibold text-center text-sm">
                    {service.title}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
