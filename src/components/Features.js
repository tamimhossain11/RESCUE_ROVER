import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaFire, FaHelicopter, FaShieldAlt, FaEye, FaCog, FaBolt, FaWifi } from 'react-icons/fa';
import './Features.css';

const Features = () => {
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

  const features = [
    {
      icon: FaRobot,
      title: "Autonomous Navigation",
      description: "Advanced AI-powered navigation system with obstacle detection and path planning for complex emergency scenarios.",
      color: "#ff6b35"
    },
    {
      icon: FaFire,
      title: "Fire Suppression System",
      description: "Integrated fire extinguisher with precision targeting, capable of suppressing various types of fires effectively.",
      color: "#f7931e"
    },
    {
      icon: FaHelicopter,
      title: "Aerial Surveillance",
      description: "High-resolution drone with thermal imaging for comprehensive situational awareness and monitoring.",
      color: "#ffcd3c"
    },
    {
      icon: FaShieldAlt,
      title: "Safety First Design",
      description: "Built to operate in hazardous environments, protecting human responders from dangerous situations.",
      color: "#ff6b35"
    },
    {
      icon: FaEye,
      title: "Real-time Monitoring",
      description: "Live video feed and sensor data transmission for remote operation and decision making.",
      color: "#f7931e"
    },
    {
      icon: FaCog,
      title: "Modular Architecture",
      description: "Expandable design allowing for additional modules and capabilities based on mission requirements.",
      color: "#ffcd3c"
    },
    {
      icon: FaBolt,
      title: "Rapid Response",
      description: "Quick deployment and activation systems for immediate response to emergency situations.",
      color: "#ff6b35"
    },
    {
      icon: FaWifi,
      title: "Remote Control",
      description: "Secure wireless communication for remote operation and coordination with emergency response teams.",
      color: "#f7931e"
    }
  ];

  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <motion.div 
          ref={ref}
          className="features-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="features-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">Advanced Features</h2>
            <p className="section-subtitle">
              Cutting-edge technology integrated into a comprehensive rescue system. 
              Every feature is designed with life-saving capabilities in mind.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <div className="feature-icon-wrapper">
                  <feature.icon 
                    className="feature-icon" 
                    style={{ color: feature.color }}
                  />
                  <div 
                    className="feature-glow"
                    style={{ background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)` }}
                  ></div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="features-showcase" variants={itemVariants}>
            <div className="showcase-item rover-showcase">
              <div className="showcase-image">
                <img src="/images/02_image.jpeg" alt="Rescue Rover" />
                <div className="image-overlay">
                  <h4>Ground Unit</h4>
                  <p>Fire Suppression Rover</p>
                </div>
              </div>
              <div className="showcase-details">
                <h4>Rescue Rover</h4>
                <ul>
                  <li>Autonomous navigation system</li>
                  <li>Integrated fire extinguisher</li>
                  <li>Thermal imaging sensors</li>
                  <li>All-terrain mobility</li>
                </ul>
              </div>
            </div>

            <div className="showcase-item drone-showcase">
              <div className="showcase-image">
                <img src="/images/06_image.jpg" alt="Surveillance Drone" />
                <div className="image-overlay">
                  <h4>Aerial Unit</h4>
                  <p>Surveillance Drone</p>
                </div>
              </div>
              <div className="showcase-details">
                <h4>Surveillance Drone</h4>
                <ul>
                  <li>360° aerial monitoring</li>
                  <li>HD camera system</li>
                  <li>Real-time data transmission</li>
                  <li>Extended flight time</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
