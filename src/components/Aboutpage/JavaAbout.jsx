import React from 'react';
import './JavaAbout.css'; // Ensure this file contains necessary styles
import javaimg from '../assets/images/javafull1.avif';

const JavaAbout = () => {
  return (
    <div className="java-about-container">
    
      <div className="java-about-header">
        <h1 className="java-about-title">Learn Java Fullstack Development</h1>
        <p className="java-about-description">
          Discover the power of Java Fullstack Development! Gain expertise in frontend, backend, database integration, <br />
           and deployment to build robust web applications.
        </p>
      </div>

      <div className="row java-about-content">
      
        <div className="col-md-6 java-about-image">
          <img src={javaimg} alt="Java Fullstack Development" className="about-img" />
        </div>

        {/* Bullet Points Section */}
        <div className="col-md-6 java-about-points">
          <h3>Key Highlights:</h3>

          <hr />
          <ul className="about-points-list">
            <li>Master Java programming and object-oriented concepts.</li>
            <li>Build responsive frontend using React and JavaScript.</li>
            <li>Develop backend APIs with Spring Boot and Hibernate.</li>
            <li>Integrate MySQL for robust database management.</li>
            <li>Learn version control with Git and GitHub.</li>
            <li>Deploy fullstack applications with modern CI/CD pipelines.</li>
          </ul>
        </div>
      </div>

      {/* Animative Cards Section */}
     
        </div>
  );
};

export default JavaAbout;