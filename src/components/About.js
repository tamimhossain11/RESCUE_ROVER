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
            <h2 className="section-title gradient-text">About Pothochari 1.0</h2>
            <p className="section-subtitle">
              GPS-Enabled AI-Powered Smart Rescue Rover designed for rescue operations, disaster
              surveillance, and research in areas where human intervention is difficult or impossible.
              Built for challenging terrains which create hindrance to human rescuers.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-story">
                <h3>Critical Rescue Scenarios</h3>
                <p>
                  In areas with radio activity or catastrophic blazes, it's tough for human rescuers 
                  to make entrance, taking huge risk of life. In massive explosions or fatal earthquakes, 
                  victims get trapped under rubble or rocks. Finding humans or any trace of them becomes 
                  a very difficult and time-consuming task for human rescuers.
                </p>
                
                <h3>Our Solution</h3>
                <p>
                  Pothochari 1.0 serves as a critical game-changing innovation. Being easily operable 
                  and controlled by AI systems, the robot brings substantial influence in saving lives 
                  of both rescuers and victims, handling difficult tasks more proficiently with thermal 
                  cameras to find traces of life through heat, smoke or dust.
                </p>

                <h3>Data Collection & Research</h3>
                <p>
                  Our rover doesn't only act as a life saver. It helps in research conduction too. 
                  With many environmental sensors attached, it collects various data from the environment 
                  and keeps us updated simultaneously, helping organizations analyze disaster-affected zones.
                </p>

                <div className="team-info">
                  <h4>Team: Rescue Rover</h4>
                  <p>
                    <strong>Presented by:</strong><br/>
                    M Adiyat Yeamim<br/>
                    Md. Tahmid Bin Alam Ayat
                  </p>
                  <p>
                    A dedicated team of robotics engineers and developers working together 
                    to create life-saving technology for emergency response missions.
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
              <div className="stat-value">GPS</div>
              <div className="stat-description">Real-time Navigation</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">6 DOF</div>
              <div className="stat-description">Robotic Arm</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">AI</div>
              <div className="stat-description">Human Detection</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">270°</div>
              <div className="stat-description">Collision Avoidance</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

