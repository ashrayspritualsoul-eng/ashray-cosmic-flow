/**
 * ============================================
 * CENTRALIZED CONTENT DATABASE
 * ============================================
 * 
 * Single source of truth for all site content.
 * All pages pull data from here - zero duplication.
 */

/**
 * Personal Wellness Services
 */
export const personalServices = {
  'tarot-readings': {
    id: 'tarot-readings',
    name: 'Tarot Reading',
    slug: 'services/tarot',
    landingSlug: 'tarot-reading',
    category: 'personal',
    shortDescription: 'Get accurate tarot card readings online in India. Professional guidance for love, career, and life decisions.',
    description: 'Professional tarot card reading services online. Our experienced tarot readers provide deep insights into your past, present, and future. Discover clarity on love, relationships, career, finances, and life purpose through the ancient wisdom of tarot cards.',
    longDescription: 'Tarot reading is an ancient form of divination that uses 78 symbolic cards to provide profound insights into your life journey. Each card carries specific meanings and energies that, when interpreted by an experienced reader, can illuminate your path forward. Our online tarot reading services bring this wisdom directly to you, making professional spiritual guidance accessible from anywhere in India.',
    image: '/images/tarotPage.jpeg',
    price: 'Starting from ₹999',
    duration: '30-60 minutes',
    keywords: ['tarot reading online', 'tarot card reading', 'online tarot', 'tarot reader india', 'love tarot', 'career tarot'],
    benefits: [
      'Clear insights into life situations',
      'Guidance for important decisions',
      'Understanding of past influences',
      'Clarity on future possibilities',
      'Spiritual growth and awareness',
    ],
    faqs: [
      {
        question: 'What is online tarot reading?',
        answer: 'Online tarot reading is a professional spiritual guidance service where an experienced tarot reader interprets cards drawn for you through digital platforms. It provides the same depth and accuracy as in-person readings.'
      },
      {
        question: 'How accurate are tarot readings?',
        answer: 'Tarot readings are highly accurate when conducted by experienced professionals. The accuracy depends on the reader\'s expertise, your openness to guidance, and the clarity of your questions.'
      },
      {
        question: 'What can I ask during a tarot reading?',
        answer: 'You can ask about love, relationships, career, finances, life purpose, spiritual growth, family matters, and personal challenges. Tarot provides clarity on any area where you seek guidance.'
      },
    ],
    relatedServices: ['psychic-readings', 'numerology', 'spiritual-remedies'],
    relatedBlogs: ['tarot-beginners-guide', 'understanding-major-arcana'],
  },
  
  'psychic-readings': {
    id: 'psychic-readings',
    name: 'Psychic Reading',
    slug: 'services/psychic-readings',
    landingSlug: 'psychic-reading',
    category: 'personal',
    shortDescription: 'Connect with experienced psychic readers online. Receive intuitive guidance and spiritual insights.',
    description: 'Professional psychic reading services providing intuitive insights, spiritual guidance, and clarity on life situations. Our gifted psychics connect with your energy to provide accurate readings on love, career, and personal growth.',
    image: '/images/psychicPage.jpeg',
    price: 'Starting from ₹1,499',
    duration: '45-60 minutes',
    keywords: ['psychic reading online', 'online psychic', 'psychic medium', 'clairvoyant reading', 'intuitive reading'],
    benefits: [
      'Deep intuitive insights',
      'Connection with spiritual guidance',
      'Clarity on life path',
      'Understanding of energy patterns',
      'Validation and confirmation',
    ],
    faqs: [
      {
        question: 'What is psychic reading?',
        answer: 'Psychic reading involves using intuitive abilities to perceive information about a person\'s past, present, or future. Psychics tap into energy fields to provide insights and guidance.'
      },
      {
        question: 'How does online psychic reading work?',
        answer: 'Online psychic reading works through phone, video call, or chat. Psychics can connect with your energy remotely, making distance readings just as effective as in-person sessions.'
      },
    ],
    relatedServices: ['tarot-readings', 'spiritual-remedies', 'reiki-healing'],
    relatedBlogs: ['developing-psychic-abilities', 'understanding-intuition'],
  },
  
  'numerology': {
    id: 'numerology',
    name: 'Numerology Reading',
    slug: 'services/numerology',
    landingSlug: 'numerology-reading',
    category: 'personal',
    shortDescription: 'Discover your life path through numerology. Professional numerology readings and consultations.',
    description: 'Comprehensive numerology reading services to unlock the secrets of numbers in your life. Discover your life path number, destiny number, and personal year cycles for deeper self-understanding and guidance.',
    image: '/images/NumerologyPage.jpeg',
    price: 'Starting from ₹799',
    duration: '30-45 minutes',
    keywords: ['numerology reading', 'life path number', 'destiny number', 'numerology consultation', 'number meanings'],
    benefits: [
      'Understand your life purpose',
      'Discover personal strengths',
      'Timing guidance for decisions',
      'Relationship compatibility',
      'Career direction insights',
    ],
    faqs: [
      {
        question: 'What is numerology?',
        answer: 'Numerology is the study of numbers and their mystical significance in your life. It reveals patterns, personality traits, and life purpose through the analysis of numbers derived from your birth date and name.'
      },
      {
        question: 'What is a life path number?',
        answer: 'Your life path number is calculated from your birth date and represents your core purpose, natural talents, and life journey. It\'s one of the most important numbers in numerology.'
      },
    ],
    relatedServices: ['tarot-readings', 'psychic-readings'],
    relatedBlogs: ['calculating-life-path-number', 'numerology-compatibility'],
  },
  
  'reiki-healing': {
    id: 'reiki-healing',
    name: 'Reiki Healing',
    slug: 'services/reiki',
    landingSlug: 'reiki-healing-online',
    category: 'personal',
    shortDescription: 'Experience energy healing through Reiki. Online and distance Reiki sessions available.',
    description: 'Professional Reiki healing services for physical, emotional, and spiritual wellness. Our certified Reiki masters provide energy healing sessions to restore balance, reduce stress, and promote natural healing.',
    image: '/images/ReikiPage.jpeg',
    price: 'Starting from ₹1,199',
    duration: '45-60 minutes',
    keywords: ['reiki healing', 'energy healing', 'distance reiki', 'reiki online', 'chakra healing'],
    benefits: [
      'Stress and anxiety reduction',
      'Physical pain relief',
      'Emotional healing',
      'Energy balance',
      'Spiritual growth',
    ],
    faqs: [
      {
        question: 'What is Reiki healing?',
        answer: 'Reiki is a Japanese energy healing technique that promotes relaxation and healing by channeling universal life force energy. It helps restore physical, emotional, and spiritual balance.'
      },
      {
        question: 'Can Reiki work online?',
        answer: 'Yes, distance Reiki is highly effective. Energy transcends physical distance, allowing Reiki practitioners to send healing energy remotely with the same benefits as in-person sessions.'
      },
    ],
    relatedServices: ['spiritual-remedies', 'individual-therapy'],
    relatedBlogs: ['benefits-of-reiki', 'how-reiki-works'],
  },
  
  'spiritual-remedies': {
    id: 'spiritual-remedies',
    name: 'Spiritual Remedies',
    slug: 'services/spiritual-remedies',
    category: 'personal',
    shortDescription: 'Customized spiritual solutions for life challenges. Traditional remedies and healing practices.',
    description: 'Personalized spiritual remedies and healing solutions based on ancient wisdom. Address specific life challenges through mantras, crystals, rituals, and energy work.',
    image: '/images/spritual.jpeg',
    price: 'Starting from ₹899',
    duration: '30-45 minutes',
    keywords: ['spiritual remedies', 'healing solutions', 'energy cleansing', 'spiritual protection'],
    benefits: [
      'Customized solutions',
      'Address specific challenges',
      'Energy cleansing',
      'Protection and healing',
      'Spiritual empowerment',
    ],
    faqs: [],
    relatedServices: ['reiki-healing', 'psychic-readings'],
    relatedBlogs: ['spiritual-protection-techniques'],
  },
  
  'individual-therapy': {
    id: 'individual-therapy',
    name: 'Individual Therapy',
    slug: 'services/therapy',
    category: 'personal',
    shortDescription: 'Professional counseling and therapy services. Mental health support and guidance.',
    description: 'Confidential individual therapy and counseling services for mental health, emotional well-being, and personal growth. Work with experienced therapists for anxiety, depression, stress, and life transitions.',
    image: '/images/therapyPage.jpeg',
    price: 'Starting from ₹1,999',
    duration: '50-60 minutes',
    keywords: ['individual therapy', 'counseling', 'mental health', 'psychotherapy', 'therapy online'],
    benefits: [
      'Mental health support',
      'Emotional healing',
      'Coping strategies',
      'Personal growth',
      'Professional guidance',
    ],
    faqs: [],
    relatedServices: ['reiki-healing', 'spiritual-remedies'],
    relatedBlogs: ['benefits-of-therapy', 'when-to-seek-therapy'],
  },
};

