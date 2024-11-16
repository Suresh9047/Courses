import React from 'react';
import './CourseCard.css'

const CourseCard = ({ image, name, price }) => {
  return (
    <div className="course-item">
      <div className="course-img">
        <img src={image} alt={name} />
      </div>
      <div className="course-name">
        <h3>{name}</h3>
      </div>
      <div className="course-price">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
