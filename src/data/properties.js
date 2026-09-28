// Mock dataset of verified hotels, guest houses, and lodges in Akkalkot, Maharashtra
export const properties = [
  {
    id: "shree-guest-house",
    slug: "shree-guest-house",
    name: "Shree Guest House",
    tagline: "Peaceful family retreat located just walking distance from the sacred banyan tree shrine",
    rating: 4.8,
    reviewsCount: 342,
    distanceFromTemple: "800m from Temple",
    distanceNumericMeters: 800,
    price: 899,
    originalPrice: 1200,
    category: "Guest House",
    availabilityBadge: "High Demand",
    popularChoice: true,
    suitableFor: ["Family", "Couple-friendly", "Yatris"],
    featured: true,
    address: "Opposite Nagar Palika Office, Main Temple Road, Akkalkot - 413216",
    checkInTime: "11:00 AM",
    checkOutTime: "10:00 AM",
    phonePlaceholder: "+919876543210",
    description: "Shree Guest House is one of Akkalkot's most beloved devotee stays, offering immaculate hygiene, warm Maharashtrian hospitality, and peaceful surroundings. Located a breezy 800m walk from the holy Vatavruksha Swami Samarth Mandir, guests enjoy unhurried darshan access, continuous hot water, and secure enclosed parking for Solapur and Pune road travelers.",
    overviewPoints: [
      "8-minute unhurried walk to Vatavruksha Mandir & Annachhatra",
      "24-hour solar & geyser hot water for morning holy bath",
      "Safe gated parking suitable for SUVs and private cars",
      "Complimentary filtered drinking water & lift access to all floors",
      "Pure vegetarian dining options within 50 meters"
    ],
    amenities: [
      "AC",
      "Non-AC",
      "Parking",
      "Wi-Fi",
      "Hot Water",
      "Attached Bathroom",
      "Power Backup",
      "Elevator"
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", // Hotel bedroom clean
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", // Luxury warm bedroom
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80", // King room
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80", // Guest suite
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", // Clean bathroom
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", // Twin bed room
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80", // Cozy lighting
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80", // Reception / Lounge
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"  // Heritage courtyard
    ],
    roomTypes: [
      {
        id: "std-non-ac",
        name: "Standard Non-AC Double Room",
        price: 899,
        capacity: "2 Adults",
        bed: "1 Queen Bed",
        features: ["Ceiling Fan", "Attached Bathroom", "24/7 Hot Water", "Fresh Linen"]
      },
      {
        id: "deluxe-ac",
        name: "Deluxe Air-Conditioned Room",
        price: 1399,
        capacity: "2 Adults + 1 Child",
        bed: "1 King Bed",
        features: ["Split AC", "LED TV", "Free Wi-Fi", "Daily Housekeeping"]
      },
      {
        id: "family-suite",
        name: "Family Suite (4-Bed)",
        price: 1999,
        capacity: "4 Adults",
        bed: "2 Queen Beds",
        features: ["Spacious Hall", "AC & Fan", "2 Bathrooms", "Ideal for Families"]
      }
    ],
    policies: [
      "Valid Government Photo ID (Aadhaar / Voter ID / Driving License) required at check-in",
      "Alcohol and tobacco consumption strictly prohibited on premises",
      "Early morning check-in subject to room availability upon request"
    ],
    nearbyLandmarks: [
      { name: "Vatavruksha Swami Samarth Mandir", distance: "800 meters (8 min walk)" },
      { name: "Shree Swami Samarth Annachhatra Mandal", distance: "650 meters (7 min walk)" },
      { name: "Akkalkot Central Bus Station", distance: "1.2 km (4 min auto)" },
      { name: "Akkalkot Rajwada & Royal Armory", distance: "1.5 km (5 min auto)" }
    ]
  },
  {
    id: "swami-krupa-residency",
    slug: "swami-krupa-residency",
    name: "Swami Krupa Residency",
    tagline: "Modern comfort with traditional hospitality right beside the Annachhatra complex",
    rating: 4.7,
    reviewsCount: 289,
    distanceFromTemple: "450m from Temple",
    distanceNumericMeters: 450,
    price: 1299,
    originalPrice: 1650,
    category: "Residency",
    availabilityBadge: "Only 3 Rooms Left",
    popularChoice: true,
    suitableFor: ["Family", "Couple-friendly"],
    featured: true,
    address: "Khandoba Galli, Near Annachhatra Gate No. 2, Akkalkot - 413216",
    checkInTime: "12:00 PM",
    checkOutTime: "10:30 AM",
    phonePlaceholder: "+919876543211",
    description: "Swami Krupa Residency provides premier stay facilities tailored for visiting families and elderly devotees. With elevators, spacious corridors, wheelchair assistance on request, and an unbeatable 450-meter proximity to the main temple complex, it guarantees complete peace of mind during your pilgrimage.",
    overviewPoints: [
      "Ultra-close 450m distance — walk easily even with senior family members",
      "Modern elevator and wide corridors with zero steps at entrance",
      "High-speed fiber Wi-Fi throughout the building",
      "Full power backup generator for uninterrupted cooling and lights"
    ],
    amenities: [
      "AC",
      "Parking",
      "Wi-Fi",
      "Hot Water",
      "Attached Bathroom",
      "Elevator",
      "Power Backup"
    ],
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "deluxe-king",
        name: "Deluxe AC Double Room",
        price: 1299,
        capacity: "2 Adults",
        bed: "1 King Bed",
        features: ["Split AC", "32-inch Smart TV", "Electric Kettle", "Hot Shower"]
      },
      {
        id: "executive-triple",
        name: "Executive 3-Bed Room",
        price: 1699,
        capacity: "3 Adults",
        bed: "1 Queen + 1 Single Bed",
        features: ["Air Conditioned", "Wardrobe", "Work Desk", "Balcony View"]
      },
      {
        id: "grand-family",
        name: "Grand Family Quad Room",
        price: 2299,
        capacity: "4-5 Guests",
        bed: "2 King Beds",
        features: ["Spacious Living", "Double Vanity", "Tea/Coffee Maker", "Express Laundry"]
      }
    ],
    policies: [
      "Check-in: 12:00 PM | Check-out: 10:30 AM",
      "Complimentary stay for kids below 6 years sharing existing bed",
      "Strictly vegetarian & alcohol-free establishment"
    ],
    nearbyLandmarks: [
      { name: "Vatavruksha Temple Complex", distance: "450 meters (5 min walk)" },
      { name: "Annachhatra Dining Hall", distance: "300 meters (3 min walk)" },
      { name: "Samadhi Math", distance: "900 meters (10 min walk)" }
    ]
  },
  {
    id: "akkalkot-heritage-stay",
    slug: "akkalkot-heritage-stay",
    name: "Akkalkot Heritage Stay",
    tagline: "Experience regal Maratha hospitality in an authentic stone-carved boutique haveli",
    rating: 4.9,
    reviewsCount: 194,
    distanceFromTemple: "1.2 km from Temple",
    distanceNumericMeters: 1200,
    price: 2450,
    originalPrice: 3200,
    category: "Heritage Boutique",
    availabilityBadge: "Boutique Experience",
    popularChoice: true,
    suitableFor: ["Family", "Couple-friendly"],
    featured: true,
    address: "Near Old Royal Palace (Rajwada), Station Road, Akkalkot - 413216",
    checkInTime: "01:00 PM",
    checkOutTime: "11:00 AM",
    phonePlaceholder: "+919876543212",
    description: "Step into timeless Maharashtrian elegance at Akkalkot Heritage Stay. Built with local black basalt stone, teak wood archways, and traditional courtyard verandas (aangan), this boutique property combines sacred devotion with restorative luxury. Enjoy home-cooked Solapuri thalis and private temple transfer services.",
    overviewPoints: [
      "Stunning Maratha heritage courtyard architecture with central fountain",
      "Private air-conditioned shuttle service to Mandir for morning Aarti",
      "In-house dining serving organic Jowar Bhakri, Shengdana Chutney & Pitla",
      "Lush shaded garden and reading patio with spiritual literature"
    ],
    amenities: [
      "AC",
      "Parking",
      "Wi-Fi",
      "Hot Water",
      "Attached Bathroom",
      "In-house Restaurant",
      "Power Backup"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "heritage-deluxe",
        name: "Heritage Veranda Deluxe",
        price: 2450,
        capacity: "2 Adults",
        bed: "1 Carved Teak King Bed",
        features: ["Antique Furnishings", "Courtyard View", "Premium Bath Amenities", "Welcome Drink"]
      },
      {
        id: "royal-suite",
        name: "Maharaja Royal Suite",
        price: 3600,
        capacity: "2-3 Adults",
        bed: "1 Four-Poster King Bed",
        features: ["Private Sitting Lounge", "Deep Soaking Tub", "Complimentary Breakfast", "Priority Car Service"]
      }
    ],
    policies: [
      "Early check-in from 10:00 AM on prior request",
      "Peaceful retreat guidelines: quiet hours from 10:00 PM to 6:00 AM",
      "Pet animals not permitted"
    ],
    nearbyLandmarks: [
      { name: "Akkalkot Royal Rajwada Palace", distance: "300 meters (3 min walk)" },
      { name: "Vatavruksha Swami Samarth Mandir", distance: "1.2 km (4 min shuttle)" },
      { name: "Akkalkot Railway Station", distance: "6.8 km (12 min drive)" }
    ]
  },
  {
    id: "darshan-residency",
    slug: "darshan-residency",
    name: "Darshan Residency",
    tagline: "Comfortable, economical rooms directly opposite the main pilgrimage market",
    rating: 4.5,
    reviewsCount: 412,
    distanceFromTemple: "600m from Temple",
    distanceNumericMeters: 600,
    price: 999,
    originalPrice: 1400,
    category: "Residency",
    availabilityBadge: "Verified Stay",
    popularChoice: false,
    suitableFor: ["Family", "Couple-friendly", "Yatris"],
    featured: false,
    address: "Bazaar Road, Near Swami Samarth Bank, Akkalkot - 413216",
    checkInTime: "11:30 AM",
    checkOutTime: "10:00 AM",
    phonePlaceholder: "+919876543213",
    description: "Darshan Residency has served thousands of happy pilgrims traveling from Solapur, Mumbai, Pune, and Karnataka. Offering clean, airy rooms with hygienic western bathrooms, fresh sheets, and around-the-clock front desk support, it is the dependable anchor for your spiritual itinerary.",
    overviewPoints: [
      "Direct walking route to both Vatavruksha Mandir and Samadhi Math",
      "Surrounded by traditional sweet shops for fresh pedha & prasad packaging",
      "Clean sanitized bathrooms with 24-hr hot geysers",
      "Prompt luggage storage facilities if you arrive before check-in"
    ],
    amenities: [
      "AC",
      "Non-AC",
      "Wi-Fi",
      "Hot Water",
      "Attached Bathroom",
      "Parking"
    ],
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "classic-non-ac",
        name: "Classic Non-AC Double",
        price: 999,
        capacity: "2 Guests",
        bed: "1 Queen Bed",
        features: ["Clean Linens", "Ceiling Fan", "Attached Bath", "24/7 Water"]
      },
      {
        id: "prime-ac",
        name: "Prime AC Double Room",
        price: 1450,
        capacity: "2 Guests",
        bed: "1 Queen Bed",
        features: ["Air Conditioned", "Flat LED TV", "Intercom", "Bottled Water"]
      }
    ],
    policies: [
      "Zero cancellation fee up to 24 hours prior to check-in",
      "Children under 8 stay free with parents"
    ],
    nearbyLandmarks: [
      { name: "Vatavruksha Temple", distance: "600 meters (6 min walk)" },
      { name: "Prasad Sweet Bazaar", distance: "100 meters (1 min walk)" }
    ]
  },
  {
    id: "bhakt-nivas-prime",
    slug: "bhakt-nivas-prime",
    name: "Bhakt Nivas Prime",
    tagline: "Dedicated to pilgrim comfort with serene prayer halls and large family suites",
    rating: 4.6,
    reviewsCount: 520,
    distanceFromTemple: "350m from Temple",
    distanceNumericMeters: 350,
    price: 750,
    originalPrice: 1000,
    category: "Pilgrim Nivas",
    availabilityBadge: "Devotee Favorite",
    popularChoice: true,
    suitableFor: ["Family", "Yatris"],
    featured: true,
    address: "Mandir Marg, Near West Toran Gate, Akkalkot - 413216",
    checkInTime: "10:00 AM",
    checkOutTime: "09:00 AM",
    phonePlaceholder: "+919876543214",
    description: "Bhakt Nivas Prime is thoughtfully designed for yatris and large devotee families traveling in groups. Offering exceptionally clean non-AC and AC dorms alongside private ensuite rooms, it gives you prompt walking access to early morning Kakad Aarti (5:00 AM) without the need for any vehicle.",
    overviewPoints: [
      "Just 350m from Mandir — unbeatable for 5:00 AM Kakad Aarti",
      "Spacious prayer hall for private chanting and evening stotra path",
      "Affordable dormitory & multi-bed options for group tour buses",
      "Clean community dining hall providing warm morning tea and poha"
    ],
    amenities: [
      "Non-AC",
      "AC",
      "Parking",
      "Hot Water",
      "Attached Bathroom",
      "Elevator"
    ],
    images: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "pilgrim-twin",
        name: "Standard Devotee Double",
        price: 750,
        capacity: "2 Guests",
        bed: "2 Twin Beds",
        features: ["Clean Attached Bath", "Geyser Hot Water", "Ceiling Fan"]
      },
      {
        id: "family-five-bed",
        name: "Family Dormitory (5-Bed)",
        price: 1500,
        capacity: "5 Guests",
        bed: "5 Individual Beds",
        features: ["Attached Western Bathroom", "AC Available", "Lockers Included"]
      }
    ],
    policies: [
      "Early morning Aarti wakeup alarm service available on request",
      "Devotional atmosphere maintained across all guest corridors"
    ],
    nearbyLandmarks: [
      { name: "Vatavruksha Temple Toran Gate", distance: "350 meters (4 min walk)" },
      { name: "Bhojnalaya Annachhatra", distance: "400 meters (5 min walk)" }
    ]
  },
  {
    id: "shree-samarth-lodge",
    slug: "shree-samarth-lodge",
    name: "Shree Samarth Lodge",
    tagline: "Reliable budget accommodation with safe parking and 24-hr checkout facility",
    rating: 4.3,
    reviewsCount: 310,
    distanceFromTemple: "1.0 km from Temple",
    distanceNumericMeters: 1000,
    price: 650,
    originalPrice: 850,
    category: "Lodge",
    availabilityBadge: "Budget Winner",
    popularChoice: false,
    suitableFor: ["Family", "Yatris"],
    featured: false,
    address: "Near S.T. Bus Stand, Solapur Road, Akkalkot - 413216",
    checkInTime: "24-Hour Flexible",
    checkOutTime: "24-Hour Cycle",
    phonePlaceholder: "+919876543215",
    description: "Located close to the Akkalkot MSRTC Bus Station, Shree Samarth Lodge offers pocket-friendly clean lodging for pilgrims arriving via bus from Solapur, Gangapur, Tuljapur, and Kolhapur. Features clean western bathrooms, quick auto accessibility, and friendly local travel advice.",
    overviewPoints: [
      "Direct 2-minute walk from Akkalkot Central Bus Stand",
      "Flexible 24-hour checkout option for traveling bus passengers",
      "Constant supply of fresh borewell and municipal filtered water",
      "Auto rickshaws stationed outside 24/7 for Rs. 20-30 temple fare"
    ],
    amenities: [
      "Non-AC",
      "AC",
      "Hot Water",
      "Attached Bathroom",
      "Parking"
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "budget-double",
        name: "Standard Budget Double",
        price: 650,
        capacity: "2 Guests",
        bed: "1 Double Bed",
        features: ["Clean Attached Bath", "Geyser", "Desk & Chair"]
      },
      {
        id: "ac-standard",
        name: "Standard AC Room",
        price: 1100,
        capacity: "2 Guests",
        bed: "1 Double Bed",
        features: ["Air Conditioner", "Cable Television", "Hot Water"]
      }
    ],
    policies: [
      "24-hour checkout calculated from check-in timestamp",
      "Direct auto rickshaw tie-up for Solapur railway drop"
    ],
    nearbyLandmarks: [
      { name: "Akkalkot S.T. Bus Stand", distance: "200 meters (2 min walk)" },
      { name: "Vatavruksha Temple", distance: "1.0 km (3 min auto)" }
    ]
  },
  {
    id: "temple-view-rooms",
    slug: "temple-view-rooms",
    name: "Temple View Rooms & Suites",
    tagline: "Panoramic views of the sacred temple kalash with premium modern hospitality",
    rating: 4.8,
    reviewsCount: 388,
    distanceFromTemple: "250m from Temple",
    distanceNumericMeters: 250,
    price: 1850,
    originalPrice: 2400,
    category: "Premium Hotel",
    availabilityBadge: "Prime Location",
    popularChoice: true,
    suitableFor: ["Family", "Couple-friendly"],
    featured: true,
    address: "Temple Ring Road, Opposite Annachhatra VIP Gate, Akkalkot - 413216",
    checkInTime: "12:00 PM",
    checkOutTime: "11:00 AM",
    phonePlaceholder: "+919876543216",
    description: "Enjoy waking up to temple bells and a direct panoramic view of the golden kalash. Temple View Rooms & Suites offers contemporary air-conditioned guest suites with plush spring mattresses, elevator connectivity, fast Wi-Fi, and personalized assistance for aged parents needing hassle-free temple visits.",
    overviewPoints: [
      "Superb 250m proximity — closest private premium hotel to the shrine",
      "Upper floor rooms feature serene balcony views of temple surroundings",
      "Pure vegetarian in-house breakfast and herbal tea lounge",
      "Covered multi-level car parking with 24-hr CCTV surveillance"
    ],
    amenities: [
      "AC",
      "Parking",
      "Wi-Fi",
      "Hot Water",
      "Attached Bathroom",
      "Elevator",
      "In-house Restaurant",
      "Power Backup"
    ],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "temple-deluxe",
        name: "Deluxe Temple View AC",
        price: 1850,
        capacity: "2 Adults",
        bed: "1 King Bed",
        features: ["Kalash View", "Split AC", "43-inch LED TV", "Tea/Coffee Maker"]
      },
      {
        id: "family-grand",
        name: "Imperial Family Suite",
        price: 2850,
        capacity: "4 Adults + 2 Kids",
        bed: "2 King Beds",
        features: ["Two En-suite Bathrooms", "Living Lounge", "Mini Fridge", "Bathrobes"]
      }
    ],
    policies: [
      "Wheelchair available free of charge for senior citizens",
      "Pure vegetarian dining only; outside cooked meals allowed"
    ],
    nearbyLandmarks: [
      { name: "Vatavruksha Temple Entry Gate", distance: "250 meters (3 min walk)" },
      { name: "Swami Samarth Annachhatra", distance: "150 meters (2 min walk)" }
    ]
  },
  {
    id: "sai-krupa-guest-house",
    slug: "sai-krupa-guest-house",
    name: "Sai Krupa Guest House",
    tagline: "Neat, welcoming rooms with home-cooked meals and tranquil garden courtyard",
    rating: 4.4,
    reviewsCount: 220,
    distanceFromTemple: "1.4 km from Temple",
    distanceNumericMeters: 1400,
    price: 850,
    originalPrice: 1100,
    category: "Guest House",
    availabilityBadge: "Verified Host",
    popularChoice: false,
    suitableFor: ["Family", "Couple-friendly", "Yatris"],
    featured: false,
    address: "Gangapur Naka Road, Akkalkot - 413216",
    checkInTime: "11:00 AM",
    checkOutTime: "10:00 AM",
    phonePlaceholder: "+919876543217",
    description: "Positioned along the peaceful Gangapur Naka road away from traffic congestion, Sai Krupa Guest House is favored by travelers who value tranquility, wide gated parking for large vehicles, and attentive family hospitality. Enjoy fresh tea and Maharashtrian breakfast served right to your room.",
    overviewPoints: [
      "Quiet residential setting away from temple bazaar noise",
      "Expansive private driveway with free secure parking",
      "Authentic freshly ground Masala Tea and Pohe prepared on order",
      "Quick 5-minute auto connectivity to all Akkalkot shrines"
    ],
    amenities: [
      "AC",
      "Non-AC",
      "Parking",
      "Wi-Fi",
      "Hot Water",
      "Attached Bathroom"
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "classic-ac",
        name: "Classic AC Room",
        price: 1250,
        capacity: "2 Adults",
        bed: "1 Queen Bed",
        features: ["Air Conditioned", "Wardrobe", "Hot Geyser", "Wi-Fi"]
      },
      {
        id: "budget-room",
        name: "Standard Non-AC Room",
        price: 850,
        capacity: "2 Adults",
        bed: "1 Queen Bed",
        features: ["Ceiling Fan", "Attached Bathroom", "Morning Hot Water"]
      }
    ],
    policies: [
      "Quiet hours after 10:30 PM",
      "Family-friendly environment"
    ],
    nearbyLandmarks: [
      { name: "Vatavruksha Mandir", distance: "1.4 km (4 min auto)" },
      { name: "Shivpuri Ashram", distance: "3.2 km (8 min auto)" }
    ]
  },
  {
    id: "vatavruksha-imperial",
    slug: "vatavruksha-imperial",
    name: "Vatavruksha Imperial Suites",
    tagline: "Executive pilgrimage suites with dedicated concierge and Solapur pickup assistance",
    rating: 4.9,
    reviewsCount: 165,
    distanceFromTemple: "500m from Temple",
    distanceNumericMeters: 500,
    price: 2199,
    originalPrice: 2800,
    category: "Luxury Suites",
    availabilityBadge: "Top Rated",
    popularChoice: true,
    suitableFor: ["Family", "Couple-friendly"],
    featured: true,
    address: "New Palace Link Road, Near Solapur Highway Bypass, Akkalkot - 413216",
    checkInTime: "12:00 PM",
    checkOutTime: "11:00 AM",
    phonePlaceholder: "+919876543218",
    description: "Vatavruksha Imperial Suites is the preferred choice for discerning devotees and travelers seeking hospitality at national standards. Featuring soundproofed rooms, premium memory foam mattresses, curated satvik thalis, and seamless airport or Solapur railway station cab transfers.",
    overviewPoints: [
      "Quiet 500m straight walkway to the central temple complex",
      "Full acoustic insulation for serene prayer and peaceful sleep",
      "In-house vegetarian pure ghee restaurant 'Naivedyam'",
      "Dedicated concierge desk assisting with local driver hire and pujas"
    ],
    amenities: [
      "AC",
      "Parking",
      "Wi-Fi",
      "Hot Water",
      "Attached Bathroom",
      "In-house Restaurant",
      "Elevator",
      "Power Backup"
    ],
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
    ],
    roomTypes: [
      {
        id: "imperial-king",
        name: "Imperial King Suite",
        price: 2199,
        capacity: "2 Adults",
        bed: "1 King Bed",
        features: ["Inverter AC", "Coffee Machine", "Bath Slippers", "Smart TV"]
      },
      {
        id: "family-penthouse",
        name: "Royal Family Penthouse",
        price: 3499,
        capacity: "4-6 Guests",
        bed: "2 King Beds + Divan",
        features: ["Private Terrace", "Dining Table", "2 Smart TVs", "Complimentary Breakfast"]
      }
    ],
    policies: [
      "Solapur Railway Station pickup arranged on prior notice (Rs. 900)",
      "Strict non-smoking and satvik dining property"
    ],
    nearbyLandmarks: [
      { name: "Vatavruksha Temple", distance: "500 meters (6 min walk)" },
      { name: "Annachhatra Dining Hall", distance: "450 meters (5 min walk)" },
      { name: "Solapur-Akkalkot Highway", distance: "800 meters (2 min drive)" }
    ]
  }
];
