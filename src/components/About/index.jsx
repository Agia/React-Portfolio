import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import "./style.css"


const About = () => {
    return (
        <div className="about">

            <h2>About</h2>

            <p className="bold">Hi! I'm Alyssa.</p>

            <p className="text-info">(Obligitory web dev greeting =))</p>

            <p>I'm relatively new to web development - just coming to the end of a 16-week Front End Web Development Bootcamp, with no experience prior to that. With that in mind, my <Link to="/React-Portfolio/portfolio"><span className="link-inline">portfolio</span></Link> is currently made up of projects based off challenges (weekly assignments), from that course, that were all to be completed within a ~4-5 days, and were graded based on explicit criteria. As such, I have no client testimonials to share, but I thought I would share some feedback snippets from TA's and Graders from the course, related to the challenges in the portfolio section.</p>

            <div className="testimonial-list">
                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">You absolutely nailed this assignment! (including) everything needed for a perfect repo...Awesome job with this assignment."</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">.Excellent work... You completed all required functionality. Your code looks great and functions well..."</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">...excellent work. BOTH your repo and application were solid and need no improvements..."</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">...The design looks like it was done by a professional... You definitely have an eye for color pallettes..."</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">...excellent work here...Keep up the outstanding work."</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">Great job...(your) code is organised and well commented, making it easier for other developers to find and understand your code..."</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">Excellent work on the portfolio! I've given this 100 as this portfolio looks fantastic... Great Job!"</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">...great work... you've included everything from the acceptance criteria, your generated README is very nice!...your repo is also solid and includes everything a good repo should..."</span>
                    </quote>
                </div>

                <div className="testimonial">
                    <quote>
                        <FaQuoteLeft className="quote-l" />
                        <span className="quote-text">...All the tests passed which is great as it shows you understand how to write test driven code... The HTML generated looks just like the screenshot in the README. Overall you did a phenomenal job."</span>
                    </quote>
                </div>

            </div>

            <p>Despite the short amount of time I have had in web development, I feel that I've finally found the career that was made for me. In no other profession have I ever found this incredible, stimulating mix of logic, specificity, problem-solving, design and creativity, that is inherent in web development. It absolutely feels like the career I was meant to do.</p>

            <p>If you'd like to reach out for any reason, you can find links and details in the <Link to="/React-Portfolio/contact"><span className="link-inline">contact</span></Link> section. If you'd like to view / download a PDF of my resume / CV, you'll find a handy link below for just that purpose 👇 .</p>

            <div className="resume">
                <button className="button-resume">Resume</button>   
            </div>

        </div>
    );
}

export default About;