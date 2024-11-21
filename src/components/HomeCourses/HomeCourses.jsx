import React from 'react';
import './HomeCourses.css'; // Make sure to style this properly
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import courseImage from '../assets/images/javafull1.avif'; // Replace with actual images

const HomeCourses = () => {
  const courses = [
    {
      title: "Java Fullstack Development",
      description: "Learn to build full-stack applications with Java.",
      image: courseImage, // Replace with image for this course
      link: "/Coursedetail"
    },
    {
        title: "Python Fullstack Development",
        description: "Learn to build full-stack applications with Python.",
        image: courseImage, // Replace with mobile app image
        link: "/Coursedetail"
      },
    {
      title: "Mobile App Development",
      description: "Master Android and iOS app development with Kotlin or React Native.",
      image: courseImage, // Replace with mobile app image
      link: "/Coursedetail"
    },
    {
      title: "Data Analytics",
      description: "Become an expert in data analysis and visualization.",
      image: courseImage, // Replace with data analytics image
      link: "/Coursedetail"
    }
  ];

  return (
    <div className="home-courses-container">
      <h2 className="home-courses-title">Explore Our Courses</h2>
      <div className="home-courses-list">
        {courses.map((course, index) => (
          <div key={index} className="home-course-card">
            <Link to={course.link}><img src={course.image} alt={course.title} className="course-image" /></Link>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <Link to={course.link} className="course-link">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCourses;
