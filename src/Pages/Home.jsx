import React from "react";
import Navbar from "../Components/Navbar";
import Home_Intro from "../Components/Home_Intro";
import About_me from "../Components/About_me";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
import Education from "../Components/Education";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Home_Intro />
      <About_me />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
