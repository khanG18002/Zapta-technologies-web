import React from "react";
import HomeImg from "./HomeImg";
import OurServices from "./OurServices";
import OurServicesText from "./OurServicesText";
import CEOmessage from "./CEOmessage";
import DevelopmentProcess from "./DevelopmentProcess";
import OurExperts from "./OurExperts";
import CaseStudies from "./CaseStudies";
import Awards from "./Awards";
import GetMessage from "./GetMessage";
import Apply from "./Apply";
///
///wedothis
///
const Home = () => {
  return (
    <div>
      <HomeImg />
      <OurServicesText />
      <OurServices />
      <CEOmessage />
      <DevelopmentProcess />
      <OurExperts />
      <CaseStudies />
      <Awards />
      <GetMessage />
      <Apply />
    </div>
  );
};

export default Home;
