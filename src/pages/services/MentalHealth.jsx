import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Moon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const MentalHealth = () => {
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
              <Moon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Mental Health Support
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Compassionate support for complete mind-body-spirit wellness
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
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Holistic Mental Wellness</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Mental health is not just the absence of illness – it's a state of complete well-being encompassing emotional, psychological, and spiritual health. My mental health support services combine traditional psychological methods with spiritual healing modalities to address the root causes of mental distress.
              </p>
              <p className="text-foreground leading-relaxed">
                I provide a safe, supportive environment where you can explore your challenges, develop coping strategies, and work towards lasting healing and balance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">Support Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Anxiety relief techniques",
                  "Depression management",
                  "Trauma healing support",
                  "Emotional regulation skills",
                  "Mindfulness practices",
                  "Energy healing for mental health",
                  "Coping strategy development",
                  "Ongoing support and guidance"
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
                Get the Support You Deserve
              </h2>
              <p className="text-foreground mb-8">
                Reach out for compassionate mental health support
              </p>
              <Button variant="default" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Contact for Support
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

export default MentalHealth;
