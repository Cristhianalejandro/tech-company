import { Code, Cpu, Layers, Zap } from "lucide-react";

const colors = {
  BG_COLOR: "bg-gray-50",
  TEXT_COLOR: "text-gray-900",
  ACCENT_COLOR: "text-black",
  PRIMARY_BLUE: "text-cyan-500",
  BORDER_COLOR: "border-gray-200",
  BORDER_STYLE: "max-w-[95%] md:max-w[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24",
};

const steps = [
  {
    id: "01",
    title: "SYNTHESIS",
    desc: "Translating raw business logic into hardened, verifiable data models and digital twin prototypes.",
  },
  {
    id: "02",
    title: "ITERATION",
    desc: "Running rapid simulation cycles and adversarial testing on concepts to achieve zero-defect operational readiness.",
  },
  {
    id: "03",
    title: "DEPLOYMENT",
    desc: "Finalizing the build using decentralized, self-healing infrastructure for immediate global scalability.",
  },
];

const technologies = [
  {
    id: "01",
    icon: Code,
    name: "Quantum Dev",
    image: "/quantum.png",
    desc: "Rapid, low-latency deployment.",
  },
  {
    id: "02",
    icon: Zap,
    name: "Edge Computing",
    image: "/chip.jpg",
    desc: "Decentralized data processing.",
  },
  {
    id: "03",
    icon: Cpu,
    name: "Cognitive AI",
    image: "/dev.png",
    desc: "Self-improving ML models.",
  },
  {
    id: "04",
    icon: Layers,
    name: "Blockchain Arch",
    image: "/luna.png",
    desc: "Immutable, secure ledgers.",
  },
];

const projects = [
  {
    id: "01",
    title: "SYN-OS: Unified Digital Brain",
    type: "Platform",
    media: { image: "/luna.png", video: null },
  },
  {
    id: "02",
    title: "Quantum Lock Encryption Suite",
    type: "Security",
    media: { image: null, video: "/tech.mp4" },
  },

  {
    id: "03",
    title: "Aetheric Financial Model (AFM)",
    type: "Finance",
    media: { image: "/chip.jpg", video: null },
  },
  {
    id: "04",
    title: "Hyper-Logistics Network (H-LN)",
    type: "Logistics",
    media: { image: "/gears.jpg", video: null },
  },
  {
    id: "05",
    title: "Cogni-Sense AI Interface",
    type: "AI/UX",
    media: { image: null, video: "/tech.mp4" },
  },
];

const footerLinks = [
  {
    title: "FIND WORK",
    links: ["Explore Projects", "Discover Technologies", "View Case Studies"],
  },
  {
    title: "FIND PEOPLE",
    links: ["Meet the Architects", "Join Our Team", "Partner with SYN"],
  },
  {
    title: "COMPANY",
    links: ["About Us", "Ethical Statement", "Contact"],
  },
];

const logos = [
  "CYBER CORP",
  "NEO-TECH",
  "VERTEX",
  "OMNIDATA",
  "GALAXIA",
  "UNIT-7",
];

export { colors, steps, technologies, projects, footerLinks, logos };
