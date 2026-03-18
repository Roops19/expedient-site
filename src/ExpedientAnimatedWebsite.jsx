import React from 'react';
import './styles.css';

const ExpedientAnimatedWebsite = () => {
  return (
    <div className="expedient-website">
      <header className="header">
        <h1>Welcome to Expedient Animated Website</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sectors</li>
            <li>Services</li>
            <li>Think Tank</li>
            <li>Work With Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="animation-section">
        <h2>Animations</h2>
        {/* Animation components go here */}
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <p>Details about services offered by Expedient.</p>
        {/* Services data goes here */}
      </section>

      <section className="3p-framework">
        <h2>3P Framework</h2>
        <p>Description of the 3P framework implementation.</p>
        {/* Add additional content as needed */}
      </section>

      <section className="sectors">
        <h2>Sectors</h2>
        <p>Information about various sectors we operate in.</p>
        {/* List of sectors */}
      </section>

      <section className="think-tank">
        <h2>Think Tank</h2>
        <p>Description of our think tank activities.</p>
      </section>

      <section className="work-with-us">
        <h2>Work With Us</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <button type="submit">Register</button>
        </form>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email us at: contact@expedient.com</p>
      </section>

      <footer>
        <p>&copy; 2026 Expedient. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExpedientAnimatedWebsite;