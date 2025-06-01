import React, { useEffect, useState } from "react";
import "./_projects.scss";

// Import all images with proper handling
import spaceNeoImg from "../../assets/space_neo.png";
import weatherAppImg from "../../assets/weather_app.png";
import bestShopAppImg from "../../assets/best_shop.png";
import carSharingAppImg from "../../assets/car_sharing.png";
import defaultImg from "../../assets/project.png";

import Project from "./Project/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    // Debug: Log all imported images
    useEffect(() => {
        console.log('Imported images:', {
            spaceNeoImg,
            weatherAppImg,
            bestShopAppImg,
            carSharingAppImg,
            defaultImg
        });
    }, []);

    // Improved image getter with Webpack 5+ support
    const getLocalImage = (projectId) => {
        const imageMap = {
            0: spaceNeoImg,
            1: weatherAppImg,
            2: bestShopAppImg,
            3: carSharingAppImg
        };

        // Handle both ES modules (Webpack 5+) and direct paths
        const image = imageMap[projectId];
        return image?.default ? image.default : image || defaultImg;
    };

    const getProjects = () => {
        fetch("http://localhost:3000/projects")
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then((apiProjects) => {
                const projectsWithLocalImages = apiProjects.map(project => ({
                    ...project,
                    img: getLocalImage(project.id)
                }));
                console.log('Processed projects:', projectsWithLocalImages);
                setProjects(projectsWithLocalImages);
            })
            .catch((err) => {
                console.error('Error fetching projects:', err);
                // Fallback data if API fails
                setProjects([
                    {
                        id: 0,
                        title: "Space Neo",
                        description: "Fallback project",
                        img: getLocalImage(0)
                    }
                ]);
            });
    };

    useEffect(() => {
        getProjects();
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