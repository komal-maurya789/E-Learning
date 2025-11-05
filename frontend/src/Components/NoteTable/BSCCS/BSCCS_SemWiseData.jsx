import React from "react";
import { Link } from "react-router-dom";
import "./BSCCS_SemWiseData.css"

const semesters = [
    {
        id: 1,
        name: "Semester 1",
        link: "../Semester_1",
    },
    {
        id: 2,
        name: "Semester 2",
        link: "../Semester_2",
    },
    {
        id: 3,
        name: "Semester 3",
        link: "../Semester_3",
    },
    {
        id: 4,
        name: "Semester 4",
        link: "../Semester_4",
    },
    {
        id: 5,
        name: "Semester 5",
        link: "../Semester_5",
    },
    {
        id: 6,
        name: "Semester 6",
        link: "../Semester_6",
    },
];

const BSCCS_semesters = () => {
    return (
        <div className="container">
            <h2 className="title">BSC-CS Semester</h2>
            <table className="semester-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Semester</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {semesters.map((semester) => (
                        <tr key={semester.id}>
                            <td>{semester.id}</td>
                            <td>{semester.name}</td>
                            <td>
                                {semester.link && ( // Only show button if link exists
                                    <Link to={semester.link}>
                                        <button className="action-btn">Click Here</button>
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


export default BSCCS_semesters;
