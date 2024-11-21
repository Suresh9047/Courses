import React from 'react';
import './JavaAbout.css'; // Ensure this file contains necessary styles
import dataAnalyticsImg from '../assets/images/dataanalytics2.avif'; // Image for Data Analytics

const DataAnalyticsAbout = () => {
  return (
    <div className="java-about-container " style={{marginTop:"60px"}}>
    
      <div className="java-about-header">
        <h1 className="java-about-title">Learn Data Analytics</h1>
        <p className="java-about-description">
          Explore the world of Data Analytics! Develop skills to work with data, build insights, and make informed decisions for business growth.
        </p>
      </div>

      <div className="row java-about-content">
      
        <div className="col-md-6 java-about-image">
          <img src={dataAnalyticsImg} alt="Data Analytics" className="about-img" />
        </div>

        {/* Bullet Points Section */}
        <div className="col-md-6 java-about-points">
          <h3>Key Highlights:</h3>
          <hr />
          <ul className="about-points-list">
            <li>Understand data structures, data wrangling, and cleaning techniques.</li>
            <li>Learn Python and libraries like Pandas, NumPy for data analysis.</li>
            <li>Build data visualizations with Matplotlib, Seaborn, and Power BI.</li>
            <li>Work with machine learning models to predict trends and outcomes.</li>
            <li>Analyze large datasets using SQL and NoSQL databases.</li>
            <li>Deploy data-driven decision-making for business optimization.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsAbout;
