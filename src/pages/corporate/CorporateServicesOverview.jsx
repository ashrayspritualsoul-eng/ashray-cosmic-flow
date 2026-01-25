import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, Brain, Heart, TrendingUp, Sparkles, Award, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const corporateServices = [
  {
    icon: Brain,
    title: "Corporate Mental Health Programs",
    description: "Comprehensive mental health support tailored for your organization's unique needs.",
    href: "/corporate-services/mental-health",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Employee Wellness & Burnout Prevention",
    description: "Proactive strategies to maintain employee wellbeing and prevent workplace burnout.",
    href: "/corporate-services/wellness-burnout",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Therapy & Counseling Services",
    description: "Professional therapy and counseling support for your team members.",
    href: "/corporate-services/therapy-counseling",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Stress Management Workshops",
    description: "Interactive workshops teaching practical stress management techniques.",
    href: "/corporate-services/stress-management",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Emotional Intelligence & Resilience Training",
    description: "Build emotional intelligence and resilience across your organization.",
    href: "/corporate-services/emotional-intelligence",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Award,
    title: "Leadership & Mindfulness Programs",
    description: "Develop mindful leaders who inspire and elevate their teams.",
    href: "/corporate-services/leadership-mindfulness",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "Holistic Wellness Add-ons",
    description: "Complementary wellness services including energy healing and spiritual guidance.",
    href: "/corporate-services/holistic-wellness",
    color: "from-teal-500 to-cyan-500",
  },
];

const CorporateServicesOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Corporate Wellness Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Transform Your Workplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive corporate wellness programs designed to enhance employee wellbeing, 
              boost productivity, and create a thriving organizational culture.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className="block h-full p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-primary/50 transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workplace?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss how our corporate wellness programs can benefit your organization.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8"
              >
                <a href="/#contact">Book Corporate Consultation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateServicesOverview;