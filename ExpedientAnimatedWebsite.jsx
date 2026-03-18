import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Users,
  Lightbulb,
  TrendingUp,
  Target,
  BookOpen,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const navLinks = ['About', 'Services', 'Sectors', 'Framework', 'Think Tank', 'Work With Us', 'Contact'];

const services = [
  {
    icon: Lightbulb,
    title: 'Advisory',
    description:
      'Strategic procurement and commercial advisory to help organisations unlock value, reduce risk and drive sustainable performance.',
  },
  {
    icon: Users,
    title: 'Resource Solutions',
    description:
      'Flexible, expert resource to augment your team — from interim executives to specialist project support across procurement and supply chain.',
  },
  {
    icon: BookOpen,
    title: 'Capability Development',
    description:
      'Tailored training, coaching and learning programmes that build lasting in-house procurement and commercial capability.',
  },
];

const sectors = [
  { name: 'Public Sector', icon: Globe, color: 'bg-blue-50 text-blue-700' },
  { name: 'Technology', icon: TrendingUp, color: 'bg-indigo-50 text-indigo-700' },
  { name: 'Financial Services', icon: CheckCircle, color: 'bg-emerald-50 text-emerald-700' },
  { name: 'Healthcare', icon: Target, color: 'bg-rose-50 text-rose-700' },
  { name: 'Education', icon: BookOpen, color: 'bg-amber-50 text-amber-700' },
  { name: 'Retail & Consumer', icon: Users, color: 'bg-purple-50 text-purple-700' },
];

const frameworkNodes = [
  { label: 'Strategy', description: 'Aligning procurement with organisational goals' },
  { label: 'Process', description: 'Streamlining end-to-end commercial processes' },
  { label: 'People', description: 'Building skills and organisational capability' },
  { label: 'Technology', description: 'Leveraging digital tools to drive efficiency' },
  { label: 'Performance', description: 'Measuring and continuously improving outcomes' },
];

const thinkTankItems = [
  {
    title: 'The Future of Procurement',
    excerpt:
      'How AI and automation are reshaping the commercial landscape and what procurement leaders need to do now.',
  },
  {
    title: 'Supply Chain Resilience',
    excerpt:
      'Lessons learned from recent global disruptions and building robust supplier relationships that last.',
  },
  {
    title: 'Sustainability in Procurement',
    excerpt: 'Embedding ESG criteria into sourcing decisions without compromising commercial outcomes.',
  },
];

const workWithUsLevels = [
  {
    title: 'Transformation Projects',
    description: 'End-to-end procurement and commercial transformation programmes.',
  },
  {
    title: 'Interim & Contract',
    description: 'Expert interim resource at all levels, from analyst to CPO.',
  },
  {
    title: 'Advisory Retainers',
    description: 'Ongoing strategic advice and access to our expert network.',
  },
  {
    title: 'Training & Coaching',
    description: 'Bespoke workshops, e-learning and 1-to-1 coaching.',
  },
];

