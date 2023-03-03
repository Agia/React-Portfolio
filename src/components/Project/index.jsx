import React from "react";
import "./style.css";


const Project = (props) => {
    return (
        <div className="projectCard" key={props.id}>
            <div className="cardFlip">
                <div className="cardFront">
                    <h3>{props.name}</h3>
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="cardBack">
                    <p>{props.description}</p>
                    <ul>
                    {
                        props.skills.map((skill, index) => {
                            return (
                                <li key={index} className="skill-list-item">{skill}</li> 
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project;