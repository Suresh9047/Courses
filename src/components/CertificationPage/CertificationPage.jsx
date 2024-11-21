// CertificationPage.js
// import React, { useState } from 'react';
import CertificateCard from '../CertificateCard/CertificateCard'; // Import the CertificationCard component
import { Row, Col } from 'react-bootstrap';

const CertificationPage = () => {
  // Sample data for certifications
  const certifications = [
    {
      title: 'Java Full Stack Developer Certification',
      description: 'Completed the Java Full Stack Development course with hands-on experience.',
      certificateLink: 'https://example.com/certificates/java-fullstack-cert.pdf',
      certificateImage: 'https://example.com/certificates/java-fullstack-image.jpg', // Optional if using image
    },
    {
      title: 'Web Development Certification',
      description: 'Completed a course in Web Development, including JavaScript, React, and Node.js.',
      certificateLink: 'https://example.com/certificates/web-dev-cert.pdf',
      certificateImage: 'https://example.com/certificates/web-dev-image.jpg', // Optional if using image
    },
    // Add more certifications as needed
  ];

  
  return (
    <div className="certification-page">
      <h2>My Certifications</h2>
      <Row>
        {certifications.map((cert, index) => (
          <Col md={4} key={index}>
            <CertificateCard
              title={cert.title}
              description={cert.description}
              certificateLink={cert.certificateLink}
              certificateImage={cert.certificateImage} // Optional, if you want to display image
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CertificationPage;
