import React from "react";
import { FaDownload } from "react-icons/fa";
import "../Semester_1/Semester_1.css";

const notesData = [
  {
    name: "DM Practical Syllabus",
    link: "/Notes/IP_Practical_Syllabus.pdf",
  },
  {
    name: "DM Manual",
    link: "/Notes/IP_Manual.pdf",
  },
];

const DM_Practical_Table = () => {
  return (
    <>
    <div>
      <h2>Discrete Mathematics Practicals</h2>
      <table className="notes-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Practical</th>
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
      </table>
    </div>

    
    </>
  );
};

export default DM_Practical_Table;
