/**
 * Feature Flags Configuration
 * Control visibility of sections pending verified client assets/completed installations.
 */
export const FEATURE_FLAGS = {
  SHOW_PROJECTS: false,      // Set to true once verified installation photos are available
  SHOW_TESTIMONIALS: false,  // Set to true once verified customer feedback is available
};

export const COMPANY_INFO = {
  name: "Horizon Solar Power Solutions",
  shortName: "Horizon Solar",
  tagline: "Powering A Brighter Tomorrow With Clean, Renewable Energy",
  slogan: "Clean Energy • Smart Future • Green Tomorrow",
  gstin: "32AATFH8278G1ZV",
  phone1: "+91 99471 60826",
  phone1Raw: "9947160826",
  phone2: "+91 82812 29530",
  phone2Raw: "8281229530",
  whatsapp: "919947160826",
  email: "horizonsolarpowersolutions@gmail.com",
  address: "Kandakkai Road, Mayyil, Kannur, Kerala - 670602",
  city: "Mayyil, Kannur",
  state: "Kerala",
  googleMapsUrl: "https://maps.google.com/?q=Mayyil+Kannur+Kerala",
  social: {
    facebook: "https://facebook.com/HorizonsolarMayyil",
    instagram: "https://instagram.com/HORIZON_SOLAR_MAYYIL",
  },
  workingHours: "Mon - Sat: 9:00 AM - 6:30 PM",
  subsidyAmount: "₹78,000",
  subsidyScheme: "PM Surya Ghar: Muft Bijli Yojana",
};

export const SOLAR_SOLUTIONS = [
  {
    id: "on-grid",
    title: "On-Grid Solar Systems",
    tagline: "Connected to KSEB Net Metering",
    description: "The most economical and popular choice for homes and businesses. Export surplus energy to the KSEB grid during the day and run your meter backwards. Qualifies for maximum government subsidy.",
    features: [
      "Up to 90% reduction on KSEB bills",
      "KSEB Bi-directional Net Metering",
      "Eligible for up to ₹78,000 Govt. Subsidy",
      "No recurring battery replacement cost",
      "Payback period of just 3 to 4 years",
      "Real-time mobile app energy monitoring"
    ],
    idealFor: "Homes, villas, and commercial shops with active daytime power consumption and stable grid.",
    badge: "Most Popular",
    color: "emerald"
  },
  {
    id: "off-grid",
    title: "Off-Grid Solar Systems",
    tagline: "Total Energy Independence with Battery Storage",
    description: "Completely independent solar energy system equipped with high-performance solar batteries. Generates and stores power so you have 24/7 electricity even during frequent power cuts and heavy monsoon storms.",
    features: [
      "100% independence from power cuts & load shedding",
      "High-cycle Solar Tubular / Lithium-ion battery options",
      "Operates autonomously without grid connection",
      "Overcharge and deep-discharge protection",
      "Ideal for hilly, rural, and farm locations in Kannur",
      "Silent, zero-fume alternative to diesel generators"
    ],
    idealFor: "Remote properties, farmhouses, plantation homes, clinics, and areas facing frequent power cuts.",
    badge: "24/7 Backup",
    color: "amber"
  },
  {
    id: "hybrid",
    title: "Hybrid Solar Systems",
    tagline: "Best of Both Worlds: Grid Export + Battery Storage",
    description: "The ultimate power solution. Combines the economic benefits of KSEB net-metering with the emergency backup assurance of battery storage. Export excess units when batteries are full and enjoy uninterrupted power during grid outages.",
    features: [
      "Uninterrupted power during power cuts & daytime savings",
      "Automatic switchover within milliseconds",
      "Net-meter export credit when batteries are fully charged",
      "Smart priority charging from solar over grid",
      "Intelligent hybrid inverter with cloud telemetry",
      "Future-ready for EV charging stations"
    ],
    idealFor: "Premium homes, hospitals, IT offices, boutique resorts, and businesses where power cuts cannot be tolerated.",
    badge: "Premium Choice",
    color: "blue"
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Solar",
    tagline: "High-Yield Rooftop Power Plants for Enterprises",
    description: "Turn your unused factory, school, college, or showroom rooftop into a massive cost-saving profit center. Benefit from accelerated depreciation tax breaks, lowered operational costs, and ESG compliance.",
    features: [
      "Custom engineered for 10kW to 500kW+ load demands",
      "Accelerated Depreciation tax benefits under Section 32",
      "Dramatic reduction in peak commercial tariff slabs",
      "Heavy-duty cyclone-resistant galvanized mounting",
      "CEIG approvals & statutory compliance handled",
      "Comprehensive O&M and preventive maintenance contracts"
    ],
    idealFor: "Schools, colleges, hospitals, auditoriums, supermarkets, factories, and cold storage units.",
    badge: "High ROI",
    color: "indigo"
  },
  {
    id: "maintenance",
    title: "Solar Installation, Maintenance & AMC",
    tagline: "Professional Engineering & Lifetime Support",
    description: "From certified site surveys to post-installation servicing, our Kannur-based engineering squad provides complete lifecycle care for your solar assets, ensuring maximum power output every single day.",
    features: [
      "Trained technicians with high safety standards",
      "Pressure-wash solar panel cleaning & dust removal",
      "Inverter diagnostics, firmware updates & fault repair",
      "Earthing and lightning surge protection testing",
      "KSEB bi-directional meter testing & liaisoning",
      "Annual Maintenance Contracts (AMC) with emergency callout"
    ],
    idealFor: "Existing and new solar plant owners seeking peak generation efficiency year-round.",
    badge: "Local Service",
    color: "teal"
  },
  {
    id: "energy-saving",
    title: "Energy Saving Solutions & Audit",
    tagline: "Smart Power Optimization & Load Balancing",
    description: "Holistic energy consulting to identify leakages, eliminate power factor penalties, and optimize electrical loads before or alongside your solar rooftop installation.",
    features: [
      "Detailed power consumption & tariff slab audit",
      "Harmonic distortion analysis & power factor correction",
      "Phase balancing for 3-phase residential & commercial setups",
      "Smart net-metering telemetry & automated reporting",
      "Guidance on energy-efficient heat pumps and inverter appliances",
      "Maximizing self-consumption of generated solar energy"
    ],
    idealFor: "High electricity bill consumers looking to maximize efficiency and cut waste.",
    badge: "Consulting",
    color: "green"
  }
];

