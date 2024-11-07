import React from "react";
import Card from "./card"; // Ensure to update the path as per your file structure

const OurServices = () => {
  const cardsData = [
    {
      imageUrl: "./src/assets/images/vector1.webp",
      title: "UI UX Design",
      text: "Crafting a data-driven and user centered UI UX to provide the greatest user experience and satisfaction",
    },
    {
      imageUrl: "./src/assets/images/Vector2.svg",
      title: "Web Development",
      text: "Building responsive and efficient web applications.",
    },
    {
      imageUrl: "./src/assets/images/Vector1.svg",
      title: "Graphic Design",
      text: "Creating visually appealing graphics for your brand.",
    },
    {
      imageUrl: "./src/assets/images/Vector1.svg",
      title: "Graphic Design",
      text: "Creating visually appealing graphics for your brand.",
    },
    {
      imageUrl: "./src/assets/images/Vector1.svg",
      title: "Graphic Design",
      text: "Creating visually appealing graphics for your brand.",
    },
    {
      imageUrl: "./src/assets/images/Vector1.svg",
      title: "Graphic Design",
      text: "Creating visually appealing graphics for your brand.",
    },
    {
      imageUrl: "./src/assets/images/Vector1.svg",
      title: "Graphic Design",
      text: "Creating visually appealing graphics for your brand.",
    },
  ];

  return (
    <div className="flex flex-wrap columns-2 justify-center gap-11">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default OurServices;
