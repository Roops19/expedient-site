import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
const expedientLogo = null; // Logo removed - using text-based logo instead
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Handshake,
  LineChart,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Users,
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
          "Target state definition",
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
  "Government",
  "NHS & Healthcare",
  "Financial Services",
  "Energy & Infrastructure",
  "International Programmes",
  "Private Sector Growth Environments",
  "Technology Sector",
];

const caseStudies = [
  {
    title: "Public Sector Cost Transformation",
    text:
      "Improved sourcing discipline, supplier engagement and overall value delivery across a major public sector spend portfolio.",
  },
  {
    title: "Operating Model Redesign",
    text:
      "Shaped a procurement operating model with stronger governance, clearer accountability and a more strategic role for procurement.",
  },
  {
    title: "Supply Chain Risk Programme",
    text:
      "Developed a supplier risk and resilience approach for critical suppliers, improving visibility and mitigation planning.",
  },
  {
    title: "Capability Building Programme",
    text:
      "Designed and delivered practical training to strengthen procurement, negotiation and supplier management capability.",
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
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-left">
                        <div className="logo-text">
              <span style={{fontSize: '14px', fontWeight: 'bold'}}>EXPEDIENT</span>
            </div>
            />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Expedient Ltd</div>
              <div className="text-base font-semibold text-white">Commercial Transformation</div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["About", "about"],
              ["Services", "services"],
              ["Sectors", "sectors"],
              ["Think Tank", "thinktank"],
              ["Contact", "contact"],
            ].map(([label, target]) => (
              <button
                key={label}
                onClick={() => scrollToSection(target)}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["About", "about"],
                ["Services", "services"],
                ["Sectors", "sectors"],
                ["Think Tank", "thinktank"],
                ["Contact", "contact"],
              ].map(([label, target]) => (
                <button
                  key={label}
                  className="text-left text-sm font-medium text-white/85"
                  onClick={() => {
                    setMobileOpen(false);
                    scrollToSection(target);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <section id="home" className="relative scroll-mt-28 overflow-hidden bg-slate-950 pt-32 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
              <Handshake className="h-4 w-4 text-emerald-300" />
              Boutique Advisory • Resource Solutions • Capability Development & Training
            </div>
            <motion.h1
              className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
              variants={fadeUp}
              custom={2}
            >
              Enabling sustainable commercial transformation across procurement, supply chain and operations.
            </motion.h1>
            <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-white/75" variants={fadeUp} custom={3}>
              Expedient Ltd helps organisations unlock measurable value, strengthen governance, improve supplier performance,
              access the right expertise through advisory or interim support, and build stronger teams through practical capability development.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap gap-4" variants={fadeUp} custom={4}>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Speak to Expedient
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-4 self-end"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-400/10 p-2">
                  <Network className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">The Expedient 3P Framework</h3>
              </div>
              <p className="text-sm leading-7 text-white/75">
                Our approach to transformation is built around three connected pillars: <strong>People</strong>,
                <strong> Process</strong> and <strong>Performance</strong>. Together they ensure organisations
                improve capability, strengthen governance and deliver measurable commercial outcomes.
              </p>
              <p className="mt-4 text-sm text-white/60">
                Scroll to the services section to explore the full framework.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 pb-12 lg:grid-cols-4 lg:px-8">
          {metrics.map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="mt-1 text-sm text-white/65">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <SectionHeading
            eyebrow="About Expedient"
            title="A boutique model built for practical transformation"
            description="Expedient Ltd is a boutique procurement, commercial and supply chain consultancy supporting organisations to deliver measurable value, strengthen capability and lead complex transformation programmes across public and private sectors."
          />
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Briefcase,
              title: "What we do",
              text: "We improve procurement performance, enhance governance, strengthen supplier outcomes and build internal capability across advisory, interim resource solutions and professional development.",
            },
            {
              icon: ShieldCheck,
              title: "How we work",
              text: "Hands-on consultancy support combined with a flexible senior associate model gives clients specialist expertise without large-firm overheads.",
            },
            {
              icon: Globe2,
              title: "Global experience",
              text: "Experience across the UK, Europe and the Middle East spanning government, NHS, financial services and cross-border transformation programmes.",
            },
            {
              icon: CheckCircle2,
              title: "Why boutique",
              text: "Senior involvement throughout, more agile delivery, tailored support and capability building alongside transformation activity.",
            },
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index + 1}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionHeading
              eyebrow="Services"
              title="Three pillars designed to move from strategy to delivery"
              description="The 3P framework underpins how Expedient approaches client work across advisory, resource solutions and capability development."
            />
          </motion.div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 px-8 py-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Framework model</p>
              <h3 className="mt-3 text-3xl font-semibold">The 3P Framework of Expedient</h3>
              <p className="mt-4 max-w-4xl text-base leading-7 text-white/75">
                Driving success through People, Process and Performance. This framework sits at the centre of how Expedient helps organisations strengthen capability, optimise governance and deliver measurable value.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const active = activeService === service.key;
              return (
                <motion.button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  custom={index + 1}
                  className={`rounded-[1.75rem] border p-6 text-left transition ${
                    active
                      ? "border-slate-900 bg-slate-900 text-white shadow-xl"
                      : "border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <div className={`inline-flex rounded-2xl p-3 ${active ? "bg-white/10" : "bg-emerald-50 text-emerald-700"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${active ? "text-white/70" : "text-slate-600"}`}>{service.intro}</p>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={selectedService.key}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Selected pillar</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">{selectedService.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{selectedService.intro}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {selectedService.offerings.map((offering, index) => (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h4 className="mb-2 text-sm font-semibold text-slate-900">{offering.title}</h4>
                    <p className="mb-3 text-sm text-slate-600">{offering.description}</p>
                    <ul className="space-y-1">
                      {offering.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <SectionHeading
            eyebrow="Client sectors"
            title="Experience across regulated, public and growth environments"
            description="The sector section reassures visitors that Expedient understands both operational complexity and commercial pressure in a wide range of contexts."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index + 1}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <Building2 className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="text-base font-semibold">{sector}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="thinktank" className="scroll-mt-28 bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionHeading
              eyebrow="Think tank"
              title="Examples that build confidence before the first conversation"
              description="These proof points help prospective clients see the types of outcomes Expedient has supported across cost transformation, operating model design, supply chain resilience and capability development."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index + 1}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Case study {index + 1}</div>
                <h3 className="mt-4 text-2xl font-semibold">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{study.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <SectionHeading
              eyebrow="Associate model"
              title="Senior expertise, flexibly deployed"
              description="Associates include procurement leaders, category specialists, transformation advisors, governance experts and training facilitators - allowing capability to scale up or down based on delivery need."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Access to specialist capability when needed",
                "Flexible delivery model",
                "Stronger value than large-firm structures",
                "Senior attention throughout engagements",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] bg-gradient-to-br from-emerald-500 to-slate-900 p-[1px] shadow-2xl"
          >
            <div className="rounded-[2rem] bg-white p-8">
              <div className="grid gap-4">
                {[
                  ["Transformation programmes", "Structured teams for delivery-heavy change."],
                  ["Interim leadership gaps", "Experienced support to maintain continuity."],
                  ["Targeted interventions", "Specialist expertise for focused procurement challenges."],
                  ["Capability building", "Training and development aligned to transformation."],
                ].map(([title, text], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="font-semibold text-slate-900">{title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.5rem] bg-slate-950 px-8 py-10 text-white shadow-2xl sm:px-12 sm:py-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's discuss your procurement, supply chain or capability priorities.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Typical reasons clients get in touch include tender support, interim procurement leadership, governance design,
              capability uplift and support navigating transformation.
            </p>

            <div className="mt-8 max-w-md">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-2">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-2">Email</label>
                  <input type="email" placeholder="Your Email" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-2">Message</label>
                  <textarea placeholder="Your Message" rows="4" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50" required></textarea>
                </div>
                <button type="submit" className="w-full rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-300 transition">Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
