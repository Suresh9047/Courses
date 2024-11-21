import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JavaFullstackCard from '../JavaFullstackCard/JavaFullstackCard';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import './Home.css';

const DataAnalyticsHome = () => {
  const dataAnalyticsSyllabus = {
    pythonProgramming: [
      'Introduction to Python for Data Analysis',
      'Data Manipulation with Pandas',
      'Data Visualization with Matplotlib and Seaborn',
      'Statistical Analysis in Python',
      'Building Predictive Models with Scikit-learn',
    ],
    sql: [
      'SQL Basics and Database Concepts',
      'Data Extraction with SQL Queries',
      'Joins and Subqueries',
      'Data Transformation and Aggregations',
      'Advanced SQL Techniques (CTEs, Window Functions)',
    ],
    extraProgrammingSkills: [
      'R Programming Basics for Data Analysis',
      'Using Jupyter Notebooks for Python',
      'Introduction to Google Colab',
      'Data Analysis with NumPy',
      'Exploratory Data Analysis (EDA) Techniques',
    ],
    visualizationTools: [
      'Getting Started with Tableau',
      'Creating Dashboards and Stories in Tableau',
      'Data Modeling with Power BI',
      'Interactive Visualizations with Power BI',
      'Best Practices in Data Visualization',
      'Creating Story-Driven Visualizations',
    ],
    machineLearning: [
      'Introduction to Machine Learning Concepts',
      'Supervised Learning Techniques',
      'Unsupervised Learning and Clustering',
      'Model Evaluation and Hyperparameter Tuning',
      'Working with Real-world Machine Learning Projects',
    ],
    bigData: [
      'Overview of Big Data Ecosystem',
      'Hadoop Framework and HDFS',
      'Working with Apache Spark',
      'Big Data Processing with PySpark',
      'Hands-on with Big Data Tools',
    ],
    excel: [
      'Excel Basics for Data Analysis',
      'Using Pivot Tables for Summarizing Data',
      'Advanced Excel Functions for Analysis',
      'Data Cleaning and Preparation in Excel',
      'Visualization Techniques in Excel',
      'Excel Macros and Automation',
    ],
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component is mounted
  }, []);

  return (
    <Container>
      <h1 className="mt-5 text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000" style={{ textAlign: 'center', fontSize: '30px', fontWeight: '700px' }}>
        Data Analytics Course Syllabus
      </h1>

      {/* Programming Skills */}
      <h3 className="mt-4 headc" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="shaking-arrow" />
        Programming Skills
      </h3>
      <Row className="mt-4">
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Python for Data Analysis"
            syllabus={dataAnalyticsSyllabus.pythonProgramming}
            fileDownloadLink="/path/to/python-syllabus.pdf"
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="SQL for Data Analysis"
            syllabus={dataAnalyticsSyllabus.sql}
            fileDownloadLink="/path/to/sql-syllabus.pdf"
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Additional Programming Skills"
            syllabus={dataAnalyticsSyllabus.extraProgrammingSkills}
            fileDownloadLink="/path/to/extra-programming-syllabus.pdf"
          />
        </Col>
      </Row>

      {/* Visualization Tools */}
      <h3 className="mt-4 headc" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="shaking-arrow" />
        Visualization Tools
      </h3>
      <Row className="mt-4">
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Tableau and Power BI"
            syllabus={dataAnalyticsSyllabus.visualizationTools}
            fileDownloadLink="/path/to/visualization-syllabus.pdf"
          />
        </Col>
      </Row>

      {/* Advanced Topics */}
      <h3 className="mt-4 headc" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="shaking-arrow" />
        Advanced Topics
      </h3>
      <Row className="mt-4">
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Machine Learning for Data Analysis"
            syllabus={dataAnalyticsSyllabus.machineLearning}
            fileDownloadLink="/path/to/machine-learning-syllabus.pdf"
          />
        </Col>
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Big Data Analytics"
            syllabus={dataAnalyticsSyllabus.bigData}
            fileDownloadLink="/path/to/big-data-syllabus.pdf"
          />
        </Col>
      </Row>

      {/* Excel for Analysis */}
      <h3 className="mt-4 headc" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
        <FontAwesomeIcon icon={faArrowRight} size="3x" className="shaking-arrow" />
        Excel for Analysis
      </h3>
      <Row className="mt-4">
        <Col md={4} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="6000">
          <JavaFullstackCard
            title="Advanced Excel Techniques"
            syllabus={dataAnalyticsSyllabus.excel}
            fileDownloadLink="/path/to/excel-syllabus.pdf"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DataAnalyticsHome;
