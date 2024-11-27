import React from "react";
import Card from "./card"; // Ensure to update the path as per your file structure

const CoreValues = () => {
  const cardsData = [
    {
      imageUrl: "./src/assets/images/CoreValues1.svg",
      title: "Communication",
      text: "Our adherence to open and honest communication leads to our clients & employees, as we actively seek feedback.",
    },
    {
      imageUrl: "./src/assets/images/CoreValues2.svg",
      title: "Seriousness",
      text: "At ZAPTA Technologies, we value the significance of professionalism in our industry for achieving outstanding outcomes.",
    },
    {
      imageUrl: "./src/assets/images/CoreValues3.svg",
      title: "Professionalism",
      text: "Professionalism and integrity are the pillars of our work, as we wholeheartedly adhere to a strict code of conduct",
    },
    {
      imageUrl: "./src/assets/images/CoreValues4.svg",
      title: "Awareness",
      text: "We are committed to continuous learning, growth, and awareness and equip our team with the latest tools and technologies.",
    },
    {
      imageUrl: "./src/assets/images/CoreValues5.svg",
      title: "Respect & Kindness",
      text: "Respect & kindness are the guiding principles of our work culture, as we foster an inclusive and diverse environment.",
    },
    {
      imageUrl: "./src/assets/images/CoreValues6.svg",
      title: "Responsibility",
      text: "We understand the significance of responsibility and accountability in projects, we take ownership to ensure the best.",
    },

  ];

  return (
    <div>
      <h1 className='text-4xl  font-bold px-8 py-7'>Our<span className='text-customBlue '>Core Value</span></h1>
      < div className="flex flex-wrap columns-2 justify-center gap-11 pb-10" >
        {
          cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))
        }
      </div >
    </div>
  );
};

export default CoreValues;
