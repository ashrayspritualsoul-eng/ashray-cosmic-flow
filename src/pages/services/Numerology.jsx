import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Hash, Check } from "lucide-react";
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center mx-auto mb-6">
              <Hash className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Numerology Consultations
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Decode the hidden meanings in your numbers and discover your true potential
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
              <h2 className="text-3xl font-bold text-card-foreground mb-6">The Power of Numbers</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Numerology is the ancient science of numbers, revealing the mathematical patterns that guide your life journey. Every number carries a unique vibration and meaning, from your birth date to your name, offering deep insights into your personality, strengths, challenges, and life purpose.
              </p>
              <p className="text-foreground leading-relaxed">
                Through detailed numerological analysis, I help you understand these cosmic codes and use them to make empowered decisions in all areas of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Life path number analysis",
                  "Destiny number insights",
                  "Name numerology reading",
                  "Birth date significance",
                  "Relationship compatibility",
                  "Business name analysis",
                  "Lucky numbers and dates",
                  "Personal year forecasts"
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
                Discover Your Numbers
              </h2>
              <p className="text-foreground mb-8">
                Book a numerology consultation and unlock the wisdom in your numbers
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
