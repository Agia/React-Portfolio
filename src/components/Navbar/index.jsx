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
            to="/"
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
            to="skills"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="portfolio"
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
      </ul>

    </nav>
  );
};

export default Navbar;
