import React from 'react';
import './JavaAbout.css'; // Ensure this file contains necessary styles
import pythonimg from '../assets/images/pythonfull1.avif';

const PythonAbout = () => {
  return (
    <div className="java-about-container">
      {/* Header Section */}
      <div className="java-about-header">
        <h1 className="java-about-title">Learn Python Fullstack Development</h1>
        <p className="java-about-description">
          Unlock the potential of Python Fullstack Development! Master frontend, backend, database integration, <br />
          and deployment to build scalable and efficient web applications.
        </p>
      </div>

      {/* Content Section */}
      <div className="row java-about-content">
        {/* Image Section */}
        <div className="col-md-6 java-about-image">
          <img src={pythonimg} alt="Python Fullstack Development" className="about-img" />
        </div>

        {/* Bullet Points Section */}
        <div className="col-md-6 java-about-points">
          <h3>Key Highlights:</h3>
          <hr />
          <ul className="about-points-list">
            <li>Learn Python programming and its versatile frameworks.</li>
            <li>Develop dynamic frontend with React or Django templates.</li>
            <li>Build RESTful APIs with Django REST Framework or Flask.</li>
            <li>Utilize PostgreSQL or MySQL for robust database solutions.</li>
            <li>Implement version control with Git and GitHub.</li>
            <li>Deploy fullstack applications on cloud platforms with CI/CD.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PythonAbout;
