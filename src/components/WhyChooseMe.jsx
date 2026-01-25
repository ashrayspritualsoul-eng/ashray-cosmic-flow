import { motion } from "framer-motion";

const highlights = [
  {
    stat: "7+ Years",
    title: "Professional Practice",
    description:
      "Extensive experience delivering structured wellness, healing, and guidance sessions with consistent results.",
  },
  {
    stat: "Global",
    title: "Client Reach",
    description:
      "Worked with individuals and organizations across India and international locations through online and offline sessions.",
  },
  {
    stat: "Trusted By",
    title: "Leading Platforms & Institutions",
    description:
      "Associated with well-known platforms such as Astrotalk and Nebula, and collaborated with organizations including Accenture and the Indian Airforce.",
  },
  {
    stat: "Personalized",
    title: "Client-Centric Methodology",
    description:
      "Every engagement is customized—whether personal or corporate—to align with specific emotional, psychological, and professional needs.",
  },
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground leading-tight">
            A Professional, Ethical & Results-Driven Wellness Practice
          </h2>
          <p className="mt-5 text-foreground leading-relaxed">
            Ashray Wellness operates with a clear focus on credibility,
            confidentiality, and long-term impact—serving individuals,
            professionals, and organizations with equal commitment.
          </p>
        </motion.div>

        {/* Proof Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-border pt-6"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {item.stat}
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
