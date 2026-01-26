import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PsychicReadings = () => {
  const benefits = [
    "Gain clarity on life decisions",
    "Connect with your higher self",
    "Understand your life path",
    "Receive spiritual guidance",
    "Unlock hidden potential",
  ];

  const sessionTypes = [
    {
      title: "30-Minute Reading",
      description: "Quick insights and guidance",
      price: "₹2,500",
    },
    {
      title: "60-Minute Reading",
      description: "In-depth exploration and clarity",
      price: "₹4,500",
    },
    {
      title: "90-Minute Deep Dive",
      description: "Comprehensive spiritual consultation",
      price: "₹6,500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Psychic Readings
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with divine guidance and unlock clarity about your life
              path, relationships, career, and spiritual journey through
              intuitive psychic readings.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">What You'll Gain</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Session Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Session Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sessionTypes.map((session, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Star className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {session.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {session.description}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {session.price}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ready for Your Reading?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your psychic reading session and receive divine guidance for
              your life journey.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8"
            >
              <a href="/">Book Your Reading</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PsychicReadings;
