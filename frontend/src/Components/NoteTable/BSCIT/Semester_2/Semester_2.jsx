import React from "react";
import { FaDownload } from "react-icons/fa";
import "../Semester_1/Semester_1.css";

const notesData = [
  {
    name: "Object Oriented Programming",
    link: "#",
  },
  {
    name: "Microprocessor Architecture",
    link: "#",
  },
  {
    name: "Web Programming",
    link: "#",
  },
  {
    name: "Numerical and Statistical Methods",
    link: "#",
  },
  {
    name: "Green Computing",
    link: "#",
  },
];

const Semester_2 = () => {
  return (
    <div className="container">
      <h2>BScIT Semester 2 | Mumbai University</h2>
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

export default Semester_2;
