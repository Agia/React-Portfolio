import React from "react";
import img from "../../assets/img/other/laptop.png";
import "./style.css";


const Home = () => {
    return (
        <div id="home">
            <div className="intro">
              <h1>Hello! I'm <span className="fname">Alyssa</span> <span className="lname">Argento</span></h1>
              <p>Web Developer. Lifelong Learner.</p>
            </div>
            <img className="hero-img" src={img} alt="Illustration of a laptop and coffee cup, from above." />
        </div>
    )
}

export default Home;