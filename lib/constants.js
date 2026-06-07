// lib/constants.js

export const COMPANY = {
  name: "Amit Steel & Cement",
  shortName: "Amit Steel",
  tagline: "Sunvik Gold, Magna, TMT, MS Steel, Tubes & Cement",
  founder: "Amit Gupta",
  designation: "Director",
  founded: 2018,
  legacy: "Family business since pre-independence era",
  recognition: "JSW Shoppe Connect Honoree",
};

export const CONTACT = {
  address:
    "#1437/G, 100 Ft. Road, 6th Block, Near KLE Law College, Sir M. Visveshwaraiha Layout, Bengaluru – 560056",
  addressShort: "100 Ft. Road, 6th Block, Bengaluru – 560056",
  phones: ["+91 9632114579", "+91 9035640000"],
  email: "info@amitsteel.co.in",
  website: "amitsteel.co.in",
  whatsapp: "+919632114579",
  instagram: "https://instagram.com/amit_steel",
  facebook: "#",
  linkedin: "#",
};

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

export const BRANDS = [
  { name: "JSW Steel", slug: "jsw-steel" },
  { name: "Sunvik Steels", slug: "sunvik-steels" },
  { name: "Shri Bajrang Power", slug: "shri-bajrang-power" },
  { name: "A-One Ispat", slug: "a-one-ispat" },
  { name: "Mony Steel & Ispat", slug: "mony-steel-ispat" },
];

export const PRODUCTS = [
  {
    category: "TMT Bars",
    slug: "tmt-bars",
    brands: ["JSW Steel", "Sunvik Gold", "Magna"],
    description:
      "High-strength thermo-mechanically treated bars for structural construction.",
  },
  {
    category: "MS Steel",
    slug: "ms-steel",
    brands: ["JSW Steel", "Shri Bajrang Power", "A-One Ispat"],
    description:
      "Mild steel products for fabrication, manufacturing and construction.",
  },
  {
    category: "Steel Tubes",
    slug: "steel-tubes",
    brands: ["Mony Steel & Ispat", "A-One Ispat"],
    description:
      "Hollow sections and pipes for structural and mechanical applications.",
  },
  {
    category: "Structural Steel",
    slug: "structural-steel",
    brands: ["JSW Steel", "Shri Bajrang Power"],
    description:
      "Angles, channels, beams and other structural profiles for heavy construction.",
  },
  {
    category: "Cement",
    slug: "cement",
    brands: ["Sunvik Steels"],
    description:
      "Premium grade cement for residential, commercial and infrastructure projects.",
  },
  {
    category: "Binding Wire",
    slug: "binding-wire",
    brands: ["JSW Steel", "Sunvik Gold", "Magna"],
    description:
      "High-strength binding wire for construction and industrial applications.",
  },
];

export const GOVERNMENT_CLIENTS = [
  {
    name: "Karnataka Rural Infrastructure Development Ltd",
    short: "KRIDL",
  },
  {
    name: "Karnataka State Police Housing Corporation",
    short: "KSPHIDC",
  },
  {
    name: "Karnataka Road Development Corporation",
    short: "KRDCL",
  },
  {
    name: "Karnataka Housing Board",
    short: "KHB",
  },
  {
    name: "Karnataka Residential Educational Institutions Society",
    short: "KREIS",
  },
  {
    name: "Bengaluru Water Supply and Sewerage Board",
    short: "BWSSB",
  },
];

export const PRIVATE_CLIENTS = [
  { name: "Shankaranarayana Construction", project: null },
  { name: "GMR", project: "Goa International Airport" },
  { name: "PLR Projects Pvt Ltd", project: null },
  { name: "Ashoka Build Con", project: null },
  { name: "KBR Infra", project: null },
  { name: "BSR Infra", project: null },
  { name: "Star Infra", project: null },
  { name: "DS Max Builders", project: null },
  { name: "APTITCO", project: null },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years of Legacy" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "Government Bodies" },
  { value: 4500, suffix: "+", label: "Tonnes Supplied" },
];

