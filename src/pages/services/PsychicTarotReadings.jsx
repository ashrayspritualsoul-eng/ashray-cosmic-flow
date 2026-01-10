import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PsychicTarotReadings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/psychic-tarot-hero.jpg" 
            alt="Psychic and Tarot Readings"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
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
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Psychic & Tarot Readings
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl">
              Tap into the unseen realms of intuition and sacred wisdom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Images */}
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
                <h2 className="text-3xl font-bold text-card-foreground mb-6">Psychic Readings</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Psychic readings connect you with higher realms of consciousness, offering guidance, clarity, and profound insights into your life's journey. Through intuitive perception, I tap into energy fields to reveal hidden truths and spiritual guidance.
                </p>
                <p className="text-foreground leading-relaxed">
                  Whether seeking answers about relationships, career, or life's purpose, psychic readings illuminate your path and empower aligned choices.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/images/services/psychic-reading.jpg" 
                  alt="Psychic Reading"
                  className="rounded-2xl shadow-card w-full"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23667eea" width="600" height="400"/%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-golden rounded-full blur-3xl opacity-30"></div>
              </motion.div>
            </div>

            {/* Tarot Section with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 md:order-1"
              >
                <img 
                  src="/images/services/tarot-reading.jpg" 
                  alt="Tarot Reading"
                  className="rounded-2xl shadow-card w-full"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23764ba2" width="600" height="400"/%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl font-bold text-card-foreground mb-6">Tarot Readings</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Tarot is an ancient divination tool that reveals hidden influences through symbolic imagery and intuitive interpretation. Each card carries deep meaning, offering guidance on love, career, and life's mysteries.
                </p>
                <p className="text-foreground leading-relaxed">
                  I also offer comprehensive tarot teaching for those who wish to learn this sacred art, from beginner foundations to advanced techniques.
                </p>
              </motion.div>
            </div>

            {/* What You'll Receive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">What You'll Receive</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Star, text: "Past life insights & karmic patterns" },
                  { icon: Star, text: "Spiritual guidance for current situations" },
                  { icon: Star, text: "Intuitive clarity on life decisions" },
                  { icon: Star, text: "Energy reading & aura analysis" },
                  { icon: Star, text: "Tarot interpretations & symbolism" },
                  { icon: Star, text: "Future possibilities & outcomes" },
                  { icon: Star, text: "Personalized spiritual advice" },
                  { icon: Star, text: "Tarot learning & certification" },
                  { icon: Star, text: "Email summary included" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border shadow-soft">
                    <div className="w-8 h-8 rounded-full gradient-golden flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
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
                Ready to Gain Spiritual Clarity?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Book your psychic or tarot reading session and discover the insights waiting for you
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Book Your Reading
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

export default PsychicTarotReadings;
