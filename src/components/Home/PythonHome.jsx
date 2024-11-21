import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JavaFullstackCard from '../JavaFullstackCard/JavaFullstackCard';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import './Home.css';

const PythonHome = () => {
  const fullstackSyllabus = {
    htmlCss: [
      'HTML5 Basics and Elements',
      'CSS3 Styling Techniques',
      'CSS Flexbox and Grid Layout',
      'Responsive Web Design with Media Queries',
      'Advanced CSS Techniques',
    ],
    js: [
        'JavaScript Fundamentals',
        'JavaScript ES6+ Features (Arrow Functions, Promises, etc.)',
        'DOM Manipulation and Events in JavaScript',
        'Asynchronous JavaScript (Async/Await)',
        'JavaScript Modules and Import/Export',
      ],
    pythonProgramming: [
      'Introduction to Python Programming',
      'Python Syntax and Basics',
      'Object-Oriented Programming (OOP) Concepts',
      'Working with Modules and Libraries',
      'Exception Handling in Python',
      'File Handling and Data Operations',
    ],
    djangoBackend: [
      'Introduction to Django Framework',
      'Building REST APIs with Django REST Framework',
      'Django ORM and Database Integration',
      'Authentication and Authorization in Django',
      'Building Scalable Web Applications',
      'Django Deployment Techniques',
    ],
    databaseIntegration: [
      'Introduction to PostgreSQL and MySQL',
      'Database Design and Normalization',
      'Basic SQL Queries (SELECT, INSERT, UPDATE, DELETE)',
      'Joins, Subqueries, and Grouping',
      'Advanced SQL Queries (Stored Procedures, Triggers)',
      'Database Performance Optimization',
    ],
    reactFrontend: [
      'Introduction to React',
      'React Components and JSX',
      'State and Props in React',
      'React Hooks (useState, useEffect)',
      'React Router for Navigation',
      'Frontend State Management with Context API',
    ],
    fullstackApplications: [
      'Building Fullstack Applications with Python and React',
      'Connecting React Frontend with Django Backend',
      'CRUD Operations in Fullstack Applications',
      'Implementing Authentication and Authorization',
      'Deployment and CI/CD for Fullstack Apps',
    ],
    git: [
      'Introduction to Git and Version Control',
      'Creating and Cloning Git Repositories',
      'Git Branching and Merging',
      'Commit, Push, Pull, and Fetch',
      'Collaborating with Git (GitHub/GitLab)',
      'Versioning, Tagging, and Releasing',
    ],
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component is mounted
  }, []);

  return (
    <Container>
      <h1 className="mt-5 text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000"  style={{textAlign:"center",fontSize:"30px",fontWeight:"700px"}}>
        Python Fullstack Course Syllabus
      </h1>

      {/* Frontend Modules */}
      <h3 className="mt-4 headc" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="shaking-arrow" /> 
        Frontend Development
      </h3>
      <Row className="mt-4">
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="HTML5 and CSS3 Basics"
            syllabus={fullstackSyllabus.htmlCss}
            fileDownloadLink="/path/to/html-css-syllabus.pdf"
          />
        </Col>

        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="React Frontend Development"
            syllabus={fullstackSyllabus.reactFrontend}
            fileDownloadLink="/path/to/react-frontend-syllabus.pdf"
          />
        </Col>
        
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="JavaScript Fundamentals"
            syllabus={fullstackSyllabus.js}
            fileDownloadLink="/path/to/js-syllabus.pdf"
          
           

          />
        </Col>
      </Row>

      {/* Backend Modules */}
      <h3 className="mt-4 headc" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="shaking-arrow" /> 
        Backend Development
      </h3>
      <Row className="mt-4">
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Python Programming"
            syllabus={fullstackSyllabus.pythonProgramming}
            fileDownloadLink="/path/to/python-programming-syllabus.pdf"
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Django Framework and Backend"
            syllabus={fullstackSyllabus.djangoBackend}
            fileDownloadLink="/path/to/django-backend-syllabus.pdf"
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Database Integration"
            syllabus={fullstackSyllabus.databaseIntegration}
            fileDownloadLink="/path/to/database-integration-syllabus.pdf"
          />
        </Col>
      </Row>

      {/* Additional Modules */}
      <h3 className="mt-4 headc" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="shaking-arrow" /> 
        Additional Topics
      </h3>
      <Row className="mt-4">
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Building Fullstack Applications"
            syllabus={fullstackSyllabus.fullstackApplications}
            fileDownloadLink="/path/to/fullstack-applications-syllabus.pdf"
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Version Control with Git"
            syllabus={fullstackSyllabus.git}
            fileDownloadLink="/path/to/git-syllabus.pdf"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PythonHome;
