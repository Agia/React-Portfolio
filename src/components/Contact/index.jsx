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
                    <ul>
                        <li>
                            <a href="https://github.com/Agia">Agia</a>
                            <i><FaGithub /></i>
                        </li>
                        <li>
                            <a href="https://linkedin.com/alyssaargento">LinkedIn</a>
                            <i><FaLinkedin /></i>
                        </li>
                        <li>
                            <a href="mailto:agiaa@me.com">agiaa at me.com</a>
                            <i><FaEnvelope /></i>
                        </li>
                    </ul>
                </div>

                <Form />

            </div>
        </div>
    );
}

export default Contact;