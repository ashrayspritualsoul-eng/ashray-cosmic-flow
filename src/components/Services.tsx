import { motion } from "framer-motion";
import { Sparkles, Star, Hash, Heart, Brain } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Tarot Card Reading",
    description: "Unlock the mysteries of your past, present, and future through the sacred wisdom of tarot cards. Receive clarity and guidance for life's important decisions.",
  },
  {
    icon: Star,
    title: "Astrology Consultation",
    description: "Discover your cosmic blueprint through detailed birth chart analysis. Understand your strengths, challenges, and life purpose written in the stars.",
  },
  {
    icon: Hash,
    title: "Numerology Guidance",
    description: "Decode the hidden meanings in your numbers. From life path to destiny numbers, uncover the mathematical patterns guiding your journey.",
  },
  {
    icon: Heart,
    title: "Reiki Healing & Training",
    description: "Experience the transformative power of universal life energy. Restore balance, release blockages, and learn to channel healing energy yourself.",
  },
  {
    icon: Brain,
    title: "Emotional & Spiritual Counseling",
    description: "Navigate life's challenges with compassionate guidance. Integrate spiritual wisdom with practical solutions for emotional well-being.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
            Spiritual Guidance <span className="text-gradient">Tailored for You</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Each service is designed to help you connect with your higher self and navigate life with greater awareness and purpose.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl gradient-golden flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
