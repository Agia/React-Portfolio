import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import logo from "../../assets/img/logos/logo-AA.png";


const Navbar = () => {

    const [navExpanded, setNavExpanded] = useState(false);

  return (
    <nav>
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="<AA>" className="logo-img" />
          <span className="logo-name">Alyssa Argento</span>
        </Link>
      </div>

      <button className="button button-menu"
                onClick={() => {
                    setNavExpanded(!navExpanded);
                }}>
        Menu
      </button>

      <ul className={navExpanded ? "nav-list expanded" : "nav-list"}
      >
        <li className="nav-item">
          <NavLink
            to="/React-Portfolio/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/React-Portfolio/skills"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/React-Portfolio/portfolio"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="testimonials"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Testimonials
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contact"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
