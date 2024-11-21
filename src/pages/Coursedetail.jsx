import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import both up and down icons
import './Css/Coursedetail.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import java_f from '../components/assets/images/java.png';
import spring_boot from '../components/assets/images/springboot.png';
import hibernate from '../components/assets/images/gibernate.png';
import js from '../components/assets/images/js.png';
import react from '../components/assets/images/react.png';
import html from '../components/assets/images/html.png';
import css from '../components/assets/images/css.png';
import themleaf from '../components/assets/images/theymeleaf.png';
import jsp from '../components/assets/images/jsp.png';
import mysql from '../components/assets/images/mysql.png';
import JavaAbout from '../components/Aboutpage/JavaAbout';
import Home from '../components/Home/Home';
import KeyFeaturess from '../components/KeyFeatures/KeyFeaturess';
import CertificatePage from '../components/CertificationPage/CertificatePage';
import WhyLearnJava from '../components/WhyLearn/WhyJava';
import { Container } from 'react-bootstrap';
import PythonAbout from '../components/Aboutpage/PythonAbout';
import PythonHome from '../components/Home/PythonHome';
import KeyfeaturesPython from '../components/KeyFeatures/KeyfeaturesPython';
import PythonCertificate from '../components/CertificationPage/PythonCertificate';
import WhylearnPython from '../components/WhyLearn/WhylearnPython';
import django from '../components/assets/images/django.png';
import python from '../components/assets/images/python.png';
import spark from '../components/assets/images/spark.png';
import excel from '../components/assets/images/xcel.png';
import hadoop from '../components/assets/images/hadoop.png';
import datavisu from '../components/assets/images/datavisu.jpg';
import machine from '../components/assets/images/machinelearning.png';
import powerbi from '../components/assets/images/powerbi.png';
import bigdata from '../components/assets/images/bigdata.png';
import tablaue from '../components/assets/images/tableau.png';
import DataAnalyticsAbout from '../components/Aboutpage/DataAnalyticsAbout';
import DataAnalyticsHome from '../components/Home/DataAnalyticsHome';


const Coursedetail = () => {
  // const sliderRef = useRef();
  const firstSectionRef = useRef(); // Ref for the first section
  const lastSectionRef = useRef(); // Ref for the last section
  const [isAtTop, setIsAtTop] = useState(true); // State to track scroll position

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
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

  const pythonData = [
    { name: 'MySQL', image: mysql },
    { name: 'Python', image: python },
    { name: 'Django', image: django },
    { name: 'JavaScript', image: js },
    { name: 'React', image: react },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
   
  ];

  const dataAnalyticsSkills = [
    { name: 'Python', image: python },
    { name: 'SQL', image: mysql },
    { name: 'Tableau', image: tablaue },
    { name: 'Power BI', image: powerbi },
    { name: 'Machine Learning', image: machine},
    { name: 'Big Data', image: bigdata },
    { name: 'Data Visualization', image: datavisu },
    { name: 'Excel', image: excel },
    { name: 'Hadoop', image: hadoop },
    { name: 'Spark', image: spark },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if you're near the top or bottom
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setIsAtTop(false); // Near the bottom
      } else if (scrollPosition === 0) {
        setIsAtTop(true); // At the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToFirstSection = () => {
    if (firstSectionRef.current) {
      firstSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLastSection = () => {
    if (lastSectionRef.current) {
      lastSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIconClick = () => {
    if (isAtTop) {
      handleScrollToLastSection(); // Scroll to the last section
    } else {
      handleScrollToFirstSection(); // Scroll to the first section
    }
  };

  return (
    <>
      <div ref={firstSectionRef}>
        <JavaAbout />
      </div>

      <div className="skills">
        <h1>Skills You Will Learn</h1>
        <hr />
      </div>

      <div className="Skills-learn">
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div key={index}>
              <div className="skills-img">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skillnames">
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
      <Home />
      <Container>
      
      <KeyFeaturess />
      </Container>
      <CertificatePage />
      <WhyLearnJava />
      <div ref={lastSectionRef}></div>

      {/* Scroll Button */}
      <div className="scroll-button-container">
        <button onClick={handleIconClick} className="scroll-toggle-btn">
          {isAtTop ? <FaArrowDown /> : <FaArrowUp />} {/* Toggle between Up and Down icon */}
        </button>
      </div>
      <PythonAbout/>

      <div className="skills">
        <h1>Skills You Will Learn</h1>
        <hr />
      </div>

      <div className="Skills-learn">
        <Slider {...settings}>
          {pythonData.map((skill, index) => (
            <div key={index}>
              <div className="skills-img">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skillnames">
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <PythonHome/>
      <Container>
      <KeyfeaturesPython/>
      </Container>
      <PythonCertificate/>
      <Container>
      <WhylearnPython/>
      </Container>
      <DataAnalyticsAbout/>

      <div className="skills">
        <h1>Skills You Will Learn</h1>
        <hr />
      </div>
      <div className="Skills-learn">
        <Slider {...settings}>
          {dataAnalyticsSkills.map((skill, index) => (
            <div key={index}>
              <div className="skills-img">
                <img src={skill.image} alt={skill.name} />
              </div>
              <div className="skillnames">
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <DataAnalyticsHome/>

      
    </>
  );
};

export default Coursedetail;