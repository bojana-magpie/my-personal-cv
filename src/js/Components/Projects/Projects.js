import React, { useEffect, useState } from "react";
import "./_projects.scss";

import spaceNeoImg from "../../assets/space_neo.png";
import weatherAppImg from "../../assets/weather_app.png";
import bestShopAppImg from "../../assets/best_shop.png";
import carSharingAppImg from "../../assets/car_sharing.png";
import defaultImg from "../../assets/project.png";

import Project from "./Project/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    // Map project IDs to images
    const getLocalImage = (projectId) => {
        const imageMap = {
            0: spaceNeoImg,
            1: weatherAppImg,
            2: bestShopAppImg,
            3: carSharingAppImg,
        };
        return imageMap[projectId] || defaultImg;
    };

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bojana-magpie/my-personal-cv/main/db.json")
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                if (!data.projects) {
                    console.error("No 'projects' key in response data");
                    return;
                }
                setProjects(data.projects.map(project => ({
                    ...project,
                    img: getLocalImage(project.id),
                })));
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);


    return (
        <div className="projects row">
            {projects.map((project) => (
                <div className="col-3" key={project.id}>
                    <Project project={project} />
                </div>
            ))}
        </div>
    );
};

export default Projects;
