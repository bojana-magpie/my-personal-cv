import React from "react";
import "./_project.scss";

import link from "../../../assets/link.svg";
import github from "../../../assets/github.svg";

const Project = ({project}) => {
    return (
        <article className="article project">
            <img src={project.img} alt="project image"/>
            <div className="project__container">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <p className="project__stack">{project.stack}</p>
                <div className="project__actions">
                    <a href={project.link.href}>
                        <img src={link} alt="Project link"/> {project.link.title}
                    </a>
                    <a href={project.code.href}>
                        <img src={github} alt="Project Code"/> {project.code.title}
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Project;