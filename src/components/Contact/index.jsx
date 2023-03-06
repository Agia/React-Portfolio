import React from "react";
import Form from "../Form/Form.jsx";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./style.css";


const Contact = () => {
    return (
        <div id="contact">
            <h2>Contact</h2>
            
            <p className="contact-desc">Here you can find links to my GitHub and LinkedIn profiles, as well as my email address. You can also use the fancy contact form below, should you feel so inlcined!</p>

            <div className="contact-content">

                <div className="contact-links">
                    <ul className="link-list">
                        <li>
                            <i><FaGithub /></i>
                            <a href="https://github.com/Agia">GitHub</a>
                        </li>
                        <li>
                            <i><FaLinkedin /></i>
                            <a href="https://linkedin.com/alyssaargento">LinkedIn</a>
                        </li>
                        <li>
                            <i><FaEnvelope /></i>
                            <a href="mailto:agiaa@me.com">Email</a>
                        </li>
                    </ul>
                </div>

                <Form />

            </div>
        </div>
    );
}

export default Contact;