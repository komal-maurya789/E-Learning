import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Include this CSS for styling
const Header = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState('');
  const [isDropdownOpen2, setDropdownOpen2] = useState('');
  return (
    <div>
      {/* First Header Section open */}
      <header className="top-header">
        <div className="logo">
          <Link to="/"><img class="w-auto h-12" src="./images/logo.png" alt="" /></Link>
        </div>
        <nav className="nav-menu">
          <Link to="/Header_Quiz" className="nav-link" style={{ color: '#2c3e50', fontSize: '18px' }}>Quiz</Link>
          <Link to="/AboutSection" className="nav-link" style={{ color: '#2c3e50', fontSize: '18px' }}>About</Link>
          <Link to="/Contact" className="nav-link" style={{ color: '#2c3e50', fontSize: '18px' }}>Contact</Link>
          <Link to="/Sign_up" className="btn">Sign Up</Link>
          <Link to="/Login" className="btn">Login</Link>
        </nav>
      </header>
      {/* First Header Section Closed */}
      {/* Second Header Section open*/}
      <header className="bottom-header">
        <nav className="nav-menu">
          <Link to="HTML_TutorialDetail">HTML</Link>
          <Link to="CSS_TutorialDetail">CSS</Link>
          <Link to="JS_TutorialDetail">JAVASCRIPT</Link>
          <Link to="JAVA_TutorialDetail">JAVA</Link>
          <Link to="PHP_TutorialDetail">PHP</Link>
          <Link to="RJS_TutorialDetail">REACT JS</Link>
          {/* BSCIT Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen1(true)}
            onMouseLeave={() => setDropdownOpen1(false)}>
            <button className="dropdown-toggle">BSCIT</button>
            {isDropdownOpen1 && (
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/SemWiseData">BSC Information Technology</Link>
              </div>)}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen2(true)}
            onMouseLeave={() => setDropdownOpen2(false)}>
            <button className="dropdown-toggle">BSCCS</button>
            {isDropdownOpen2 && (
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/BSCCS_SemWiseData">BSC Computer Science</Link>
              </div>)}
          </div>
        </nav>
      </header>
      {/* Second Header Section closed */}
    </div>
  );
};
export default Header;
