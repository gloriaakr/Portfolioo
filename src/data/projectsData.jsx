import solarCover from "../assets/projects/solar.jpg";


const projects = [
  {
  slug: "sun-tracking-solar-garden-light",
  title: "Sun-Tracking Solar Garden Light (Fusion 360)",
  description: "Concept and CAD design of a solar-powered garden light using LDR-based sun tracking, servo-driven rotation, and modular components to maximize energy capture and durability.",
  stack: [
    "Fusion 360",
    "CAD Design",
    "Solar Energy",
    "LDR Sensors",
    "Servo Motor",
    "Product Design"
  ],
  image: "solarCover",
  gif: null,
  links: {
    live: null,
    source: null,
    case: "/projects/sun-tracking-solar-garden-light",
    pdf: "/pdfs/solar.pdf",
  },
  year: "2025",
  highlight: true,
  tags: ["hardware", "cad", "sustainability"]
},
  {
    slug: "portfolio-2025",
    title: "This Portfolio (v2)",
    description: "Minimal, intentional redesign with motion hygiene and responsive components.",
    stack: ["React", "Tailwind", "Framer Motion"],
    image: "/assets/projects/portfolio-2025/cover.jpg",
    gif: null,
    links: {
      live: "https://gloriabuilds.tech",
      source: "https://github.com/gloriaakr/portfolioo",
      case: "/projects/portfolio-2025",
    },
    year: "2025",
    tags: ["software", "design"] // Added tags
  },
  {
  slug: "interactive-3d-name-scene",
  title: "Interactive 3D Name Scene (Three.js)",
  description: "A real-time interactive 3D name visualization built using Three.js, featuring dynamic lighting, camera controls, and custom animations.",
  stack: ["Three.js", "WebGL", "JavaScript"],
  image: "/assets/projects/3d-name/cover.jpg",
  gif: "/assets/projects/3d-name/demo.gif",
  links: {
    live: "https://3d-name-two.vercel.app/",
    source: "https://github.com/<your-username>/3d-name",
    case: "/projects/interactive-3d-name-scene",
  },
  year: "2025",
  highlight: true,
  tags: ["three.js", "webgl", "interactive"]
},

  {
    slug: "arduino-mini-car",
    title: "Smart Arduino Mini Car",
    description: "Two-motor mini rover with ultrasonic obstacle avoidance and basic PID speed control.",
    stack: ["Arduino", "C++", "Ultrasonic", "Motor Driver", "PID (basic)"],
    image: "/assets/projects/arduino-mini-car/cover.jpg",
    gif: "/assets/projects/arduino-mini-car/demo.gif",
    links: {
      live: null,
      source: "https://github.com/<your-username>/arduino-mini-car",
      case: "/projects/arduino-mini-car",
    },
    year: "2024",
    tags: ["hardware"] // Added tags
  },
  {
    slug: "snoopy-flashcards",
    title: "Snoopy-Themed Study & Flashcards Website",
    description: "Cozy study web app that generates flashcards and quizzes from notes; animated UI with a playful theme.",
    stack: ["React", "Tailwind", "Node", "LocalStorage/DB"],
    image: "/assets/projects/snoopy-flashcards/cover.jpg",
    gif: "/assets/projects/snoopy-flashcards/demo.gif",
    links: {
      live: "https://<your-live-url-if-any>",
      source: "https://github.com/<your-username>/snoopy-flashcards",
      case: "/projects/snoopy-flashcards",
    },
    year: "2024",
    tags: ["software", "design"] // Added tags
  }
];

export default projects;
