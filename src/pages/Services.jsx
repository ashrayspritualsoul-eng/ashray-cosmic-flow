import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Hash, Heart, Star, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Psychic & Tarot Readings",
    description: "Tap into the unseen realms through psychic intuition and tarot wisdom. Receive profound insights about your past, present, and future. Whether seeking clarity on relationships, career, or life purpose, these readings illuminate your path forward.",
    features: ["Psychic readings", "Tarot card interpretations", "Life path guidance", "Relationship insights"],
    image: "/images/services/psychic-tarot.jpg",
    href: "/services/psychic-tarot-readings"
  },
  {
    icon: Hash,
    title: "Numerology Consultations",
    description: "Decode the hidden meanings in your numbers. From life path to destiny numbers, uncover the mathematical patterns that guide your journey and reveal your true potential through personalized numerological analysis.",
    features: ["Life path analysis", "Name numerology", "Birth date readings", "Compatibility reports"],
    image: "/images/services/numerology.jpg",
    href: "/services/numerology"
  },
  {
    icon: Heart,
    title: "Reiki Healing & Training",
    description: "Experience the transformative power of universal life energy. Restore balance, release blockages, and learn to channel healing energy for yourself and others through certified Reiki training programs from beginner to master level.",
    features: ["Reiki healing sessions", "Chakra balancing", "Level 1-3 certification", "Distance healing"],
    image: "/images/services/reiki.jpg",
    href: "/services/reiki-healing"
  },
  {
    icon: Star,
    title: "Spiritual Remedies",
    description: "Receive personalized spiritual remedies to overcome obstacles, attract positivity, and align with your highest good. Ancient practices combined with modern understanding for effective energy transformation.",
    features: ["Customized rituals", "Crystal healing", "Mantra guidance", "Feng Shui tips"],
    image: "/images/services/spiritual-remedies.jpg",
    href: "/services/spiritual-remedies"
  },
  {
    icon: Brain,
    title: "Therapy & Mental Health Support",
    description: "Integrate spiritual wisdom with psychological understanding for holistic mental wellness. Compassionate support combining traditional therapy with spiritual healing for anxiety, depression, and life challenges.",
    features: ["Holistic therapy", "Anxiety relief", "Depression support", "Spiritual counseling"],
    image: "/images/services/therapy.jpg",
    href: "/services/therapy-mental-health"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner with Background Image */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services-hero.jpg" 
            alt="Services Background"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 gradient-cosmic opacity-90"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            World Of Healing<br />And Transformation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/90 text-lg max-w-2xl mx-auto"
          >
            Each service is designed to help you connect with your higher self and navigate life with greater awareness and purpose.
          </motion.p>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href} className="block h-full">
                  <div className="h-full bg-card rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23667eea" width="400" height="300"/%3E%3C/svg%3E';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl gradient-golden flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-3">
                        {service.title}
                      </h3>

                      <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/cta-bg.jpg" 
            alt="Book Consultation Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 gradient-cosmic opacity-95"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
          >
            Ready to Begin Your Healing Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8"
          >
            Book a consultation today and take the first step towards transformation, clarity, and inner peace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
