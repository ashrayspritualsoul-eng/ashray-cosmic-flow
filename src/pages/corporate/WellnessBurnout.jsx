import { motion } from "framer-motion";
import { Heart, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WellnessBurnout = () => {
  const benefits = [
    "Prevent employee burnout and fatigue",
    "Increase energy and motivation",
    "Improve work-life balance",
    "Enhance employee retention",
    "Boost overall team morale",
    "Create sustainable work practices",
  ];

  const features = [
    "Burnout risk assessments",
    "Wellness coaching sessions",
    "Work-life balance workshops",
    "Energy management training",
    "Recovery and rest strategies",
    "Organizational culture consulting",
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Employee Wellness & Burnout Prevention
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proactive strategies to maintain employee wellbeing and prevent
              workplace burnout, creating a sustainable and thriving work
              environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Employee Wellness & Burnout Prevention program helps
              organizations identify early warning signs, implement preventive
              measures, and create a culture that supports sustainable high
              performance without sacrificing wellbeing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 mb-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Prevent Burnout, Promote Wellness
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create a workplace where your employees can
              thrive without burning out.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8"
            >
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WellnessBurnout;
