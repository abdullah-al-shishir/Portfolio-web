import React from "react";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <div id="skills" className="py-22 px-[12%] text-center bg-white">
      <div className="max-w-5xl mx-auto">
        <h4 className="text-center mb-2 text-lg font-Ovo">Skills</h4>
        <h2 className="text-center mb-4 text-5xl font-Ovo">Tools I Use</h2>
        <p className="font-Ovo text-stone-500 mb-10">
          The skills, tools and technologies I am good at
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 place-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 mb-2">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <span className="font-Ovo text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
