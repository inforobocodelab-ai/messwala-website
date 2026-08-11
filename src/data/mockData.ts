import { TiffinProvider, Testimonial, CityOption } from '../types';

export const CITIES: CityOption[] = [
  {
    name: 'Nagpur',
    state: 'Maharashtra',
    popularAreas: ['Ram Nagar', 'Chhaoni Road', 'Dharampeth', 'Sadar', 'Trimurti Nagar', 'Bajaj Nagar'],
    collegeHubs: ['VNIT Nagpur', 'GSHRCE', 'YCCE', 'LIT Nagpur', 'RCOEM'],
    tiffinCount: 84,
    pgCount: 42,
  },
  // {
  //   name: 'Pune',
  //   state: 'Maharashtra',
  //   popularAreas: ['Kothrud', 'Viman Nagar', 'Hinjewadi', 'FC Road', 'Baner', 'Aundh'],
  //   collegeHubs: ['COEP', 'Symbiosis Campus', 'MIT WPU', 'Fergusson College'],
  //   tiffinCount: 195,
  //   pgCount: 110,
  // },
  // {
  //   name: 'Kota',
  //   state: 'Rajasthan',
  //   popularAreas: ['Talwandi', 'Vigyan Nagar', 'Rajeev Gandhi Nagar', 'Mahaveer Nagar'],
  //   collegeHubs: ['Allen Career Institute', 'Resonance', 'Motion Education'],
  //   tiffinCount: 140,
  //   pgCount: 95,
  // },
  // {
  //   name: 'Indore',
  //   state: 'Madhya Pradesh',
  //   popularAreas: ['Vijay Nagar', 'Geeta Bhawan', 'Bhawarkua', 'Old Palasia'],
  //   collegeHubs: ['IIM Indore', 'IIT Indore', 'GSITS', 'SGSITS'],
  //   tiffinCount: 112,
  //   pgCount: 68,
  // },
  // {
  //   name: 'Bengaluru',
  //   state: 'Karnataka',
  //   popularAreas: ['Koramangala', 'HSR Layout', 'BTM Layout', 'Indiranagar', 'Jayanagar'],
  //   collegeHubs: ['Christ University', 'PES University', 'RVCE', 'BMSCE'],
  //   tiffinCount: 220,
  //   pgCount: 180,
  // },
];

