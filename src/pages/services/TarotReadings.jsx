import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Check } from "lucide-react";
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Tarot Readings & Teaching
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Unlock the mysteries of your past, present, and future through the sacred wisdom of tarot cards
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
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Tarot Reading Services</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Tarot is an ancient divination tool that reveals the hidden influences in your life, providing guidance through symbolic imagery and intuitive interpretation. Whether you're seeking answers about love, career, or life's purpose, tarot readings offer profound insights and clarity.
              </p>
              <p className="text-foreground leading-relaxed">
                I also offer comprehensive tarot teaching for those who wish to learn this sacred art, from beginner foundations to advanced reading techniques and professional certification.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">Services Offered</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Relationship and love readings",
                  "Career and financial guidance",
                  "Life path and purpose clarity",
                  "Decision-making guidance",
                  "Beginner tarot courses",
                  "Advanced reading techniques",
                  "Professional tarot certification",
                  "One-on-one mentorship"
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
                Ready to Explore Tarot Wisdom?
              </h2>
              <p className="text-foreground mb-8">
                Book a tarot reading or start your tarot learning journey today
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
