import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import logo from "../../assets/img/logos/logo-AA.png";


const Navbar = () => {

  const [navExpanded, setNavExpanded] = useState(false);

  const handleNavExpanded = () => {
    setNavExpanded(!navExpanded);
  }

  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="<AA>" className="logo-img" />
                    <span className="logo-name">Alyssa <span className="logo-surname">Argento</span></span>
                </Link>
            </div>

        <button  className="button button-menu"
                 onClick={handleNavExpanded}
                 >
                    <i className={navExpanded ? "fa fa-times" : "fa fa-bars"}
                 >
                 </i>
        </button>

        <div className={`nav-list  ${navExpanded && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/"
              onClick={() => setNavExpanded(false)}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/skills"
              onClick={() => setNavExpanded(false)}
              >Skills</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"
              onClick={() => setNavExpanded(false)}
              >Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/about"
              onClick={() => setNavExpanded(false)}
              >About</NavLink>
            </li>
            <li>
              <NavLink to="/contact"
              onClick={() => setNavExpanded(false)}
              >Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;