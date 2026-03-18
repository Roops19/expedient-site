import React from 'react';
import { motion } from 'framer-motion';
import './App.css'; // Assuming your Tailwind CSS is imported here

const ExpedientAnimatedWebsite = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Expedient Website</h1>
      </header>
      
      {/* Hero Section */}
      <motion.section className="hero bg-cover bg-center h-screen" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <h2 className="text-4xl text-white">Welcome to Our Website</h2>
      </motion.section>
      
      {/* About Section */}
      <motion.section className="about p-8"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl">About Us</h3>
        <p>We are committed to excellence...</p>
      </motion.section>
      
      {/* Services Section */}
      <motion.section className="services p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl">Our Services</h3>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </motion.section>
      
      {/* 3P Framework Section */}
      <motion.section className="framework p-8"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl">Our 3P Framework</h3>
        <p>Description of the framework...</p>
      </motion.section>
      
      {/* Sectors Section */}
      <motion.section className="sectors p-8"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl">Sectors We Serve</h3>
        <p>Details on sectors...</p>
      </motion.section>
      
      {/* Think Tank Section */}
      <motion.section className="think-tank p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl">Our Think Tank</h3>
        <p>Information about our think tank...</p>
      </motion.section>
      
      {/* Work With Us Section */}
      <motion.section className="work-with-us p-8"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl">Work With Us</h3>
        <p>Join our team...</p>
      </motion.section>
      
      {/* Contact Form Section */}
      <motion.section className="contact p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl">Contact Us</h3>
        <form>
          <input type="text" placeholder="Your Name" className="p-2 border border-gray-400" />
          <input type="email" placeholder="Your Email" className="p-2 border border-gray-400" />
          <textarea placeholder="Your Message" className="p-2 border border-gray-400"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
        </form>
      </motion.section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2026 Expedient. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExpedientAnimatedWebsite;