import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Target,
  Users,
  UserRound,
  X,
  Mic,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import expedientLogo from "./expedient-logo.png";

/* ─── animation variants ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── data ────────────────────────────────────────────────────────── */
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
          "Strategic sourcing, category strategy, negotiation support and commercial interventions designed to unlock measurable value rather than short-term savings only.",
        bullets: [
          "Category opportunity assessment",
          "Sourcing strategy development",
          "Commercial negotiation support",
          "Value tracking and benefit visibility",
          "End-to-end supply chain mapping and cost transparency",
          "Tail-end spend management and optimisation",
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
          "Outsourced back-office procurement support for sourcing and tender administration",
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
          "AI-enabled spend analysis and opportunity identification",
          "Supplier performance analytics",
          "Data-driven procurement dashboards and reporting",
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
          "Technology-enabled project tracking, reporting and stakeholder visibility",
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
          "Helping organisations create clear, outcome-focused role specifications aligned to transformation goals.",
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
          "Strengthening post-award commercial management and supplier performance oversight.",
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
  { label: "Government", icon: Building2 },
  { label: "NHS & Healthcare", icon: ShieldCheck },
  { label: "Financial Services", icon: LineChart },
  { label: "Energy & Infrastructure", icon: Globe2 },
  { label: "International Programmes", icon: Network },
  { label: "Private Sector Growth Environments", icon: TrendingUp },
  { label: "Technology Sector", icon: Briefcase },
];

const workWithUsLevels = [
  {
    title: "Emerging Interim Professionals",
    icon: UserRound,
    text: "For early-career professionals building experience in procurement, commercial delivery, project support and stakeholder engagement.",
  },
  {
    title: "Experienced Interim Professionals",
    icon: Briefcase,
    text: "For practitioners with established delivery experience who can support transformation programmes, sourcing activity, analysis and implementation.",
  },
  {
    title: "Senior Interims & Specialists",
    icon: Target,
    text: "For experienced interim leaders, subject matter specialists and senior consultants who can lead delivery, advise clients and strengthen programme outcomes.",
  },
];

const thinkTankContent = [
  {
    title: "Podcast Recordings",
    icon: Mic,
    text: "We will be launching a series of talks covering the latest topics shaping procurement, commercial transformation, supplier performance, AI enablement and market change. New recordings will be published here as they are released.",
    cta: "Registered members will be notified when new podcast sessions go live.",
  },
  {
    title: "Published Articles",
    icon: BookOpen,
    text: "This section will feature short articles, practical commentary and point-of-view pieces on the issues organisations are dealing with right now across procurement, governance, transformation delivery, technology and capability building.",
    cta: "Subscribers will receive updates when new articles are published.",
  },
  {
    title: "Market Knowledge",
    icon: TrendingUp,
    text: "We will share timely insights on emerging priorities in the market, including regulatory shifts, operating model trends, supplier resilience, digital procurement and commercial best practice.",
    cta: "Register for updates to receive new market insight releases.",
  },
];

const threePs = [
  {
    icon: Users,
    title: "People",
    color: "blue",
    bg: "bg-blue-700",
    ring: "ring-blue-300",
    text: "text-blue-700",
    light: "bg-blue-50",
    short: "Capability & Expertise",
    points: ["Building Skills & Expertise", "Providing Specialist Resources"],
  },
  {
    icon: Layers3,
    title: "Process",
    color: "green",
    bg: "bg-green-700",
    ring: "ring-green-300",
    text: "text-green-700",
    light: "bg-green-50",
    short: "Governance & Frameworks",
    points: ["Optimising Systems & Policies", "Ensuring Best Practices"],
  },
  {
    icon: Target,
    title: "Performance",
    color: "orange",
    bg: "bg-orange-600",
    ring: "ring-orange-300",
    text: "text-orange-600",
    light: "bg-orange-50",
    short: "Results & Value",
    points: ["Driving Savings & Value", "Enhancing Business Outcomes"],
  },
];

const metrics = [
  ["£5bn+", "Spend leadership"],
  ["30-60%", "Savings delivered"],
  ["200+", "Professionals developed"],
  ["Frameworks", "Created & deployed"],
];

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Sectors", id: "sectors" },
  { label: "Framework", id: "framework" },
  { label: "Think Tank", id: "think-tank" },
  { label: "Work With Us", id: "work-with-us" },
  { label: "Contact", id: "contact" },
];

const THINK_TANK_FORM_ACTION = "https://formspree.io/f/your-thinktank-form-id";
const WORK_WITH_US_FORM_ACTION = "https://formspree.io/f/your-workwithus-form-id";
const CONTACT_FORM_ACTION = "https://formspree.io/f/your-contact-form-id";

/* ─── small helpers ───────────────────────────────────────────────── */
function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-blue-200" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        custom={1}
        className={`text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          custom={2}
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

function useScrollTo() {
  return (targetId) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    const headerOffset = 80;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: sectionTop - headerOffset, behavior: "smooth" });
    if (window.location.hash !== `#${targetId}`) {
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };
}

/* ─── 3P Framework SVG diagram ────────────────────────────────────── */
function ThreePDiagram() {
  const r = 120;
  const cx = 160;
  const cy = 160;

  // Three equal 120° segments
  const segments = [
    {
      // People – top segment, blue
      start: -90,
      end: 30,
      fill: "#1d4ed8",
      label: "People",
      lx: cx,
      ly: cy - r * 0.62,
    },
    {
      // Process – bottom-right, green
      start: 30,
      end: 150,
      fill: "#15803d",
      label: "Process",
      lx: cx + r * 0.55,
      ly: cy + r * 0.35,
    },
    {
      // Performance – bottom-left, orange
      start: 150,
      end: 270,
      fill: "#ea580c",
      label: "Performance",
      lx: cx - r * 0.55,
      ly: cy + r * 0.35,
    },
  ];

  function polarToCartesian(deg, radius) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  }

  function arcPath(startDeg, endDeg, outerR, innerR = 0) {
    const s = polarToCartesian(startDeg, outerR);
    const e = polarToCartesian(endDeg, outerR);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    if (innerR === 0) {
      return `M ${cx} ${cy} L ${s.x} ${s.y} A ${outerR} ${outerR} 0 ${largeArc} 1 ${e.x} ${e.y} Z`;
    }
    const si = polarToCartesian(startDeg, innerR);
    const ei = polarToCartesian(endDeg, innerR);
    return `M ${si.x} ${si.y} L ${s.x} ${s.y} A ${outerR} ${outerR} 0 ${largeArc} 1 ${e.x} ${e.y} L ${ei.x} ${ei.y} A ${innerR} ${innerR} 0 ${largeArc} 0 ${si.x} ${si.y} Z`;
  }

  return (
    <svg
      viewBox="0 0 320 320"
      className="mx-auto w-full max-w-xs drop-shadow-xl"
      aria-label="3P Framework diagram"
    >
      {segments.map((seg) => (
        <g key={seg.label}>
          <path
            d={arcPath(seg.start, seg.end, r, 42)}
            fill={seg.fill}
            opacity={0.92}
          />
          <text
            x={seg.lx}
            y={seg.ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="13"
            fontWeight="700"
          >
            {seg.label}
          </text>
        </g>
      ))}
      {/* centre circle */}
      <circle cx={cx} cy={cy} r={42} fill="white" />
      <image
        href={expedientLogo}
        x={cx - 28}
        y={cy - 14}
        width="56"
        height="28"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

/* ─── main component ──────────────────────────────────────────────── */
export default function ExpedientAnimatedWebsite() {
  const scrollTo = useScrollTo();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState("advisory");
  const [thinkTankEmails, setThinkTankEmails] = useState(["", "", ""]);
  const [thinkTankSubmitted, setThinkTankSubmitted] = useState([
    false,
    false,
    false,
  ]);
  const [wwuForm, setWwuForm] = useState({ name: "", email: "", level: "", message: "" });
  const [wwuSubmitted, setWwuSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const selectedService = useMemo(
    () =>
      services.find((s) => s.key === activeService) || services[0],
    [activeService]
  );

  /* ── handlers ─────────────────────────────────────── */
  const handleThinkTankEmail = (idx, value) => {
    setThinkTankEmails((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  const handleThinkTankSubmit = async (idx, e) => {
    e.preventDefault();
    try {
      await fetch(THINK_TANK_FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: thinkTankEmails[idx], type: thinkTankContent[idx].title }),
      });
    } catch (_) {
      // silently continue
    }
    setThinkTankSubmitted((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const handleWwuSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(WORK_WITH_US_FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(wwuForm),
      });
    } catch (_) {
      // silently continue
    }
    setWwuSubmitted(true);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(CONTACT_FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(contactForm),
      });
    } catch (_) {
      // silently continue
    }
    setContactSubmitted(true);
  };

  /* ── render ─────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2"
            aria-label="Go to top"
          >
            <img
              src={expedientLogo}
              alt="Expedient Ltd"
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-blue-800"
            >
              Get in touch
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t bg-white md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {NAV_LINKS.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      scrollTo(l.id);
                      setMobileOpen(false);
                    }}
                    className="py-2 text-left text-sm font-medium text-slate-700 hover:text-blue-700"
                  >
                    {l.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollTo("contact");
                    setMobileOpen(false);
                  }}
                  className="mt-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white"
                >
                  Get in touch
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300"
            >
              Expedient Ltd
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Procurement & Commercial{" "}
              <span className="text-blue-400">Transformation</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-blue-100 sm:text-xl"
            >
              Advisory, resource solutions and capability development that
              deliver measurable commercial outcomes across procurement,
              supply chain and contract management.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-500"
              >
                Explore services <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-lg border border-blue-300 px-6 py-3 font-semibold text-blue-100 transition hover:bg-blue-800/40"
              >
                Get in touch
              </button>
            </motion.div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {metrics.map(([stat, label], i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i + 4}
                className="rounded-xl bg-white/10 p-5 text-center backdrop-blur"
              >
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat}
                </p>
                <p className="mt-1 text-sm text-blue-200">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <SectionHeading
              eyebrow="About Expedient"
              title="Practical expertise. Real delivery."
              description="Expedient is a specialist procurement, commercial and supply chain advisory and resourcing firm. We work with public and private sector organisations to improve how they buy, contract and manage commercial relationships."
            />
            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-4 text-slate-600"
            >
              Our team brings together experienced practitioners who have led
              procurement transformation, managed complex sourcing programmes
              and developed commercial capability across a wide range of
              sectors. We focus on practical delivery — not frameworks that
              sit on a shelf.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="What we do"
              title="Our Services"
              description="Three integrated service lines working together to transform procurement and commercial capability."
            />
          </motion.div>

          {/* Tab buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {services.map((svc) => {
              const Icon = svc.icon;
              const isActive = activeService === svc.key;
              return (
                <button
                  key={svc.key}
                  onClick={() => setActiveService(svc.key)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition ${
                    isActive
                      ? "bg-blue-700 text-white shadow-blue-200"
                      : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {svc.title}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
                {selectedService.intro}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {selectedService.offerings.map((offering, i) => (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.45 }}
                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
                  >
                    <h3 className="mb-2 text-base font-bold text-slate-900">
                      {offering.title}
                    </h3>
                    <p className="mb-4 text-sm text-slate-600">
                      {offering.description}
                    </p>
                    <ul className="space-y-1">
                      {offering.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTORS ─────────────────────────────────────────────────── */}
      <section id="sectors" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Where we work"
              title="Sectors We Serve"
              description="Deep experience across public and private sector organisations facing complex procurement and commercial challenges."
            />
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              {sectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.label}
                    variants={fadeUp}
                    custom={i + 1}
                    className="flex min-w-[200px] flex-1 basis-48 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {sector.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3P FRAMEWORK ────────────────────────────────────────────── */}
      <section
        id="framework"
        className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Our approach"
              title="The 3P Framework"
              description="Everything we do is structured around three interdependent pillars — the foundation of effective procurement transformation."
              light
            />

            <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
              {/* Diagram */}
              <motion.div variants={fadeUp} custom={3} className="px-8 lg:px-0">
                <ThreePDiagram />
              </motion.div>

              {/* Pillars */}
              <div className="space-y-6">
                {threePs.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      variants={fadeUp}
                      custom={i + 4}
                      className={`flex gap-4 rounded-2xl p-5 ring-2 ${p.light} ${p.ring}`}
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${p.bg}`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${p.text}`}>
                          {p.title}
                        </h3>
                        <p className="mb-2 text-sm text-slate-500">{p.short}</p>
                        <ul className="space-y-1">
                          {p.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-center gap-2 text-sm text-slate-700"
                            >
                              <CheckCircle2
                                className={`h-4 w-4 shrink-0 ${p.text}`}
                              />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THINK TANK ──────────────────────────────────────────────── */}
      <section id="think-tank" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Knowledge hub"
              title="Expedient Think Tank"
              description="Insights, commentary and practical knowledge from the world of procurement and commercial transformation."
            />

            <div className="grid gap-8 sm:grid-cols-3">
              {thinkTankContent.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i + 1}
                    className="flex flex-col rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-100"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-slate-600">
                      {item.text}
                    </p>
                    <p className="mb-4 text-xs font-medium text-blue-600">
                      {item.cta}
                    </p>

                    {thinkTankSubmitted[i] ? (
                      <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                        <CheckCircle2 className="h-4 w-4" />
                        You're registered for updates.
                      </div>
                    ) : (
                      <form
                        onSubmit={(e) => handleThinkTankSubmit(i, e)}
                        className="flex flex-col gap-2"
                      >
                        <input
                          type="email"
                          required
                          placeholder="Your email address"
                          value={thinkTankEmails[i]}
                          onChange={(e) =>
                            handleThinkTankEmail(i, e.target.value)
                          }
                          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="submit"
                          className="rounded-lg bg-blue-700 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                        >
                          Register for updates
                        </button>
                      </form>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WORK WITH US ────────────────────────────────────────────── */}
      <section id="work-with-us" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Join the network"
              title="Work With Us"
              description="We are building a network of procurement and commercial professionals at every stage of their career. If you work in procurement, commercial or supply chain and are interested in interim, contract or associate work, we would like to hear from you."
            />

            <div className="mb-12 grid gap-6 sm:grid-cols-3">
              {workWithUsLevels.map((level, i) => {
                const Icon = level.icon;
                return (
                  <motion.div
                    key={level.title}
                    variants={fadeUp}
                    custom={i + 1}
                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-slate-900">
                      {level.title}
                    </h3>
                    <p className="text-sm text-slate-600">{level.text}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Form */}
            {wwuSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto max-w-lg rounded-2xl bg-green-50 p-8 text-center ring-1 ring-green-200"
              >
                <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
                <h3 className="text-lg font-bold text-green-800">
                  Thank you for your interest!
                </h3>
                <p className="mt-2 text-sm text-green-700">
                  We'll be in touch to discuss how you can work with Expedient.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                custom={4}
                onSubmit={handleWwuSubmit}
                className="mx-auto max-w-lg space-y-4 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  Register your interest
                </h3>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={wwuForm.name}
                  onChange={(e) =>
                    setWwuForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={wwuForm.email}
                  onChange={(e) =>
                    setWwuForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={wwuForm.level}
                  onChange={(e) =>
                    setWwuForm((f) => ({ ...f, level: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select career level</option>
                  {workWithUsLevels.map((l) => (
                    <option key={l.title} value={l.title}>
                      {l.title}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Brief overview of your background and interest"
                  rows={4}
                  value={wwuForm.message}
                  onChange={(e) =>
                    setWwuForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  Submit interest
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── ASSOCIATES ──────────────────────────────────────────────── */}
      <section id="associates" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <SectionHeading
              eyebrow="Our network"
              title="Expedient Associates"
              description="Expedient works with a network of experienced procurement and commercial professionals who bring deep sector knowledge and practical delivery capability."
            />
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 grid gap-6 sm:grid-cols-3"
            >
              {[
                {
                  icon: Network,
                  heading: "Specialist Network",
                  body: "Category specialists, commercial advisors, transformation leads and programme delivery experts.",
                },
                {
                  icon: Handshake,
                  heading: "Trusted Partners",
                  body: "Associates who have been vetted for their expertise, delivery track record and professional integrity.",
                },
                {
                  icon: Globe2,
                  heading: "Broad Coverage",
                  body: "Professionals with experience across public sector, regulated industries and complex private sector environments.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.heading}
                    className="rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-100"
                  >
                    <Icon className="mb-3 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 font-bold text-slate-900">
                      {card.heading}
                    </h3>
                    <p className="text-sm text-slate-600">{card.body}</p>
                  </div>
                );
              })}
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={6}
              className="mt-8 text-slate-600"
            >
              If you are an experienced procurement or commercial professional
              interested in joining the Expedient associate network, please get
              in touch via the contact form below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="Get in touch"
              title="Contact Expedient"
              description="Whether you need advisory support, resource solutions or capability development — we would like to hear from you."
              light
            />

            <div className="mx-auto max-w-2xl">
              {contactSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-white/10 p-10 text-center ring-1 ring-white/20"
                >
                  <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-400" />
                  <h3 className="text-xl font-bold text-white">
                    Message received
                  </h3>
                  <p className="mt-2 text-blue-200">
                    Thank you for reaching out. A member of the Expedient team
                    will be in contact shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  custom={3}
                  onSubmit={handleContactSubmit}
                  className="space-y-5 rounded-2xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-blue-100">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-blue-100">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm((f) => ({
                            ...f,
                            email: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-blue-100">
                      Organisation
                    </label>
                    <input
                      type="text"
                      value={contactForm.organisation}
                      onChange={(e) =>
                        setContactForm((f) => ({
                          ...f,
                          organisation: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Your organisation"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-blue-100">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((f) => ({
                          ...f,
                          message: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Tell us how we can help…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-500"
                  >
                    <Mail className="h-4 w-4" />
                    Send message
                  </button>
                </motion.form>
              )}

              <motion.div
                variants={fadeUp}
                custom={5}
                className="mt-8 text-center"
              >
                <p className="text-sm text-blue-200">
                  Or email us directly at{" "}
                  <a
                    href="mailto:info@expedientltd.com"
                    className="font-semibold text-white underline underline-offset-2 hover:text-blue-300"
                  >
                    info@expedientltd.com
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 py-10 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
          <img
            src={expedientLogo}
            alt="Expedient Ltd"
            className="h-8 w-auto object-contain brightness-0 invert opacity-60"
          />
          <p>© {new Date().getFullYear()} Expedient Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            {NAV_LINKS.slice(0, 4).map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="hover:text-white"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}