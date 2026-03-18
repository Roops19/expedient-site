import React from 'react';
import { motion } from 'framer-motion';
import './styles.css'; // Tailwind CSS file

const ExpedientAnimatedWebsite = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header with Navigation */}
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="flex items-center">
          <img src="/path/to/expedient-logo.svg" alt="Expedient Logo" className="h-10" />
          <nav className="ml-10">
            <ul className="flex space-x-4">
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#sectors" className="hover:underline">Sectors</a></li>
              <li><a href="#think-tank" className="hover:underline">Think Tank</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center h-screen bg-cover bg-center" style={{backgroundImage: 'url(/path/to/hero-image.jpg)'}}>
        <motion.h1 className="text-5xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          Welcome to Our Expedient Solutions
        </motion.h1>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Map through services data to create service cards */}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Sectors data goes here */}
          </div>
        </div>
      </section>

      {/* Think Tank Section */}
      <section id="think-tank" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Think Tank</h2>
          {/* Think Tank content */}
        </div>
      </section>

      {/* Work With Us Section */}
      <section id="work-with-us" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Work With Us</h2>
          {/* Work with us content */}
        </div>
      </section>

      {/* 3P Framework Showcase Section */}
      <section id="3p-framework" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">3P Framework Showcase</h2>
          <div className="flex items-center justify-center">
            <div className="3P-logo"> {/* Add 3P Logo here */} </div>
            <div className="flex flex-col">
              <h3 className="text-xl">People</h3>
              <h3 className="text-xl">Process</h3>
              <h3 className="text-xl">Performance</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="border p-2 w-full" />
            <input type="email" placeholder="Your Email" className="border p-2 w-full" />
            <textarea placeholder="Your Message" className="border p-2 w-full" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white p-2">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; 2026 Expedient. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExpedientAnimatedWebsite;