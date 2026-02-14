import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEO/SEOHead';
import ServiceSchema from '@/components/SEO/ServiceSchema';
import FAQSchema from '@/components/SEO/FAQSchema';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Star, Target, Users, Calendar } from 'lucide-react';

const TarotReadingLanding = () => {
  const faqs = [
    {
      question: "What is online tarot reading?",
      answer: "Online tarot reading is a professional spiritual guidance service where an experienced tarot reader interprets cards drawn for you through digital platforms. It provides the same depth and accuracy as in-person readings, offering insights into your past, present, and future."
    },
    {
      question: "How accurate are tarot readings online in India?",
      answer: "Tarot readings are highly accurate when conducted by experienced professionals. Our tarot readers in India have years of expertise and use intuitive connections that transcend physical distance, making online readings just as effective as face-to-face sessions."
    },
    {
      question: "What can I ask during a tarot reading?",
      answer: "You can ask about love and relationships, career guidance, financial decisions, life purpose, spiritual growth, family matters, and personal challenges. Tarot readings provide clarity on any area where you seek guidance."
    },
    {
      question: "How long does an online tarot reading session take?",
      answer: "Typically, a comprehensive tarot reading session lasts 30-60 minutes. This allows enough time for card interpretation, discussion, and addressing your specific questions."
    },
    {
      question: "Is tarot reading available in Hindi?",
      answer: "Yes, we offer tarot reading services in both English and Hindi to serve clients across India comfortably in their preferred language."
    },
    {
      question: "How do I book an online tarot reading?",
      answer: "Simply click the 'Book Now' button, select your preferred date and time, and complete the booking process. You'll receive confirmation and session details via email."
    },
    {
      question: "Are online tarot readings confidential?",
      answer: "Absolutely. All tarot reading sessions are completely confidential. Your personal information and the insights shared during readings are kept private and secure."
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Tarot Reading Online', url: '/tarot-reading' }
  ];

  return (
    <>
      <SEOHead
        title="Tarot Reading Online India | Expert Tarot Card Readers | Ashray Wellness"
        description="Get accurate tarot reading online in India. Professional tarot card readers provide guidance on love, career & life. Book your online tarot consultation today. Available in English & Hindi."
        keywords="tarot reading online, tarot reading online india, online tarot reading in hindi, tarot card reading online, best tarot reader in india, love tarot reading, career tarot reading, free tarot consultation"
        canonical="/tarot-reading"
      />
      <ServiceSchema
        name="Online Tarot Reading Services"
        description="Professional tarot card reading services online for love, career, and life guidance"
        serviceType="Tarot Reading"
        url="https://ashraywellness.com/tarot-reading"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional Tarot Reading Online in India
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Discover clarity, guidance, and insights through expert tarot card readings. Available in English & Hindi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                  <Link to="/contact">Book Your Reading Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services/tarot">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Tarot Reading */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Tarot Reading?</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Tarot reading is an ancient form of divination that uses a deck of 78 symbolic cards to provide insights into your past, present, and future. Each card carries specific meanings and energies that, when interpreted by an experienced tarot reader, can offer profound guidance on your life's journey.
                  </p>
                  <p>
                    In India, tarot reading has become increasingly popular as people seek spiritual guidance for important life decisions. Whether you're facing challenges in love, career uncertainty, or seeking your life purpose, tarot cards can illuminate the path ahead.
                  </p>
                  <p>
                    Our online tarot reading services bring the wisdom of tarot to your doorstep, making it convenient for people across India to access professional guidance from experienced tarot card readers.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <Sparkles className="h-8 w-8 text-purple-600 mb-2" />
                    <h3 className="font-semibold mb-2">Accurate Insights</h3>
                    <p className="text-sm text-muted-foreground">Clear answers to your questions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Heart className="h-8 w-8 text-pink-600 mb-2" />
                    <h3 className="font-semibold mb-2">Love Guidance</h3>
                    <p className="text-sm text-muted-foreground">Relationship clarity</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Target className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold mb-2">Career Direction</h3>
                    <p className="text-sm text-muted-foreground">Professional path insights</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Star className="h-8 w-8 text-yellow-600 mb-2" />
                    <h3 className="font-semibold mb-2">Life Purpose</h3>
                    <p className="text-sm text-muted-foreground">Discover your calling</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Online Tarot Reading?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Users className="h-12 w-12 text-purple-600" />
                  <h3 className="text-xl font-semibold">Expert Tarot Readers</h3>
                  <p className="text-muted-foreground">
                    Our certified tarot readers in India have years of experience providing accurate and insightful readings. Each reader undergoes rigorous training in card interpretation and intuitive guidance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Calendar className="h-12 w-12 text-pink-600" />
                  <h3 className="text-xl font-semibold">Convenient & Flexible</h3>
                  <p className="text-muted-foreground">
                    Book online tarot readings from anywhere in India at your convenience. No need to travel—get professional guidance from the comfort of your home via video call or phone.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Sparkles className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-semibold">Comprehensive Guidance</h3>
                  <p className="text-muted-foreground">
                    Receive detailed insights on love, relationships, career, finances, health, and spiritual growth. Our tarot readings address all aspects of your life with depth and compassion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Topics We Cover */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Can You Ask in a Tarot Reading?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">💕 Love & Relationships</h3>
                <p className="text-sm text-muted-foreground">Soulmate connections, compatibility, relationship healing</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">💼 Career & Business</h3>
                <p className="text-sm text-muted-foreground">Job changes, business decisions, professional growth</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">💰 Money & Finance</h3>
                <p className="text-sm text-muted-foreground">Financial planning, investment guidance, prosperity</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">🌟 Life Purpose</h3>
                <p className="text-sm text-muted-foreground">Soul mission, spiritual path, life direction</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">👨‍👩‍👧 Family Matters</h3>
                <p className="text-sm text-muted-foreground">Family harmony, parenting, generational patterns</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">🔮 Spiritual Growth</h3>
                <p className="text-sm text-muted-foreground">Awakening, intuition development, chakra healing</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">🏥 Health & Wellness</h3>
                <p className="text-sm text-muted-foreground">Healing guidance, wellness path, energy balance</p>
              </div>
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">🎯 Decision Making</h3>
                <p className="text-sm text-muted-foreground">Important choices, timing, best course of action</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Online Tarot Reading Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Book Your Session</h3>
                  <p className="text-muted-foreground">Choose your preferred date and time for your online tarot reading. Select video call or phone consultation based on your comfort.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prepare Your Questions</h3>
                  <p className="text-muted-foreground">Think about the areas of life where you need guidance. While not mandatory, having focused questions enhances the reading experience.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect with Your Reader</h3>
                  <p className="text-muted-foreground">Join the session at your scheduled time. Your tarot reader will create a sacred space and tune into your energy for an accurate reading.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receive Guidance</h3>
                  <p className="text-muted-foreground">Watch as cards are drawn and interpreted for you. Ask questions, seek clarification, and gain deep insights into your situation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Apply the Wisdom</h3>
                  <p className="text-muted-foreground">Use the insights gained to make informed decisions and take positive action in your life. Follow-up readings available anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Discover Your Path?</h2>
            <p className="text-xl opacity-90">
              Book your professional tarot reading online today and gain the clarity you seek. Available across India in English & Hindi.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Your Reading Now</Link>
            </Button>
            <div className="pt-4 text-sm opacity-80">
              <p>💯 Confidential | 🌟 Expert Readers | ⚡ Instant Booking</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-xl font-semibold mb-6 text-center">Explore More Spiritual Services</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/psychic-reading" className="text-purple-600 hover:underline">Psychic Reading Online</Link>
              <span>•</span>
              <Link to="/numerology-reading" className="text-purple-600 hover:underline">Numerology Reading</Link>
              <span>•</span>
              <Link to="/reiki-healing-online" className="text-purple-600 hover:underline">Reiki Healing Online</Link>
              <span>•</span>
              <Link to="/services/spiritual-remedies" className="text-purple-600 hover:underline">Spiritual Remedies</Link>
              <span>•</span>
              <Link to="/services" className="text-purple-600 hover:underline">All Services</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TarotReadingLanding;