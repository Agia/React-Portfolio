import React from "react";
import Project from "../Project";
import projects from "../../data/projects.json";
import "./style.css";


class Portfolio extends React.Component {
    state = {projects};

    render() {
        return (
            <div id="portfolio">
                <h2>Portfolio</h2>
                <p>A collection of things I've built so far:</p>
                <div className="project-list">
                {
                    this.state.projects.map(project => {
                        return (
                            <Project
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            skills={project.skills}
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