import { motion } from "framer-motion";

const highlights = [
  {
    stat: "7+ Years",
    title: "Professional Practice",
    description:
      "Experience delivering structured mental wellness, therapy, and workplace support programs.",
  },
  {
    stat: "Global",
    title: "Client Reach",
    description:
      "Worked with individuals and organizations across India and international locations through online and offline sessions.",
  },
  {
    stat: "Trusted By",
    title: "Teams and Institutions",
    description:
      "Supported professionals, leadership teams, and growing organizations with practical, people-first wellness work.",
  },
  {
    stat: "Personalized",
    title: "Client-Centric Methodology",
    description:
      "Every engagement is tailored to emotional, psychological, and workplace realities rather than one-size-fits-all programming.",
  },
];

const WhyChooseMe = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground leading-tight">
            A Professional, Ethical and Results-Driven Mental Wellness Practice
          </h2>
          <p className="mt-5 text-foreground leading-relaxed">
            Ashray Wellness operates with a clear focus on credibility,
            confidentiality, and long-term impact for individuals, teams, and
            organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border rounded-2xl p-5 sm:p-6 bg-card"
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
