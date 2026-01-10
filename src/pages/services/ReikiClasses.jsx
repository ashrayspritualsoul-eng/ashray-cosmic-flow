import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Flower2, Check, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReikiClasses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 gradient-cosmic">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl gradient-golden flex items-center justify-center">
                <Flower2 className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Reiki Classes & Certification
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Learn the sacred healing art through comprehensive training programs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Comprehensive Reiki Training</h2>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Join comprehensive Reiki training programs designed for beginners to advanced practitioners. Whether you want to heal yourself and others, or become a professional Reiki practitioner, these courses provide everything you need.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                All courses include theoretical knowledge, practical techniques, attunements, and certification upon completion.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Course Options</h2>
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Reiki Level 1 (Shoden)</h3>
                  <p className="text-foreground mb-4">Foundation course for beginners. Learn basic hand positions, self-healing techniques, and receive your first attunement.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Self-healing", "Hand positions", "Energy sensing", "First attunement"].map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-secondary/20 text-card-foreground rounded-full">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Reiki Level 2 (Okuden)</h3>
                  <p className="text-foreground mb-4">Advanced techniques including distance healing and working with Reiki symbols.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Reiki symbols", "Distance healing", "Mental/emotional healing", "Second attunement"].map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-secondary/20 text-card-foreground rounded-full">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Reiki Level 3 - Master (Shinpiden)</h3>
                  <p className="text-foreground mb-4">Master level training to deepen your practice and prepare for teaching others.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Master symbol", "Advanced techniques", "Teaching preparation", "Master attunement"].map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-secondary/20 text-card-foreground rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Class Formats</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Group classes (weekend workshops)",
                  "One-on-one personalized training",
                  "Attunement sessions",
                  "Practical healing workshops",
                  "Online and in-person options",
                  "Flexible scheduling",
                  "Lifetime support",
                  "Certification provided"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-8 gradient-golden rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Ready to Become a Reiki Practitioner?
              </h2>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Enroll in a Reiki course and begin your journey as a healer.
              </p>
              <Button variant="default" size="xl" asChild>
                <a href="https://wa.me/919340216182" target="_blank" rel="noopener noreferrer">
                  Enroll Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReikiClasses;
