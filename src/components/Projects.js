import "../Projects.css";
import React, { useState } from "react";

const ProjectImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      <img
        src={src}
        alt={alt}
        loading="eager"
        className={`project-image ${loaded ? "loaded" : "hidden"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

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
      name: "VIMEA Digital Collaboration Platform",
      description: "Worked with a team of six to develop the requirements and prototype for the Vancouver Island Manufacturing Excellence Alliance (VIMEA) digital collaboration platform. " +
      "We created complete SRS documents and met with our mentors at VIMEA to ensure our design met their needs. " + 
      "Utilized use case diagrams, sequence diagrams, and ERDs, and created a prototype.",
      tech: "UML, TypeScript, Microsoft Word",
      image: `${process.env.PUBLIC_URL}/VIMEA.jpg`,
      link: "https://www.linkedin.com/groups/14626793/"
    },
    {
        name: "The Pulse of Morris Park",
        description: `Created a Python program that assigned x,y coordinates to light pixels in a specific pattern,
        allowing a lighting controller to generate visuals across all pixels. The lighting controller displays a
        variety of patterns across a heart-shaped design. I also prototyped the design using Capture software. I had the opportunity
        to work on this project as part of my co-op term at Limbic Media.`,
        tech: (
          <><span>Python, <a href="https://www.capture.se/">Capture</a></span></>
        ),
        image: `${process.env.PUBLIC_URL}/fence.png`,
        link: "https://limbicmedia.ca/projects/morris-park-large-scale-custom-piece/"
    },
    {
      name: "Syéxw Chó:leqw Adventure Park Night Walk", 
      description: `Developed a Raspberry Pi application to read audio files from a USB drive and play them sequentially in a continuous loop for the exhibit.
      Troubleshot issues like hidden files on the USB drive and researched methods for achieving high-quality audio playback.
      This led to the installation of VLC media player on the Raspberry Pi for clear audio. I had the opportunity
      to work on this project as part of my co-op term at Limbic Media.

      I also assisted in creating some of the spirals showcased in the exhibit.`,
      tech: "Raspberry Pi, Python, VLC Media Player",
      image: `${process.env.PUBLIC_URL}/adventure_park.jpg`,
      link: "https://limbicmedia.ca/projects/syexw-choleqw-adventure-park-night-walk/"
    },
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <ProjectImage src={project.image} alt={project.name} />

            <div className="project-content">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
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