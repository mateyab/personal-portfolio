import React from "react";
import "../Education.css";

const Education = () => {
  const education = [
    {
      company: "University of Victoria",
      location: "Victoria, BC",
      role: "Bachelor of Software Engineering",
      website: "https://www.uvic.ca/",
      details: [
        "Pursuing a Bachelor of Software Engineering with a specialization in Data Analysis and Artificial Intelligence.",
        "Relevant coursework: Data Structures and Algorithms, Database Systems, Software Design and Architecture, Data Analysis and Pattern Recognition, Practice of Information Security and Privacy, and Simulations in Operations Research."
      ]
    },
  ];

  return (
    <div className="education">
      <div className="education-container">
        {education.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-header">
              <div>
                <h2 className="education-company">
                  {edu.website ? (
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-company-link"
                    >
                      {edu.company}
                    </a>
                  ) : (
                    edu.company
                  )}
                </h2>
                <p className="education-role">{edu.role}</p>
              </div>

              <p className="education-location">{edu.location}</p>
            </div>

            <ul className="education-details">
              {edu.details.map((item, i) => (
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

export default Education;
