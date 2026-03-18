import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Handshake,
  Layers3,
  LineChart,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  UserRound,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

const services = [
  {
    key: "advisory",
    icon: LineChart,
    title: "Advisory",
    intro:
      "Delivery-focused support to improve commercial outcomes, strengthen governance and reshape how procurement operates.",
    offerings: [
      {
        title: "Procurement Transformation",
        description:
          "We help organisations redesign procurement operating models, clarify roles, improve governance and align procurement more closely to business strategy.",
        bullets: [
          "Operating model design",
          "Future procurement operating model design",
          "Governance improvement",
          "Stakeholder alignment",
        ],
      },
      {
        title: "Cost & Value Transformation",
        description:
          "Strategic sourcing, category strategy, negotiation support and commercial interventions designed to unlock measurable value rather than short‑term savings only.",
        bullets: [
          "Category opportunity assessment",
          "Sourcing strategy development",
          "Commercial negotiation support",
          "Value tracking and benefit visibility",
          "End‑to‑end supply chain mapping and cost transparency",
          "Tail‑end spend management and optimisation",
        ],
      },
      {
        title: "RFP & Tender Advisory",
        description:
          "Support to design and run structured procurement exercises that deliver both compliance and strong commercial outcomes.",
        bullets: [
          "RFP design",
          "Evaluation model development",
          "Supplier engagement strategy",
          "Commercial negotiation support",
          "Tender governance and compliance assurance",
          "Outsourced back‑office procurement support for sourcing and tender administration",
        ],
      },
      {
        title: "Procurement Policy, Governance & Social Value",
        description:
          "Development of procurement policies, governance frameworks and social value integration aligned with organisational priorities.",
        bullets: [
          "Policy development",
          "Governance framework design",
          "Social value integration",
          "Procurement compliance improvement",
        ],
      },
      {
        title: "Supply Chain Resilience",
        description:
          "Helping organisations strengthen supplier resilience, risk management and continuity planning.",
        bullets: [
          "Supplier risk frameworks",
          "Critical supplier analysis",
          "Resilience strategy",
          "Continuity planning",
        ],
      },
      {
        title: "Innovation & SME Engagement",
        description:
          "Approaches that improve market engagement, encourage innovation and create better access for SMEs.",
        bullets: [
          "Market engagement strategy",
          "SME participation improvement",
          "Innovation sourcing",
          "Supplier ecosystem development",
        ],
      },
      {
        title: "Procurement Analytics & Spend Intelligence",
        description:
          "Using data, analytics and modern tools to create visibility of spend, identify value opportunities and support stronger commercial decision making.",
        bullets: [
          "Spend analytics and spend visibility",
          "AI‑enabled spend analysis and opportunity identification",
          "Supplier performance analytics",
          "Data‑driven procurement dashboards and reporting",
        ],
      },
      {
        title: "Technology & AI Enablement",
        description:
          "Supporting organisations to adopt modern technology that strengthens procurement, commercial performance and decision making.",
        bullets: [
          "Design and deployment of procurement and commercial IT systems",
          "AI-enabled analytics and decision-support tools",
          "Data governance, cyber security and protection frameworks",
          "Technology adoption aligned with procurement and business strategy",
        ],
      },
      {
        title: "Project & Programme Management",
        description:
          "Structured delivery support for complex procurement and commercial transformation programmes using modern project management approaches.",
        bullets: [
          "Agile delivery approaches for iterative transformation",
          "Traditional Waterfall governance for structured programmes",
          "Digital collaboration tools and modern programme dashboards",
          "Technology‑enabled project tracking, reporting and stakeholder visibility",
        ],
      },
    ],
  },
  {
    key: "resource",
    icon: Users,
    title: "Resource Solutions",
    intro:
      "Support to define the real need, shape the role and access the right interim or specialist expertise at pace.",
    offerings: [
      {
        title: "Interim Procurement Leadership",
        description:
          "Experienced interim leaders to maintain continuity during transformation, restructuring or leadership gaps.",
        bullets: [
          "Interim CPO / Head of Procurement",
          "Programme leadership",
          "Transformation leadership",
          "Procurement team stabilisation",
        ],
      },
      {
        title: "Resource Need Definition",
        description:
          "Clarifying the real capability or capacity gap before recruiting or deploying interim support.",
        bullets: [
          "Role design",
          "Capability gap analysis",
          "Delivery model design",
          "Team structure review",
        ],
      },
      {
        title: "Job Specification Development",
        description:
          "Helping organisations create clear, outcome‑focused role specifications aligned to transformation goals.",
        bullets: [
          "Role definition",
          "Responsibility frameworks",
          "Outcome definition",
          "Recruitment support",
        ],
      },
      {
        title: "Specialist Associate Solutions",
        description:
          "Access to experienced procurement and commercial specialists through the Expedient associate network.",
        bullets: [
          "Category specialists",
          "Commercial advisors",
          "Transformation specialists",
          "Programme delivery experts",
        ],
      },
    ],
  },
  {
    key: "training",
    icon: GraduationCap,
    title: "Capability & Training",
    intro:
      "Practical programmes that help teams operate more strategically and build stronger commercial capability.",
    offerings: [
      {
        title: "Procurement Fundamentals",
        description:
          "Building strong foundations for procurement professionals developing their core capability.",
        bullets: [
          "Procurement lifecycle",
          "Commercial fundamentals",
          "Supplier engagement",
          "Governance basics",
        ],
      },
      {
        title: "Strategic Sourcing & Category Management",
        description:
          "Helping teams apply structured category thinking and strategic sourcing approaches.",
        bullets: [
          "Category strategy",
          "Market analysis",
          "Strategic sourcing process",
          "Opportunity identification",
        ],
      },
      {
        title: "Negotiation & Commercial Skills",
        description:
          "Practical negotiation capability designed for procurement and commercial professionals.",
        bullets: [
          "Negotiation preparation",
          "Commercial positioning",
          "Supplier negotiation",
          "Outcome management",
        ],
      },
      {
        title: "Contract Management",
        description:
          "Strengthening post‑award commercial management and supplier performance oversight.",
        bullets: [
          "Contract governance",
          "Performance management",
          "Supplier relationship management",
          "Value delivery tracking",
        ],
      },
      {
        title: "Leadership Development",
        description:
          "Supporting procurement leaders to lead teams, transformation and stakeholder engagement effectively.",
        bullets: [
          "Leadership capability",
          "Stakeholder engagement",
          "Change leadership",
          "Team development",
        ],
      },
    ],
  },
];

