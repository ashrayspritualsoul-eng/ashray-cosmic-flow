import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, Leaf, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden py-20 px-4"
    >
      {/* Cosmic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl" />
      
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
            <Sparkles className="w-12 h-12 text-violet-500 mx-auto" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Wellness Products
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted with intention, infused with cosmic energy. 
            Nourish your body, elevate your spirit.
          </p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-transparent" />
            
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Product Image Section */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-200 via-fuchsia-200 to-cyan-200 flex items-center justify-center shadow-lg">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-center space-y-4"
                  >
                    <Leaf className="w-24 h-24 text-violet-600 mx-auto" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      Fuel Ignite
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  Handcrafted
                </motion.div>
              </motion.div>

              {/* Product Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-4"
                  >
                    Fuel Ignite
                  </motion.h2>
                  <p className="text-gray-600 text-lg">
                    Edible Holistic Wellness Product
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Heart className="w-5 h-5 text-fuchsia-500" />
                    <span>Crafted with sacred intention</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Sparkles className="w-5 h-5 text-violet-500" />
                    <span>Infused with cosmic energy</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Leaf className="w-5 h-5 text-green-500" />
                    <span>100% natural ingredients</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  A harmonious blend of ancient wisdom and modern wellness. 
                  Each batch is lovingly handcrafted to support your journey 
                  toward balance, vitality, and inner radiance.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={onWhatsApp}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order via WhatsApp
                  </Button>
                  
                  <Button
                    onClick={onCall}
                    className="flex-1 bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
      title: "Ignite Your Energy",
      description: "Awakens your inner vitality with sustainable, natural fuel for body and mind."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nourish Deeply",
      description: "Supports holistic wellness from the inside out with nutrient-rich ingredients."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Balance & Harmony",
      description: "Promotes equilibrium in your physical, mental, and spiritual being."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Elevate Consciousness",
      description: "Enhances clarity, focus, and connection to your higher self."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-violet-50/50 to-fuchsia-50/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
            Transformative Benefits
          </h2>
          <p className="text-gray-600 text-lg">Experience the power of intentional wellness</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 backdrop-blur-xl bg-white/60 border-white/20 shadow-lg hover:shadow-2xl transition-all">
                <div className="text-violet-500 mb-4">{benefit.icon}</div>
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
    { name: "Sacred Herbs", purpose: "Energy & vitality" },
    { name: "Ancient Spices", purpose: "Digestive harmony" },
    { name: "Pure Honey", purpose: "Natural sweetness" },
    { name: "Superfood Blend", purpose: "Nutrient density" },
    { name: "Botanical Extracts", purpose: "Holistic balance" },
    { name: "Cosmic Intention", purpose: "Energetic infusion" }
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Pure Ingredients
          </h2>
          <p className="text-gray-600 text-lg">Sourced with care, crafted with love</p>
        </motion.div>

        <Card className="backdrop-blur-xl bg-white/40 border-white/20 shadow-xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Leaf className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{ingredient.name}</h4>
                  <p className="text-sm text-gray-600">{ingredient.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

const HowToUseSection = () => {
  const steps = [
    {
      step: 1,
      title: "Set Your Intention",
      description: "Take a moment to connect with your wellness goals and desired transformation."
    },
    {
      step: 2,
      title: "Consume Mindfully",
      description: "Take one serving daily, preferably in the morning or as guided by your intuition."
    },
    {
      step: 3,
      title: "Embrace the Journey",
      description: "Allow the nourishment to integrate, supporting your body's natural wisdom."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-cyan-50/50 to-blue-50/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
            How to Use
          </h2>
          <p className="text-gray-600 text-lg">A simple ritual for profound transformation</p>
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
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
          <Card className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 border-white/20 shadow-2xl p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <Sparkles className="w-16 h-16 text-violet-500 mx-auto" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                Handmade with Sacred Intention
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Every batch of Fuel Ignite is crafted in small quantities with mindful presence and loving intention. 
                We honor ancient wellness traditions while embracing modern nutritional wisdom. Each ingredient is 
                carefully selected, blessed, and combined during optimal cosmic alignments to maximize its energetic potency.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                This is not mass-produced wellness—this is artisanal alchemy for your body, mind, and spirit. 
                When you receive Fuel Ignite, you're receiving a transmission of healing energy, created just for you.
              </p>
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Begin Your Wellness Journey
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with us to order your handcrafted Fuel Ignite and step into 
            a new dimension of holistic wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={onWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            
            <Button
              onClick={onCall}
              size="lg"
              variant="outline"
              className="border-2 border-violet-500 text-violet-600 hover:bg-violet-50 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WellnessProducts = () => {
  // TODO: Update these with actual contact numbers
  const whatsappNumber = "919876543210"; // Format: country code + number (no + or spaces)
  const phoneNumber = "+919876543210";   // Format: +country code + number

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in Fuel Ignite`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <HeroSection />
      <ProductShowcase onWhatsApp={handleWhatsApp} onCall={handleCall} />
      <BenefitsSection />
      <IngredientsSection />
      <HowToUseSection />
      <WhySpecialSection />
      <CTASection onWhatsApp={handleWhatsApp} onCall={handleCall} />
    </div>
  );
};

export default WellnessProducts;