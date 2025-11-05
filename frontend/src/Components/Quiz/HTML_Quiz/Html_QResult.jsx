import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './Html_QResult.css';
const certificateTemplate = '/images/Gold and White Elegant Appreciation Certificate.png';


const Html_QResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { totalQuestions, correctAnswers, incorrectAnswers, timeLeft } = location.state || {};
  const score = correctAnswers;

  const [details, setDetails] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toLocaleDateString();

  const handleDownload = () => {
    const tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-9999px";
    tempDiv.style.width = "800px";
    tempDiv.style.height = "565px";
    tempDiv.style.fontFamily = "Arial";
    tempDiv.style.position = "relative";

    const bg = document.createElement("img");
    bg.src = certificateTemplate;
    bg.style.width = "100%";
    bg.style.height = "100%";
    tempDiv.appendChild(bg);

    const nameDiv = document.createElement("div");
    nameDiv.innerText = details.name;
    Object.assign(nameDiv.style, {
      position: "absolute",
      top: "250px",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#643f17",
    });
    tempDiv.appendChild(nameDiv);

    const dateDiv = document.createElement("div");
    dateDiv.innerText = today;
    Object.assign(dateDiv.style, {
      position: "absolute",
      bottom: "130px",
      left: "140px",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#000",
    });
    tempDiv.appendChild(dateDiv);

    const scoreDiv = document.createElement("div");
    scoreDiv.innerText = `${score}/10`;
    Object.assign(scoreDiv.style, {
      position: "absolute",
      bottom: "130px",
      right: "160px",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#000",
    });
    tempDiv.appendChild(scoreDiv);

    document.body.appendChild(tempDiv);

    html2canvas(tempDiv).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "pt", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 840, 595);
      pdf.save(`${details.name}-Certificate.pdf`);
      document.body.removeChild(tempDiv);
    });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Fill Details to View Your Test Results</h2>
          <input name="name" placeholder="Enter your full name" onChange={handleChange} style={styles.input} required />
          <input name="email" placeholder="Enter your email" onChange={handleChange} style={styles.input} required />
          <input name="phone" placeholder="Enter your phone number" onChange={handleChange} style={styles.input} required />
          <button type="submit" style={styles.button}>View Results</button>
        </form>
      ) : (
        <section className="result-wrapper mt-5 mb-5">
          <div className="result-container">
            <h2>Hi {details.name}, your test score is {score}/10</h2>
            <p><strong>Total Questions:</strong> {totalQuestions}</p>
            <p><strong>Correct Answers:</strong> {correctAnswers}</p>
            <p><strong>Incorrect Answers:</strong> {incorrectAnswers}</p>
            <p><strong>Time Left:</strong> {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
            <p><strong>Date of Completion:</strong> {today}</p>

            <button onClick={handleDownload} style={styles.button}>Download Certificate</button>
            <button onClick={() => navigate("/HTML_TutorialDetail")} style={styles.secondaryButton}>Back to Learning</button>
            <button onClick={() => navigate("/HTML_Quiz")} style={styles.secondaryButton}>Retake Quiz</button>
          </div>
        </section>
      )}
    </div>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '10px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1a3ff6',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem'
  },
  secondaryButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#ccc',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '0.5rem'
  }
};

export default Html_QResult;