const sectors = [
  "Government",
  "NHS & Healthcare",
  "Financial Services",
  "Energy & Infrastructure",
  "International Programmes",
  "Private Sector Growth Environments",
  "Technology Sector",
];

const workWithUsLevels = [
  {
    title: "Emerging Interim Professionals",
    text:
      "For early-career professionals building experience in procurement, commercial delivery, project support and stakeholder engagement.",
  },
  {
    title: "Experienced Interim Professionals",
    text:
      "For practitioners with established delivery experience who can support transformation programmes, sourcing activity, analysis and implementation.",
  },
  {
    title: "Senior Interims & Specialists",
    text:
      "For experienced interim leaders, subject matter specialists and senior consultants who can lead delivery, advise clients and strengthen programme outcomes.",
  },
];

const thinkTankContent = [
  {
    title: "Podcast Recordings",
    text:
      "We will be launching a series of talks covering the latest topics shaping procurement, commercial transformation, supplier performance, AI enablement and market change. New recordings will be published here as they are released.",
    cta: "Registered members will be notified when new podcast sessions go live.",
  },
  {
    title: "Published Articles",
    text:
      "This section will feature short articles, practical commentary and point-of-view pieces on the issues organisations are dealing with right now across procurement, governance, transformation delivery, technology and capability building.",
    cta: "Subscribers will receive updates when new articles are published.",
  },
  {
    title: "Market Knowledge",
    text:
      "We will share timely insights on emerging priorities in the market, including regulatory shifts, operating model trends, supplier resilience, digital procurement and commercial best practice.",
    cta: "Register for updates to receive new market insight releases.",
  },
];

const threePs = [
  {
    icon: Users,
    title: "People",
    short: "Capability & Expertise",
    text: "Building skills, strengthening expertise and providing specialist resources to support client delivery.",
    points: ["Building Skills & Expertise", "Providing Specialist Resources"],
    panelColor: "text-sky-700",
    accentBg: "from-sky-500 to-sky-700",
    glow: "shadow-[0_18px_40px_rgba(14,116,144,0.35)]",
    ring: "ring-sky-200/60",
  },
  {
    icon: Layers3,
    title: "Process",
    short: "Governance & Frameworks",
    text: "Optimising systems, policies and governance so procurement operates with consistency and best practice.",
    points: ["Optimising Systems & Policies", "Ensuring Best Practices"],
    panelColor: "text-lime-700",
    accentBg: "from-lime-500 to-green-700",
    glow: "shadow-[0_18px_40px_rgba(77,124,15,0.35)]",
    ring: "ring-lime-200/60",
  },
  {
    icon: Target,
    title: "Performance",
    short: "Results & Value",
    text: "Driving savings, value and stronger business outcomes through measurable commercial performance.",
    points: ["Driving Savings & Value", "Enhancing Business Outcomes"],
    panelColor: "text-orange-600",
    accentBg: "from-amber-400 to-orange-600",
    glow: "shadow-[0_18px_40px_rgba(234,88,12,0.35)]",
    ring: "ring-orange-200/60",
  },
];

const metrics = [
  ["£5bn+", "Spend leadership"],
  ["30-60%", "Savings delivered"],
  ["200+", "Professionals developed"],
  ["Frameworks", "Created & deployed"],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export default function ExpedientAnimatedWebsite() {
  const scrollToSection = (targetId) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    const headerOffset = 104;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = sectionTop - headerOffset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    if (window.location.hash !== `#${targetId}`) {
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState("advisory");

  const selectedService = useMemo(
    () => services.find((service) => service.key === activeService) || services[0],
    [activeService]
  );

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">...
  );
}