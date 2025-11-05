import React from "react";
import "./CardGrid.css";

const CardGrid = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="icon">🏠</div>
        <h3>College Projects</h3>
        <p>If you want IT projects in programming language like PHP, Python, Java etc.</p>
      </div>
      <div className="card active">
        <div className="icon">🌐</div>
        <h3>Online Notes</h3>
        <p>You will get all Notes for BSC-IT, BSC-CS, MCA, MSC-IT & MSC-CS etc.</p>
      </div>
      <div className="card">
        <div className="icon">📖</div>
        <h3>Reference Book</h3>
        <p>You will get all Reference Books for BSC-IT, BSC-CS, MCA, MSC-IT & MSC-CS etc.</p>
      </div>
      <div className="card">
        <div className="icon">🎓</div>
        <h3>MU Question Papers</h3>
        <p>You will get all MU Question Papers for BSC-IT, BSC-CS, MCA, MSC-IT & MSC-CS etc.</p>
      </div>
    </div>
  );
};

export default CardGrid;
