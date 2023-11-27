import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaJava,
  FaCogs,
  FaCode,
} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiRedux, SiDart } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="skills-container flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-semibold text-[#C58940] mb-6">My Skills</h2>
        
        <div className="section mb-8">
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <div className="skills-grid grid grid-cols-4 gap-6">
            <div className="skill-item flex flex-col items-center">
              <FaCogs className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">C++</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <FaPython className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">Python</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <FaJava className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">Java</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <SiDart className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">Dart</p>
            </div>
          </div>
        </div>

      
        <div className="section">
          <h3 className="text-2xl font-semibold mb-4 text-center">Development Tools</h3>
          <div className="skills-grid grid grid-cols-4 gap-6">
            <div className="skill-item flex flex-col items-center">
              <FaHtml5 className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">HTML5</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <FaCss3 className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">CSS3</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <SiJavascript className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">JavaScript</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <FaReact className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">React.js</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <SiRedux className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">Redux</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <FaNodeJs className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">Node.js</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <SiMongodb className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">MongoDB</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <FaDatabase className="text-6xl mb-2 text-[#E5BA73]" />
              <p className="text-lg font-semibold">Database Management</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
