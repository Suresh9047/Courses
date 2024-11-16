import React from 'react';
import Slider from 'react-slick';
import './Css/Coursedetail.css';
import java_f from '../components/assets/images/java.png';
import spring_boot from '../components/assets/images/springboot.png';
import hibernate from '../components/assets/images/gibernate.png';
import js from '../components/assets/images/js.png';
import react from '../components/assets/images/react.png';
import html from '../components/assets/images/html.png';
import css from '../components/assets/images/css.png';
import themleaf from '../components/assets/images/theymeleaf.png';
import jsp from '../components/assets/images/jsp.png';
import mysql from '../components/assets/images/jsp.png';
import Footer from '../components/Footer/Footer';
import java_head from '../components/assets/images/fullsatck java.avif';
import Modules from '../components/Modules/Modules';
import KeyFeatures from '../components/KeyFeatures/KeyFeatures';

const Coursedetail = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const skillsData = [
    { name: 'Java', image: java_f },
    { name: 'Spring Boot', image: spring_boot },
    { name: 'Hibernate', image: hibernate },
    { name: 'MySQL', image: mysql },
    { name: 'JavaScript', image: js },
    { name: 'React', image: react },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'Thymeleaf', image: themleaf },
    { name: 'JSP', image: jsp },
  ];

  return (
    <>
      <div className="course-page">
        <div className="Courses">
          <div className="Course-name">
            Java Fullstack Development
            <hr />
          </div>

          {/* About Section */}
          <div className="about-section">
            <h2 className="about-title">About the Course</h2>
            <hr className="about-divider" />
            <div className="about-content">
              <div className="about-image-container">
                <img src={java_head} alt="Java Fullstack" className="about-image" />
              </div>
              <div className="about-details">
                <ul className="about-list">
                  <li>
                    The Java Fullstack Development course is designed to equip you with
                    the essential skills to become a proficient Fullstack Developer. This
                    course covers the latest technologies such as Java, Spring Boot, Hibernate,
                    React, and more, empowering you to build modern web applications.
                  </li>
                  <li>
                    You'll gain hands-on experience in both frontend and backend development,
                    learning how to integrate databases, work with APIs, and build responsive
                    UIs using the most popular frameworks.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h1>Skills You Will Learn</h1>
          </div>
          <div className="Skills-learn">
            <Slider {...settings}>
              {skillsData.map((skill, index) => (
                <div key={index} className="skills-card">
                  <div className="skills-img">
                    <img src={skill.image} alt={skill.name} />
                  </div>
                  <div className="skills-name">
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <KeyFeatures />
          <Modules/>

          {/* Certificate Section */}
          <div className="certificate">
            <h2>Certificate</h2>
            <p>
              Upon completing this course, you will receive a certificate of completion that
              validates your skills and knowledge in Java Fullstack Development.
            </p>
          </div>

          {/* Modules Section */}
         
          {/* Why Learn This Course */}
          <div className="why-learn">
            <h2>Why Learn This Course?</h2>
            <p>
              The demand for Java Fullstack Developers is increasing rapidly as companies
              move to microservices architecture and embrace the need for fullstack solutions.
              With expertise in both backend and frontend technologies, you'll be able to build
              end-to-end web applications that power modern businesses.
            </p>
            <p>
              This course offers a complete roadmap to becoming a skilled fullstack developer,
              ensuring you're equipped with the knowledge and tools to thrive in a competitive job market.
            </p>
          </div>
        </div>
       </div>
      <div className="course-page">
        <div className="Courses">
          <div className="Course-name">
            Java Fullstack Development
            <hr />
          </div>

          {/* About Section */}
          <div className="about-section">
            <h2 className="about-title">About the Course</h2>
            <hr className="about-divider" />
            <div className="about-content">
              <div className="about-image-container">
                <img src={java_head} alt="Java Fullstack" className="about-image" />
              </div>
              <div className="about-details">
                <ul className="about-list">
                  <li>
                    The Java Fullstack Development course is designed to equip you with
                    the essential skills to become a proficient Fullstack Developer. This
                    course covers the latest technologies such as Java, Spring Boot, Hibernate,
                    React, and more, empowering you to build modern web applications.
                  </li>
                  <li>
                    You'll gain hands-on experience in both frontend and backend development,
                    learning how to integrate databases, work with APIs, and build responsive
                    UIs using the most popular frameworks.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h1>Skills You Will Learn</h1>
          </div>
          <div className="Skills-learn">
            <Slider {...settings}>
              {skillsData.map((skill, index) => (
                <div key={index} className="skills-card">
                  <div className="skills-img">
                    <img src={skill.image} alt={skill.name} />
                  </div>
                  <div className="skills-name">
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <KeyFeatures />
          <Modules/>

          {/* Certificate Section */}
          <div className="certificate">
            <h2>Certificate</h2>
            <p>
              Upon completing this course, you will receive a certificate of completion that
              validates your skills and knowledge in Java Fullstack Development.
            </p>
          </div>

          {/* Modules Section */}
         
          {/* Why Learn This Course */}
          <div className="why-learn">
            <h2>Why Learn This Course?</h2>
            <p>
              The demand for Java Fullstack Developers is increasing rapidly as companies
              move to microservices architecture and embrace the need for fullstack solutions.
              With expertise in both backend and frontend technologies, you'll be able to build
              end-to-end web applications that power modern businesses.
            </p>
            <p>
              This course offers a complete roadmap to becoming a skilled fullstack developer,
              ensuring you're equipped with the knowledge and tools to thrive in a competitive job market.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Coursedetail;
