import React from 'react';
import SkillsCard from './SkillsCard';  // Adjust the import path if needed

const skillData = [
  { name: "Java", image: "path/to/java-image.jpg" },
  { name: "Spring Boot", image: "path/to/spring-boot-image.jpg" },
  { name: "Hibernate", image: "path/to/hibernate-image.jpg" },
  { name: "MySQL", image: "path/to/mysql-image.jpg" },
  { name: "JavaScript", image: "path/to/javascript-image.jpg" },
  { name: "React", image: "path/to/react-image.jpg" },
  { name: "HTML", image: "path/to/html-image.jpg" },
  { name: "CSS", image: "path/to/css-image.jpg" },
  { name: "Thymeleaf", image: "path/to/thymeleaf-image.jpg" },
  { name: "JSP", image: "path/to/jsp-image.jpg" },
];

const SkillsData = () => (
  <div>
    <SkillsCard skills={skillData} />
  </div>
);

export default SkillsData;
