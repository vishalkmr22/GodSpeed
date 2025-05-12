// File: src/components/Footer.js
import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <h2 className="footer__brand">
          <a href="https://www.godspeed.com" className="footer__brand-link">
            GodSpeed
          </a>
        </h2>

        {/* Navigation */}
        <ul className="footer__nav">
          <li><a href="#features">Features</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer__social">
          <a href="https://twitter.com/godspeed" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com/godspeed" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://linkedin.com/company/godspeed" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://instagram.com/godspeed" aria-label="Instagram"><FaInstagram /></a>
        </div>

        {/* Contact */}
        <address className="footer__contact">
          <a href="mailto:info@godspeed.com">info@godspeed.com</a>
          <a href="tel:+911234567890">+91 12345 67890</a>
        </address>

        {/* Copyright */}
        <p className="footer__copy">
          © {new Date().getFullYear()} GodSpeed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
