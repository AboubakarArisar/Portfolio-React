import React, { useState } from "react";

const Skills = () => {
  const [htmlSkill, setHtmlSkill] = useState(50); // Initial value, adjust as needed

  const handleHtmlChange = (e) => {
    setHtmlSkill(e.target.value);
  };

  return (
    <>
      <div className="skills-container flex flex-col justify-start h-[80vh]">
        <h1 className="text-5xl font-bold p-4 text-center">My Skills</h1>
        <div className="content grid grid-cols-2">
          <div className="programming flex flex-col gap-2">
            <h3 className="text-3xl font-semibold">Tech Stack</h3>
            <label htmlFor="HTML">HTML</label>
            <div className="relative">
              <input
                type="range"
                name="HTML"
                id=""
              
              />
            
                {htmlSkill}%
            
            </div>
          </div>
          <div className="frameworks"></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
