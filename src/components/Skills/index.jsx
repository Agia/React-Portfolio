import React from "react";
import { FaHtml5, FaGitSquare, FaGithub, FaBootstrap, FaNodeJs, FaReact, FaNpm} from "react-icons/fa";
import { SiCsswizardry, SiJavascript, SiJest, SiCreatereactapp, SiTailwindcss, SiTypescript, SiRemix } from "react-icons/si";
import { VscDebugConsole } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import "./style.css";
import skills from "../../data/skills.json";

const icons = [FaHtml5, SiCsswizardry, FaGitSquare, FaGithub, SiJavascript, FaBootstrap, VscDebugConsole, TbApi, SiJest, FaNodeJs, FaNpm, FaReact, SiCreatereactapp, ];


class Skills extends React.Component {
    state = {skills};

    render() {
        return(
            <div id="skills">
                <h2>Skills</h2>
                <h3>Built With</h3>
                <p>Below is a non-exhaustive list of technologies, frameworks, libraries and methodologies I have <span className="highlight">built and completed</span> projects with:</p>
                <div className="skills-list">
                {
                    this.state.skills.map(skill => {
                        const Icon = icons[skill.id];
                        return (
                            <div key={skill.id}
                                className="skill">
                                <Icon />
                                <p>{skill.name}</p>
                            </div>
                        )
                    })
                }
                </div>

                {/* <p>I also have experience working with the following:</p>
                <div className="skill-list-text">
                    <ul>
                        <li>Test-driven Development</li>
                        <li>Behavior-driven Development</li>
                        <li>UX Design</li>
                        <li>DOM</li>
                        <li>AJAX</li>
                        <li>JSON</li>
                        <li>jQuery</li>
                        <li>Agile Development</li>
                        <li>Object-Oriented Programming</li>
                        <li>Refactoring</li>
                        <li>Figma</li>
                        <li></li>
                    </ul>
                </div> */}

                <h3>Learning</h3>
                <p>In addition focusing primarily on the <span className="highlight">continued development</span> of all of the above, here is a collection of technologies, frameworks, libraries and / or methodologies I am currently actively learning more about, and in some instances, creating small projects with, to continue to further my skillset:</p>

                <div className="skills-list">

                    <div className="skill">
                        <SiTailwindcss />
                        <p>Tailwind</p>
                    </div>
                    <div className="skill">
                        <SiTypescript />
                        <p>Typescript</p>
                    </div>
                    <div className="skill">
                        <SiRemix />
                        <p>Remix</p>
                    </div>
                
                </div>

                <p>The idea is that this list will be updated often, and will remain intentionally short and purposefully curated, so that I can focus my attention (not getting lost in the myriad of shiny, new [insert-superlatives] libraries, frameworks, etc.), whilst also <span className="highlight">working to strengthen and deepen the skills I have</span> already developed.</p>
            </div>
        )
    }
}

export default Skills;