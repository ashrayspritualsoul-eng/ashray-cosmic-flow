import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpiritualRemedies = () => {
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
              <Star className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Spiritual Remedies
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Personalized spiritual practices to overcome obstacles and attract positivity
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
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Ancient Wisdom, Modern Solutions</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Spiritual remedies combine ancient practices with modern understanding to address specific challenges in your life. Whether you're facing obstacles in relationships, career, health, or personal growth, customized spiritual remedies can help shift energy patterns and create positive change.
              </p>
              <p className="text-foreground leading-relaxed">
                These remedies may include rituals, crystals, mantras, prayers, and energy work tailored specifically to your unique situation and needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-card-foreground mb-8">Available Remedies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Customized ritual ceremonies",
                  "Crystal healing placements",
                  "Mantra and prayer guidance",
                  "Feng Shui consultations",
                  "Protection practices",
                  "Abundance rituals",
                  "Relationship harmonization",
                  "Chakra balancing remedies"
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
                Get Your Personalized Remedy
              </h2>
              <p className="text-foreground mb-8">
                Consult for customized spiritual solutions to your challenges
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

export default SpiritualRemedies;
