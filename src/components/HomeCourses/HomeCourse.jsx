import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import javaImage from '../assets/images/java1.avif'; 
import python_fullstack from '../assets/images/pythonfull.jpg'; 
import data_analaytics from '../assets/images/data analysis.avif'; 
import Data_science from '../assets/images/data analytics.avif'; 
import "./HomeCourse.css";
import { Link } from 'react-router-dom';

const HomeCourses = () => {
  const courses = [
    { id: 1, image: javaImage, name: "Java Fullstack Development", price: "$49", link: "/Coursedetail" },
    { id: 2, image: python_fullstack, name: "Python Fullstack Development", price: "$49", link: "/pythonfull" },
    { id: 3, image: data_analaytics, name: "Data Analytics", price: "$49", link: "/dataanalytics" },
    { id: 4, image: Data_science, name: "Data Science", price: "$49", link: "/datascience" },
    { id: 4, image: Data_science, name: "Mobile App Development", price: "$49", link: "/MobileApp" },
  ];

  return (
    <div>
      <div className="course">
        <div className="Development-nav">
          <h1>Development Courses</h1>
          <hr />
        </div>
      </div>
      <div className="course-list">
        {courses.map((course) => (
          <Link to={course.link} key={course.id} className="course-card-link">
            <CourseCard 
              image={course.image} 
              name={course.name} 
              price={course.price} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCourses;
