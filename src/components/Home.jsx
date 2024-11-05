import React from "react";
import HomeImg from "./HomeImg";
import OurServices from "./OurServices";
import OurServicesText from "./OurServicesText";
import OurTeam from "./OurTeam";
import DevelopmentProcess from "./DevelopmentProcess";
import OurExperts from "./OurExperts";
import CaseStudies from "./CaseStudies";
import Awards from "./Awards";

const Home = () => {
  return (
    <div>
      <HomeImg />
      <OurServicesText />
      <OurServices />
      <OurTeam />
      <DevelopmentProcess />
      <OurExperts />
      <CaseStudies />
      <Awards />
    </div>
  );
};

export default Home;
