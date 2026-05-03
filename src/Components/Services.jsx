import React from "react";

const serviceData = [
  {
    title: "Web Development",
    desc: "Web development is the process of building, programming...",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={28}
        height={28}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "UI/UX design focuses on creating a seamless user experience...",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={28}
        height={28}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Graphics Design",
    desc: "Creative design solutions to enhance visual communication...",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={28}
        height={28}
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
];

// Rendering cards from here
const ServiceCard = ({ title, desc, icon }) => (
  <div className="border border-stone-300 rounded-xl shadow-sm hover:bg-[#fdf2f4] hover:shadow-md p-8 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
    <div className="w-14 h-14 bg-[#f03f7a] rounded-[14px] flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="font-Ovo text-lg font-semibold text-gray-600 mb-2">
      {title}
    </h3>
    <p className="font-Ovo text-md text-gray-500 leading-relaxed mb-4">
      {desc}
    </p>
    <a
      href="#"
      className="font-Ovo text-sm text-gray-500 flex items-center gap-2 hover:text-gray-800 transition-colors"
    >
      Read more <span>→</span>
    </a>
  </div>
);

// Adding cards with intro
const Services = () => {
  return (
    <div id="services" className="py-22 px-[12%] text-center">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-center mb-2 text-lg text-stone-700 tracking-wide font-Ovo">
          What I offer
        </h4>
        <h2 className="text-center mb-4 text-5xl font-Ovo text-stone-900 font-normal leading-tight">
          My Services
        </h2>
        <p className="font-Ovo text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed text-[17px]">
          Building intuitive, high-performance web solutions with a focus on
          seamless user experience and cutting-edge technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
