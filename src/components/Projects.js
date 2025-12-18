import React from "react";
import "../Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Personal Portfolio",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/simulation.png`,
      link: "https://github.com/yourusername/portfolio"
    },
     {
      name: "Personal Portfolio",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/fence.png`,
      link: "https://github.com/yourusername/portfolio"
    },
     {
      name: "Personal Portfolio",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/simulation.png`,
      link: "https://github.com/yourusername/portfolio"
    },
     {
      name: "Personal Portfolio",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/fence.png`,
      link: "https://github.com/yourusername/portfolio"
    },
     {
      name: "Personal Portfolio",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/simulation.png`,
      link: "https://github.com/yourusername/portfolio"
    },
     {
      name: "Personal Portfolio",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/fence.png`,
      link: "https://github.com/yourusername/portfolio"
    },
 
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />

            <div className="project-content">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;