import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar";
import Home from "../Home";
import Portfolio from "../Portfolio";
import Testimonials from "../Testimonials";
import Skills from "../Skills";
import Contact from "../Contact";

const Header = () => {
    return (
        <Router>
            <header>
                <Navbar />
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="testimonials" element={<Testimonials />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </header>
        </Router>
    )
}

export default Header;