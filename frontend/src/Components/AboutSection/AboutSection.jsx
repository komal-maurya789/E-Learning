import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="./images/About_us1.jpg" alt="Books Stack" />
      </div>
      <div className="about-content">
        <h4 className="about-title">ABOUT US</h4>
        <h2 className="about-heading">Welcome to EduLearn</h2>
        <p className="about-description">
        EduLearn is a free educational website for MCA, BSC-IT & CS, MSC-IT & CS, BCA students which provides the latest study materials based on the syllabus of MU.
        </p>
        <p className="about-description">
          You Will Get Mumbai University Notes, Question Papers, Reference Books, Practicals Code & Manual for MCA, BSC-IT, BSC-CS, MSC-IT, MSC-CS etc.
        </p>
        <div className="about-links">
          <div className="about-links-left">
            <a href="/SemWiseData">➜ MU Notes</a>
            <a href="#">➜ Practical Manual</a>
            <a href="#">➜ Certification Course</a>
          </div>
          <div className="about-links-right">
            <a href="#">➜ Reference Books</a>
            <a href="#">➜ Practical Code</a>
            <a href="#">➜ MU Result</a>
          </div>
        </div>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default AboutSection;
