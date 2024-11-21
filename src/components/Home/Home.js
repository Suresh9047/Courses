import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JavaFullstackCard from '../JavaFullstackCard/JavaFullstackCard';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles
// import java_f from '../assets/images/java.png';
// // import spring_boot from '../assets/images/springboot.png';
// // import hibernate from '../assets/images/gibernate.png';
// import js from '../assets/images/js.png';
// import react from '../assets/images/react.png';
// import html from '../assets/images/html.png';
// import css from '../assets/images/css.png';
// import themleaf from '../assets/images/theymeleaf.png';
// import jsp from '../assets/images/jsp.png';
// import mysql from '../assets/images/mysql.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import './Home.css'


const Home = () => {
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
    reactFrontend: [
      'Introduction to React',
      'React Components and JSX',
      'State and Props in React',
      'React Hooks (useState, useEffect)',
      'React Router for Navigation',
      'Handling Events in React',
      'Frontend State Management',
    ],
    javaProgramming: [
      'Introduction to Java Programming',
      'Java Syntax and Basics',
      'Object-Oriented Programming (OOP) Concepts',
      'Classes and Objects in Java',
      'Inheritance, Polymorphism, and Encapsulation',
      'Exception Handling in Java',
      'Java Collections Framework',
      'Multithreading and Concurrency in Java',
    ],
    springBootHibernate: [
      'Understanding Spring Boot Framework',
      'Building RESTful APIs with Spring Boot',
      'Spring Boot and Hibernate Integration',
      'Entity Management and Mapping with Hibernate',
      'Database Connectivity with JPA',
      'Spring Boot Security (JWT, OAuth)',
      'Building Microservices with Spring Boot',
    ],
    mysql: [
      'Introduction to MySQL',
      'Database Design and Normalization',
      'Basic SQL Queries (SELECT, INSERT, UPDATE, DELETE)',
      'Joins, Subqueries, and Grouping',
      'Advanced SQL Queries (Stored Procedures, Triggers)',
      'MySQL Performance Optimization',
    ],
    thymeleafJSP: [
      'Thymeleaf for UI Development',
      'JSP (JavaServer Pages) Basics',
      'Integrating Thymeleaf with Spring Boot',
      'Building Dynamic Web Pages with JSP',
      'Form Handling with Thymeleaf and JSP',
    ],
    fullstackApplications: [
      'Building Fullstack Applications',
      'Connecting React with Java Spring Boot Backend',
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
    AOS.init();  // Initialize AOS when the component is mounted
  }, []);

  return (
    <Container>
      <h1 className="mt-5 text-center " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000" style={{textAlign:"center",fontSize:"30px",fontWeight:"700px"}}>
        Java Fullstack Course Syllabus
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
            title="JavaScript Fundamentals"
            syllabus={fullstackSyllabus.js}
            fileDownloadLink="/path/to/js-syllabus.pdf"
        
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Frontend Development React"
            syllabus={fullstackSyllabus.reactFrontend}
            fileDownloadLink="/path/to/react-frontend-syllabus.pdf"
            
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
            title="Java Programming"
            syllabus={fullstackSyllabus.javaProgramming}
            fileDownloadLink="/path/to/java-programming-syllabus.pdf"
           
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Spring Boot and Hibernate"
            syllabus={fullstackSyllabus.springBootHibernate}
            fileDownloadLink="/path/to/springboot-hibernate-syllabus.pdf"
           
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="MySQL Database Integration"
            syllabus={fullstackSyllabus.mysql}
            fileDownloadLink="/path/to/mysql-syllabus.pdf"
          
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
            title="Thymeleaf and JSP for UI Development"
            syllabus={fullstackSyllabus.thymeleafJSP}
            fileDownloadLink="/path/to/thymeleaf-jsp-syllabus.pdf"
          />
        </Col>
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

export default Home;
