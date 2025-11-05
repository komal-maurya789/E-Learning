import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Semester_1.css";

const notesData = [
  {
    name: "CS Practical Syllabus",
    link: "/Notes/.pdf",
  },
  {
    name: "CS Manual",
    link: "/Notes/.pdf",
  },
];

const CS_Practical_Table = () => {
  return (
    <>
    <div>
      <h2>Communication Skills Practicals</h2>
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

export default CS_Practical_Table;
