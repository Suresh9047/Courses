import React, { useState } from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  const [hovered, setHovered] = useState(null);

  const features = [
    { id: 1, title: "Comprehensive Coverage of Java Fullstack Technologies", description: "Learn all aspects of Java Fullstack development including frontend, backend, databases, and deployment." },
    { id: 2, title: "Hands-on Projects for Real-World Experience", description: "Gain practical knowledge with real-world projects to prepare for industry challenges." },
    { id: 3, title: "Learn Both Front-End and Back-End Development", description: "Master both the frontend (React) and backend (Java/Spring) to build full-stack applications." },
    { id: 4, title: "Instructor-Led, Step-by-Step Tutorials", description: "Follow along with expert instructors who break down complex concepts into simple, actionable steps." },
    { id: 5, title: "Support for Career Advancement and Interview Preparation", description: "Prepare for the tech job market with targeted interview questions and career guidance." }
  ];

  return (
    <div className="key-features-section">
      <h2>Key Features</h2>
      <div className="features-container">
        {features.map(feature => (
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
  );
};

export default KeyFeatures;
