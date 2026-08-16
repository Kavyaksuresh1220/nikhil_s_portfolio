// ─────────────────────────────────────────────────────────────
//  DEMO DATA  —  based on Nikhil S's Behance UI/UX portfolio
//  Replace image URLs & copy with your real assets when ready.
//  Demo images are pulled from the internet (Unsplash / Picsum).
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Nikhil S",
  firstName: "Nikhil",
  role: "UI/UX Designer",
  tagline: "Designing screens that feel alive",
  location: "Pathanamthitta, India",
  email: "hello@nikhils.design",
  available: true,
  // Demo avatar from the internet — swap for your own photo
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80",
  bio: "I'm a UI/UX designer who blends storytelling, motion, and intuitive design. Every screen I create is designed to feel alive — seamless experiences with a modern visual identity, thoughtful micro-interactions and motion that guides people naturally.",
  resumeUrl: "#",
  socials: [
    { label: "Behance", handle: "nikhils43", url: "https://www.behance.net/nikhils43" },
    { label: "Dribbble", handle: "nikhils", url: "https://dribbble.com" },
    { label: "LinkedIn", handle: "in/nikhils", url: "https://linkedin.com" },
    { label: "Instagram", handle: "@nikhil.designs", url: "https://instagram.com" },
  ],
};

export const stats = [
  { value: "4+", label: "Years designing" },
  { value: "30+", label: "Projects shipped" },
  { value: "12", label: "Happy clients" },
  { value: "8", label: "Design awards" },
];

export const skills = [
  { name: "UI Design", level: 95, group: "Design" },
  { name: "UX & Research", level: 88, group: "Design" },
  { name: "Prototyping & Motion", level: 92, group: "Design" },
  { name: "Figma", level: 96, group: "Tools" },
  { name: "Design Systems", level: 85, group: "Design" },
  { name: "Illustration", level: 80, group: "Craft" },
];

export const marqueeTech = [
  "Figma", "UI Design", "UX Research", "Prototyping", "Motion Design",
  "Illustration", "Design Systems", "Webflow", "Adobe XD", "After Effects",
  "Framer", "Wireframing",
];

export const services = [
  {
    icon: "sparkle",
    title: "UI Design",
    desc: "Pixel-perfect, modern interfaces with a strong visual identity that users love at first glance.",
  },
  {
    icon: "layout",
    title: "UX & Research",
    desc: "User flows, wireframes and research-backed decisions that make products effortless to use.",
  },
  {
    icon: "bolt",
    title: "Motion & Prototyping",
    desc: "High-fidelity interactive prototypes with motion that makes every screen feel alive.",
  },
  {
    icon: "code",
    title: "Web Design",
    desc: "Responsive marketing sites and web apps designed to convert and delight across devices.",
  },
];

export const projects = [
  {
    title: "Aura",
    category: "Meditation App",
    year: "2026",
    desc: "A calming meditation experience with soft gradients, guided sessions and an animated breathing companion.",
    tags: ["Mobile App", "UI/UX", "Motion"],
    accent: "from-brand-500 to-accent-500",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80",
    featured: true,
  },
  {
    title: "Fintrack",
    category: "Finance Dashboard",
    year: "2025",
    desc: "A clean fintech dashboard with real-time charts, smart budgeting and an approachable data visual language.",
    tags: ["Web App", "Dashboard", "Data Viz"],
    accent: "from-punch-500 to-brand-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    featured: true,
  },
  {
    title: "Bloom",
    category: "E-commerce Redesign",
    year: "2025",
    desc: "A boutique storefront redesign focused on immersive product galleries and a frictionless checkout.",
    tags: ["Web", "E-commerce", "Branding"],
    accent: "from-accent-500 to-brand-400",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=80",
  },
  {
    title: "Nomad",
    category: "Travel App",
    year: "2024",
    desc: "A travel companion with story-driven itineraries, map exploration and playful illustrated states.",
    tags: ["Mobile App", "Illustration"],
    accent: "from-brand-400 to-punch-400",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&q=80",
  },
  {
    title: "Pulse",
    category: "Health Tracker",
    year: "2024",
    desc: "A wellness tracker with habit streaks, a motion-driven progress ring and gentle daily nudges.",
    tags: ["Mobile App", "UI/UX", "Motion"],
    accent: "from-punch-400 to-accent-500",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80",
  },
  {
    title: "Craft",
    category: "Design System",
    year: "2023",
    desc: "A scalable design system with tokens, accessible components and thorough documentation.",
    tags: ["Design System", "Figma"],
    accent: "from-brand-500 to-punch-500",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&q=80",
  },
];

export const experience = [
  {
    role: "Senior Product Designer",
    company: "Freelance",
    period: "2024 — Present",
    desc: "Partner with startups and founders to design end-to-end product experiences, from research to polished UI.",
  },
  {
    role: "UI/UX Designer",
    company: "Studio Aurora",
    period: "2022 — 2024",
    desc: "Designed mobile and web products, built the studio's design system and led motion explorations.",
  },
  {
    role: "Junior Designer",
    company: "Pixelworks",
    period: "2021 — 2022",
    desc: "Crafted marketing sites, illustrations and brand assets for early-stage clients.",
  },
];

export const testimonials = [
  {
    quote: "Nikhil has a rare gift for motion and detail. Every screen he touched felt alive and effortless to use.",
    author: "Ava Chen",
    title: "Founder, Aura",
  },
  {
    quote: "The most thoughtful designer we've worked with. He turned a messy idea into a product our users adore.",
    author: "Marco Silva",
    title: "Product Lead, Fintrack",
  },
];
