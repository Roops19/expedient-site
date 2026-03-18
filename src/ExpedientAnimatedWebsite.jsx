import React from 'react';
import './styles.css'; // Assuming there's some CSS for styling

const ExpedientAnimatedWebsite = () => {
  return (
    <div className="expedient-website">
      <h1>Welcome to the Expedient Animated Website</h1>
      <section className="three-p-framework">
        <h2>3P Framework</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Pillar 1</h3>
            <p>Description of Pillar 1.</p>
          </div>
          <div className="card">
            <h3>Pillar 2</h3>
            <p>Description of Pillar 2.</p>
          </div>
          <div className="card">
            <h3>Pillar 3</h3>
            <p>Description of Pillar 3.</p>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ExpedientAnimatedWebsite;