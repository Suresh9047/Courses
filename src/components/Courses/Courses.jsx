import React, { useContext, useEffect } from 'react';
import { Context } from '../../Context/Context';  

const Courses = () => {
  const { courses, setCourses } = useContext(Context);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/Course.json');  
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        console.log(data); 
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [setCourses]);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.length === 0 ? (
          <li>No courses available</li>  // Display message if courses array is empty
        ) : (
          courses.map((course) => (
            <li key={course.id}>{course.title}
            {course.description}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Courses;
