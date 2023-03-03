import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio';
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
      <Router>
              <Navbar />
              <Routes basename='react-porfolio'>
                  <Route path='/' element={<Home />} />
                  <Route path='/react-porfolio/skills' element={<Skills />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/react-porfolio/testimonials' element={<Testimonials />} />
                  <Route path='/react-porfolio/contact' element={<Contact />} />
              </Routes>
      </Router>
  );
}

export default App;