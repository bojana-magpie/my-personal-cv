import React from "react";
import "./_project.scss";

import linkIcon from "../../../assets/link.svg";
import githubIcon from "../../../assets/github.svg";

const Project = ({ project }) => {
    return (
        <article className="article project">
            <img src={project.img} alt="project image" />
            <div className="project__container">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <p className="project__stack">{project.stack}</p>
                <div className="project__actions">
                    {project.link?.href && (
                        <a href={project.link.href} target="_blank" rel="noopener noreferrer">
                            <img src={linkIcon} alt="Project link" /> {project.link.title}
                        </a>
                    )}
                    {project.code?.href && (
                        <a href={project.code.href} target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="Project Code" /> {project.code.title}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Project;