const metrics = [
  { value: '£2bn+', label: 'Spend Managed' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Associates' },
  { value: '15+', label: 'Years Experience' },
];

/* ─── Animation helpers ─────────────────────────────────────────────────────── */

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Sub-components ────────────────────────────────────────────────────────── */

function SectionHeading({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-blue-700 bg-blue-50 rounded-full mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────────────────────── */

const ExpedientAnimatedWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (label) => {
    const id = label.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* ── Navigation ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-800 tracking-tight">Expedient Ltd</span>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors text-left"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#ffffff_0%,transparent_60%)]" />
        <motion.div
          className="relative text-center text-white px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-4">
            Procurement · Commercial · Supply Chain
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Transforming Commercial Performance
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Expedient Ltd partners with organisations to drive lasting value through expert advisory, flexible resource
            solutions and world-class capability development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('Services')}
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
            >
              Our Services <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('Contact')}
              className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── Metrics ── */}
      <section className="bg-blue-900 py-16">
        <motion.div
          className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUpVariant}>
              <p className="text-4xl font-extrabold text-white">{m.value}</p>
              <p className="text-blue-300 mt-1 text-sm font-medium">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariant}>
              <SectionHeading tag="About Us" title="Built by Practitioners, for Practitioners" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Expedient Ltd was founded by experienced procurement and commercial professionals who have worked across
                the private and public sector. We understand the challenges organisations face — because we have lived
                them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We bring a pragmatic, outcomes-focused approach to every engagement, combining deep functional expertise
                with a passion for developing people and organisations.
              </p>
              <button
                onClick={() => scrollToSection('Work With Us')}
                className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
              >
                How we work <ArrowRight size={16} />
              </button>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-4">
              {['Strategy-led', 'People-first', 'Outcome-focused', 'Expert Network'].map((v) => (
                <div key={v} className="bg-blue-50 rounded-2xl p-6 flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-0.5 shrink-0" size={20} />
                  <span className="font-semibold text-gray-800">{v}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            tag="Services"
            title="What We Do"
            subtitle="Three integrated service lines designed to address the full spectrum of procurement and commercial challenges."
          />
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="text-blue-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section id="sectors" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            tag="Sectors"
            title="Where We Work"
            subtitle="Our team has deep experience across a range of industries, bringing sector-specific insight to every engagement."
          />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sectors.map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                variants={fadeUpVariant}
                className={`rounded-2xl p-6 flex items-center gap-4 ${color}`}
              >
                <Icon size={22} />
                <span className="font-semibold">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Framework ── */}
      <section id="framework" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-blue-300 bg-blue-800 rounded-full mb-3">
              Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Our Transformation Framework</h2>
            <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
              A proven, holistic approach to procurement and commercial transformation — covering every dimension needed
              for sustainable change.
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-5 gap-6 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {frameworkNodes.map(({ label, description }, i) => (
              <motion.div
                key={label}
                variants={fadeUpVariant}
                className="bg-blue-800 rounded-2xl p-6 text-center hover:bg-blue-700 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{label}</h3>
                <p className="text-blue-300 text-sm">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Think Tank ── */}
      <section id="think-tank" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            tag="Think Tank"
            title="Insights & Perspectives"
            subtitle="Thought leadership from the Expedient team on the topics shaping procurement and commercial practice."
          />
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {thinkTankItems.map(({ title, excerpt }) => (
              <motion.article
                key={title}
                variants={fadeUpVariant}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-8 h-1 bg-blue-600 rounded mb-5" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{excerpt}</p>
                <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:gap-2 transition-all">
                  Read more <ArrowRight size={14} />
                </button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Work With Us ── */}
      <section id="work-with-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            tag="Work With Us"
            title="How We Engage"
            subtitle="Flexible engagement models designed to meet your needs — whether you need strategic advice, extra capacity or long-term capability building."
          />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {workWithUsLevels.map(({ title, description }, i) => (
              <motion.div
                key={title}
                variants={fadeUpVariant}
                className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl font-extrabold text-blue-100 mb-4 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Associates ── */}
      <section id="associates" className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-blue-700 bg-blue-100 rounded-full mb-4">
              Associates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Associate Network</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We work with a curated network of experienced procurement, commercial and supply chain professionals. If
              you are a seasoned practitioner looking for flexible, high-quality project work, we would love to hear
              from you.
            </p>
            <button
              onClick={() => scrollToSection('Contact')}
              className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
            >
              Express Your Interest <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            tag="Contact"
            title="Let's Talk"
            subtitle="Whether you have a specific challenge in mind or just want to explore how we can help, we'd love to hear from you."
          />
          <motion.div
            className="grid md:grid-cols-2 gap-16 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVariant} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-blue-700" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:hello@expedient.co.uk" className="text-blue-700 hover:underline text-sm">
                    hello@expedient.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-blue-700" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+441234567890" className="text-blue-700 hover:underline text-sm">
                    +44 (0) 1234 567 890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-blue-700" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600 text-sm">United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Linkedin className="text-blue-700" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/expedient-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline text-sm"
                  >
                    Expedient Ltd
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={fadeUpVariant}
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message. We will be in touch shortly.');
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your challenge or how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-lg">Expedient Ltd</span>
          <p className="text-sm">
            © {new Date().getFullYear()} Expedient Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navLinks.slice(0, 4).map((l) => (
              <button
                key={l}
                onClick={() => scrollToSection(l)}
                className="text-xs hover:text-white transition-colors"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExpedientAnimatedWebsite;