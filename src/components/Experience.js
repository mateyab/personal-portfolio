import React from "react";
import "../Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "University of Victoria",
      location: "Victoria, BC",
      role: "Software Engineering Student",
      website: "https://www.uvic.ca/",
      details: [
        "Pursuing a Bachelor of Software Engineering with a specialization in Data Analysis and Artificial Intelligence.",
        "Relevant coursework: Data Structures and Algorithms, Database Systems, Software Design and Architecture, Data Analysis and Pattern Recognition, Practice of Information Security and Privacy, and Simulations in Operations Research."
      ]
    },
    {
      company: "Clio",
      location: "Vancouver, BC",
      role: "Software Developer Co-op",
      website: "https://www.clio.com/",
      details: [
        {
          title: "Legal Agreement and Billing Service Centralization",
          points: [
            "Designed and implemented a shared interface pattern using JWT tokens and iframes, enabling reuse across multiple Clio products and reducing duplicate development.",
            "Configured Content Security Policy (CSP) to support secure cross-domain iframe embedding and implemented encrypted JWT secrets for client authentication.",
            "Integrated Tailwind CSS and Clio’s internal design system into the Billing Service, modernizing a previously Bootstrap-based frontend.",
            "Authored internal documentation enabling other teams to embed iframe-based interfaces into Clio products.",
            "Implemented monitoring and logging using Bugsnag and the ELK stack to proactively identify and resolve issues.",
            "Contributed to full-stack development using Ruby on Rails and React."
          ]
        },
        {
          title: "Reseller Tracking and Billing",
          points: [
            "Supported the launch of Clio’s Reseller project, enabling third-party license sales.",
            "Queried Salesforce for payment terms and account data, automating invoice generation by embedding structured metadata into Stripe."
          ]
        }
      ]
    },
    {
      company: "Limbic Media",
      location: "Victoria, BC",
      role: "Project Support and Testing Co-op",
      website: "https://limbicmedia.ca/",
      details: [
        "Supported the development of MaestroDMX, an autonomous lighting controller for DMX-based lighting systems.",
        "Led a project to automate fixture profile creation by developing Python scripts to parse manufacturer manuals and generate standardized JSON configuration files defining channel controls and light functions.",
        "Developed Python tooling to streamline MaestroDMX production, including barcode generation for individual units, fixture library validation, and production automation scripts.",
        "Programmed a Raspberry Pi to flash firmware onto MaestroDMX PCBs during MVP production, enabling reliable and repeatable device setup."
      ]
    }
  ];

  return (
    <div className="experience">
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <div>
                <h2 className="experience-company">
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-company-link"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h2>
                <p className="experience-role">{exp.role}</p>
              </div>

              <p className="experience-location">{exp.location}</p>
            </div>

            <ul className="experience-details">
              {exp.details.map((item, i) => (
                typeof item === 'string' ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i}>
                    {item.title}
                    <ul>
                      {item.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </li>
                )
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;