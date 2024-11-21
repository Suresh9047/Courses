import React, { useState } from 'react';
import './KeyFeatures.css';
import Features_img1 from '../assets/images/features.avif';

const KeyFeatures = () => {
  const [hovered, setHovered] = useState(null); // State to track hovered feature

  const features = [
    { id: 1, title: "Comprehensive Coverage of Java Fullstack Technologies", description: "Learn all aspects of Java Fullstack development including frontend, backend, databases, and deployment." },
    { id: 2, title: "Hands-on Projects for Real-World Experience", description: "Gain practical knowledge with real-world projects to prepare for industry challenges." },
    { id: 3, title: "Learn Both Front-End and Back-End Development", description: "Master both the frontend (React) and backend (Java/Spring) to build full-stack applications." },
    { id: 4, title: "Instructor-Led, Step-by-Step Tutorials", description: "Follow along with expert instructors who break down complex concepts into simple, actionable steps." },
    { id: 5, title: "Support for Career Advancement and Interview Preparation", description: "Prepare for the tech job market with targeted interview questions and career guidance." },
    { id: 6, title: "Access to Industry-Standard Tools", description: "Learn how to use modern development tools like Git, Docker, and CI/CD pipelines to streamline your workflow." },
    { id: 7, title: "Build Scalable, Production-Ready Applications", description: "Develop applications that are not only functional but also scalable, secure, and production-ready." },
    { id: 8, title: "Real-Time Collaboration and Teamwork Skills", description: "Experience working on projects as part of a team, simulating real-world workplace collaboration." },
    { id: 9, title: "Post-Course Support and Mentorship", description: "Receive ongoing guidance and support even after completing the course to help with job placement and continued learning." },
    { id: 10, title: "In-Depth Learning of REST APIs", description: "Master the creation and consumption of REST APIs using Java and Spring for building powerful backend services." },
    { id: 12, title: "Comprehensive Database Management Skills", description: "Learn how to design, optimize, and manage databases using both SQL and NoSQL technologies." },
  ];

  return (
    <div className="cards-features">
      <div className="row row-features">
        <div className="col col-features">
          <img src={Features_img1} alt="Features" />
        </div>
        <div className="col col-features">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card ${hovered === feature.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(feature.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
