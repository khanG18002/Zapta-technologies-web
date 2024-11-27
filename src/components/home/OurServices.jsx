import React from "react";
import Card from "./card"; // Ensure to update the path as per your file structure

const OurServices = () => {
  const cardsData = [
    {
      imageUrl: "./src/assets/images/Services1.svg",
      title: "UI/UX Design",
      text: "Crafting a data-driven and user centered UI UX to provide the greatest user experience and satisfaction",
    },
    {
      imageUrl: "./src/assets/images/Services2.svg",
      title: "Web Development",
      text: "Achieve business objectives and build a strong online presence by our web development solutions for customers.",
    },
    {
      imageUrl: "./src/assets/images/Services3.svg",
      title: "Graphic Design",
      text: "Creating visually appealing graphics for your brand.",
    },
    {
      imageUrl: "./src/assets/images/Services4.svg",
      title: "Mobile Development",
      text: "Well-engineered, AI-driven native and hybrid applications for all your business  needs with a seamless experience.",
    },
    {
      imageUrl: "./src/assets/images/Services5.svg",
      title: "Quality Assurance",
      text: "Providing well-tested and bug-free web and mobile apps, ensuring high-quality and the best user experience.",
    },
    {
      imageUrl: "./src/assets/images/Services6.svg",
      title: "MVP Builder",
      text: "Streamlined MVPs of development expedites the product journey and validates market  potential while insuring well engineering.",
    },
    {
      imageUrl: "./src/assets/images/Services7.svg",
      title: "Dedicated Teams",
      text: "Onboard our dedicated designers, developers and skilled engineers on a full-time basis to achieve your business objectives.",
    },
    {
      imageUrl: "./src/assets/images/Services8.svg",
      title: "Hybrid Applications Development",
      text: "Create efficient, versatile apps that reach every user, all from a single, efficient codebase. ",
    },
    {
      imageUrl: "./src/assets/images/Services9.svg",
      title: "AI Embedded Applications",
      text: "Infuse your devices with AI to create smarter, more autonomous, & more efficient products. ",
    },
    {
      imageUrl: "./src/assets/images/Services10.svg",
      title: "Software Automation",
      text: "Streamline your software creation and testing process to improve quality, reduce  costs, and speed up releases.",
    },
    {
      imageUrl: "./src/assets/images/Services7.svg",
      title: "No-Code & Low-Code Development",
      text: "Empower your team to build custom apps faster & easier, leveraging no-code and  low- code development tools.",
    },
    {
      imageUrl: "./src/assets/images/Services7.svg",
      title: "Data Analytics",
      text: "Exploit within the capability of data extracting valuable insights for informed decisions and accelerated business growth.",
    },
  ];

  return (
    <div className="flex flex-wrap columns-2 justify-center gap-11 pb-10">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default OurServices;
