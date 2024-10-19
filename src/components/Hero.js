import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Your Trusted HR Partner</h1>
        <p>Providing solutions that help you manage, grow, and empower your team.</p>
        <a href="#services" className="cta-button">Learn More</a>
      </div>
    </section>
  );
}

export default Hero;
