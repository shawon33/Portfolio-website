import React from "react";
import Header2 from "../Component/Header/Header2";
import FirstSection from "../Component/Section/FirstSection";
import Scroll from "../Component/Section/Scroll";
import AboutMe from "../Component/AbouteMe/AboutMe";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <FirstSection></FirstSection>
      <Scroll></Scroll>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
