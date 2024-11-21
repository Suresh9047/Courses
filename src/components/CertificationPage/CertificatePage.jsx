// import React from 'react';
// import cert from '../assets/images/certificate1.webp';
// import './Certificate.css';
// import { GrCertificate } from "react-icons/gr";
// import { MdOutlineStarBorderPurple500 } from "react-icons/md";
// import { LiaCertificateSolid } from "react-icons/lia";
// import certbg from '../assets/images/certbg.avif';

// const CertificatePage = () => {
//   return (
//     <div className="certificate-page container my-5">
//       <h1 className="text-center mb-4">
//         <GrCertificate className="certificates" />
//         Certificate
//       </h1>

//       <div className="row align-items-center">
//         {/* Column for Certificate Image */}
//         <div className="col-md-6 text-center">
//           <img src={cert} alt="Certificate" className="img-fluid rounded shadow" />
//         </div>

//         {/* Column for Benefits with Background */}
//         <div className="col-md-6 colcert" >
//           <h4 className="mt-4">
//             <LiaCertificateSolid className="cer" /> Benefits of the Certificate:
//           </h4>
//           <ul className="list-group ulgroup">
//             <li className="list-group-item">
//               <MdOutlineStarBorderPurple500 className="staricons" /> Recognition for completing the Java Fullstack Development course.
//             </li>
//             <li className="list-group-item">
//               <MdOutlineStarBorderPurple500 className="staricons" /> Enhance your resume with an industry-recognized certification.
//             </li>
//             <li className="list-group-item">
//               <MdOutlineStarBorderPurple500 className="staricons" /> Demonstrate your expertise in full-stack development.
//             </li>
//             <li className="list-group-item">
//               <MdOutlineStarBorderPurple500 className="staricons" /> Opens up opportunities for better career prospects.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificatePage;

import React, { useEffect } from 'react';
import cert from '../assets/images/certificate1.webp';
import './Certificate.css';
import { GrCertificate } from "react-icons/gr";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaAward, FaCheckCircle } from "react-icons/fa"; // Additional icons for benefits
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const CertificatePage = () => {
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
          Unlock new career opportunities with our Java Fullstack Development Certificate.
        </p>
      </div>

      {/* Certificate Image and Benefits Section */}
      <div className="row align-items-center mb-5">
        {/* Left Column: Certificate Image */}
        <div className="col-lg-6 mb-4 mb-lg-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <div className="card shadow-sm border-0">
            <img src={cert} alt="Certificate" className="card-img-top rounded" />
            <div className="card-body text-center">
              <h5 className="card-title">Certified Java Fullstack Developer</h5>
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
              <FaCheckCircle className="text-success me-2" /> Recognition for completing the Java Fullstack Development course.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <MdOutlineStarBorderPurple500 className="text-warning me-2" /> Enhance your resume with an industry-recognized certification.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FaCheckCircle className="text-success me-2" /> Demonstrate your expertise in full-stack development.
            </li>
            <li className="list-group-item d-flex align-items-center">
              <MdOutlineStarBorderPurple500 className="text-warning me-2" /> Opens up opportunities for better career prospects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
