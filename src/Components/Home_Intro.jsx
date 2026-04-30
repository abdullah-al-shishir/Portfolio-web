import React from "react";

const Home_Intro = () => {
  return (
    <div className="mt-5 md:mt-2 flex flex-col items-center text-center justify-center gap-4">
      {/* Image Container */}
      <div className="flex justify-center">
        <img
          className="w-38 h-38 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          src="/my-photo1.jpg"
          alt="Abdullah Al Shishir"
        />
      </div>

      {/* Description */}
      <div className="text-xl md:text-2xl font-medium text-slate-800">
        <span className="font-Ovo"> Hi! I'm Abdullah Al Shishir 👋🏻</span>
      </div>
    </div>
  );
};

export default Home_Intro;
