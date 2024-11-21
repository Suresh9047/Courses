import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import AOS from 'aos';
import "./KeyPython.module.css"
import 'aos/dist/aos.css';

const KeyfeaturesPython = () => {
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

      <ul className='keypy'>
        <li data-aos="fade-up">
          <FaStar className="star-icon" />
          <strong>HTML, CSS, and JavaScript:</strong> Master the essential front-end technologies for creating modern and responsive web interfaces.
        </li>
        <li data-aos="fade-up" data-aos-delay="100">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>React:</strong> Learn to create dynamic user interfaces using React, focusing on reusable components and state management.
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Bootstrap/Tailwind:</strong> Utilize CSS frameworks to streamline UI design and create consistent layouts.
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Version Control:</strong> Use Git and GitHub for collaboration and tracking changes in your projects.
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Responsive Design:</strong> Create mobile-friendly designs with a focus on usability and accessibility.
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Advanced JavaScript:</strong> Deep dive into ES6+ features and asynchronous programming techniques.
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
          <strong>Python Programming:</strong> Build robust and efficient backends using Python with a focus on scalability and performance.
        </li>
        <li data-aos="fade-up" data-aos-delay="100">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Django Framework:</strong> Learn to create RESTful APIs and dynamic server-side web applications with Django.
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Database Management:</strong> Gain expertise in relational databases like PostgreSQL/MySQL and ORM tools like Django ORM.
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Authentication and Security:</strong> Implement user authentication, authorization, and secure backend APIs.
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Deployment:</strong> Learn to deploy applications using cloud services like AWS, Heroku, or Azure.
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Microservices:</strong> Architect scalable solutions with a microservices-based approach.
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
          <strong>Full-Stack Development:</strong> Build integrated front-end and back-end solutions using React and Django.
        </li>
        <li data-aos="fade-up" data-aos-delay="100">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Project-Based Learning:</strong> Implement real-world projects like e-commerce apps, blogs, and management systems.
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>DevOps Basics:</strong> Get hands-on experience with Docker, CI/CD pipelines, and containerized applications.
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Advanced Topics:</strong> Explore asynchronous processing with Celery, caching, and real-time communication using WebSockets.
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Job Readiness:</strong> Get career guidance, mock interviews, and networking opportunities for placement support.
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <MdOutlineStarBorderPurple500 className='staricon'/>
          <strong>Lifetime Access:</strong> Access course materials, mentorship, and alumni support post-completion.
        </li>
      </ul>
    </div>
  );

  return (
    <div className="key-features-container">
      {/* Navigation Tabs */}
      <div className="tabs">
        <button
          style={{ width: "100px" }}
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

export default KeyfeaturesPython;
