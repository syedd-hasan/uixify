import React from "react";
import { Main } from "../component/HomeComponent/Main";
import { SecondSec } from "../component/HomeComponent/SecondSec";
import { ThirdSection } from "../component/HomeComponent/ThirdSection";
import { FourthSec } from "../component/HomeComponent/FourthSec";
import { FifthSec } from "../component/HomeComponent/FifthSec";
import { SixSec } from "../component/HomeComponent/SixSec";

export const Home = () => {
  return (
    <>
      <Main id="about" />
      <SecondSec id="services" />
      <ThirdSection id="projects" />
      <FourthSec id="blogs" />
      <FifthSec id="testimonials" />
      <SixSec />
    </>
  );
};
