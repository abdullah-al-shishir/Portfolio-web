import React from "react";

const Education = () => {
  const educationData = [
    {
      year: "2016 - 2017",
      degree: "Secondary School Certificate (SSC)",
      school: "Rani Bilasmoni Govt. Boys' High School",
      department: "Science",
      gpa: "5.00",
      side: "right",
    },
    {
      year: "2018 - 2019",
      degree: "Higher Secondary School Certificate (HSC)",
      school: "Gazipur Cantonment College",
      department: "Science",
      gpa: "5.00",
      side: "left",
    },
    {
      year: "2022 - Present",
      degree: "Bachelor of Science (BSc)",
      school: "University of Chittagong",
      department: "Physics",
      gpa: "3.84",
      side: "right",
    },
  ];

  return (
    <div id="education" className="py-22 px-[12%] text-center bg-white">
      <style>{`
        .card-border { 
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%); 
          padding: 1px; 
          border-radius: 10px; 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-inner { 
          background: #ffffff; 
          border-radius: 16px; 
          transition: background-color 0.4s ease; 
        }
        .hover-trigger:hover .card-border { 
          transform: scale(1.02); 
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1);
        }
        .hover-trigger:hover .card-inner { 
          background-color: #fdf2f4; 
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <h4 className="text-center mb-2 text-lg font-Ovo">Education</h4>
        <h2 className="text-center mb-4 text-4xl font-Ovo">My Education</h2>
        <p className="font-Ovo text-stone-500 mb-10">
          Here is a quick summary of my educational background
        </p>

        {/* Mobile layout (xs/sm) */}
        <div className="flex flex-col gap-6 md:hidden">
          {educationData.map((edu, index) => (
            <div key={index} className="hover-trigger">
              <div className="card-border">
                <div className="card-inner p-6 text-center">
                  <p className="font-Ovo text-lg font-semibold mb-3">
                    {edu.year}
                  </p>
                  <h3 className="font-Ovo font-bold text-slate-900 mb-1 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="font-Ovo text-slate-600 text-base mb-2">
                    {edu.school}
                  </p>
                  <div className="font-Ovo text-slate-600 text-base space-y-1">
                    <p>Department: {edu.department}</p>
                    <p>GPA: {edu.gpa}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout (md+) */}
        <div className="relative space-y-14 hidden md:block">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300" />

          {educationData.map((edu, index) => {
            const isLeft = edu.side === "left";
            return (
              <div
                key={index}
                className={`relative flex items-start justify-around w-full ${
                  isLeft ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* 1. Empty Spacer */}
                <div className="hidden md:block w-[24%]" />

                {/* 2. Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full z-10 border-5 border-white mt-2" />

                {/* 3. The Content Card */}
                <div
                  className={`w-full md:w-[40%] mt-3 ${
                    isLeft ? "text-right pr-10" : "text-left pl-10"
                  }`}
                >
                  <span className="font-Ovo text-lg font-semibold block mb-3 leading-none">
                    {edu.year}
                  </span>

                  <div className="hover-trigger">
                    <div className="card-border">
                      <div className="card-inner p-5">
                        <h3 className="font-bold text-slate-900 mb-1 leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-600 text-base mb-1">
                          {edu.school}
                        </p>
                        <div className="text-slate-600 text-base space-y-1">
                          <p>Department: {edu.department}</p>
                          <p>GPA: {edu.gpa}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
