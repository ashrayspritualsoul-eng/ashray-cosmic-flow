import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TarotReadings = () => {
  const benefits = [
    "Gain insights into past, present, and future",
    "Understand relationship dynamics",
    "Clarify career and life decisions",
    "Discover hidden influences",
    "Receive spiritual guidance",
  ];

  const services = [
    {
      title: "Tarot Readings",
      description: "Comprehensive card readings for life guidance",
      icon: Sparkles,
    },
    {
      title: "Tarot Teaching",
      description: "Learn to read tarot cards yourself",
      icon: BookOpen,
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tarot Readings & Teaching
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the ancient wisdom of tarot cards to gain clarity, insight, and guidance 
              for your life's journey, or learn to read tarot yourself.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Benefits of Tarot</h2>
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
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
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
            <h2 className="text-3xl font-bold mb-4">Begin Your Tarot Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're seeking a reading or want to learn tarot yourself, we're here to guide you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8"
            >
              <a href="/#contact">Book Your Session</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TarotReadings;