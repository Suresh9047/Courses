// CertificationCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CertificateCard.css'


const CertificateCard = ({ title, description, certificateLink, certificateImage }) => {
  return (
    <Card className="certification-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        {/* Display image if available */}
        {certificateImage && (
          <img src={certificateImage} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }} />
        )}

        {/* Link to certificate */}
        <a href={certificateLink} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">View Certificate</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default CertificateCard;
