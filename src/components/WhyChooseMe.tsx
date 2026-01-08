import { motion } from "framer-motion";
import { Globe, Sparkles, Users, Heart } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Trusted by clients from around the world, delivering transformative guidance across cultures and backgrounds.",
  },
  {
    icon: Sparkles,
    title: "Diverse Expertise",
    description: "A unique combination of spiritual wisdom and psychological mastery for holistic healing.",
  },
  {
    icon: Users,
    title: "Proven Experience",
    description: "Collaborated with top platforms like Astrotalk and Nebula, and respected organizations like Accenture and the Airforce.",
  },
  {
    icon: Heart,
    title: "Personalized Approach",
    description: "Tailored solutions designed to address each client's specific challenges and goals.",
  },
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 lg:py-32 gradient-soft relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-tertiary/20 to-secondary/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground">
            Why Choose <span className="text-gradient">Ashray Wellness</span>?
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 shadow-card"
              >
                <reason.icon className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
