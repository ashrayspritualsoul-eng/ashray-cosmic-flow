import { motion } from "framer-motion";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const LeadershipMindfulness = () => {
  const benefits = [
    "Develop mindful leadership skills",
    "Enhance decision-making clarity",
    "Improve focus and presence",
    "Build authentic leadership presence",
    "Foster compassionate management",
    "Create positive organizational culture",
  ];

  const features = [
    "Mindful leadership workshops",
    "Meditation and presence practices",
    "Conscious communication training",
    "Values-based leadership development",
    "Executive coaching sessions",
    "Team mindfulness initiatives",
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership & Mindfulness Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Develop mindful leaders who inspire and elevate their teams
              through conscious, present-focused leadership practices.
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
              Our Leadership & Mindfulness Programs integrate ancient wisdom
              with modern leadership principles, helping leaders cultivate
              presence, clarity, and compassion in their decision-making and
              team interactions.
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
              Cultivate Mindful Leadership
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your leadership team with mindfulness practices that
              drive authentic, effective leadership.
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

export default LeadershipMindfulness;
