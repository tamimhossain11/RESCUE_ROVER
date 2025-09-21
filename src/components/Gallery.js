import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/images/01_image.jpg',
      title: 'Pothochari Rover - Front View',
      description: 'Main rescue rover with integrated fire suppression system',
      category: 'rover'
    },
    {
      src: '/images/02_image.jpeg',
      title: 'Rover Side Profile',
      description: 'Side view showing the modular design and mobility features',
      category: 'rover'
    },
    {
      src: '/images/03_image.jpeg',
      title: 'Technical Components',
      description: 'Detailed view of the technical components and sensors',
      category: 'rover'
    },
    {
      src: '/images/04_image.jpeg',
      title: 'Control Systems',
      description: 'Advanced control systems and navigation equipment',
      category: 'rover'
    },
    {
      src: '/images/05_image.jpg',
      title: 'Surveillance Drone',
      description: 'Aerial surveillance drone for comprehensive monitoring',
      category: 'drone'
    },
    {
      src: '/images/06_image.jpg',
      title: 'Drone Technology',
      description: 'High-tech drone with advanced camera systems',
      category: 'drone'
    },
    {
      src: '/images/07_image.jpg',
      title: 'Integrated System',
      description: 'Complete system showing rover and drone integration',
      category: 'system'
    },
    {
      src: '/images/08_image.jpg',
      title: 'Team Showcase',
      description: 'Rescue Rover team with the complete Pothochari system',
      category: 'team'
    }
  ];

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

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <motion.div 
          ref={ref}
          className="gallery-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="gallery-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">Project Gallery</h2>
            <p className="section-subtitle">
              Explore the Pothochari system in detail. From the fire-suppressing rover 
              to the surveillance drone, see how our technology comes together to save lives.
            </p>
          </motion.div>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`gallery-item ${image.category}`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                onClick={() => openLightbox(image, index)}
              >
                <div className="image-container">
                  <img src={image.src} alt={image.title} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h4>{image.title}</h4>
                      <p>{image.description}</p>
                      <div className="category-badge">{image.category}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <FaTimes />
              </button>
              
              <button className="lightbox-nav prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              
              <button className="lightbox-nav next" onClick={nextImage}>
                <FaChevronRight />
              </button>
              
              <div className="lightbox-image">
                <img src={selectedImage.src} alt={selectedImage.title} />
              </div>
              
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <div className="lightbox-meta">
                  <span className="image-counter">
                    {currentIndex + 1} / {images.length}
                  </span>
                  <span className="image-category">{selectedImage.category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
