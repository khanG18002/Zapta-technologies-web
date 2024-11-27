import React from "react";
import Card2 from "./Card2";

const DevelopmentProcess = () => {
  const Card2Data = [
    {
      imageUrl: "./src/assets/images/DevolepmentCycle1.webp",
      title: "1. Project planing & Strategy",
      text: [
        "Definition of roadmap ",
        "Assignong roles and respon ",
        "Setting up the environment (Jira, GitHub etc.) ",
      ],
    },
    {
      imageUrl: "./src/assets/images/DevolepmentCycle2.webp",
      title: "2. Analysis & Documentation",
      text: [
        "Gathering requirements",
        "Generating backlog",
        "Preparing architecture & process model",
      ],
    },
    {
      imageUrl: "./src/assets/images/DevolepmentCycle3.webp",
      title: "3. Design & Prototyping",
      text: [
        "Creating user flows (UI)",
        "Low fidelity designs (UX)",
        "High fidelity prototypes",
      ],
    },
    {
      imageUrl: "./src/assets/images/DevolepmentCycle4.webp",
      title: "4.Implementation & Coding",
      text: [
        "Front end development",
        "Back end development",
        "API & database connection",
      ],
    },
    {
      imageUrl: "./src/assets/images/DevolepmentCycle5.webp",
      title: "5. Quality Assurance & Testing",
      text: [
        "Creating a test plan & strategy",
        "Manual testing (functional testing)",
        "Automation testing",
      ],
    },
    {
      imageUrl: "./src/assets/images/DevolepmentCycle6.webp",
      title: "6. Deployment & Training",
      text: [
        "Hosting & going live",
        "Crafting user manuals",
        "Training session",
      ],
    },
    {
      imageUrl: "./src/assets/images/DevolepmentCycle7.webp",
      title: "7. Web Content & SEO",
      text: [
        "Optimized web content with keywords research",
        "Optimized web pages with technical and On-Page SEO",
        "Build a website’s authority with white-hat link",
      ],
    },
    {
      imageUrl: "./src/assets/images/DevolepmentCycle8.webp",
      title: "8. Maintenance & Support",
      text: [
        "Technical & user support",
        "Upgrading & enhancement",
        "Bug fixing",
      ],
    },
  ];
  return (
    <div className="px-7 bg-customDarkBlue2 h-screen ">
      <div className="pt-20 tracking-wider  text-white">
        {" "}
        {/* text */}
        <p className="font-bold text-4xl ">
          Our Custom{" "}
          <span className="text-customLightBlue">
            {" "}
            Software Development Process{" "}
          </span>
        </p>
        <p className="text-xl pt-4 pb-10">
          An insight into our methodical custom software development process.
          From concept to code, we transform ideas into results.
        </p>
      </div>

      <div className="flex items-center overflow-auto scrollbar-hide animate-scroll">
        {Card2Data.map((card2, index) => (
          <Card2 key={index} {...card2} />
        ))}
      </div>
    </div >
  );
};

export default DevelopmentProcess;


