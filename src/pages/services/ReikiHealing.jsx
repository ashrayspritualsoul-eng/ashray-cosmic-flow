import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReikiHealing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 gradient-cosmic">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Reiki Healing & Training
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Experience the transformative power of universal life energy and learn to channel healing
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">What is Reiki?</h2>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Reiki is a Japanese healing technique that uses universal life energy to promote physical, emotional, mental, and spiritual healing. The word "Reiki" means "universal life energy" - the vital force that flows through all living things.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                As a certified Reiki Master Teacher, I offer both healing sessions and comprehensive training programs for those who wish to learn this powerful healing modality.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Services Offered</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Individual healing sessions",
                  "Chakra balancing therapy",
                  "Distance/remote healing",
                  "Reiki Level 1 certification",
                  "Reiki Level 2 certification",
                  "Reiki Level 3 (Master) training",
                  "Master Teacher certification",
                  "Personalized healing plans"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 p-8 bg-card rounded-2xl border border-border shadow-soft">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Benefits of Reiki</h2>
              <ul className="space-y-4">
                {[
                  "Reduces stress and promotes deep relaxation",
                  "Accelerates natural healing processes",
                  "Balances energy and removes blockages",
                  "Enhances mental clarity and emotional well-being",
                  "Supports recovery from illness and injury",
                  "Improves sleep quality",
                  "Strengthens immune system function"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-foreground text-lg">{benefit}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-8 gradient-golden rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Begin Your Reiki Journey
              </h2>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Book a healing session or enroll in a Reiki certification course today.
              </p>
              <Button variant="default" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Get Started
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
