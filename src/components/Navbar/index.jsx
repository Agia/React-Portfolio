import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        
        <Link to="/" className="logo-link">
          <img src="../assets/img/logo.png" alt="<AA>" className="logo-img" />
        </Link>
      </div>

      <ul className="nav-list">
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
