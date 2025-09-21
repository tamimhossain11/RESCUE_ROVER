import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaEye } from 'react-icons/fa';
import './Hero.css';

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
            Welcome to <span className="gradient-text">Pothochari</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Next-generation rescue robotics by <strong>Rescue Rover</strong> team. 
            Featuring autonomous fire suppression rovers and aerial surveillance drones 
            for emergency response missions.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <FaShieldAlt className="stat-icon" />
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Autonomous</div>
              </div>
            </div>
            <div className="stat-item">
              <FaRocket className="stat-icon" />
              <div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Ready</div>
              </div>
            </div>
            <div className="stat-item">
              <FaEye className="stat-icon" />
              <div>
                <div className="stat-number">360°</div>
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
            <img src="/images/01_image.jpg" alt="Pothochari Rover" />
            <div className="robot-glow"></div>
          </div>
          <div className="hero-drone">
            <img src="/images/05_image.jpg" alt="Surveillance Drone" />
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