export const TIFFIN_PROVIDERS: TiffinProvider[] = [
  {
    id: 'tiffin-1',
    name: 'The Tiffin Adda',
    tagline: 'Ghar jaisa swad with pure cow ghee & soft phulkas',
    rating: 4.8,
    reviewCount: 342,
    city: 'Nagpur',
    area: 'Ram Nagar',
    distance: '0.6 km from VNIT',
    type: 'veg',
    pricePerMeal: 72,
    weeklyPrice: 720,
    monthlyPrice: 2800,
    timing: 'Lunch: 11:00 AM - 2:00 PM | Dinner: 7:30 PM - 10:00 PM',
    isHygieneVerified: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    chefName: 'Sunita Sharma (Aunty Ji)',
    chefExperience: '12+ years of home cooking',
    tags: ['Soft Phulkas', 'Less Oil', 'Zero Preservatives', 'Free Delivery'],
    menu: [
      {
        day: 'Monday',
        lunch: { main: 'Paneer Butter Masala', roti: '4 Phulkas (with ghee)', dal: 'Dal Tadka', rice: 'Jeera Rice', extra: 'Curd & Salad' },
        dinner: { main: 'Aloo Gobi Matar', roti: '4 Butter Roti', dal: 'Yellow Dal Fry', rice: 'Steamed Basmati Rice', extra: 'Pickle & Papad' }
      },
      {
        day: 'Tuesday',
        lunch: { main: 'Baingan Bharta & Sev Tamatar', roti: '4 Bajra/Wheat Roti', dal: 'Dal Fry', rice: 'Steamed Rice', extra: 'Boondi Raita' },
        dinner: { main: 'Mix Vegetable Handi', roti: '4 Butter Phulkas', dal: 'Panchmel Dal', rice: 'Plain Rice', extra: 'Salad' }
      },
      {
        day: 'Wednesday',
        lunch: { main: 'Chole Bhature / Chole Masala', roti: '4 Phulkas', dal: 'Lauki Chana Dal', rice: 'Jeera Rice', extra: 'Green Chutney & Onion' },
        dinner: { main: 'Bhindi Masala', roti: '4 Hot Phulkas', dal: 'Dal Tadka', rice: 'Matar Pulao', extra: 'Kheer Special' }
      },
      {
        day: 'Thursday',
        lunch: { main: 'Kadhi Pakoda Special', roti: '4 Phulkas', dal: 'Toor Dal', rice: 'Steamed Rice', extra: 'Fried Mirchi & Salad' },
        dinner: { main: 'Aloo Beans Fry', roti: '4 Phulkas', dal: 'Moong Dal Fry', rice: 'Plain Rice', extra: 'Gulab Jamun (1 pc)' }
      },
      {
        day: 'Friday',
        lunch: { main: 'Rajma Masala Jammu Style', roti: '4 Butter Phulkas', dal: 'Dal Makhani', rice: 'Jeera Rice', extra: 'Mix Veg Salad' },
        dinner: { main: 'Capsicum Besan Curry', roti: '4 Phulkas', dal: 'Yellow Dal', rice: 'Steamed Rice', extra: 'Cucumber Salad' }
      },
      {
        day: 'Saturday',
        lunch: { main: 'Veg Kolhapuri Spicy', roti: '4 Phulkas', dal: 'Dal Tadka', rice: 'Veg Pulao', extra: 'Pineapple Raita' },
        dinner: { main: 'Methi Malai Matar', roti: '4 Phulkas', dal: 'Toor Dal Fry', rice: 'Plain Rice', extra: 'Fried Papad' }
      },
      {
        day: 'Sunday',
        lunch: { main: 'Special Shahi Thali: Paneer Pasanda + Veg Biryani', roti: '3 Butter Naan/Phulka', dal: 'Dal Makhani', rice: 'Veg Biryani', extra: 'Rasgulla & Sweet Lassi' },
        dinner: { main: 'Light Khichdi & Aloo Chokha', roti: '2 Light Phulkas', dal: 'Moong Dal', rice: 'Desi Ghee Khichdi', extra: 'Curd & Papad' }
      }
    ]
  },
  {
    id: 'tiffin-2',
    name: 'Ashirvad Mess & Tiffin Services',
    tagline: 'Authentic Maharashtrian & North Indian Thalis',
    rating: 4.7,
    reviewCount: 289,
    city: 'Nagpur',
    area: 'Chhaoni Road',
    distance: '0.4 km from Sadar',
    type: 'both',
    pricePerMeal: 70,
    weeklyPrice: 700,
    monthlyPrice: 2600,
    timing: 'Lunch: 11:30 AM - 3:00 PM | Dinner: 7:00 PM - 10:30 PM',
    isHygieneVerified: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    chefName: 'Chef Rajesh & Vandana Patil',
    chefExperience: '15 years running Nagpur student mess',
    tags: ['Maharashtrian Special', 'Veg & Non-Veg', 'Custom Spice Level', 'Clean Kitchen'],
    menu: [
      {
        day: 'Monday',
        lunch: { main: 'Pithla Bhakri / Paneer Curry', roti: '3 Jowar Bhakri / 4 Phulkas', dal: 'Varan Fry', rice: 'Steamed Rice', extra: 'Thecha & Onion' },
        dinner: { main: 'Chicken Curry (Non-Veg) / Matar Paneer', roti: '4 Hot Phulkas', dal: 'Dal Tadka', rice: 'Zeera Rice', extra: 'Solkadhi / Salad' }
      },
      {
        day: 'Tuesday',
        lunch: { main: 'Shev Bhaji Nagpur Style', roti: '4 Wheat Phulkas', dal: 'Toor Dal', rice: 'Steamed Rice', extra: 'Kachumber Salad' },
        dinner: { main: 'Baingan Masala', roti: '4 Phulkas', dal: 'Dal Fry', rice: 'Jeera Rice', extra: 'Fried Papad' }
      },
      {
        day: 'Wednesday',
        lunch: { main: 'Egg Curry (Non-Veg) / Dum Aloo', roti: '4 Phulkas', dal: 'Dal Fry', rice: 'Steamed Rice', extra: 'Salad' },
        dinner: { main: 'Chicken Sukka / Paneer Tikka Masala', roti: '4 Roti', dal: 'Dal Tadka', rice: 'Chicken Pulao / Veg Rice', extra: 'Raita' }
      },
      {
        day: 'Thursday',
        lunch: { main: 'Usal Pav / Matki Curry', roti: '4 Phulkas', dal: 'Kat/Rassa', rice: 'Steamed Rice', extra: 'Lemon & Pickle' },
        dinner: { main: 'Aloo Baingan', roti: '4 Phulkas', dal: 'Yellow Dal', rice: 'Plain Rice', extra: 'Sweet Seviyan' }
      },
      {
        day: 'Friday',
        lunch: { main: 'Soyabean Masala Curry', roti: '4 Phulkas', dal: 'Dal Fry', rice: 'Veg Pulao', extra: 'Curd' },
        dinner: { main: 'Fish Fry / Paneer Bhurji', roti: '4 Phulkas', dal: 'Fish Curry Rassa / Dal', rice: 'Steamed Rice', extra: 'Onion Rings' }
      },
      {
        day: 'Saturday',
        lunch: { main: 'Kaju Curry / Mix Veg', roti: '4 Butter Phulkas', dal: 'Dal Tadka', rice: 'Jeera Rice', extra: 'Papad' },
        dinner: { main: 'Chana Masala', roti: '4 Phulkas', dal: 'Toor Dal', rice: 'Plain Rice', extra: 'Halwa' }
      },
      {
        day: 'Sunday',
        lunch: { main: 'Nagpuri Saoji Chicken / Special Shahi Paneer', roti: '4 Butter Roti', dal: 'Saoji Gravy / Dal', rice: 'Indrayani Rice', extra: 'Shrikhand & Solkadhi' },
        dinner: { main: 'Masala Khichdi', roti: '2 Phulkas', dal: 'Light Moong Dal', rice: 'Ghee Rice', extra: 'Dahi' }
      }
    ]
  },
  {
    id: 'tiffin-3',
    name: 'Ghar Jaisa Swad Tiffin',
    tagline: 'Mom-made healthy food with zero soda & chemical free',
    rating: 4.9,
    reviewCount: 412,
    city: 'Nagpur',
    area: 'Dharampeth',
    distance: '0.8 km from GS College',
    type: 'veg',
    pricePerMeal: 65,
    weeklyPrice: 650,
    monthlyPrice: 2400,
    timing: 'Lunch: 11:15 AM - 2:30 PM | Dinner: 7:15 PM - 9:45 PM',
    isHygieneVerified: true,
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    chefName: 'Anjali Deshmukh',
    chefExperience: '8 years',
    tags: ['Zero Soda', 'Desi Ghee', 'Special Diet Options', 'Stainless Steel Tiffin'],
    menu: [
      {
        day: 'Monday',
        lunch: { main: 'Aloo Bhindi Dry + Chana Dal', roti: '4 Soft Wheat Phulkas', dal: 'Yellow Dal Tadka', rice: 'Jeera Rice', extra: 'Homemade Cucumber Pickle' },
        dinner: { main: 'Paneer Do Pyaza', roti: '4 Butter Phulkas', dal: 'Moong Dal', rice: 'Steamed Basmati', extra: 'Papad' }
      }
    ]
  },
  {
    id: 'tiffin-4',
    name: 'Annapurna Home Kitchen',
    tagline: 'Delicious Gujarati & Rajasthani Thali Subscriptions',
    rating: 4.8,
    reviewCount: 198,
    city: 'Kota',
    area: 'Talwandi',
    distance: '0.3 km from Allen Supath',
    type: 'veg',
    pricePerMeal: 75,
    weeklyPrice: 750,
    monthlyPrice: 2900,
    timing: 'Lunch: 11:30 AM - 2:15 PM | Dinner: 7:30 PM - 10:00 PM',
    isHygieneVerified: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    chefName: 'Kavita Agarwal',
    chefExperience: '10 years in Kota Coaching Hub',
    tags: ['Allen Student Favorite', 'Gujarati Kadhi', 'Soft Phulkas', 'Free Hotline Delivery'],
    menu: [
      {
        day: 'Monday',
        lunch: { main: 'Sev Tamatar + Gatte Ki Sabzi', roti: '4 Ghee Phulkas', dal: 'Sweet Gujarati Dal', rice: 'Jeera Rice', extra: 'Chaach & Churma' },
        dinner: { main: 'Paneer Butter Masala', roti: '4 Phulkas', dal: 'Yellow Dal', rice: 'Steamed Rice', extra: 'Gulab Jamun' }
      }
    ]
  },
  {
    id: 'tiffin-5',
    name: 'Swadish Tiffin Express',
    tagline: 'Budget-friendly healthy tiffins for engineers & IT workers',
    rating: 4.6,
    reviewCount: 156,
    city: 'Pune',
    area: 'Kothrud',
    distance: '0.5 km from MIT College',
    type: 'both',
    pricePerMeal: 80,
    weeklyPrice: 800,
    monthlyPrice: 3100,
    timing: 'Lunch: 12:00 PM - 2:30 PM | Dinner: 8:00 PM - 10:30 PM',
    isHygieneVerified: true,
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    chefName: 'Sanjay & Sunita Joshi',
    chefExperience: '9 years in Pune Kothrud',
    tags: ['Multi-grain Roti Option', 'Spicy Saoji / Kolhapuri', 'Flexible Pause Subscription'],
    menu: [
      {
        day: 'Monday',
        lunch: { main: 'Paneer Masala / Kolhapuri Chicken', roti: '4 Phulkas', dal: 'Dal Tadka', rice: 'Jeera Rice', extra: 'Salad' },
        dinner: { main: 'Bhendi Fry / Egg Curry', roti: '4 Phulkas', dal: 'Toor Dal', rice: 'Plain Rice', extra: 'Raita' }
      }
    ]
  }
];

