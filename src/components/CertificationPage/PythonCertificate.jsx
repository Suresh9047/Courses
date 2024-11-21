import React, { useEffect } from 'react';
import cert from '../assets/images/certificate1.webp';
import './Certificate.css';
import { GrCertificate } from "react-icons/gr";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaAward, FaCheckCircle } from "react-icons/fa"; // Additional icons for benefits
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const PythonCertificate = () => {
  useEffect(() => {
    AOS.init({
      duration: 6000, // Duration of animation
      easing: 'ease-out-cubic', // Easing function
      once: true, // Animation occurs once
    });
  }, []);

  return (
    <div className="certificate-page container my-5">
      {/* Page Header */}
      <div className="text-center mb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <h1>
          <GrCertificate className="certificates" /> Certificate of Achievement
        </h1>
        <p className="lead text-muted">
          Unlock new career opportunities with our Python Fullstack Development Certificate.
        </p>
      </div>

      {/* Certificate Image and Benefits Section */}
      <div className="row align-items-center mb-5">
        {/* Left Column: Certificate Image */}
        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <div className="card shadow-sm border-0">
            <img src={cert} alt="Certificate" className="card-img-top rounded" />
            <div className="card-body text-center">
              <h5 className="card-title">Certified Python Fullstack Developer</h5>
              <p className="card-text text-muted">
                Showcase your skills with an industry-recognized certificate.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Benefits List */}
        <div className="col-lg-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <h3 className="mb-4 text-primary why">
            <FaAward /> Why This Certificate Matters
          </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
              <FaCheckCircle className="text-success me-2" /> Recognition for completing the Python Fullstack Development course.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <MdOutlineStarBorderPurple500 className="text-warning me-2" /> Enhance your resume with an industry-recognized certification.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FaCheckCircle className="text-success me-2" /> Demonstrate your expertise in Python back-end and front-end integration.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <MdOutlineStarBorderPurple500 className="text-warning me-2" /> Opens up opportunities for better career prospects in Python development.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PythonCertificate;
