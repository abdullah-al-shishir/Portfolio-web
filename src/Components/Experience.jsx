import React from "react";

const ExperienceCard = ({
  title,
  organization,
  duration,
  description,
  icon: Icon,
}) => {
  return (
    // Cards design layout
    <div className="card-wrap w-full max-w-4xl mx-auto text-left hover-trigger">
      <div className="card-border">
        <div className="card-inner px-8 py-7">
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-1">
            <div className="flex items-center gap-5">
              <div className="logo-ring w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
                {/* Renders the passed icon component */}
                {Icon ? <Icon /> : <RocketIcon />}
              </div>
              <div>
                <h3 className="display-font text-slate-900 text-xl leading-tight font-bold">
                  {title} <span>at {""}</span>
                  <span className="italic text-slate-700 font-medium">
                    {organization}
                  </span>
                </h3>
              </div>
            </div>
            <span className="font-Ovo px-4 py-1.5 text-gray-500 text-sm mt-1 whitespace-nowrap ">
              {duration}
            </span>
          </div>
          <div className="accent-line mt-5 mb-5" />
          <p className="font-Ovo body-text text-[17px] text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Existing Rocket Icon
const RocketIcon = () => (
  <img
    src="/research.jpg"
    alt="Research Icon"
    className="w-full h-full object-cover rounded-full"
  />
);
// New Book Icon for English Olympiad
const EnglishIcon = () => (
  <img
    src="/english.jpg"
    alt="Research Icon"
    className="w-full h-full object-cover rounded-full"
  />
);

// 2. Main Section
export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-[12%] bg-white">
      <style>{`
        .display-font { font-family: 'DM Serif Display', serif; }
        .card-border { 
            background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%); 
            padding: 1px; 
            border-radius: 20px; 
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-inner { 
            background: #ffffff; 
            border-radius: 19px; 
            transition: background-color 0.4s ease; 
        }
        .hover-trigger:hover .card-border { 
            transform: scale(1.01); 
            transition: all 0.6s ease;
            box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1);
        }
        .hover-trigger:hover .card-inner { 
            background-color: #fdf2f4; 
        }
        .logo-ring { background: linear-gradient(135deg, #0f172a 0%, #334155 100%); }
        .accent-line { height: 2px; background: linear-gradient(90deg, #0f172a 0%, transparent 100%); width: 0; transition: width 0.6s ease; }
        .hover-trigger:hover .accent-line { width: 100%; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="mb-2 text-lg font-Ovo">Experience</h4>
          <h2 className="mb-4 text-4xl font-Ovo">My Experience</h2>
          <p className="font-Ovo text-stone-500 text-md">
            Here is a quick summary of my most recent experiences
          </p>
        </div>

        {/* Cards 1: Research Assistant */}
        <div className="flex flex-col items-center gap-8 mb-6 cursor-pointer">
          <ExperienceCard
            title="Research Assistant"
            organization="Research Laboratory for Computational Electromagnetics (RLCEM)"
            duration="Mar 2025 - Dec 2025"
            description="As a Research Assistant at RLCEM, I developed computational models to simulate electromagnetic phenomena using Python and MATLAB. I focused on optimizing numerical algorithms for wave propagation and data analysis, bridging theoretical physics with programming to support specialized research initiatives at the University of Chittagong."
          />
        </div>

        {/* Cards 2: English Olympiad*/}
        <div className="flex flex-col items-center gap-8 mb-6 cursor-pointer">
          <ExperienceCard
            title="Campus Ambassador"
            organization="English Olympiad"
            duration="Jul 2018 - Jan 2022"
            icon={EnglishIcon}
            description="As a Campus Ambassador for the English Olympiad, I led the Gazipur team, successfully recruiting over 250 participants for the Season 2 event. I played a key role in organizing the Gazipur District Round, ensuring its smooth execution and fostering increased participation."
          />
        </div>
        {/* Card 3: more to add here..... */}
      </div>
    </section>
  );
}