/**
 * Corporate Wellness Services
 */
export const corporateServices = {
  'mental-health': {
    id: 'mental-health',
    name: 'Employee Mental Health Programs',
    slug: 'corporate-services/mental-health',
    landingSlug: 'employee-mental-health',
    category: 'corporate',
    shortDescription: 'Comprehensive employee mental health programs for workplace wellness.',
    description: 'Holistic employee mental health programs designed to support workforce well-being, reduce stress, and increase productivity. Confidential counseling, workshops, and wellness initiatives.',
    image: '/images/emotional.jpeg',
    price: 'Custom pricing',
    keywords: ['employee mental health', 'workplace wellness', 'corporate mental health', 'eap programs'],
    benefits: [
      'Reduced absenteeism',
      'Increased productivity',
      'Better employee retention',
      'Improved workplace culture',
      'Confidential support',
    ],
    faqs: [],
    relatedServices: ['wellness-burnout', 'stress-management', 'therapy-counseling'],
    relatedBlogs: ['workplace-mental-health-importance'],
  },
  
  'wellness-burnout': {
    id: 'wellness-burnout',
    name: 'Burnout Prevention Programs',
    slug: 'corporate-services/wellness-burnout',
    landingSlug: 'burnout-prevention',
    category: 'corporate',
    shortDescription: 'Prevent and address employee burnout with targeted wellness programs.',
    description: 'Comprehensive burnout prevention and recovery programs for organizations. Identify early warning signs, implement preventive strategies, and support burned-out employees.',
    image: '/images/resilience.jpeg',
    price: 'Custom pricing',
    keywords: ['burnout prevention', 'workplace burnout', 'employee wellness', 'stress management'],
    benefits: [
      'Early burnout detection',
      'Prevention strategies',
      'Recovery support',
      'Work-life balance',
      'Sustainable performance',
    ],
    faqs: [],
    relatedServices: ['stress-management', 'mental-health', 'emotional-intelligence'],
    relatedBlogs: ['signs-of-burnout', 'preventing-workplace-burnout'],
  },
  
  'stress-management': {
    id: 'stress-management',
    name: 'Workplace Stress Management',
    slug: 'corporate-services/stress-management',
    category: 'corporate',
    shortDescription: 'Effective stress management programs for corporate environments.',
    description: 'Evidence-based stress management training and programs for employees. Learn practical techniques for handling workplace pressure, deadlines, and challenges.',
    image: '/images/support.jpeg',
    price: 'Custom pricing',
    keywords: ['stress management', 'workplace stress', 'stress reduction', 'corporate wellness'],
    benefits: [
      'Stress reduction techniques',
      'Better coping strategies',
      'Improved focus',
      'Enhanced well-being',
      'Increased resilience',
    ],
    faqs: [],
    relatedServices: ['wellness-burnout', 'leadership-mindfulness', 'mental-health'],
    relatedBlogs: ['stress-management-techniques'],
  },
  
  'emotional-intelligence': {
    id: 'emotional-intelligence',
    name: 'Emotional Intelligence Training',
    slug: 'corporate-services/emotional-intelligence',
    landingSlug: 'emotional-intelligence-training',
    category: 'corporate',
    shortDescription: 'Develop emotional intelligence for better leadership and team dynamics.',
    description: 'Professional emotional intelligence training programs to enhance self-awareness, empathy, and interpersonal skills. Improve communication, leadership, and team collaboration.',
    image: '/images/emotional.jpeg',
    price: 'Custom pricing',
    keywords: ['emotional intelligence', 'eq training', 'leadership development', 'soft skills'],
    benefits: [
      'Enhanced self-awareness',
      'Better communication',
      'Stronger leadership',
      'Improved relationships',
      'Team cohesion',
    ],
    faqs: [],
    relatedServices: ['leadership-mindfulness', 'therapy-counseling'],
    relatedBlogs: ['emotional-intelligence-workplace'],
  },
  
  'leadership-mindfulness': {
    id: 'leadership-mindfulness',
    name: 'Leadership Mindfulness Programs',
    slug: 'corporate-services/leadership-mindfulness',
    category: 'corporate',
    shortDescription: 'Mindfulness-based leadership development for modern executives.',
    description: 'Transform leadership through mindfulness practices. Programs designed for executives and managers to enhance decision-making, emotional regulation, and authentic leadership.',
    image: '/images/support.jpeg',
    price: 'Custom pricing',
    keywords: ['leadership mindfulness', 'mindful leadership', 'executive coaching', 'conscious leadership'],
    benefits: [
      'Better decision-making',
      'Emotional regulation',
      'Authentic leadership',
      'Stress resilience',
      'Team inspiration',
    ],
    faqs: [],
    relatedServices: ['emotional-intelligence', 'stress-management'],
    relatedBlogs: ['mindful-leadership-benefits'],
  },
  
  'therapy-counseling': {
    id: 'therapy-counseling',
    name: 'Corporate Therapy & Counseling',
    slug: 'corporate-services/therapy-counseling',
    category: 'corporate',
    shortDescription: 'Professional counseling services for employees and organizations.',
    description: 'Confidential therapy and counseling services for corporate employees. Support for mental health, work stress, personal challenges, and professional development.',
    image: '/images/therapyPage.jpeg',
    price: 'Custom pricing',
    keywords: ['corporate counseling', 'employee therapy', 'workplace counseling', 'eap services'],
    benefits: [
      'Confidential support',
      'Mental health care',
      'Work-life balance',
      'Performance improvement',
      'Well-being focus',
    ],
    faqs: [],
    relatedServices: ['mental-health', 'stress-management'],
    relatedBlogs: ['workplace-counseling-benefits'],
  },
  
  'holistic-wellness': {
    id: 'holistic-wellness',
    name: 'Holistic Corporate Wellness',
    slug: 'corporate-services/holistic-wellness',
    category: 'corporate',
    shortDescription: 'Comprehensive wellness programs addressing mind, body, and spirit.',
    description: 'Holistic corporate wellness programs integrating physical health, mental well-being, and spiritual growth. Yoga, meditation, nutrition, and mindfulness for complete employee wellness.',
    image: '/images/fuel-ignite.jpeg',
    price: 'Custom pricing',
    keywords: ['holistic wellness', 'corporate wellness', 'employee well-being', 'workplace health'],
    benefits: [
      'Complete wellness approach',
      'Physical health',
      'Mental clarity',
      'Spiritual balance',
      'Sustainable habits',
    ],
    faqs: [],
    relatedServices: ['stress-management', 'leadership-mindfulness'],
    relatedBlogs: ['holistic-wellness-workplace'],
  },
};

/**
 * All Services Combined
 */
export const allServices = {
  ...personalServices,
  ...corporateServices,
};

/**
 * Get service by ID
 */
export const getServiceById = (id) => {
  return allServices[id] || null;
};

/**
 * Get service by slug
 */
export const getServiceBySlug = (slug) => {
  return Object.values(allServices).find(service => 
    service.slug === slug || service.landingSlug === slug
  ) || null;
};

/**
 * Get services by category
 */
export const getServicesByCategory = (category) => {
  return Object.values(allServices).filter(service => service.category === category);
};

/**
 * Get related services
 */
export const getRelatedServices = (serviceId, limit = 3) => {
  const service = getServiceById(serviceId);
  if (!service || !service.relatedServices) return [];
  
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter(Boolean)
    .slice(0, limit);
};

export default {
  personalServices,
  corporateServices,
  allServices,
  getServiceById,
  getServiceBySlug,
  getServicesByCategory,
  getRelatedServices,
};