import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaEye } from 'react-icons/fa';
import './Hero.css';

// Import images
import roverImage from '../assets/images/01_image.jpg';
import droneImage from '../assets/images/05_image.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>🚀 Advanced Robotics Team</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="gradient-text">Pothochari 1.0</span>
          </motion.h1>

          <motion.div className="hero-subtitle-wrapper" variants={itemVariants}>
            <h2 className="hero-subtitle-main">GPS-Enabled AI-Powered Smart Rescue Rover</h2>
            <p className="hero-subtitle">
              Designed for rescue operations, disaster surveillance, and research in areas where human
              intervention is difficult or impossible. Built by the <strong>Rescue Rover</strong> team.
            </p>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <FaRocket className="stat-icon" />
              <div>
                <div className="stat-number">GPS</div>
                <div className="stat-label">Navigation</div>
              </div>
            </div>
            <div className="stat-item">
              <FaShieldAlt className="stat-icon" />
              <div>
                <div className="stat-number">AI</div>
                <div className="stat-label">Powered</div>
              </div>
            </div>
            <div className="stat-item">
              <FaEye className="stat-icon" />
              <div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Surveillance</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#features" className="btn-primary">
              Explore Features
            </a>
            <a href="#gallery" className="btn-secondary">
              View Gallery
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="hero-robot">
            <img src={roverImage} alt="Pothochari Rover" />
            <div className="robot-glow"></div>
          </div>
          <div className="hero-drone">
            <img src={droneImage} alt="Surveillance Drone" />
            <div className="drone-glow"></div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
