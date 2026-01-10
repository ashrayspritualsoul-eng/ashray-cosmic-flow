import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Therapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 gradient-cosmic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Therapy Sessions
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Holistic mental wellness combining spiritual wisdom with psychological understanding
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Spiritual-Psychological Approach</h2>
              <p className="text-foreground leading-relaxed mb-4">
                My therapy sessions integrate traditional psychological approaches with spiritual healing practices to address mental and emotional challenges holistically. This unique approach recognizes that true healing occurs on multiple levels – mental, emotional, physical, and spiritual.
              </p>
              <p className="text-foreground leading-relaxed">
                Whether you're dealing with anxiety, depression, relationship issues, or life transitions, I provide a safe, non-judgmental space for healing and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">What We Address</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Anxiety and stress management",
                  "Depression and mood disorders",
                  "Relationship challenges",
                  "Life transitions and changes",
                  "Self-esteem and confidence",
                  "Grief and loss processing",
                  "Spiritual crisis support",
                  "Personal growth and development"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-golden flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-4">
                Begin Your Healing Journey
              </h2>
              <p className="text-foreground mb-8">
                Schedule a confidential therapy session today
              </p>
              <Button variant="default" size="xl" asChild>
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

export default Therapy;
