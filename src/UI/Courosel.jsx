import React, { useState, useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slide3 from "../assets/images/home/slide-3.jpg";
import Slide4 from "../assets/images/home/slide-4.jpg";

import { motion } from 'framer-motion';

const images = [
  Slide3,
  Slide4,
];

const content = [
  { title: 'FIITJEE', subtitle: 'Kandivali Center' },
  { title: 'FIITJEE', subtitle: 'Andheri Center' },
  // Add more content items as needed for each image
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(content[0]);

  const handleNext = () => {
    const nextIndex = index === images.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
    setCurrentContent(content[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = index === 0 ? images.length - 1 : index - 1;
    setIndex(prevIndex);
    setCurrentContent(content[prevIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = index === images.length - 1 ? 0 : index + 1;
      setIndex(nextIndex);
      setCurrentContent(content[nextIndex]);
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [index, content]); // Add 'content' to dependencies

  return (
    <div className='home_banner' style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Carousel */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {images.map((image, i) => (
          <motion.img
            key={i}
            src={image}
            alt="carousel"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: index === i ? 1 : 0, // Show only the current image
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }} // Only animate opacity of the current image
            transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition between slides
          />
        ))}
      </div>
      
      {/* Text Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%', // Align to the left
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ff3a4685', // Background color
          padding: '40px', // Increased padding for more height
          borderRadius: '10px', // Rounded corners
          zIndex: 2,
          textAlign: 'left', // Align text to the left
          color: 'white', // Text color
        }}
        initial={{ opacity: 0, y: -50 }} // Initial position outside the viewport
        animate={{ opacity: 1, y: 0 }} // Animation to move into the viewport
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <h1 style={{ color: 'white', marginBottom: '10px' }}>FIITJEE <span style={{ color: '#1b1d3d' }}>Mumbai</span></h1>
          <p style={{ color: 'white', fontSize: '28px',textTransform:"uppercase", fontWeight: 'bold',letterSpacing:1.5 }}>{currentContent.subtitle}</p>
        </div>
      </motion.div>

      {/* Buttons */}
      <div className='btn prev_btn' onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '-1%', zIndex: 3 }}>
        {/* <span style={{ fontSize: '24px', color: 'white' }}>&#9664;</span> Left arrow icon */}
      </div>
      <div className='btn next_btn'  onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '1.5%', zIndex: 3 }}>
        {/* <span style={{ fontSize: '24px', color: 'white' }}>&#9654;</span> Right arrow icon */}
      </div>
    </div>
  );
};

export default Banner;
