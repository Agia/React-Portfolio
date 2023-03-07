import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter} from 'react-router-dom';
import Home from './components/Home';
import Header from "./components/Header";
import Portfolio from './components/Portfolio';
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer"

function App() {
  return (
      <HashRouter>
              <Header />
              <Routes basename='React-Portfolio'>
                  <Route path='/React-Portfolio/' element={<Home />} />
                  <Route path='/React-Portfolio/skills' element={<Skills />} />
                  <Route path='/React-Portfolio/portfolio' element={<Portfolio />} />
                  <Route path='/React-Portfolio/about' element={<About />} />
                  <Route path='/React-Portfolio/contact' element={<Contact />} />
              </Routes>
              <Footer />
      </HashRouter>
  );
}

export default App;