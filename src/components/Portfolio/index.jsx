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
                <p>Below is a collection of things I've built so far.</p>
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
        )
    }
}


export default Portfolio;