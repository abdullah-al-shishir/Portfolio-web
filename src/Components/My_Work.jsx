import React from "react";
import { workMock } from "../assets/assets";

const My_Work = () => {
  return (
    <div id="work" className="py-20 px-[12%] bg-white">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
        <h2 className="text-center mb-4 text-5xl font-Ovo">My latest work</h2>
        <p className="font-Ovo text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed text-[17px] text-center">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workMock.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden hover:scale-[1.015] transition-transform duration-300 cursor-pointer"
            >
              {/* Mapped from Public & assets */}
              {/* Thumbnail */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    {work.name}
                  </p>
                  <p className="text-xs text-gray-400">{work.type}</p>
                </div>
                <button className="group w-7 h-7 rounded-full bg-[#FF1A55] text-white flex items-center justify-center text-md cursor-pointer">
                  <span className="inline-block transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default My_Work;