export const SUBSIDY_TIERS = [
  {
    capacity: "1 kW System",
    subsidy: "₹30,000",
    subsidyAmount: 30000,
    monthlyUnits: "120 - 150 Units",
    monthlySavings: "₹1,000 - ₹1,400",
    roofArea: "100 - 120 sq.ft",
    idealFor: "Small families with low electricity usage",
    features: ["Covers basic lights, fans, TV & fridge", "Direct DBT subsidy to bank", "KSEB 1-phase net meter", "25-year panel warranty"]
  },
  {
    capacity: "2 kW System",
    subsidy: "₹60,000",
    subsidyAmount: 60000,
    monthlyUnits: "240 - 300 Units",
    monthlySavings: "₹2,200 - ₹2,800",
    roofArea: "180 - 220 sq.ft",
    idealFor: "Average 2-3 BHK households with 1 AC",
    features: ["Runs 1 Inverter AC + all household appliances", "Huge ₹60,000 government grant", "Pays back in under 3.5 years", "Zero electricity bills"]
  },
  {
    capacity: "3 kW System",
    subsidy: "₹78,000",
    subsidyAmount: 78000,
    monthlyUnits: "360 - 450 Units",
    monthlySavings: "₹3,500 - ₹4,800",
    roofArea: "280 - 320 sq.ft",
    idealFor: "3-4 BHK homes with multiple ACs & modern appliances",
    features: ["Maximum Central Govt. Subsidy ₹78,000", "Can power 2-3 ACs, water pumps & appliances", "Eligible for low-interest bank solar loans", "Most recommended system in Kerala"],
    popular: true
  },
  {
    capacity: "5 kW to 10 kW+",
    subsidy: "₹78,000 (Flat)",
    subsidyAmount: 78000,
    monthlyUnits: "600 - 1200+ Units",
    monthlySavings: "₹6,000 - ₹15,000+",
    roofArea: "450 - 900+ sq.ft",
    idealFor: "Large villas, joint families, EV owners & commercial shops",
    features: ["High capacity generation", "Full 3-Phase KSEB synchronization", "Surplus power credits carried forward", "Substantial long-term wealth savings"]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Registered & Verified Local Presence",
    desc: "Officially registered firm (GSTIN: 32AATFH8278G1ZV) with our permanent showroom & office on Kandakkai Road, Mayyil, Kannur. Prompt doorstep service in hours, not weeks.",
    icon: "ShieldCheck"
  },
  {
    title: "100% Subsidy Paperwork Handled",
    desc: "We take care of the entire PM Surya Ghar national portal filing, KSEB feasibility applications, and inspection follow-ups so your subsidy lands directly into your bank.",
    icon: "BadgePercent"
  },
  {
    title: "Tier-1 High-Efficiency Solar Panels",
    desc: "We exclusively deploy MNRE / ALMM approved Monocrystalline Bifacial & TopCon panels with 25-year performance warranty from industry leaders.",
    icon: "SunMedium"
  },
  {
    title: "Heavy-Duty Kerala Monsoon Structures",
    desc: "High-grade aluminium & hot-dip galvanized steel mounting built to withstand harsh coastal storms, heavy monsoon winds, and humidity without rusting.",
    icon: "Wrench"
  },
  {
    title: "Smart Inverters & Mobile App Tracking",
    desc: "Track daily, monthly, and lifetime power generation, self-consumption, and grid exports directly from your smartphone anytime, anywhere.",
    icon: "Smartphone"
  },
  {
    title: "Zero Down Payment & Easy Solar EMI",
    desc: "Tie-ups with leading public and private banks offering subsidized green solar loans starting at attractive interest rates with quick approvals.",
    icon: "Coins"
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Free Rooftop Survey & Energy Audit",
    desc: "Our solar engineer visits your site in Kannur to measure shadow-free roof area, inspect wiring, and evaluate your KSEB bi-monthly bills."
  },
  {
    step: "02",
    title: "Custom 3D Design & KSEB Feasibility",
    desc: "We formulate the optimal plant design, select the best panel-inverter configuration, and submit the KSEB Net Metering application."
  },
  {
    step: "03",
    title: "Precision Installation (1 to 2 Days)",
    desc: "Certified technicians install the cyclone-tested mounting structures, solar panels, inverters, earthing pits, and AC/DC protection boxes."
  },
  {
    step: "04",
    title: "Net-Meter Commissioning & Subsidy Credit",
    desc: "KSEB installs the bi-directional meter. Your plant is commissioned, and your ₹78,000 subsidy is processed directly to your bank account!"
  }
];

