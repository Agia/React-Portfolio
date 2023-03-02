import React from "react";
import { NavLink} from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
            <ul className="nav nav-tabs">

                <li className="nav-item">
                    <NavLink
                        to="home"
                        end
                        className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    />
                    Home
                </li>

                <li className="navItem">
                    <NavLink
                        to="skills"
                        className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    />
                    Skills
                </li>

                <li className="navItem">
                    <NavLink
                        to="portfolio"
                        className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    />
                    Portfolio
                </li>

                <li className="navItem">
                    <NavLink
                        to="testimonials"
                        className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    />
                    Testimonials
                </li>

                <li className="navItem">
                    <NavLink
                        to="contact"
                        className={({isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                    />
                    Contact
                </li>

            </ul>
    );
}

export default Navbar;