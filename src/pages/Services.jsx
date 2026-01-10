import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Star, Hash, Heart, Brain, BookOpen, Flower2, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Psychic Readings",
    description: "Tap into the unseen realms of intuition and receive profound insights about your life's journey. Psychic readings help you understand hidden patterns, receive spiritual guidance, and gain clarity on situations that seem unclear.",
    features: ["Past life insights", "Spiritual guidance", "Intuitive clarity", "Energy reading"],
  },
  {
    icon: BookOpen,
    title: "Tarot Readings & Teaching",
    description: "Unlock the mysteries of your past, present, and future through the sacred wisdom of tarot cards. Learn the ancient art of tarot reading through personalized teaching sessions.",
    features: ["Relationship guidance", "Career insights", "Life path clarity", "Tarot certification courses"],
  },
  {
    icon: Hash,
    title: "Numerology Consultations",
    description: "Decode the hidden meanings in your numbers. From life path to destiny numbers, uncover the mathematical patterns that guide your journey and reveal your true potential.",
    features: ["Name analysis", "Birth date readings", "Compatibility analysis", "Business numerology"],
  },
  {
    icon: Heart,
    title: "Reiki Healing & Training",
    description: "Experience the transformative power of universal life energy. Restore balance, release blockages, and learn to channel healing energy for yourself and others through certified training.",
    features: ["Chakra balancing", "Distance healing", "Reiki Level 1-3 certification", "Master Teacher training"],
  },
  {
    icon: Flower2,
    title: "Reiki Classes",
    description: "Join comprehensive Reiki training programs designed for beginners to advanced practitioners. Learn the sacred healing art and become a certified Reiki practitioner.",
    features: ["Group classes", "One-on-one training", "Attunement sessions", "Practical workshops"],
  },
  {
    icon: Star,
    title: "Spiritual Remedies",
    description: "Receive personalized spiritual remedies to overcome obstacles, attract positivity, and align with your highest good. Ancient practices combined with modern understanding.",
    features: ["Customized rituals", "Crystal healing", "Mantra guidance", "Feng Shui tips"],
  },
  {
    icon: Brain,
    title: "Therapy Sessions",
    description: "Integrate spiritual wisdom with psychological understanding for holistic mental wellness. Address anxiety, depression, and life challenges with a unique spiritual-psychological approach.",
    features: ["Cognitive therapy", "Spiritual counseling", "Stress management", "Life coaching"],
  },
  {
    icon: Moon,
    title: "Mental Health Support",
    description: "Compassionate support for your mental well-being combining traditional psychology with spiritual healing modalities for complete mind-body-spirit wellness.",
    features: ["Anxiety relief", "Depression support", "Trauma healing", "Emotional balance"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 gradient-cosmic">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            World Of Healing<br />And Transformation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Each service is designed to help you connect with your higher self and navigate life with greater awareness and purpose.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl gradient-golden flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-secondary/20 text-card-foreground rounded-full border border-secondary/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-cosmic">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
          >
            Ready to Begin Your Healing Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8"
          >
            Book a consultation today and take the first step towards transformation, clarity, and inner peace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
