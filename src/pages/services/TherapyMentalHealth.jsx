import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const TherapyMentalHealth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/therapy-hero.jpg" 
            alt="Therapy and Mental Health"
            className="w-full h-full object-cover"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="absolute inset-0 gradient-cosmic opacity-90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Therapy & Mental Health Support
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl">
              Holistic healing combining spiritual wisdom with psychological support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Overview with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-card-foreground mb-6">Holistic Mental Wellness</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  My therapy sessions integrate traditional psychological approaches with spiritual healing practices to address mental and emotional challenges holistically. True healing occurs on multiple levels – mental, emotional, physical, and spiritual.
                </p>
                <p className="text-foreground leading-relaxed">
                  I provide a safe, non-judgmental space for healing from anxiety, depression, relationship issues, and life transitions.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/images/services/therapy-session.jpg" 
                  alt="Therapy Session"
                  className="rounded-2xl shadow-card w-full"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%234facfe" width="600" height="400"/%3E%3C/svg%3E';
                  }}
                />
              </motion.div>
            </div>

            {/* What We Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">Areas of Support</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Anxiety & stress management",
                  "Depression support",
                  "Relationship challenges",
                  "Life transitions",
                  "Self-esteem building",
                  "Grief & loss processing",
                  "Spiritual crisis support",
                  "Trauma healing",
                  "Emotional balance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border shadow-soft">
                    <div className="w-8 h-8 rounded-full gradient-golden flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-cosmic p-12 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Begin Your Healing Journey
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Schedule a confidential therapy session in a safe, supportive environment
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Book Session
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TherapyMentalHealth;
