import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import java_f from '../assets/images/java.png';
import spring_boot from '../assets/images/springboot.png';
import hibernate from '../assets/images/gibernate.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import themleaf from '../assets/images/theymeleaf.png';
import jsp from '../assets/images/jsp.png';
import mysql from '../assets/images/mysql.png';
import './DataAnalytics.css';
import Datavideo1 from '../assets/videos/dataanalytics5.mp4';
import dataa1 from '../assets/images/dataanalytics7.avif'
import dataana from '../assets/images/data analysis.avif'


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

const DataAnalytics = () => {
  // Slick carousel settings
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

  return (
    <>

    <div className="about" style={{ backgroundImage: `url(${dataana})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '50px 0', width: "100%" }}>
        <img src={dataa1} alt="" />
    </div>
      {/* Video Section */}
      <div className="video-section">
  
  <video className="data-video" autoPlay muted loop>
    <source src={Datavideo1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>
 
      <div className="skills">
        <h1>Skills You Will Learn</h1>
        <hr />
      </div>

      {/* Skills Carousel */}
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
    </>
  );
};

export default DataAnalytics;
