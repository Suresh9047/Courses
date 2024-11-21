import React, { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp, FaCog, FaDatabase, FaCode, FaLaptopCode } from 'react-icons/fa'; // Import React Icons
import { useSpring, animated } from 'react-spring'; 
import styles from './WhylearnPython.module.css'; // Import the CSS Module
import pythonImg from '../assets/images/pythonfull-Photoroom.png'; // Update image to Python-related

const WhylearnPython = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  // Use React Spring for animated collapse and expand
  const animationProps = useSpring({
    height: isOpen ? contentRef.current?.scrollHeight : 0, // Set height dynamically based on content
    opacity: isOpen ? 1 : 0,  // Animate opacity
    overflow: 'hidden',
    config: { tension: 170, friction: 26 }, // Optional: smooth transition config
  });

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.coursePage}>
      <div className="row align-items-center">
        {/* Left Column: Course Image */}
        <div className="col-md-6">
          <img src={pythonImg} alt="Python Fullstack" className="img-fluid rounded shadow python-img" style={{width:"600px"}} />
        </div>

        {/* Right Column: Content with Animation */}
        <div className="col-md-6">
          <h1 className={styles.animateHeading}>Why Learn Python Fullstack Development?</h1>
          <button onClick={toggleContent} className={`${styles.btn} mt-3`}>
            {isOpen ? (
              <FaChevronUp className={styles.icon} />
            ) : (
              <FaChevronDown className={styles.icon} />
            )}
            Learn More
          </button>

          <animated.div style={animationProps} className={`content mt-3`} ref={contentRef}>
            <p className="lead">
              Python Fullstack Development is a versatile skill set that allows you to build modern web
              applications. With Python for the backend, and front-end tools like HTML, CSS, and JavaScript, 
              you can create dynamic and interactive web applications.
            </p>
            <ul className="pythonWhy">
              <li><FaCog className={`${styles.animateIcon} me-2`} /> Gain expertise in both backend and frontend technologies.</li>
              <li><FaDatabase className={`${styles.animateIcon} me-2`} /> Learn how to work with databases, APIs, and frameworks.</li>
              <li><FaCode className={`${styles.animateIcon} me-2`} /> Enhance your career prospects with in-demand skills.</li>
              <li><FaLaptopCode className={`${styles.animateIcon} me-2`} /> Build real-world applications for your portfolio.</li>
              <li><FaCog className={`${styles.animateIcon} me-2`} /> Understand how web applications function from end to end.</li>
              <li><FaDatabase className={`${styles.animateIcon} me-2`} /> Master how to scale applications using databases.</li>
              <li><FaCode className={`${styles.animateIcon} me-2`} /> Become proficient in tools and technologies such as Django, Flask, and React.</li>
            </ul>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default WhylearnPython;
