import React from "react";
import "../Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Electric Vehicle Charging Station Simulation", 
      description: `This simulation evaluates how different vehicle routing policies affect the total
                    time drivers spend charging their vehicles. Vehicles arrive according to a Poisson
                    process and are routed to stations modeled as two-server, single-queue systems.
                    The study compares a shortest-distance-first routing policy with a
                    shortest-estimated-wait policy to assess their impact on overall charging time,
                    accounting for queueing, charger availability, and balking behavior.`,
      tech: "Python",
      image: `${process.env.PUBLIC_URL}/simulation.png`,
      link: "https://github.com/mateyab/EV_simulation"
    },
     {
      name: "The Pulse of Morris Park",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/fence.png`,
      link: "https://limbicmedia.ca/projects/morris-park-large-scale-custom-piece/"
    },
     {
      name: "VIMEA Digital Collaboration Platform",
      description: "Personal portfolio website built to showcase projects and experience.dbdfgbdbd dvdsvdvdvdvdvdvdfvdvdvdvdfbgfnddfnfb",
      tech: "React, CSS, React Router",
      image: `${process.env.PUBLIC_URL}/VIMEA.jpg`,
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
                  View project →
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