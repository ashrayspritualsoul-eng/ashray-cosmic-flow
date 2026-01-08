import { motion } from "framer-motion";
import { Sparkles, Heart, Shield, Star } from "lucide-react";

const About = () => {
  const features = [
    { icon: Sparkles, text: "Certified Astrologer" },
    { icon: Heart, text: "Reiki Master" },
    { icon: Shield, text: "Trusted Guide" },
    { icon: Star, text: "10+ Years Experience" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <div className="absolute inset-0 gradient-cosmic opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-secondary flex items-center justify-center bg-primary/20">
                    <span className="text-5xl font-bold text-secondary">A</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">Ashi Pawaiya Jain</h3>
                  <p className="text-secondary font-medium">Ashray Wellness</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-30 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6 leading-tight">
              Your Spiritual Guide to{" "}
              <span className="text-gradient">Inner Peace</span>
            </h2>
            
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Welcome, I'm <strong>Ashi Pawaiya Jain</strong>, the soul behind Ashray Wellness. 
                With over a decade of experience in the mystical arts, I've dedicated my life 
                to helping individuals navigate their spiritual journey with clarity and confidence.
              </p>
              <p>
                My practice combines the ancient wisdom of Vedic astrology, the intuitive art of 
                tarot reading, the mathematical precision of numerology, and the healing power of 
                Reiki. Each consultation is a sacred space where we explore your unique cosmic 
                blueprint together.
              </p>
              <p>
                Whether you're seeking guidance on love, career, health, or spiritual growth, 
                I'm here to illuminate your path with compassion, honesty, and deep understanding. 
                Every soul deserves to feel aligned with their true purpose.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full border border-secondary"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
