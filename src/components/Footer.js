import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <span className="logo-text gradient-text">Pothochari</span>
              <span className="logo-subtitle">Rescue Rover</span>
            </div>
            <p className="footer-description">
              Revolutionary rescue robotics system designed to save lives in emergency situations. 
              Combining autonomous fire suppression with aerial surveillance for comprehensive disaster response.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link">
                <FaGithub />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="footer-column">
              <h4>Project</h4>
              <ul>
                <li><a href="#about">About Pothochari</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Technology</h4>
              <ul>
                <li><a href="#features">Fire Suppression</a></li>
                <li><a href="#features">Aerial Surveillance</a></li>
                <li><a href="#features">Autonomous Navigation</a></li>
                <li><a href="#features">Remote Control</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Team</h4>
              <ul>
                <li><a href="#about">Rescue Rover</a></li>
                <li><a href="#contact">Get in Touch</a></li>
                <li><a href="#contact">Collaboration</a></li>
                <li><a href="#contact">Support</a></li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="footer-newsletter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Stay Updated</h4>
            <p>Get the latest updates on our rescue robotics project and emergency response innovations.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <motion.button 
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Pothochari - Rescue Rover Team. Made with{' '}
              <FaHeart className="heart-icon" /> for saving lives.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Open Source</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles background */}
      <div className="footer-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </footer>
  );
};

export default Footer;
