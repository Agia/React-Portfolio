import React from "react";
import "./style.css";

const Form = () => {
    return(
            <form id="contact-form">
                <div className="name-section">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="name" tabIndex="1" placeholder="Enter your name" required />
                </div>
                <div className="email-section">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="email" placeholder="Enter your email" tabIndex="3" required />
                </div>
                <div className="msg-section">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" className="message" placeholder="Put your thoughts down..." required></textarea>
                </div>
                <button type="submit" className="button button-submit">Send</button>
            </form>
    )
}

export default Form;