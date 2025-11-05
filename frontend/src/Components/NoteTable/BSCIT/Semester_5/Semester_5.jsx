import React from "react";
import { FaDownload } from "react-icons/fa";
import "../Semester_1/Semester_1.css";

const notesData = [
  {
    name: "Software Project Management",
    link: "#",
  },
  {
    name: "Internet of Things",
    link: "#",
  },
  {
    name: "Advanced Web Programming",
    link: "#",
  },
  {
    name: "Artificial Intelligence",
    link: "#",
  },
  {
    name: "Enterprise Java",
    link: "#",
  },
];

const Semester_5 = () => {
  return (
    <div className="container">
      <h2>BScIT Semester 5 | Mumbai University</h2>
      <table className="notes-table">
        <thead>
          <tr>
          <th>Subject</th>
          <th>Notes</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {notesData.map((note, index) => (
            <tr key={index}>
              <td>{note.name}</td>
              <td>
                <button className="view-btn">View</button>
              </td>
              <td>
                <a href="" download>
                  <button className="download-btn">
                    <FaDownload />
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Semester_5;
