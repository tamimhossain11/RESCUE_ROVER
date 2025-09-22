import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaFire, FaHelicopter, FaShieldAlt, FaEye, FaCog, FaBolt, FaWifi } from 'react-icons/fa';
import './Features.css';

// Import images
import roverImage2 from '../assets/images/02_image.jpeg';
import droneImage2 from '../assets/images/06_image.jpg';

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
      title: "GPS Navigation (NEO-7M)",
      description: "Real-time location tracking with geo-fencing capabilities. Safe zone alerts with latitude, longitude and Google Maps links.",
      color: "#ff6b35"
    },
    {
      icon: FaEye,
      title: "AI Human Detection",
      description: "YOLO model for obstacle classification and ML model to detect whether human is alive, dead or unconscious using eye movement and body temperature.",
      color: "#f7931e"
    },
    {
      icon: FaCog,
      title: "6 DOF Robotic Arm",
      description: "AI-controlled robotic arm for rescue tasks with CO₂ sensor to detect breathing of victims during rescue operations.",
      color: "#ffcd3c"
    },
    {
      icon: FaShieldAlt,
      title: "Multiple Sensors",
      description: "MLX90614 temp sensor, PIR motion, CO₂ sensor, 3 ultrasonic sensors for 270° collision avoidance, gas & fire detection.",
      color: "#ff6b35"
    },
    {
      icon: FaHelicopter,
      title: "Dual Mode Operation",
      description: "FPV drone with robotic claw for aid supply when rover faces mechanical failure or encounters inaccessible terrain.",
      color: "#f7931e"
    },
    {
      icon: FaWifi,
      title: "Advanced Controllers",
      description: "Arduino Mega, Arduino Nano, ESP32 dev module, ESP Wroom 32 for comprehensive system control and communication.",
      color: "#ffcd3c"
    },
    {
      icon: FaBolt,
      title: "Rocker-Bogie Suspension",
      description: "NASA-inspired suspension system with differential mechanism for stable navigation over rough terrain and rubble.",
      color: "#ff6b35"
    },
    {
      icon: FaEye,
      title: "24/7 Surveillance Camera",
      description: "TP Link Tapo C200 camera for continuous surveillance with live video feed for researchers and rescue coordination.",
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
            <h2 className="section-title gradient-text">Core Technologies</h2>
            <p className="section-subtitle">
              Pothochari 1.0 combines GPS, AI, mechanical engineering, and sensor fusion to operate in extreme conditions.
              Its modular design allows future upgrades, making it a valuable tool for rescue and research missions.
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
                <img src={roverImage2} alt="Rescue Rover" />
                <div className="image-overlay">
                  <h4>Ground Unit</h4>
                  <p>Fire Suppression Rover</p>
                </div>
              </div>
              <div className="showcase-details">
                <h4>Pothochari 1.0 - Ground Unit</h4>
                <ul>
                  <li>Rocker-Bogie suspension system</li>
                  <li>6 DOF AI-controlled robotic arm</li>
                  <li>Multiple environmental sensors</li>
                  <li>GPS navigation with geo-fencing</li>
                  <li>Dual LCD displays for data & alerts</li>
                </ul>
              </div>
            </div>

            <div className="showcase-item drone-showcase">
              <div className="showcase-image">
                <img src={droneImage2} alt="Surveillance Drone" />
                <div className="image-overlay">
                  <h4>Aerial Unit</h4>
                  <p>Surveillance Drone</p>
                </div>
              </div>
              <div className="showcase-details">
                <h4>FPV Surveillance Drone</h4>
                <ul>
                  <li>Robotic claw for aid supply</li>
                  <li>Live camera feed transmission</li>
                  <li>Terrain analysis capabilities</li>
                  <li>Backup operation when rover fails</li>
                  <li>Autonomous deployment system</li>
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
