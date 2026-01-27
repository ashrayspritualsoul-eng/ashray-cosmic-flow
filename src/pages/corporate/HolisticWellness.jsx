import { motion } from "framer-motion";
import { Sparkles, Heart, Leaf, Sun, Moon, Waves, CheckCircle2, ArrowRight, Zap, Apple, Activity, Wind, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HolisticWellness = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Enhanced Physical Health",
      description: "Improve cardiovascular health, flexibility, strength, and overall physical vitality through holistic practices",
      stat: "78%",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop"
    },
    {
      icon: Sun,
      title: "Mental Clarity & Focus",
      description: "Sharpen concentration, reduce mental fog, and enhance cognitive performance through mindful movement and nutrition",
      stat: "72%",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop"
    },
    {
      icon: Waves,
      title: "Emotional Balance",
      description: "Regulate emotions, reduce anxiety and depression, and cultivate inner peace through integrated wellness practices",
      stat: "69%",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop"
    },
    {
      icon: Leaf,
      title: "Sustainable Energy",
      description: "Boost natural energy levels, improve sleep quality, and maintain vitality throughout the day",
      stat: "75%",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop"
    },
  ];

  const offerings = [
    {
      title: "Yoga & Movement Therapy",
      description: "Integrate physical postures, breathwork, and meditation to enhance flexibility, strength, and mind-body connection.",
      features: [
        "Hatha & Vinyasa yoga classes",
        "Therapeutic yoga for stress relief",
        "Chair yoga for accessibility",
        "Breathwork & pranayama sessions",
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop"
    },
    {
      title: "Meditation & Mindfulness",
      description: "Cultivate present-moment awareness, reduce mental chatter, and access deeper states of calm and clarity.",
      features: [
        "Guided meditation sessions",
        "Body scan practices",
        "Loving-kindness meditation",
        "Mindful walking exercises",
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop"
    },
    {
      title: "Nutrition & Wellness Coaching",
      description: "Optimize health through personalized nutrition guidance, meal planning, and sustainable lifestyle habits.",
      features: [
        "Nutritional assessments",
        "Personalized meal plans",
        "Healthy eating workshops",
        "Hydration & supplementation guidance",
      ],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop"
    },
    {
      title: "Sound Healing & Music Therapy",
      description: "Experience therapeutic vibrations through singing bowls, gongs, and guided sound journeys for deep relaxation.",
      features: [
        "Tibetan singing bowl sessions",
        "Gong bath experiences",
        "Binaural beats therapy",
        "Group sound healing circles",
      ],
      image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=600&auto=format&fit=crop"
    },
    {
      title: "Aromatherapy & Essential Oils",
      description: "Harness the healing power of plant essences to reduce stress, improve mood, and enhance overall wellbeing.",
      features: [
        "Custom essential oil blends",
        "Aromatherapy workshops",
        "Diffuser protocols for workspace",
        "Stress-relief rollers",
      ],
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop"
    },
    {
      title: "Nature-Based Wellness",
      description: "Connect with nature through outdoor activities, forest bathing, and ecotherapy for mental restoration.",
      features: [
        "Guided nature walks",
        "Forest bathing sessions",
        "Outdoor meditation retreats",
        "Grounding exercises",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop"
    },
    {
      title: "Energy Healing & Reiki",
      description: "Balance subtle energy systems through Reiki, chakra healing, and other energy medicine modalities.",
      features: [
        "Reiki healing sessions",
        "Chakra balancing treatments",
        "Energy assessment & clearing",
        "Crystal healing therapy",
      ],
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop"
    },
    {
      title: "Massage & Bodywork",
      description: "Release physical tension, improve circulation, and promote deep relaxation through therapeutic touch.",
      features: [
        "Stress-relief massage",
        "Seated chair massage",
        "Reflexology sessions",
        "Myofascial release therapy",
      ],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&auto=format&fit=crop"
    },
    {
      title: "Art & Creative Expression Therapy",
      description: "Process emotions and foster self-discovery through painting, drawing, music, and creative activities.",
      features: [
        "Therapeutic art sessions",
        "Mandala creation workshops",
        "Journaling & creative writing",
        "Music & movement expression",
      ],
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&auto=format&fit=crop"
    },
  ];

  const whyItMatters = [
    {
      stat: "87%",
      label: "Of employees want holistic wellness programs beyond basic healthcare",
      icon: Heart,
    },
    {
      stat: "60%",
      label: "Reduction in stress levels with integrated wellness practices",
      icon: Waves,
    },
    {
      stat: "45%",
      label: "Decrease in healthcare costs with preventive wellness programs",
      icon: Apple,
    },
    {
      stat: "83%",
      label: "Of participants report improved work-life balance",
      icon: Activity,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Wellness Needs Assessment",
      description: "Evaluate employee wellness interests, current health challenges, and organizational wellness culture to identify priorities.",
    },
    {
      step: "02",
      title: "Customized Program Design",
      description: "Create a tailored blend of holistic wellness offerings that complement your core services and meet employee needs.",
    },
    {
      step: "03",
      title: "Flexible Implementation",
      description: "Deliver wellness add-ons through on-site sessions, virtual offerings, or hybrid models to maximize accessibility.",
    },
    {
      step: "04",
      title: "Ongoing Evaluation",
      description: "Track participation, gather feedback, and refine programs to ensure sustained engagement and measurable wellness outcomes.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-b from-muted/30 via-background to-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-6 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 -right-40 w-96 h-96 bg-secondary/40 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-20 -left-40 w-96 h-96 bg-tertiary/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  Corporate Wellness Solutions
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  Holistic Wellness
                  <span className="block mt-2 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Add-ons</span>
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Complement your core wellness programs with transformative holistic services. From yoga and meditation to nutrition and energy healing, our add-ons create comprehensive wellness experiences that nurture mind, body, and spirit.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                    asChild
                  >
                    <a href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
                    asChild
                  >
                    <a href="#offerings">Explore Add-ons</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&auto=format&fit=crop"
                    alt="Holistic wellness yoga and meditation"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs backdrop-blur-sm border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow">
                      <Flower2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-gradient">78%</p>
                      <p className="text-sm text-muted-foreground">Health Improvement</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Holistic <span className="text-gradient">Advantage</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive wellness addresses the whole person—integrating physical, mental, emotional, and spiritual health.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyItMatters.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-gradient mb-3">{item.stat}</div>
                      <p className="text-muted-foreground font-medium">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Transform <span className="text-gradient">Total Wellbeing</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nurture every dimension of health through integrated practices that honor the mind-body-spirit connection
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 overflow-hidden h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-4xl font-bold text-gradient">{benefit.stat}</div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section id="offerings" className="py-20 px-6 bg-gradient-soft">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Wellness <span className="text-gradient">Add-ons</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Enhance your corporate wellness program with transformative modalities that address mind, body, and spirit
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <Zap className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{offering.description}</p>
                      <div className="space-y-2">
                        {offering.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A thoughtful approach to integrating holistic wellness into your workplace culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 h-full">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-cosmic text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Wellness Program?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Create a truly holistic workplace wellness experience. Let's design add-ons that inspire and transform.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg font-semibold"
                  asChild
                >
                  <a href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg"
                  asChild
                >
                  <Link to="/corporate-services">View All Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HolisticWellness;