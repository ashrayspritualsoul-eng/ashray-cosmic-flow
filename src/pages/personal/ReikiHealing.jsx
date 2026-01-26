import { motion } from "framer-motion";
import { Hand, CheckCircle2, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ReikiHealing = () => {
  const benefits = [
    "Reduce stress and promote relaxation",
    "Balance energy and chakras",
    "Support physical healing",
    "Enhance emotional wellbeing",
    "Improve mental clarity",
    "Strengthen spiritual connection",
  ];

  const services = [
    {
      title: "Reiki Healing Sessions",
      description: "Experience energy healing for balance and wellness",
      icon: Hand,
    },
    {
      title: "Reiki Training",
      description: "Learn to practice Reiki healing yourself",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
              <Hand className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reiki Healing & Training
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the transformative power of Reiki energy healing for
              physical, emotional, and spiritual balance, or learn to become a
              Reiki practitioner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Benefits of Reiki</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Experience Reiki Energy Healing
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a healing session or learn Reiki to bring balance and
              wellness into your life.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8"
            >
              <a href="/contact">Book Your Session</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReikiHealing;
