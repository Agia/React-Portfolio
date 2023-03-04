import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import logo from "../../assets/img/logos/logo-AA.png";


const Navbar = () => {

    const [navExpanded, setNavExpanded] = useState(false);

  const handleNavExpanded = () => {
    setNavExpanded(!navExpanded);
    if (this.target.className === "button button-menu fas fa-bars") {
        this.target.className = "button button-menu fas fa-cross";
    } else {
        this.target.className = "button button-menu fas fa-bars";
    }
  }

  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="<AA>" className="logo-img" />
                    <span className="logo-name">Alyssa Argento</span>
                </Link>
            </div>

        <button className="button button-menu fas fa-bars"
                 onClick={handleNavExpanded}>
            <span className="button-label">Menu</span>
        </button>

        <div className={`nav-list  ${navExpanded && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/React-Portfolio/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/React-Portfolio/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/React-Portfolio/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="React-Portfolio/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="React-Portfolio/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;