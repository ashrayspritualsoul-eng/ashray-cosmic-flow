import { motion } from "framer-motion";
import { UserCheck, Lock, Globe, Leaf } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Personalized Guidance",
    description: "Every reading is tailored to your unique energy and circumstances. No generic predictions—only insights meant for you.",
  },
  {
    icon: Lock,
    title: "Confidential & Ethical",
    description: "Your privacy is sacred. All consultations are held in strict confidence, with ethics and integrity at the heart of every session.",
  },
  {
    icon: Globe,
    title: "Worldwide Clients",
    description: "Serving seekers across the globe with online consultations. Distance is no barrier to spiritual connection.",
  },
  {
    icon: Leaf,
    title: "Holistic Approach",
    description: "Integrating mind, body, and spirit for complete well-being. True healing comes from addressing all aspects of your being.",
  },
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 lg:py-32 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Why Choose Me
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6 leading-tight">
              A Journey of Trust,{" "}
              <span className="text-gradient">Healing & Transformation</span>
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              When you choose Ashray Wellness, you're choosing a sacred partnership 
              on your spiritual journey. My commitment is to guide you with honesty, 
              compassion, and deep respect for your unique path.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "5000+", label: "Happy Clients" },
                { number: "15+", label: "Countries Served" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
