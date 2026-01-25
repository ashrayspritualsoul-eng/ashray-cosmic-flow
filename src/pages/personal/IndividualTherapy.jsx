import { motion } from "framer-motion";
import { Heart, CheckCircle2, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const IndividualTherapy = () => {
  const benefits = [
    "Confidential and safe therapeutic space",
    "Address anxiety, depression, and stress",
    "Develop healthy coping strategies",
    "Improve self-awareness and growth",
    "Work through trauma and life challenges",
    "Enhance emotional wellbeing",
  ];

  const approaches = [
    "Cognitive Behavioral Therapy (CBT)",
    "Mindfulness-based therapy",
    "Trauma-informed care",
    "Solution-focused therapy",
    "Holistic wellness integration",
    "Personalized treatment plans",
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Individual Therapy Sessions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional one-on-one therapy sessions to support your mental health, emotional wellbeing, 
              and personal growth journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-4">Why Choose Individual Therapy?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Individual therapy provides a confidential, supportive environment where you can explore your thoughts, 
              feelings, and behaviors with a qualified mental health professional. Together, we'll work towards 
              your personal goals and improved wellbeing.
            </p>
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
            <h2 className="text-2xl font-bold mb-6">Therapeutic Approaches</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {approaches.map((approach, index) => (
                <li key={index} className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{approach}</span>
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
            <h2 className="text-3xl font-bold mb-4">Start Your Healing Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards better mental health and emotional wellbeing.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8"
            >
              <a href="/#contact">Book Therapy Session</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndividualTherapy;