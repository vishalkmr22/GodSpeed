import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="section section-hero">
      <div className="hero-content">
        <h1>Development made simple</h1>
        <p className="hero-subtitle">GodSpeed gives you everything you need to build and deploy modern web applications with blazing fast performance and powerful developer tools.</p>
        <div className="hero-cta">
          <Link
            to="product"
            smooth={true}
            duration={500}
            className="button button-primary"
          >
            Sign up for free
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="button button-secondary"
            style={{ marginLeft: '1rem' }}
          >
            Contact us
          </Link>
        </div>
        <p className="hero-note">You'll have unlimited time to explore GodSpeed and a 14-day free trial when you deploy your first app.</p>
      </div>
    </section>
  );
}