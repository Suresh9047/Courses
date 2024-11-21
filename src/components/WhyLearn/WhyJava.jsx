import React, { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp, FaCog, FaDatabase, FaCode, FaLaptopCode } from 'react-icons/fa'; // Import React Icons
import { useSpring, animated } from 'react-spring'; 
import './WhyLearnJava.css';  // CSS file for Java
import javaimg from '../assets/images/pythonfull-Photoroom.png'; // Update image for Java

const WhyJava = () => {
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
    <div className="course-page containerss my-5">
      <div className="row align-items-center">
        {/* Left Column: Course Image */}
        <div className="col-md-6">
          <img src={javaimg} alt="Java Fullstack" className="img-fluid rounded shadow java-img" />
        </div>

        {/* Right Column: Content with Animation */}
        <div className="col-md-6">
          <h1 className="animate-heading">Why Learn Java Fullstack Development?</h1>
          <button onClick={toggleContent} className="btn btn-primary mt-3 animate-btn">
            {isOpen ? (
              <FaChevronUp className="icon" />
            ) : (
              <FaChevronDown className="icon" />
            )}
            Learn More
          </button>

          <animated.div style={animationProps} className="content mt-3" ref={contentRef}>
            <p className="lead">
              Java Fullstack Development is a powerful skill that enables you to build modern web
              applications. With Java as the backend technology and front-end tools like HTML, CSS, 
              and JavaScript, you’ll be able to develop full-fledged, interactive applications.
            </p>
            <ul className='javawhy'>
              <li><FaCog className="me-2 animate-icon" /> Gain expertise in backend and frontend technologies.</li>
              <li><FaDatabase className="me-2 animate-icon" /> Learn how to work with databases, APIs, and frameworks.</li>
              <li><FaCode className="me-2 animate-icon" /> Enhance your career prospects with in-demand skills.</li>
              <li><FaLaptopCode className="me-2 animate-icon" /> Develop real-world applications to showcase in your portfolio.</li>
              <li><FaCog className="me-2 animate-icon" /> Understand how web applications work end-to-end.</li>
              <li><FaDatabase className="me-2 animate-icon" /> Gain knowledge on how to scale applications with databases.</li>
              <li><FaCode className="me-2 animate-icon" /> Become proficient in popular tools and technologies like Java, Spring Boot, and React.</li>
            </ul>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default WhyJava;
