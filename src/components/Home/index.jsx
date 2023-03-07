// Imports
import React from "react";
import img from "../../assets/img/other/laptop.png";
// import avatar from "../../assets/img/other/avatar.png";
import "./style.css";

// Render home section
const Home = () => {
    return (
        <div id="home">
            <div className="intro">
                {/* <img className="avatar" src={avatar} alt="Memoji avatar smiling"></img> */}
                <h1>Hello! I'm <span className="fname">Alyssa</span> <span className="lname">Argento</span></h1>
                <p>Web Developer. Lifelong Learner.</p>
                <p className="welcome">Welcome to my <span className="dark">portfolio</span> website 👋 </p>
            </div>
            <img className="hero-img" src={img} alt="Illustration of a laptop and coffee cup, from above." />
        </div>
    )
}

export default Home;