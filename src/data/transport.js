// Transport guide, local transit options, bus & train routes for Akkalkot
export const transportOptions = [
  {
    id: "auto-rickshaw",
    mode: "Local Auto Rickshaw",
    icon: "Car",
    availability: "24/7 Available at Bus Stand & Temple Gates",
    typicalFare: "₹20 – ₹40 within town | ₹150 – ₹200 for full town tour",
    description: "The most convenient way to travel between hotels, Annachhatra, Vatavruksha Mandir, Samadhi Math, and the Bus Stand. Both private and shared autos operate continuously.",
    keyPoints: [
      "Shared autos available along main corridor for ₹10–₹15 per seat",
      "Fixed rate prepaid auto stands near Central Bus Station",
      "Can be reserved by the hour for local temple hops"
    ]
  },
  {
    id: "private-taxi",
    mode: "Private Taxi & Pilgrimage Rental",
    icon: "Compass",
    availability: "Advance booking / Hotel Concierge",
    typicalFare: "₹900 – ₹1,200 (Solapur Transfer) | ₹2,500 – ₹3,500 (Day Circuit)",
    description: "AC Sedan and Ertiga/Innova cabs ideal for families arriving at Solapur Station or undertaking the revered 'Datta Peeth Triangle' (Akkalkot → Gangapur → Tuljapur).",
    keyPoints: [
      "Reliable door-to-door pickup from Solapur Railway Junction",
      "Drivers well-versed in temple timings, VIP queue tips, and parking spots",
      "Clean air-conditioned vehicles with verified local drivers"
    ]
  },
  {
    id: "msrtc-bus",
    mode: "MSRTC State Transport Buses",
    icon: "Bus",
    availability: "Every 15–20 minutes between Solapur & Akkalkot",
    typicalFare: "₹45 – ₹65 per ticket (Solapur – Akkalkot)",
    description: "Maharashtra State Road Transport (MSRTC) operates direct 'Lal Pari' red buses and semi-luxury 'Asiad' coaches around the clock from Solapur Central Bus Stand.",
    keyPoints: [
      "Journey time is approximately 45–55 minutes via smooth 4-lane highway",
      "Direct express buses also connect Pune, Mumbai, Kolhapur, and Thane",
      "Stops at Akkalkot S.T. Bus Stand located just 1 km from the Mandir"
    ]
  },
  {
    id: "railway-access",
    mode: "Train Connectivity",
    icon: "Train",
    availability: "Solapur Junction (SUR) & Akkalkot Road (AKOR)",
    typicalFare: "Express train fares as per IRCTC",
    description: "Solapur Junction (40 km) is a major A1-grade railway division station connected to Mumbai, Pune, Delhi, Hyderabad, and Bengaluru with Vande Bharat and superfast expresses.",
    keyPoints: [
      "Solapur Junction (SUR): 40 km away, connected 24/7 via highway cabs & buses",
      "Akkalkot Road Station (AKOR): 10 km away on Solapur-Wadi line with passenger halts",
      "Mumbai CSMT - Solapur Vande Bharat provides ultra-fast connectivity (6.5 hrs)"
    ]
  }
];

export const popularRoutes = [
  {
    from: "Solapur Railway Station (SUR)",
    to: "Akkalkot Temple",
    distance: "38 km",
    duration: "45 mins",
    options: "Private Cab (₹900-1100), MSRTC Bus (₹50), Auto (₹700)",
    condition: "Smooth 4-lane national highway (NH-150E)"
  },
  {
    from: "Akkalkot Mandir",
    to: "Gangapur (Sri Dattatreya Temple)",
    distance: "75 km",
    duration: "1 hr 45 mins",
    options: "Private Cab (₹2,200-2,600 return), State Bus",
    condition: "Scenic pilgrimage highway crossing Maharashtra-Karnataka border"
  },
  {
    from: "Akkalkot Mandir",
    to: "Tuljapur (Bhavani Mata Temple)",
    distance: "82 km",
    duration: "1 hr 50 mins",
    options: "Private Cab (₹2,400-2,800 return), Direct MSRTC Buses",
    condition: "Well-paved state highway via Solapur bypass"
  },
  {
    from: "Pune",
    to: "Akkalkot",
    distance: "295 km",
    duration: "5.5 – 6 hours",
    options: "Vande Bharat / Express Train to Solapur, or NH-65 Drive",
    condition: "Excellent Pune-Solapur 4-lane expressway"
  },
  {
    from: "Mumbai",
    to: "Akkalkot",
    distance: "435 km",
    duration: "7.5 – 8 hours",
    options: "Vande Bharat Express, Overnight Sleeper Buses, Private Drive",
    condition: "Mumbai-Pune Expressway to NH-65 Solapur corridor"
  }
];
