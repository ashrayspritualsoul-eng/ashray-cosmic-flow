import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Leaf, IndianRupee, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ProductSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 50%, hsl(240 40% 15%) 100%)'
        }}
      />
      
      {/* Cosmic glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-3 sm:mb-4"
          >
            <Sparkles className="w-9 h-9 sm:w-12 sm:h-12 mx-auto" style={{ color: 'hsl(38 100% 82%)' }} />
          </motion.div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text mb-3 sm:mb-4"
            style={{
              backgroundImage: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
            }}
          >
            Discover Fuel Ignite
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Handcrafted Holistic Wellness Powder for Mind, Body & Spirit
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden backdrop-blur-xl bg-white/90 border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 p-5 sm:p-6 md:p-10 lg:p-12">
              {/* Product Image Side */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group cursor-pointer max-w-md mx-auto w-full"
                onClick={() => navigate('/wellness-products')}
              >
                <div 
                  className="aspect-square rounded-2xl flex items-center justify-center shadow-xl overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(135deg, hsl(38 100% 82%) 0%, hsl(33 100% 86%) 100%)'
                  }}
                >
                  {/* Image */}
                  <motion.img
                    src="/images/fuel-ignite.jpeg"
                    alt="Fuel Ignite - Holistic Wellness Powder"
                    className="w-full h-full object-contain p-5 sm:p-8"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    onError={(e) => {
                      // Fallback to icon if image not found
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback icon */}
                  <div 
                    className="hidden flex-col items-center justify-center gap-4"
                    style={{ display: 'none' }}
                  >
                    <Leaf className="w-32 h-32" style={{ color: 'hsl(315 44% 38%)' }} />
                    <div 
                      className="text-5xl font-bold text-transparent bg-clip-text"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                      }}
                    >
                      Fuel Ignite
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white font-semibold text-sm sm:text-lg opacity-0 group-hover:opacity-100 transition-all px-4 text-center"
                    >
                      Click to Learn More
                    </motion.div>
                  </div>
                </div>

                {/* Price badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-3 right-3 sm:-bottom-4 sm:-right-4 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold shadow-xl flex items-center gap-1.5 sm:gap-2"
                  style={{
                    background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                  }}
                >
                  <IndianRupee className="w-5 h-5" />
                  <span className="text-xl">350</span>
                </motion.div>
              </motion.div>

              {/* Product Details Side */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    style={{ color: 'hsl(315 44% 38%)' }}
                  >
                    Fuel Ignite
                  </motion.h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                    A harmonious blend of ancient Ayurvedic wisdom and modern wellness science, 
                    handcrafted with sacred intention to ignite your vitality.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="p-4 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, hsl(315 44% 95%) 0%, hsl(280 50% 95%) 100%)' }}
                  >
                    <Sparkles className="w-6 h-6 mb-2" style={{ color: 'hsl(315 44% 38%)' }} />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Physical Energy</h4>
                    <p className="text-xs text-gray-600">Sustained vitality</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-4 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, hsl(315 44% 95%) 0%, hsl(280 50% 95%) 100%)' }}
                  >
                    <Leaf className="w-6 h-6 mb-2" style={{ color: 'hsl(315 44% 38%)' }} />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Mental Clarity</h4>
                    <p className="text-xs text-gray-600">Enhanced focus</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="p-4 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, hsl(315 44% 95%) 0%, hsl(280 50% 95%) 100%)' }}
                  >
                    <Sparkles className="w-6 h-6 mb-2" style={{ color: 'hsl(315 44% 38%)' }} />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Emotional Balance</h4>
                    <p className="text-xs text-gray-600">Inner peace</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="p-4 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, hsl(315 44% 95%) 0%, hsl(280 50% 95%) 100%)' }}
                  >
                    <Leaf className="w-6 h-6 mb-2" style={{ color: 'hsl(315 44% 38%)' }} />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Holistic Health</h4>
                    <p className="text-xs text-gray-600">Complete wellness</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => navigate('/wellness-products')}
                    size="lg"
                    className="w-full text-white py-4 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all border-0 group"
                    style={{
                      background: 'linear-gradient(135deg, hsl(315 44% 38%) 0%, hsl(280 50% 25%) 100%)'
                    }}
                  >
                    <span>Explore Fuel Ignite</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
                    ✨ Handmade with sacred intention in Bhopal
                  </p>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