// Hostel listings removed as PG & Hostel features are deprecated

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rohan Deshmukh',
    role: 'B.Tech CSE Student',
    institution: 'VNIT Nagpur',
    city: 'Nagpur',
    comment: 'Mess was unbearable and food delivery apps were draining my monthly allowance. Messwala connected me to Sunita Aunty’s Tiffin Adda! 4 soft phulkas, fresh paneer, and zero oiliness. Saved ₹3,500 every month!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    tiffinName: 'The Tiffin Adda'
  },
  {
    id: 'test-2',
    name: 'Priya Verma',
    role: 'NEET Aspirant',
    institution: 'Allen Kota',
    city: 'Kota',
    comment: 'Being far from home in Kota is tough, but having hot home-cooked meals delivered right to my room on time makes study hours so much easier. The pause feature when I visit home is seamless!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    tiffinName: 'Annapurna Home Kitchen'
  },
  {
    id: 'test-3',
    name: 'Siddharth Kulkarni',
    role: 'Software Developer',
    institution: 'Persistent Systems',
    city: 'Pune',
    comment: 'Working long hours in IT means no time to cook. Messwala’s monthly subscription gives me healthy, homestyle food every single day. I feel energetic and healthy.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    tiffinName: 'Swadish Tiffin Express'
  }
];

