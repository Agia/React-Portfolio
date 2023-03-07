import React from "react";
import Project from "../Project";
// Imports
import projects from "../../data/projects.json";
import "./style.css";

// Class constructor for portfolio section
class Portfolio extends React.Component {
    // Stores data from projects.json
    state = {projects};

    // Renders the portfolio section
    render() {
        return (
            <div id="portfolio">
                <h2>Portfolio</h2>
                <p>A collection of things I've built, so far, from oldest to most recent:</p>
                <p className="text-info">Hover (or poke) on a project for more information, including links</p>
                <div className="project-list">
                {
                    this.state.projects.map(project => {
                        return (
                            <Project
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            skills={project.skills}
                            repo={project.repo}
                            demo={project.demo}
                            key={project.id}
                            />
                        )
                    })
                }
                </div>
            </div>
        )
    }
}


export default Portfolio;