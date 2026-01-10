import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReikiHealing = () => {
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
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Reiki Healing & Training
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Experience the transformative power of universal life energy
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
              <h2 className="text-3xl font-bold text-card-foreground mb-6">What is Reiki?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Reiki is a Japanese energy healing technique that promotes relaxation, reduces stress, and encourages healing through the channeling of universal life force energy. This gentle yet powerful practice works on physical, emotional, mental, and spiritual levels.
              </p>
              <p className="text-foreground leading-relaxed">
                I offer both Reiki healing sessions and comprehensive training programs to help you learn this sacred healing art and become a certified Reiki practitioner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">Healing & Training Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Chakra balancing sessions",
                  "Distance healing available",
                  "Reiki Level 1 certification",
                  "Reiki Level 2 certification",
                  "Reiki Level 3 / Master training",
                  "Master Teacher certification",
                  "Energy clearing rituals",
                  "Personalized healing plans"
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
                Begin Your Reiki Journey
              </h2>
              <p className="text-foreground mb-8">
                Experience healing or learn to heal yourself and others
              </p>
              <Button variant="default" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Book Session or Training
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

export default ReikiHealing;
