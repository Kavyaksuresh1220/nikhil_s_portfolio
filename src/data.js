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
  email: "nikhiluidesigns@gmail.com",
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

// ─────────────────────────────────────────────────────────────
//  HOMEPAGE (editorial layout)
//  Statement copy uses two conventions:
//    *asterisks*  wrap the words that get the accent colour
//    \n           starts a new line
//  If a statement has no asterisks, the whole line takes the accent.
//  accent = blue | red | green | yellow | orange | purple
// ─────────────────────────────────────────────────────────────

export const statements = [
  {
    id: "about",
    label: "The person behind the pixels",
    text: "MY *CURIOSITY* CREATES\nBETTER EXPERIENCES.",
    accent: "blue",
    portrait: true,
  },
  {
    text: "WHEN THINGS GET\n*ANNOYING…*",
    accent: "red",
    portrait: true,
    portraitLine: 1,
  },
  {
    text: "WHEN THE 2PX GAP\nBOTHERS ME…",
    accent: "green",
    portrait: true,
    pill: "Yes, really.",
  },
];

export const keySkills = {
  label: "Key skills",
  statement: "WHAT'S NOT\nWORKING?\nLET'S *FIX IT.*",
  accent: "yellow",
  card: {
    title: "Making pixels\nlook & feel right.",
    body: "I create clean, modern interfaces that balance visual appeal with usability — backed by research, tested with real users, and polished until every interaction feels simple, engaging and easy to use.",
  },
};

// The tool rail. `code` is the glyph shown in the chip.
export const armoury = [
  { name: "Figma", code: "Fi", bg: "#111110", fg: "#ffffff" },
  { name: "Framer", code: "Fr", bg: "#111110", fg: "#ffffff" },
  { name: "Sketch", code: "Sk", bg: "#6fc06b", fg: "#0b0b0a" },
  { name: "Photoshop", code: "Ps", bg: "#f0241c", fg: "#ffffff" },
  { name: "After Effects", code: "Ae", bg: "#7c3aed", fg: "#ffffff" },
  { name: "Illustrator", code: "Ai", bg: "#f08a1f", fg: "#0b0b0a" },
  { name: "Webflow", code: "Wf", bg: "#2b2fe8", fg: "#ffffff" },
  { name: "Notion", code: "No", bg: "#6fc06b", fg: "#0b0b0a" },
];

export const deepDive = {
  label: "Design\ndeep dive",
  name: "SpaceUp",
  subtitle: "Workspace finder app",
  image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=900&q=80",
  url: "https://www.behance.net/nikhils43",
  cta: "More on Bē",
};

export const sectionCopy = {
  works: {
    label: "Works",
    statement: "WHERE IDEAS\nBECOME *DESIGN.*",
    accent: "orange",
  },
  contact: {
    label: "Contact",
    statement: "LET'S MAKE\nSOMETHING *TOGETHER.*",
    accent: "green",
  },
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

// The first 4 are shown in the Work section; the rest appear after "Read more".
// Images are placeholders — swap them for real project shots.
export const projects = [
  {
    title: "Voluntee",
    category: "Volunteering App",
    desc: "A volunteering app that connects people with local causes — discover opportunities, sign up in a few taps and track the impact you make.",
    tags: ["Mobile App", "UI/UX", "Community"],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&q=80",
  },
  {
    title: "Widex",
    category: "Hearing Care Experience",
    desc: "A calm, accessible experience for hearing care — clear typography, simple controls and flows designed for every age group.",
    tags: ["App Design", "Accessibility", "UI/UX"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&q=80",
  },
  {
    title: "Golaro",
    category: "Product Design",
    desc: "A clean, modern product experience built around clear user flows, a consistent visual system and thoughtful micro-interactions.",
    tags: ["Mobile App", "UI Design", "Prototyping"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80",
  },
  {
    title: "Prolink",
    category: "Professional Networking",
    desc: "A networking platform that makes it easy to find the right people, build meaningful connections and grow your career.",
    tags: ["Web App", "UX Research", "UI/UX"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
  },
  {
    title: "SpaceUp",
    category: "Workspace Finder App",
    desc: "A workspace finder app to discover, compare and book coworking spaces and meeting rooms nearby — quickly and without friction.",
    tags: ["Mobile App", "UI/UX", "Booking"],
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1000&q=80",
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

// Journal / writing entries
export const journal = [
  {
    isNew: true,
    title: "When AI Designs for Us, What Happens to Our Creativity?",
    excerpt: "AI has made designing much easier.",
    date: "Aug 14",
    tags: ["AI", "Design"],
  },
  {
    isNew: true,
    title: "Still Figuring Out What Good Design Means",
    excerpt:
      "When I first started UI/UX, I was obsessed with making everything look perfect.",
    date: "Aug 14",
    tags: ["UI/UX", "Craft"],
  },
];
