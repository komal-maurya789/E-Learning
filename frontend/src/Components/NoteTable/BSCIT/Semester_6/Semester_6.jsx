import React from "react";
import { FaDownload } from "react-icons/fa";
import "../Semester_1/Semester_1.css";

const notesData = [
    {
        name: "Software Quality Assurance",
        link: "#",
    },
    {
        name: "Security in Computing",
        link: "#",
    },
    {
        name: "Business Intelligence",
        link: "#",
    },
    {
        name: "Principles of Geographic Information Systems",
        link: "#",
    },
    {
        name: "Enterprise Networking",
        link: "#",
    },
    {
        name: "IT Service Management",
        link: "#",
    },
];

const Semester_6 = () => {
    return (
        <div className="    container">
            <h2>BScIT Semester 6 | Mumbai University</h2>
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

export default Semester_6;
