import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Hash, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Numerology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 gradient-cosmic">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center">
                <Hash className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Numerology Consultations
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Decode the hidden meanings in your numbers and discover the mathematical patterns that guide your journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">The Science of Numbers</h2>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Numerology is the ancient study of numbers and their mystical significance. Each number carries a unique vibration and meaning that influences your life path, personality, relationships, and destiny.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                Through numerology consultations, I analyze your birth date, name, and other significant numbers to reveal insights about your strengths, challenges, and life purpose.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Life path number analysis",
                  "Destiny number interpretation",
                  "Soul urge number insights",
                  "Name numerology reading",
                  "Birth date significance",
                  "Compatibility analysis",
                  "Business name numerology",
                  "Lucky numbers and dates"
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

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-8 gradient-golden rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Unlock Your Numbers' Secrets
              </h2>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Book a numerology consultation and discover what your numbers reveal.
              </p>
              <Button variant="default" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Book Consultation
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

export default Numerology;
