// Imports
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import './style.css';

// Renders the footer component
const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <p>Created 2023 by Alyssa Argento</p>
            </div>
            <div className="social-icons">
                <a href="mailto:agiaa@me.com"><FaEnvelope/></a>
                <a href="https://github.com/Agia"><i><FaGithub /></i></a>
                <a href="https://linkedin.com/in/alyssaargento"><i><FaLinkedin /></i></a>
            </div>

        </footer>
    )
}

export default Footer;