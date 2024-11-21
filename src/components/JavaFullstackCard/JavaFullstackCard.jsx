import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './JavaFullstackCard.css'; // Ensure the CSS path is correct
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Player } from "@lottiefiles/react-lottie-player";
import tick from '../assets/videos/animation.json';


const JavaFullstackCard = ({ title, syllabus, fileDownloadLink }) => {
  const [showSyllabus, setShowSyllabus] = useState(false);

  const toggleSyllabus = () => {
    setShowSyllabus(!showSyllabus);
  };

  return (
    <Card className="java-card">
      <Card.Body className="java-cards">
        <Card.Title>{title}</Card.Title>

        <Button variant={showSyllabus ? "danger" : "primary"} onClick={toggleSyllabus}>
          {showSyllabus ? 'Hide Syllabus' : 'Show Syllabus'}
        </Button>

        {/* Display Syllabus */}
        {showSyllabus && (
          <div className="syllabus-content">
            {/* FontAwesome Icon */}
           

            {/* Lottie Animation */}
            <Player
              autoplay
              loop
              src={tick}
              style={{ height: "150px", width: "150px" }}
            />

            <h5>Topics:</h5>
            <hr />
            <ul>
              {syllabus.map((topic, index) => (
                <li className="listsmodules" key={index}>
                  <MdOutlineStarBorderPurple500
                    style={{ marginRight: '5px', color: "black", fontSize: "25px" }}
                  />
                  {topic}
                </li>
              ))}
            </ul>
            <a href={fileDownloadLink} download>
              <Button variant="success">Download Syllabus</Button>
            </a>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default JavaFullstackCard;
