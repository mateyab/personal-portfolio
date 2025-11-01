import React from "react";

const Projects = () => {
    const projects = [
        {
            name: "Personal Portfolio",
            description: "workshop class",
            tech: "React, CSS, React Router",
            link: "https://google.com"
        }
    ];

    return (
        <div>
            <div>
                {projects.map((project,index) => (
                    <div key={index}>
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            > View on Github</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;