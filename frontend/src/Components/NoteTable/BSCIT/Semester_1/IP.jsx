import React from "react";
import { FaDownload } from "react-icons/fa";
import "../Semester_1/Semester_1.css";
import PracticalTable from "./IP_Practical_Table";

const notesData = [
  {
    name: "IP (Syllabus)",
    link: "/Notes/IP_Syllabus.pdf",
  },
  {
    name: "IP (Notes)",
    link: "/Notes/USIT101-Imperative-Programming-munotes.pdf",
  },
];

const IP = () => {
  return (
    <>
    <div className="container">
      <h2>Imperative Programming Notes</h2>
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
                {note.link !== "#" ? (
                  <a href={note.link} target="_blank" rel="noopener noreferrer">
                    <button className="view-btn">View</button>
                  </a>
                ) : (
                  <button className="view-btn disabled" disabled>View</button>
                )}
              </td>
              <td>
                {note.link !== "#" ? (
                  <a href={note.link} download>
                    <button className="download-btn">
                      <FaDownload />
                    </button>
                  </a>
                ) : (
                  <button className="download-btn disabled" disabled>
                    <FaDownload />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table><br/>
      <PracticalTable/>
    </div>

    
    </>
  );
};

export default IP;
