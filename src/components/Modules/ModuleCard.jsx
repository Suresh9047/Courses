import React, { useState } from 'react';
import "./Module.css";

const ModuleCard = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="module-card">
      <div className="module-card-header" onClick={toggleCollapse} aria-expanded={isOpen}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="module-card-body">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
