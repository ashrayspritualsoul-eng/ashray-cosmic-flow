import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, Leaf, Heart, Clock, IndianRupee, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden py-20 px-4"
      style={{
        background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 50%, hsl(240 40% 15%) 100%)'
      }}
    >
      {/* Cosmic glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Sparkles className="w-12 h-12 mx-auto" style={{ color: 'hsl(38 100% 82%)' }} />
          </motion.div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, hsl(38 100% 82%) 0%, hsl(33 100% 86%) 100%)'
            }}
          >
            Fuel Ignite
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Handcrafted Holistic Wellness Powder by Ashray Wellness
          </p>
          
          <div className="flex items-center justify-center gap-2 text-white/80">
            <MapPin className="w-4 h-4" />
            <span>Janakpuri, Bhopal, Madhya Pradesh – 462001</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const ProductShowcase = ({ onWhatsApp, onCall }) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden backdrop-blur-xl bg-white/40 border-white/20 shadow-2xl">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 50%, hsl(240 40% 15%) 100%)'
              }}
            />
            
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Product Image Section */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div 
                  className="aspect-square rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden p-4"
                  style={{
                    background: 'linear-gradient(135deg, hsl(38 100% 82%) 0%, hsl(33 100% 86%) 100%)'
                  }}
                >
                  <motion.img
                    src="/images/fuel-ignite.jpeg"
                    alt="Fuel Ignite - Holistic Wellness Powder"
                    className="w-full h-full object-contain rounded-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    onError={(e) => {
                      // Fallback to icon if image not found
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback icon display */}
                  <div 
                    className="hidden flex-col items-center justify-center gap-4"
                    style={{ display: 'none' }}
                  >
                    <Leaf className="w-24 h-24" style={{ color: 'hsl(315 44% 38%)' }} />
                    <div 
                      className="text-4xl font-bold text-transparent bg-clip-text"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                      }}
                    >
                      Fuel Ignite
                    </div>
                    <div className="flex items-center gap-2 text-2xl font-bold" style={{ color: 'hsl(315 44% 38%)' }}>
                      <IndianRupee className="w-6 h-6" />
                      <span>350</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                  }}
                >
                  Handcrafted
                </motion.div>

                {/* Price badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute -bottom-4 -left-4 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, hsl(38 100% 82%) 0%, hsl(33 100% 86%) 100%)',
                    color: 'hsl(315 44% 38%)'
                  }}
                >
                  <IndianRupee className="w-5 h-5" />
                  <span className="text-xl">350</span>
                </motion.div>
              </motion.div>

              {/* Product Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text mb-4"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                    }}
                  >
                    Fuel Ignite
                  </motion.h2>
                  <p className="text-gray-600 text-lg mb-2">
                    Holistic Wellness Powder
                  </p>
                  <p className="text-gray-500 text-sm">
                    by Ashray Wellness
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Heart className="w-5 h-5" style={{ color: 'hsl(315 44% 38%)' }} />
                    <span>Crafted with sacred intention</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Sparkles className="w-5 h-5" style={{ color: 'hsl(38 100% 82%)' }} />
                    <span>Infused with cosmic energy</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Leaf className="w-5 h-5" style={{ color: 'hsl(280 50% 25%)' }} />
                    <span>100% natural Ayurvedic ingredients</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5" style={{ color: 'hsl(315 44% 38%)' }} />
                    <span>10 months shelf life from manufacturing</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, hsl(38 100% 90%) 0%, hsl(33 100% 92%) 100%)' }}>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">Price:</span>
                    <div className="flex items-center gap-1 text-2xl font-bold" style={{ color: 'hsl(315 44% 38%)' }}>
                      <IndianRupee className="w-6 h-6" />
                      <span>350</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={onWhatsApp}
                    className="flex-1 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all border-0"
                    style={{
                      background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order via WhatsApp
                  </Button>
                  
                  <Button
                    onClick={onCall}
                    className="flex-1 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all border-0"
                    style={{
                      background: 'linear-gradient(135deg, hsl(38 100% 82%) 0%, hsl(33 100% 86%) 100%)',
                      color: 'hsl(315 44% 38%)'
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Order
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Physical Energy",
      description: "Awakens your inner vitality with sustainable, natural fuel for sustained physical stamina.",
      color: 'hsl(315 44% 38%)'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mental Clarity",
      description: "Enhances focus, concentration, and cognitive function for sharper thinking.",
      color: 'hsl(280 50% 25%)'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Biological Health",
      description: "Supports overall wellness from the inside out with nutrient-rich Ayurvedic herbs.",
      color: 'hsl(38 100% 82%)'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Balance",
      description: "Promotes emotional stability and helps manage stress for inner peace.",
      color: 'hsl(33 100% 86%)'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Big Fulfilment",
      description: "Experience a profound sense of completeness and holistic well-being.",
      color: 'hsl(315 44% 38%)'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
            }}
          >
            Transformative Benefits
          </h2>
          <p className="text-gray-600 text-lg">Experience holistic wellness in every aspect of life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 backdrop-blur-xl bg-white/60 border-white/20 shadow-lg hover:shadow-2xl transition-all h-full">
                <div style={{ color: benefit.color }} className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IngredientsSection = () => {
  const ingredients = [
    { 
      name: "Ashwagandha", 
      purpose: "Adaptogenic herb for stress relief and vitality",
      description: "Known as Indian Ginseng, reduces stress and boosts energy naturally"
    },
    { 
      name: "Brahmi", 
      purpose: "Brain tonic for mental clarity",
      description: "Enhances memory, focus, and cognitive function"
    },
    { 
      name: "Natural Seeds", 
      purpose: "Nutrient-dense superfood blend",
      description: "Provides essential vitamins, minerals, and healthy fats"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: 'hsl(315 44% 38%)'
            }}
          >
            Pure Ayurvedic Ingredients
          </h2>
          <p className="text-gray-600 text-lg">Ancient herbs backed by traditional wisdom</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 backdrop-blur-xl bg-white/60 border-white/20 shadow-lg hover:shadow-xl transition-all h-full">
                <div className="flex items-start gap-3 mb-4">
                  <Leaf className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(315 44% 38%)' }} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{ingredient.name}</h3>
                    <p className="text-sm font-semibold" style={{ color: 'hsl(280 50% 25%)' }}>{ingredient.purpose}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{ingredient.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowToUseSection = () => {
  const steps = [
    {
      step: 1,
      title: "Measure 2 Teaspoons",
      description: "Take 2 teaspoons of Fuel Ignite powder for the perfect serving."
    },
    {
      step: 2,
      title: "Choose Your Time",
      description: "Consume in the morning for an energized start or evening for sustained wellness."
    },
    {
      step: 3,
      title: "Mix & Enjoy",
      description: "Can be taken with or without milk. Works better with milk for enhanced taste and absorption."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50/30 to-pink-50/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
            }}
          >
            How to Use
          </h2>
          <p className="text-gray-600 text-lg">A simple daily ritual for profound transformation</p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 backdrop-blur-xl bg-white/60 border-white/20 shadow-lg">
                <div className="flex items-start gap-6">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Dosage Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="p-6 backdrop-blur-xl border-white/20 shadow-xl" style={{ background: 'linear-gradient(135deg, hsl(38 100% 90%) 0%, hsl(33 100% 92%) 100%)' }}>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'hsl(315 44% 38%)' }} />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Recommended Dosage</h4>
                <p className="text-gray-700"><strong>2 teaspoons</strong> daily • <strong>Morning or Evening</strong> • <strong>With or without milk</strong> (better with milk)</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const WhySpecialSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden backdrop-blur-xl bg-white/40 border-white/20 shadow-2xl p-12">
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{
                background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
              }}
            />
            
            <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <Sparkles className="w-16 h-16 mx-auto" style={{ color: 'hsl(315 44% 38%)' }} />
              </motion.div>
              
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  color: 'hsl(315 44% 38%)'
                }}
              >
                Handmade with Sacred Intention
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Every batch of Fuel Ignite is crafted in small quantities with mindful presence and loving intention at our facility in Janakpuri, Bhopal. We honor ancient Ayurvedic traditions while embracing modern nutritional wisdom. Each ingredient is carefully selected, blessed, and combined during optimal cosmic alignments to maximize its energetic potency.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                This is not mass-produced wellness—this is artisanal alchemy for your body, mind, and spirit. When you receive Fuel Ignite, you're receiving a transmission of healing energy, created just for you.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-white/60">
                  <Calendar className="w-6 h-6 mx-auto mb-2" style={{ color: 'hsl(315 44% 38%)' }} />
                  <p className="text-sm font-semibold text-gray-800">Shelf Life</p>
                  <p className="text-sm text-gray-600">10 months from manufacturing</p>
                </div>
                <div className="p-4 rounded-lg bg-white/60">
                  <MapPin className="w-6 h-6 mx-auto mb-2" style={{ color: 'hsl(315 44% 38%)' }} />
                  <p className="text-sm font-semibold text-gray-800">Made in Bhopal</p>
                  <p className="text-sm text-gray-600">Janakpuri, MP – 462001</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = ({ onWhatsApp, onCall }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
            }}
          >
            Begin Your Wellness Journey
          </h2>
          
          <div className="flex items-center justify-center gap-2 text-3xl font-bold" style={{ color: 'hsl(315 44% 38%)' }}>
            <IndianRupee className="w-8 h-8" />
            <span>350</span>
            <span className="text-lg text-gray-600 font-normal">per pack</span>
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with us to order your handcrafted Fuel Ignite and step into 
            a new dimension of holistic wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={onWhatsApp}
              size="lg"
              className="text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all border-0"
              style={{
                background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            
            <Button
              onClick={onCall}
              size="lg"
              className="px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
              style={{
                background: 'linear-gradient(135deg, hsl(38 100% 82%) 0%, hsl(33 100% 86%) 100%)',
                color: 'hsl(315 44% 38%)',
                border: '2px solid hsl(315 44% 38%)'
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            📍 Ashray Wellness • Janakpuri, Bhopal, Madhya Pradesh – 462001
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const WellnessProducts = () => {
  const whatsappNumber = "919340216182";
  const phoneNumber = "+919340216182";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in ordering Fuel Ignite (₹350). Please share more details.`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <HeroSection />
        <ProductShowcase onWhatsApp={handleWhatsApp} onCall={handleCall} />
        <BenefitsSection />
        <IngredientsSection />
        <HowToUseSection />
        <WhySpecialSection />
        <CTASection onWhatsApp={handleWhatsApp} onCall={handleCall} />
      </div>
      <Footer />
    </>
  );
};

export default WellnessProducts;