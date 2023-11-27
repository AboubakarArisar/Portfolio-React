import React from "react";
import project1Image from "./assets/project1.png";
import project2Image from "./assets/project2.png";
import project3Image from "./assets/project3.png";

const projectsData = [
  {
    name: "Project 1",
    subtitle: "Web Application for XYZ",
    description: "A web application that allows users to...",
    technologies: ["React.js", "Node.js", "MongoDB"],
    status: "Completed",
    githubLink: "https://github.com/yourusername/project1",
    demoLink: "https://yourproject1demo.com",
    image: project1Image,
  },
  {
    name: "Project 2",
    subtitle: "Mobile App for ABC",
    description: "A mobile app that includes features like...",
    technologies: ["React Native", "Firebase"],
    status: "Work in Progress",
    githubLink: "https://github.com/yourusername/project2",
    demoLink: null,
    image: project2Image,
  },
  {
    name: "Project 3",
    subtitle: "Data Analysis for DEF",
    description: "Data analysis project utilizing machine learning techniques...",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    status: "Completed",
    githubLink: "https://github.com/yourusername/project3",
    demoLink: null,
    image: project3Image,
  },
  
  {
    name: "Project 3",
    subtitle: "Data Analysis for DEF",
    description: "Data analysis project utilizing machine learning techniques...",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    status: "Completed",
    githubLink: "https://github.com/yourusername/project3",
    demoLink: null,
    image: project3Image,
  },
  
  {
    name: "Project 3",
    subtitle: "Data Analysis for DEF",
    description: "Data analysis project utilizing machine learning techniques...",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    status: "Completed",
    githubLink: "https://github.com/yourusername/project3",
    demoLink: null,
    image: project3Image,
  },
  
  {
    name: "Project 3",
    subtitle: "Data Analysis for DEF",
    description: "Data analysis project utilizing machine learning techniques...",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    status: "Completed",
    githubLink: "https://github.com/yourusername/project3",
    demoLink: null,
    image: project3Image,
  },
];

const Projects = () => {
  return (
    <>
      <div className="projects-container flex flex-wrap justify-center gap-8 p-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card relative overflow-hidden rounded-lg shadow-lg max-w-md"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto transition-transform transform hover:scale-105"
            />
            <div className="project-details absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center opacity-0 transition-opacity hover:opacity-100 cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-lg font-semibold text-[#C58940] mb-2">{project.subtitle}</p>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center mb-2">
                <p className="text-sm mr-4">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
                <p className="text-sm">
                  <strong>Status:</strong> {project.status}
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.githubLink}
                  className="text-[#E5BA73] hover:text-[#C58940] inline-block"
                >
                  View on GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="text-[#E5BA73] hover:text-[#C58940] inline-block"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
