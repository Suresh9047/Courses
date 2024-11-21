import React, { useState, useEffect } from 'react';
import './KeyFeatures.css';
import { FaStar } from 'react-icons/fa';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';



const KeyFeaturess = () => {
  const [activeTab, setActiveTab] = useState('frontend'); // Default tab is 'frontend'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing effect for smooth animation
      once: true, // Animation happens once when the element enters the viewport
    });
  }, []);

  const frontendContent = (
    <div className='frontendcards'>
      <h2 data-aos="fade-up">Comprehensive Front-End Skills</h2> 
      <hr data-aos="fade-up" />

      <ul>
        <li data-aos="fade-up">
          <FaStar className="star-icon" />
          <strong>HTML, CSS, and JavaScript:</strong> Master the building blocks of web development for creating interactive and visually appealing web pages.
        </li>
        <li data-aos="fade-up" data-aos-delay="100">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>React:</strong> Learn how to build reusable components, manage state, and create single-page applications.
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>CSS Frameworks:</strong> Use frameworks like Bootstrap or Tailwind for faster UI design.
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Version Control:</strong> Learn Git and GitHub for managing and collaborating on frontend code.
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Responsive Design:</strong> Develop mobile-first designs and ensure compatibility across devices.
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Advanced JavaScript:</strong> Dive into ES6+ features like async/await, promises, and modules for clean and efficient code.
        </li>
      </ul>
    </div>
  );

  const backendContent = (
    <div className='frontendcards'>
      <h2 data-aos="fade-up">Comprehensive Back-End Skills</h2>
      <hr data-aos="fade-up" />

      <ul>
        <li data-aos="fade-up">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Java and Spring Framework:</strong> Build scalable, secure, and maintainable backend applications using Spring Boot.
        </li>
        <li data-aos="fade-up" data-aos-delay="100">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>REST APIs:</strong> Design and implement RESTful APIs for frontend-backend communication.
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Database Management:</strong> Master relational databases like MySQL/PostgreSQL and NoSQL databases like MongoDB.
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Authentication and Security:</strong> Implement user authentication with JWT and OAuth2, and learn to secure APIs.
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Deployment:</strong> Deploy backend services to cloud platforms like AWS, Azure, or Google Cloud.
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Microservices Architecture:</strong> Build modular and scalable applications using microservices principles.
        </li>
      </ul>
    </div>
  );

  const keyFeaturesContent = (
    <div className='frontendcards'>
      <h2 style={{ paddingLeft: "400px" }} data-aos="fade-up">Key Features</h2>
      <hr data-aos="fade-up" />

      <ul>
        <li data-aos="fade-up">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Full-Stack Integration:</strong> Develop projects that integrate frontend (React) with backend (Spring Boot) and databases.
        </li>
        <li data-aos="fade-up" data-aos-delay="100">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Hands-On Projects:</strong> Work on real-world projects to gain industry experience and confidence.
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Deployment and CI/CD:</strong> Learn to automate deployment pipelines using tools like Jenkins, GitHub Actions, or GitLab CI/CD.
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Advanced Topics:</strong> Explore cutting-edge topics like Reactive Programming (Spring WebFlux) and real-time communication using WebSockets.
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Career Support:</strong> Participate in mock interviews, resume-building sessions, and industry mentoring for job readiness.
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Post-Course Support:</strong> Get lifetime access to course materials, mentorship, and a strong alumni network for continuous growth.
        </li>
      </ul>
    </div>
  );

  return (
    <div className="key-features-container">
      {/* Navigation Tabs */}
      <div className="tabs">
        <button style={{width:"100px"
        }}
          className={activeTab === 'frontend' ? 'active button' : ''}
          onClick={() => handleTabClick('frontend')}
        >
          Frontend
        </button>
        <button
          className={activeTab === 'backend' ? 'active button' : ''}
          onClick={() => handleTabClick('backend')}
        >
          Backend
        </button>
        <button
          className={activeTab === 'keyfeatures' ? 'active button' : ''}
          onClick={() => handleTabClick('keyfeatures')}
        >
          Key Features
        </button>
      </div>

      {/* Content Section */}
      <div className="content">
        {activeTab === 'frontend' && frontendContent}
        {activeTab === 'backend' && backendContent}
        {activeTab === 'keyfeatures' && keyFeaturesContent}
      </div>
    </div>
  );
};

export default KeyFeaturess;
