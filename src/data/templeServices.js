// Temple data, darshan schedule, local puja information and guidelines for Akkalkot
export const templeInfo = {
  name: "Shri Swami Samarth Maharaj Mandir (Vatavruksha)",
  deity: "Shri Swami Samarth Maharaj (Dattatreya Avatar)",
  significance: "The holiest abode where Shri Swami Samarth lived, sat under the sacred Banyan Tree (Vatavruksha), blessed countless devotees, and took Mahasamadhi in 1878.",
  heroImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=80", // Sacred Indian temple aesthetic
  altImage: "https://images.unsplash.com/photo-1609766418204-94aae0ecfddc?auto=format&fit=crop&w=1200&q=80",
  address: "Shri Vatavruksha Swami Samarth Maharaj Devasthan, Mandir Marg, Akkalkot, Maharashtra - 413216",
  coordinates: "17.5256° N, 76.2045° E",
  dailyTimings: {
    templeOpen: "05:00 AM",
    templeClose: "10:30 PM",
    mukhDarshan: "05:30 AM to 10:00 PM (Continuous)",
    charanPadukaDarshan: "06:00 AM to 08:30 PM (With brief intervals during Aarti & Naivedya)"
  },
  aartiTimeline: [
    {
      time: "05:00 AM - 05:45 AM",
      name: "Kakad Aarti",
      marathiName: "काकड आरती",
      description: "Morning awakening prayers and holy mangalashtaka as the temple sanctum doors open.",
      recommendedArrivalTime: "04:30 AM"
    },
    {
      time: "06:00 AM - 08:00 AM",
      name: "Panchamrut Abhishek & Pooja",
      marathiName: "पंचामृत अभिषेक आणि महापूजा",
      description: "Sacred bathing of the Swami Samarth Charan Padukas with milk, honey, curd, ghee, and sugared holy water followed by chandan lepan.",
      recommendedArrivalTime: "05:45 AM"
    },
    {
      time: "11:30 AM - 12:15 PM",
      name: "Maha Naivedya & Madhyan Aarti",
      marathiName: "महानैवेद्य व माध्यान्ह आरती",
      description: "Grand food offering prepared with pure ingredients followed by midday celebratory aarti and conch blowing.",
      recommendedArrivalTime: "11:00 AM"
    },
    {
      time: "07:30 PM - 08:15 PM",
      name: "Dhoop Aarti (Sandhya Aarti)",
      marathiName: "धूप आरती (संध्या आरती)",
      description: "Evening twilight prayers accompanied by traditional brass dhoop burners, mrudangam, and devotional singing.",
      recommendedArrivalTime: "07:00 PM"
    },
    {
      time: "10:00 PM - 10:30 PM",
      name: "Shej Aarti",
      marathiName: "शेज आरती",
      description: "Night lullaby prayers marking the rest of the deity and peaceful closure of the temple sanctum.",
      recommendedArrivalTime: "09:40 PM"
    }
  ],
  annachhatraInfo: {
    title: "Shri Swami Samarth Annachhatra Mandal",
    description: "One of Maharashtra's largest free holy community meals (Mahaprasad). Thousands of pilgrims are served hot, satvik Maharashtrian meals daily with immense devotion and spotless cleanliness.",
    lunchTimings: "11:30 AM to 03:00 PM",
    dinnerTimings: "07:30 PM to 10:00 PM",
    menu: "Steaming Rice, Varan (Lentils), Pure Ghee, Seasonal Sabzi, Jowar Bhakri/Chapati, and traditional sweet (Shira/Kheer on special days)",
    cost: "Free for all devotees (Voluntary donations accepted at official donation counter)"
  },
  facilities: [
    {
      title: "Footwear & Bag Depository",
      detail: "Clean managed cloakrooms near North & South gates to securely deposit footwear, mobile phones, and hand baggage free of cost or nominal token.",
      icon: "ShieldCheck"
    },
    {
      title: "Wheelchair & Senior Citizens Access",
      detail: "Dedicated gentle ramp access at the East gate. Wheelchairs are made available for senior citizens and differently-abled devotees.",
      icon: "Accessibility"
    },
    {
      title: "Drinking Water & Washrooms",
      detail: "Modern RO-filtered cold water dispensaries and sanitized washroom facilities maintained continuously along the queue halls.",
      icon: "Droplets"
    },
    {
      title: "Official Prasad Counters",
      detail: "Authentic temple prasad packets, dried fruits, pedhas, and devotional literature available at official counters inside the campus.",
      icon: "Gift"
    },
    {
      title: "Vehicle Parking",
      detail: "Substantial pay-and-park grounds within 200–400m radius with designated slots for private cars, traveler vans, and tourist buses.",
      icon: "Car"
    }
  ],
  importantGuidelines: [
    {
      rule: "Dress Code & Etiquette",
      instruction: "Devotees are requested to wear modest, traditional Indian attire (Kurta-pyjama, dhoti, sarees, or salwar kameez). Avoid shorts or revealing clothing."
    },
    {
      rule: "Photography & Mobiles",
      instruction: "Photography and videography are strictly prohibited inside the inner sanctum (Gabhara) to preserve sanctity. Please keep phones on silent mode."
    },
    {
      rule: "Queue System",
      instruction: "Two distinct lines operate: 'Mukh Darshan' (moving continuously, 15-30 min wait) and 'Charan Paduka Darshan' (where touching of holy Padukas is allowed, 45-90 min wait on weekends)."
    },
    {
      rule: "Thursday & Purnima Crowds",
      instruction: "Thursdays (Guruwar), Ekadashi, Purnima, and Swami Samarth Punyatithi witness heavy footfall. Plan your arrival during early morning Kakad Aarti for fastest darshan."
    }
  ],
  localPujaServices: [
    {
      id: "panchamrut-abhishek",
      name: "Panchamrut Abhishek Information",
      shortDesc: "Vedic recitation of Purusha Sukta and Rudra path with five holy offerings.",
      idealFor: "Family well-being, peace and seeking Swami's blessings for new beginnings",
      approxTime: "45–60 mins",
      details: "Performed by local authorized priests at designated ancestral mathas and religious sanctums in Akkalkot.",
      inclusions: ["Chandan Lepan", "Tulsi Archana", "Sacred Prasad", "Sankalpa in family's Gotra"]
    },
    {
      id: "laghu-rudra-abhishek",
      name: "Laghu Rudra Pooja Information",
      shortDesc: "Deep spiritual Rudrabhisheka chanting 11 recitations of Sri Rudram.",
      idealFor: "Overcoming obstacles, health remedies, and spiritual progress",
      approxTime: "2 to 2.5 hours",
      details: "Traditional ritual conducted with dry coconut, bilva leaves, flowers, and holy water.",
      inclusions: ["Complete Vedic Pandits", "Havan Samagri", "Aarti", "Brahmin Bhojan consultation"]
    },
    {
      id: "swami-chadhava",
      name: "Swami Chadhava & Vastra Seva Information",
      shortDesc: "Offering of saffron robes (Kafni), shawls, and garland chadhava to the holy seat.",
      idealFor: "Gratitude offering (Manokamna poorti) and devotional dedication",
      approxTime: "20–30 mins",
      details: "Devotees can obtain authentic certified saffron cloth and marigold malas from approved local stores.",
      inclusions: ["Pure cotton saffron vastra", "Fresh floral chadhava", "Attar offering"]
    },
    {
      id: "satyanarayan-katha",
      name: "Shri Satyanarayan Pooja Information",
      shortDesc: "Auspicious thanksgiving puja performed for family prosperity and health.",
      idealFor: "Gruha shanti, wedding anniversaries, and birthday blessings in Akkalkot",
      approxTime: "90 mins",
      details: "Conducted at local ashrams, pilgrim guest houses, or family residences.",
      inclusions: ["Full Katha recitation", "Panchamrut", "Sheera Prasad", "Arati"]
    }
  ],
  disclaimer: "Disclaimer: This platform provides curated informational guidance for pilgrims visiting Akkalkot. We are an independent travel and hospitality resource and are NOT officially affiliated with, endorsed by, or a representative of the official Shri Vatavruksha Swami Samarth Maharaj Devasthan Trust or Annachhatra Trust. All puja services and arrangements mentioned are locally available through independent local service providers and pandits."
};
