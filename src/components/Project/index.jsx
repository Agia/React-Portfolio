import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { SiGithubpages } from "react-icons/si";
import "./style.css";
// import img from "../../assets/img/projects/bootstrap-portfolio.png";

// const images = require.context("../../assets/img/projects", true);

const Project = (props) => {
    return (
        <div className="project-card" key={props.id}>
            <div className="card-flip">
                <div className="card-front">
                    <h3 className="project-title">{props.name}</h3>
                    <img src={props.image} alt={props.name} />
                    <ul className="skill-list">
                    {
                        props.skills.map((skill, index) => {
                            return (
                                <li key={index} className="skill-list-item">{skill}</li> 
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="card-back">
                    <p>{props.description}</p>

                    <ul className="project-links">
                        <li className="link-repo">
                            <a href={props.repo}>REPO</a>
                        </li>
                        <i className="fa fa-github icon-gh" aria-hidden="true"></i>
                        <li className="link-demo">
                            <a href={props.demo}>DEMO</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Project;