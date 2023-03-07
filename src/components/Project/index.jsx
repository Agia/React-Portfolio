// Imports
import React from "react";
import "./style.css";

// Renders project component using props from Portfolio parent
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
                    <p className="project-desc" >{props.description}</p>

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