export const FAQS = [
  {
    q: "How much government subsidy can I get under PM Surya Ghar Muft Bijli Yojana in Kerala?",
    a: "Under the PM Surya Ghar scheme, residential consumers receive ₹30,000 for a 1 kW system, ₹60,000 for a 2 kW system, and a maximum of ₹78,000 for 3 kW and above. Horizon Solar handles the entire online portal registration, KSEB liaisoning, and documentation so the funds are credited directly to your bank account."
  },
  {
    q: "How does KSEB Net Metering work?",
    a: "With an On-Grid solar system, KSEB replaces your regular electric meter with a bi-directional 'Net Meter'. During bright sunlight hours, your solar panels generate electricity. What you use at home is powered by solar; any excess units are sent back into the KSEB grid, spinning your meter backwards. At night or during cloudy spells, you draw power from KSEB. At the end of the billing cycle, you only pay for the 'net' units consumed. If you generated more than you used, the balance units are carried forward as credit!"
  },
  {
    q: "How much roof area is required for a 3kW solar system?",
    a: "A standard 3 kW residential solar power plant requires approximately 250 to 300 square feet of shadow-free rooftop space. It can be installed on concrete flat roofs, sloped tiled roofs, or GI/metal sheet roofs with custom brackets."
  },
  {
    q: "Do solar panels generate power during the monsoon in Kannur?",
    a: "Yes! Solar photovoltaic panels work on light (photons), not heat. Even on overcast or rainy days, modern high-efficiency Monocrystalline and Bifacial panels continue to produce between 25% to 45% of their peak output using ambient diffused sunlight. Over a 12-month period, sunny Kerala provides ample generation to completely wipe out annual power costs."
  },
  {
    q: "What is the warranty and lifespan of the solar system?",
    a: "Our Tier-1 solar panels come with a 25-year linear performance warranty (guaranteed >80% efficiency at year 25) and a 10-12 year product warranty. Solar inverters typically carry a 5 to 10 year manufacturer warranty. Overall, a quality rooftop solar plant easily serves for 25 to 30+ years."
  },
  {
    q: "Can I get a bank loan or EMI for solar installation?",
    a: "Yes! Leading banks like Canara Bank, SBI, Federal Bank, and Punjab National Bank offer special collateral-free PM Surya Ghar green energy loans at low interest rates (around 7% p.a.). The monthly EMI is often lower than your existing KSEB electricity bill!"
  },
  {
    q: "Where is the Horizon Solar office located?",
    a: "Our office and experience center is located on Kandakkai Road, Mayyil, Kannur, Kerala (GSTIN: 32AATFH8278G1ZV). You are welcome to visit us in person, or call our team at 99471 60826 / 82812 29530 for a free site visit anywhere in Kannur district."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. K. Jayarajan",
    location: "Mayyil, Kannur",
    system: "3 kW On-Grid System",
    text: "My bimonthly KSEB bill used to average around ₹4,200 due to 2 ACs running during summer. Horizon Solar completed the installation in just 2 days. The team handled all KSEB paperwork and the ₹78,000 subsidy was credited within a month. My bill is now ₹140 minimum charge!",
    rating: 5,
    savings: "Saved 95% on bill"
  },
  {
    name: "Muhammed Shafi",
    location: "Chalode, Kannur",
    system: "5 kW Hybrid System",
    text: "We wanted both bill reduction and backup for our clinic. The hybrid system designed by Horizon Solar works seamlessly. During local power failures, there's not even a flicker. Outstanding local support and very neat mounting structure.",
    rating: 5,
    savings: "24/7 Power + Big Savings"
  },
  {
    name: "Sujith Narayanan",
    location: "Taliparamba, Kannur",
    system: "2 kW On-Grid System",
    text: "Honest advice, fair pricing, and no false promises. The team at Horizon Mayyil took time to explain the subsidy guidelines clearly. The mobile app tracking is brilliant — I can see my rooftop generating clean power every day.",
    rating: 5,
    savings: "₹60,000 Subsidy Received"
  }
];
