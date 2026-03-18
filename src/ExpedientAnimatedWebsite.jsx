import React from 'react';

const ExpedientAnimatedWebsite = () => {
  return (
    <div>
      {/* Navbar Header */}
      <header>
        <h1>EXPEDIENT</h1>
      </header>

      {/* Home Section with 3P Framework */}
      <section id="home">
        <h2>Home Section</h2>
        <p>Welcome to Expedient!</p>
        <div className="framework">
          <h3>3P Framework</h3>
          <ul>
            <li>People</li>
            <li>Process</li>
            <li>Product</li>
          </ul>
        </div>
      </section>

      {/* About Section with Cards */}
      <section id="about">
        <h2>About Us</h2>
        <div className="cards">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </div>
      </section>

      {/* Services Section with Tabbed Content */}
      <section id="services">
        <h2>Our Services</h2>
        <div className="tabs">
          <button>Service 1</button>
          <button>Service 2</button>
          <button>Service 3</button>
          <div className="content">
            <p>Service details go here.</p>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors">
        <h2>Sectors</h2>
        <p>Information about sectors we serve.</p>
      </section>

      {/* Think Tank with Case Studies */}
      <section id="think-tank">
        <h2>Think Tank</h2>
        <p>Explore our case studies.</p>
      </section>

      {/* Associate Model Section */}
      <section id="associate-model">
        <h2>Associate Model</h2>
        <p>Details about the associate model.</p>
      </section>

      {/* Contact Form */}
      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ExpedientAnimatedWebsite;