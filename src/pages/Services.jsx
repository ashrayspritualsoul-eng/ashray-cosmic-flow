import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Shield, Heart, Users, Briefcase, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "Corporate Mental Health Programs",
    description:
      "Structured workplace mental health support designed to help organizations respond proactively to stress, anxiety, and emotional strain at work.",
    features: [
      "Mental health awareness sessions",
      "Employee support pathways",
      "Wellbeing assessments",
      "Manager enablement",
    ],
    image: "/images/psychology.jpg",
    href: "/corporate-services/mental-health",
  },
  {
    icon: Users,
    title: "Burnout Prevention",
    description:
      "Practical interventions that help teams recognize overload early, rebalance expectations, and build healthier work rhythms.",
    features: [
      "Burnout risk workshops",
      "Resilience building",
      "Workload reflection",
      "Recovery practices",
    ],
    image: "/images/support.jpeg",
    href: "/corporate-services/wellness-burnout",
  },
  {
    icon: Heart,
    title: "Therapy and Counseling",
    description:
      "Confidential therapeutic support for employees and leaders navigating personal stress, transitions, emotional fatigue, or workplace challenges.",
    features: [
      "One-on-one counseling",
      "Short-term support plans",
      "Emotional wellbeing care",
      "Individual therapy options",
    ],
    image: "/images/therapy.jpg",
    href: "/corporate-services/therapy-counseling",
  },
  {
    icon: Shield,
    title: "Stress Management Workshops",
    description:
      "Actionable workshops that help teams manage pressure, improve focus, and respond to demanding environments in sustainable ways.",
    features: [
      "Stress education",
      "Breathing and grounding tools",
      "Boundaries and recovery",
      "Applied coping strategies",
    ],
    image: "/images/meditation.jpg",
    href: "/corporate-services/stress-management",
  },
  {
    icon: LineChart,
    title: "Emotional Intelligence and Resilience",
    description:
      "Programs that strengthen self-awareness, communication, empathy, and adaptability across teams and leadership groups.",
    features: [
      "Emotional awareness",
      "Communication skills",
      "Conflict resilience",
      "Reflective leadership",
    ],
    image: "/images/relationship.jpeg",
    href: "/corporate-services/emotional-intelligence",
  },
  {
    icon: Briefcase,
    title: "Leadership and Mindfulness",
    description:
      "Support for leaders who need steadier decision-making, better emotional regulation, and healthier team dynamics under pressure.",
    features: [
      "Mindful leadership",
      "Leadership coaching themes",
      "Decision clarity",
      "Team wellbeing practices",
    ],
    image: "/images/services-hero.jpg",
    href: "/corporate-services/leadership-mindfulness",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-cosmic opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Corporate Mental Wellness
            <br />
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/90 text-lg max-w-3xl mx-auto mb-8"
          >
            From prevention to support, Ashray Wellness helps organizations
            create healthier cultures with structured, people-centered mental
            wellness services.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Designed for modern organizations that want a more sustainable,
              emotionally healthy way of working.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href} className="block h-full">
                  <div className="h-full bg-card rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl gradient-golden flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-3">
                        {service.title}
                      </h3>

                      <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need Support for Individuals Too?
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Alongside workplace programs, Ashray Wellness offers individual
              therapy for personal mental and emotional support.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/services/therapy">Explore Individual Therapy</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
