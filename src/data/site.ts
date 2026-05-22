export const SITE = {
  name: "NS PowerCrop",
  tagline: "Premium Battery Solutions • Chennai",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "nspowercorp@gmail.com",
  address: "No.3, Pallavaram main road, manancheri, kundrathur chennai-600069",
  logo: "/images/logo/logo.png",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/car-batteries", label: "Car Batteries" },
  { to: "/bike-batteries", label: "Bike Batteries" },
  { to: "/why-choose-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export const BRANDS = [
  "Exide",
  "Amaron",
  "Microtek",
  "Luminous",
  "SF Sonic",
  "Livguard",
  "Tata Green",
];

export const WHY_US = [
  {
    title: "Genuine Products",
    desc: "100% authentic batteries sourced directly from manufacturers.",
  },
  {
    title: "Expert Support",
    desc: "Certified technicians with decades of automotive experience.",
  },
  {
    title: "Fast Installation",
    desc: "Doorstep installation across Chennai within 60 minutes.",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent rates with the best price guarantee in the city.",
  },
  {
    title: "Warranty Assistance",
    desc: "Hassle-free warranty claims and lifetime advisory.",
  },
  {
    title: "Reliable Performance",
    desc: "Engineered for Chennai's heat, traffic and monsoon roads.",
  },
];

export const SERVICES = [
  { title: "Battery Installation", desc: "Precise fitment for any car or bike model." },
  { title: "Battery Replacement", desc: "Old-for-new swap with eco-safe disposal." },
  { title: "Emergency Support", desc: "24×7 roadside jump-start and delivery." },
  { title: "Vehicle Battery Checkup", desc: "Full diagnostic with health and CCA report." },
];

export const INDUSTRIES = [
  "Passenger Cars",
  "Two-Wheelers",
  "Commercial Fleets",
  "Ride Hailing",
  "Logistics",
  "Premium Garages",
];

export const STATS = [
  { value: 25000, suffix: "+", label: "Batteries Installed" },
  { value: 18, suffix: "+", label: "Years in Chennai" },
  { value: 7, suffix: "", label: "Premium Brands" },
  { value: 60, suffix: " min", label: "Avg. Doorstep Time" },
];

export const TESTIMONIALS = [
  {
    name: "Arun Kumar",
    role: "Toyota Innova owner",
    quote:
      "Doorstep replacement in 40 minutes. Genuine Amaron, fair price. Best battery shop in Chennai.",
  },
  {
    name: "Priya Sundar",
    role: "Royal Enfield rider",
    quote:
      "Their team diagnosed a charging issue others missed. Now my bike fires up first crank, every time.",
  },
  {
    name: "Rahul Mehta",
    role: "Fleet manager",
    quote:
      "We run 30+ vehicles. NS PowerCrop handles our entire battery lifecycle with surgical precision.",
  },
  {
    name: "Divya Raman",
    role: "Honda City owner",
    quote: "Friendly, transparent, fast. The way every service experience should feel.",
  },
];

export const FAQS = [
  {
    q: "Which brands do you stock?",
    a: "Exide, Amaron, Microtek, Luminous, SF Sonic, Livguard and Tata Green — all genuine, all under manufacturer warranty.",
  },
  {
    q: "Do you offer doorstep installation?",
    a: "Yes. Across all Chennai pin codes. Average dispatch time is 60 minutes.",
  },
  {
    q: "How long does a car battery last?",
    a: "Typically 3–5 years depending on usage, climate and electrical load. We provide free health checks every 6 months.",
  },
  {
    q: "Is the old battery taken back?",
    a: "Yes — we buy back your old battery and recycle it through certified channels.",
  },
  {
    q: "Do you provide a warranty?",
    a: "Every battery includes the full manufacturer warranty plus our zero-hassle claim support.",
  },
];

export const CAR_BATTERIES = [
  {
    name: "EXIDE MILEAGE 44Ah FML0-MLDIN44LH Car Battery 60 months warranty (30 FOC and 30 Pro-Rata)",
    brand: "Exide",
    warranty: "48 months",
    price: "₹6,499",
    image: "/images/products/car-battery-hero.png",
  },
  {
    name: "AMARON CAR BATTERY 46B24LS / NS60LS 12V 45AH",
    brand: "Amaron",
    warranty: "60 months",
    price: "₹7,899",
    image: "/images/products/car-battery-2.png",
  },

  {
    name: "Luminous Car Maxx Plus 35AH Battery- CPL 38B20L",
    brand: "Luminous",
    warranty: "66 months",
    price: "₹9,499",
    image: "/images/products/lumi-car.png",
  },
];

export const BIKE_BATTERIES = [
  {
    name: "Exide Xplore XLTZ4A 4AH Motorcycle Battery",
    brand: "Exide",
    warranty: "30 months",
    price: "₹1,499",
    image: "/images/products/bike-battery-hero.png",
  },
  {
    name: "AMARON PRO RIDER AP-BTX7R, Two-Wheeler Battery, Beta Series, Green, 12 Volt",
    brand: "Amaron",
    warranty: "36 months",
    price: "₹2,199",
    image: "/images/products/bike-battery-2.png",
  },
];

export const HOUSEHOLD_INVERTER_BATTERIES = [
  {
    name: "Microtek MTK2003624TT 200Ah/12V Inverter Battery Pure Sine Wave Inverter (500 VA)",
    brand: "Microtek",
    warranty: "36 months",
    price: "₹12,999",
    image: "/images/products/micro-inv.png",
  },
  {
    name: "AMARON Current - AR200TT54 (AAM-CR-AR200TT54) 200 Ah Tall Tubular Inverter Battery",
    brand: "Amaron",
    warranty: "36 months",
    price: "₹12,999",
    image: "/images/products/ama-inv.png",
  },
  {
    name: "Luminous Inverlast ILTT18060 Tall Tubular Inverter Battery ",
    brand: "Luminous",
    warranty: "48 months",
    price: "₹14,499",
    image: "/images/products/lumi-inv.png",
  },
  {
    name: "EXIDE INVATUBULAR IT500, 12V 150Ah Tall Tubular Inverter Battery",
    brand: "Exide",
    warranty: "42 months",
    price: "₹11,499",
    image: "/images/products/exide-inv.png",
  },
];
