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
    name: "VIMEA Digital Collaboration Platform",
    description: "Wokred with a team of 6 to develop the requirments and prototype for the Vancouver Island Manufacturing excellence alliance (VIMEA) digital collaboration platform. " +
    "We created a complete SRS documents and met with our mentors at VIMEA to ensure our design met their needs " +
    "Utilized usecase diagrams, sequence diagrams,ERDs and created UI prototype in typescript.",
    tech: "UML, Typescript, Microsoft Word",
    image: `${process.env.PUBLIC_URL}/VIMEA.jpg`,
    link: "https://www.linkedin.com/groups/14626793/"
    },
    {
        name: "The Pulse of Morris Park",
        description: `Created a Python program that assigned x,y coordinates to light pixels in a specific pattern,
        allowing a lighting controller to generate visuals across all the pixels. The lighting controller displays a
        variety of patterns across a heart shape design. I also prototyped the design using Capture Software. I had the opportunity
        to work on this project as part of my co-op term at Limbic Media.`,
        tech: (
          <><span>Python, <a href="https://www.capture.se/">Capture</a></span></>
        ),
        image: `${process.env.PUBLIC_URL}/fence.png`,
        link: "https://limbicmedia.ca/projects/morris-park-large-scale-custom-piece/"
    },
    {
    name: "Syéxw Chó:leqw Adventure Park Night Walk", 
    description: `
    Developed a Raspberry Pi application to read audio files from a USB drive and play them sequentially in a continuous loop for the exhibit.
    Troubleshot issues like hidden files on the USB drive and researched methods for achieving high-quality audio playback.
    This led to the installation of VLC media player on the Raspberry Pi for clear audio. I had the opportunity
        to work on this project as part of my co-op term at Limbic Media.

    I also helped with making some of the spirals showcased in the exhibit.`,
    tech: "Rasperry Pi, Python, VLC Media Player",
    image: `${process.env.PUBLIC_URL}/adventure_park.jpg`,
    link: "https://limbicmedia.ca/projects/syexw-choleqw-adventure-park-night-walk/"
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