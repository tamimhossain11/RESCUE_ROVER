import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaFire, FaEye, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div 
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">About Pothochari</h2>
            <p className="section-subtitle">
              Revolutionary rescue robotics system designed to save lives in emergency situations. 
              Our integrated approach combines ground-based fire suppression with aerial surveillance 
              for comprehensive disaster response.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-story">
                <h3>Our Mission</h3>
                <p>
                  The <strong>Rescue Rover</strong> team has developed Pothochari as an autonomous 
                  rescue system capable of responding to fire emergencies without risking human lives. 
                  Our system combines cutting-edge robotics, AI, and fire suppression technology.
                </p>
                
                <h3>The Technology</h3>
                <p>
                  Pothochari features a ground-based rover equipped with integrated fire extinguisher 
                  systems and an aerial drone for comprehensive surveillance. Together, they provide 
                  360-degree situational awareness and rapid response capabilities.
                </p>

                <div className="team-info">
                  <h4>Team: Rescue Rover</h4>
                  <p>
                    A dedicated team of robotics engineers, software developers, and emergency 
                    response specialists working together to create life-saving technology.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-features" variants={itemVariants}>
              <div className="feature-card">
                <div className="feature-icon">
                  <FaRobot />
                </div>
                <h4>Autonomous Operation</h4>
                <p>Fully autonomous navigation and decision-making capabilities for emergency response.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaFire />
                </div>
                <h4>Fire Suppression</h4>
                <p>Integrated fire extinguisher system with precision targeting and rapid deployment.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaEye />
                </div>
                <h4>Aerial Surveillance</h4>
                <p>Advanced drone technology for real-time monitoring and situational awareness.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <h4>Life Protection</h4>
                <p>Designed to operate in dangerous environments, protecting human responders.</p>
              </div>
            </motion.div>
          </div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-box">
              <div className="stat-value">24/7</div>
              <div className="stat-description">Operational Readiness</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">360°</div>
              <div className="stat-description">Surveillance Coverage</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">100%</div>
              <div className="stat-description">Autonomous Operation</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">∞</div>
              <div className="stat-description">Lives Protected</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
