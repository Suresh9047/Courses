import React from 'react';
import ModuleCard from './ModuleCard';
import './Module.css';

const modules = [
  { id: 1, title: "Introduction to Java Programming", description: "Learn the basics of Java, including syntax, variables, loops, and functions." },
  { id: 2, title: "Understanding Spring Boot and Hibernate", description: "Explore Spring Boot for backend development and Hibernate for database integration." },
  { id: 3, title: "Frontend Development with React", description: "Master React to build interactive UIs and manage state effectively." },
  { id: 4, title: "Building Fullstack Applications", description: "Learn how to combine frontend and backend technologies to build complete applications." },
  { id: 5, title: "Database Integration with MySQL", description: "Understand how to connect Java applications to MySQL databases for data storage." },
  { id: 6, title: "Thymeleaf and JSP for UI Development", description: "Learn how to use Thymeleaf and JSP for creating dynamic web pages with server-side rendering." },
  { id: 7, title: "HTML5 and CSS3 Basics", description: "Understand the core concepts of HTML5 and CSS3 for building responsive web pages." },
  { id: 8, title: "Advanced CSS Techniques", description: "Learn advanced CSS properties and techniques like Flexbox, Grid, Animations, and Transitions." },
  { id: 9, title: "JavaScript Fundamentals", description: "Master JavaScript basics including variables, loops, functions, and event handling." },
  { id: 10, title: "JavaScript ES6+ Features", description: "Learn the latest ES6+ features in JavaScript like arrow functions, classes, and modules." },
  { id: 11, title: "SQL for Database Management", description: "Learn SQL to query and manipulate databases effectively with SELECT, INSERT, UPDATE, DELETE commands." },
  { id: 12, title: "Advanced SQL Queries", description: "Master advanced SQL techniques such as JOINs, subqueries, indexing, and optimizing queries." },
  { id: 13, title: "RESTful APIs with Java", description: "Learn how to build REST APIs in Java using Spring Boot for communication between frontend and backend." },
  { id: 14, title: "Version Control with Git", description: "Understand how to use Git for version control, managing repositories, and collaborating on projects." }
];

const Modules = () => {
  return (
    <div className="modules-section">
      <h2>Java Fullstack Modules</h2>
      <div className="module-cards-container">
        {modules.map(module => (
          <ModuleCard key={module.id} title={module.title} description={module.description} />
        ))}
      </div>
    </div>
  );
};

export default Modules;
