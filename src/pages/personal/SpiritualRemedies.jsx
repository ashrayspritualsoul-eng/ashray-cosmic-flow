import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SpiritualRemedies = () => {
  const benefits = [
    "Clear negative energy and blockages",
    "Enhance positive vibrations",
    "Attract abundance and prosperity",
    "Strengthen spiritual protection",
    "Improve relationships and harmony",
    "Support life transitions",
  ];

  const remedies = [
    "Crystal healing and placement",
    "Energy cleansing rituals",
    "Chakra balancing techniques",
    "Aura protection methods",
    "Manifestation practices",
    "Sacred space creation",
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Flame className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Spiritual Remedies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Personalized spiritual remedies and practices to clear blockages, enhance positive energy, 
              and support your spiritual wellbeing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Benefits of Spiritual Remedies</h2>
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
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Types of Remedies</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {remedies.map((remedy, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{remedy}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Transform Your Energy</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation to receive personalized spiritual remedies for your unique needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8"
            >
              <a href="/#contact">Book Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpiritualRemedies;