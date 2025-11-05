import React from "react";
import "./Semester_1.css";
import { Link } from "react-router-dom";

const notesData = [
  {
    name: "Imperative Programming",
    link: "../IP",
  },
  {
    name: "Digital Electronics",
    link: "../DE",
  },
  {
    name: "Operating Systems",
    link: "../OS",
  },
  {
    name: "Discrete Mathematics",
    link: "../DM",
  },
  {
    name: "Communication Skills",
    link: "../CS",
  },
];

const Semester_1 = () => {
  return (
    <div className="container">
      <h2>BScIT Semester 1 | Mumbai University</h2>
      <table className="notes-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {notesData.map((note, index) => (
            <tr key={index}>
              <td>{note.name}</td>

              <td>
                {note.link && (
                  <Link to={note.link}>
                <button className="view-btn">Click Here</button>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Semester_1;
