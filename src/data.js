// ─────────────────────────────────────────────────────────────
//  All site copy lives here. Photos & logos come from src/images.
// ─────────────────────────────────────────────────────────────
import imgDesk from "./images/img1.jpg";
import imgGraduation from "./images/img2.jpg";
import imgPortrait from "./images/img3.jpg";
import imgHills from "./images/img4.jpg";
import logoLeastAction from "./images/la.jpg.jpeg";
import logoMarvelloux from "./images/marvelm.jpg.jpeg";
import resumePdf from "./images/Nikhil S UIUX Designer Resume.pdf?url";

export const photos = {
  desk: imgDesk,
  graduation: imgGraduation,
  portrait: imgPortrait,
  hills: imgHills,
};

export const profile = {
  name: "Nikhil S",
  firstName: "Nikhil",
  role: "UI/UX & Graphic Designer",
  tagline:
    "A UI/UX designer turning complex ideas into simple, intuitive experiences people love to use.",
  location: "Pathanamthitta, India",
  email: "nikhiluidesigns@gmail.com",
  available: true,
  resumeUrl: resumePdf,
  socials: [
    { label: "LinkedIn", short: "in", url: "https://www.linkedin.com/in/nikhil-s-142113227" },
    { label: "Behance", short: "Bē", url: "https://www.behance.net/nikhils43" },
    { label: "Medium", short: "M", url: "https://medium.com/@nikhiluidesigns" },
    { label: "Instagram", short: "IG", url: "https://www.instagram.com/who_isnikk" },
  ],
};

// ── Home: short "about" teaser ───────────────────────────────
export const aboutTeaser = {
  // *asterisks* mark the green word
  heading: "I turn ideas into *meaningful* designs",
  lead:
    "My journey in design started with a passion for visual creativity and graphic design, which gradually led me toward UI/UX and digital product design.",
  fade:
    "I enjoy understanding how people interact with products and finding ways to make those experiences simple, intuitive, and visually appealing…",
};

// ── About page ───────────────────────────────────────────────
export const about = {
  statement:
    "I'm a *UI/UX & Graphic Designer* who enjoys turning ideas into clean, engaging, and *meaningful* designs.",
  paragraphs: [
    "My journey in design started with a passion for visual creativity and graphic design, which gradually led me toward UI/UX and digital product design. I enjoy understanding how people interact with products and finding ways to make those experiences simple, intuitive, and visually appealing.",
    "For me, design is more than just making things look good. UI/UX is about solving problems and creating better experiences, while graphic design is about communicating ideas through visuals. I enjoy working across both — from websites and mobile apps to branding, posters, social media creatives, and other visual designs.",
    "As a growing designer, I'm always curious to learn, experiment, and improve. Every project is an opportunity to explore a new idea, sharpen my skills, and create something better than before.",
  ],
  highlightsLabel: "Some highlights from the past years",
  highlights: [
    { src: imgDesk, alt: "Nikhil at his desk in the studio", rotate: -4 },
    { src: imgGraduation, alt: "Graduation day selfie with classmates", rotate: 3 },
    { src: imgHills, alt: "Nikhil in the misty hills", rotate: -2 },
    { src: imgPortrait, alt: "Black and white portrait of Nikhil", rotate: 4 },
  ],
};

export const disciplines = [
  {
    title: "UI/UX Design",
    badge: "Figma · Affinity",
    desc: "Solving problems and creating better experiences — for websites and mobile apps, from first research to a polished, tested interface.",
    points: [
      "User research & usability testing",
      "User flows & wireframes",
      "High-fidelity UI & prototyping",
      "Design systems & interaction design",
    ],
  },
  {
    title: "Graphic Design",
    badge: "Branding · Visuals",
    desc: "Communicating ideas through visuals — identities and creatives that are clear, memorable and on-brand.",
    points: [
      "Logo & brand identity",
      "Posters & print",
      "Social media creatives",
      "Visual concepts",
    ],
  },
];

export const aiTools = ["Figma Make", "ChatGPT", "Claude", "Gemini", "Stitch", "Canva"];

export const experience = [
  {
    period: "May 2026 – Present",
    type: "Internship",
    role: "UI/UX Designer Intern",
    company: "Least Action Company",
    logo: logoLeastAction,
  },
  {
    period: "6 Months",
    type: "Internship",
    role: "UI/UX Designer Intern",
    company: "Marvelloux Design Studio",
    logo: logoMarvelloux,
  },
];

export const education = [
  {
    period: "6 Months",
    title: "Advanced Diploma (UI/UX Designing)",
    school: "Marvelloux Design Academy",
    logo: logoMarvelloux,
  },
  {
    period: "2021 – 2025",
    title: "Bachelor of Engineering",
    school: "KTU University",
    initials: "KTU",
  },
  {
    period: "2018 – 2020",
    title: "Senior Secondary",
    school: "SNDP HSS Pathanamthitta",
    initials: "HSS",
  },
];

// ── Work ─────────────────────────────────────────────────────
// The first 4 are shown; the rest appear after "Read more".
// `glow` tints the dark cover panel.
export const projects = [
  {
    title: "Voluntee",
    tagline: "A platform for community volunteering",
    desc: "A community-driven platform to connect with people nearby, join real-world activities, offer help and earn reward credits for meaningful contributions.",
    tags: ["Product design", "User flows", "Social impact"],
    glow: "#22c55e",
  },
  {
    title: "Widex",
    tagline: "Hearing care, made simple",
    desc: "A calm, accessible experience for hearing care — clear typography, simple controls and flows designed for every age group.",
    tags: ["App design", "Accessibility", "UI/UX"],
    glow: "#3b82f6",
  },
  {
    title: "Gloaro",
    tagline: "Business-focused digital network",
    desc: "A multi-vendor marketplace with seamless product discovery, vendor & B2B onboarding flows, and an admin dashboard for vendors, memberships and franchises.",
    tags: ["Website", "Marketplace", "Dashboard"],
    glow: "#f59e0b",
  },
  {
    title: "ProLink",
    tagline: "Everyday services, one tap away",
    desc: "An on-demand services app for booking cleaning, cooking, drivers, cabs and deliveries — with clear categories, provider details and booking management.",
    tags: ["Product design", "Booking", "UI/UX"],
    glow: "#8b5cf6",
  },
  {
    title: "SpaceUp",
    tagline: "Find your next workspace",
    desc: "A workspace finder app to discover, compare and book coworking spaces and meeting rooms nearby — quickly and without friction.",
    tags: ["Mobile app", "Booking", "UI/UX"],
    glow: "#ec4899",
  },
];

// ── Writing ──────────────────────────────────────────────────
export const journal = {
  updated: "Aug 14",
  posts: [
    {
      isNew: true,
      title: "When AI Designs for Us, What Happens to Our Creativity?",
      excerpt: "AI has made designing much easier.",
      date: "Aug 14",
      tags: ["AI", "Design"],
      glyph: "✦",
      url: "https://medium.com/@nikhiluidesigns/when-ai-designs-for-us-what-happens-to-our-creativity-69de1f917896",
    },
    {
      isNew: true,
      title: "Still Figuring Out What Good Design Means",
      excerpt:
        "When I first started UI/UX, I was obsessed with making everything look perfect.",
      date: "Aug 14",
      tags: ["UI/UX", "Craft"],
      glyph: "Aa",
      url: "https://medium.com/@nikhiluidesigns",
    },
  ],
};
