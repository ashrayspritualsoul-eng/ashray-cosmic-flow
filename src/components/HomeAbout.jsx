import { motion } from "framer-motion";
import {
  Brain,
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
  { icon: Brain, text: "Mental Wellness Expertise" },
  { icon: Heart, text: "Compassionate Therapeutic Support" },
  { icon: Shield, text: "Confidential and Ethical Practice" },
  { icon: Star, text: "7+ Years Experience" },
];

const services = [
  { title: "Employee Mental Health", image: "/images/psychology.jpg" },
  { title: "Stress & Burnout Prevention", image: "/images/support.jpeg" },
  { title: "Leadership Wellbeing", image: "/images/therapy.jpg" },
  { title: "Individual Therapy", image: "/images/therapyPage.jpeg" },
];

const contactInfo = [
  { icon: Phone, label: "+91 93402 16182" },
  { icon: Mail, label: "ashrayspiritualsoul@gmail.com" },
  { icon: MessageCircle, label: "+91 93402 16182" },
  { icon: MapPin, label: "Bhopal, Madhya Pradesh, India" },
];

const HomeAbout = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {services.map((service, index) => (
              <Link key={index} to="/corporate-services" className="block focus:outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="relative h-52 sm:h-56 rounded-2xl overflow-hidden border border-border bg-black shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[1px]"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <h3 className="text-lg font-semibold text-white tracking-wide transform transition-transform duration-300 group-hover:-translate-y-2">
                      {service.title}
                    </h3>
                    <span className="mt-1 text-sm text-white/80 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore Service
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              About Us
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Ashray Wellness
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Ashray Wellness is a mental wellness practice for organizations
              and individuals seeking resilient, healthier ways to work and
              live. We combine structured support, practical tools, and a
              human-centered approach to stress, burnout, leadership pressure,
              and emotional wellbeing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

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

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild className="w-full sm:w-auto">
                <a
                  href="https://wa.me/919340216182"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on WhatsApp
                </a>
              </Button>

              <Button variant="outline" asChild className="w-full sm:w-auto">
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