export const FAQS = [
  {
    question: 'How does the Messwala Tiffin Subscription work?',
    answer: 'Browse verified home kitchens near your area or college, check their daily & weekly menus, and order a trial meal (₹65-₹80) or subscribe to a weekly/monthly plan. Your meals are delivered hot at scheduled times (Lunch: 11:30 AM - 2:00 PM, Dinner: 7:30 PM - 10:00 PM).'
  },
  {
    question: 'What if I go home or skip a meal?',
    answer: 'No money lost! You can PAUSE your meal subscription directly via the Messwala App or Website with a single click before 8:00 AM for Lunch or 4:00 PM for Dinner. Your plan validity automatically extends by the paused days.'
  },
  {
    question: 'Are the home kitchens hygenically verified?',
    answer: 'Yes, 100%! Every home chef and mess partner on Messwala undergoes strict 15-point hygiene checks, FSSAI registration compliance, and kitchen quality inspections before getting listed.'
  },
  {
    question: 'Can I customize my food preferences (e.g. less spice, no onion/garlic)?',
    answer: 'Absolutely! When booking your subscription, you can add cooking instructions like "Less oil", "Extra Phulkas", "Jain Food", or "Mild Spice". Our home chefs personalize every tiffin box with love.'
  },
  {
    question: 'How do partners integrate with Messwala?',
    answer: 'Messwala partners with verified home kitchens and mess owners. Customers can choose their preferred local home chef instead of rigid mess food, giving full control over meals and delivery.'
  }
];
