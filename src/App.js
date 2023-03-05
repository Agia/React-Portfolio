import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from './components/Portfolio';
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
      <Router>
              <Header />
              <Routes basename='React-Portfolio'>
                  <Route path='/React-Portfolio/' element={<Home />} />
                  <Route path='/React-Portfolio/skills' element={<Skills />} />
                  <Route path='/React-Portfolio/portfolio' element={<Portfolio />} />
                  <Route path='/React-Portfolio/testimonials' element={<Testimonials />} />
                  <Route path='/React-Portfolio/contact' element={<Contact />} />
              </Routes>
      </Router>
  );
}

export default App;