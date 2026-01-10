import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TarotReadings = () => {
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
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Tarot Readings & Teaching
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Unlock the mysteries of your past, present, and future through the sacred wisdom of tarot cards
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">About Tarot Readings</h2>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Tarot is an ancient divination system that uses symbolic imagery to provide guidance and insights. Each card carries deep meaning and when combined in a reading, they reveal patterns, opportunities, and wisdom about your life's journey.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                Beyond readings, I also offer comprehensive tarot teaching programs for those who wish to learn this sacred art and develop their own intuitive abilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Services Offered</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Relationship guidance and compatibility",
                  "Career and financial insights",
                  "Life path clarity and purpose",
                  "Decision-making support",
                  "Beginner tarot courses",
                  "Advanced tarot techniques",
                  "Tarot certification programs",
                  "One-on-one mentorship"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 gradient-golden rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Discover Your Path Through Tarot
              </h2>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Book a tarot reading or enroll in a tarot course to begin your journey.
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

export default TarotReadings;
