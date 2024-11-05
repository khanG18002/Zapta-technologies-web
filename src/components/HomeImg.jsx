import React from "react";

function HomeImg() {
  return (
    <div>
      {" "}
      {/* parent div  */}
      <div className="absolute h-screen">
        {" "}
        {/* image */}
        <img src="./src/assets/images/Homepage.webp" alt="Home image " />
      </div>
      <div className="relative px-8 pt-48 text-white">
        {" "}
        {/* Text  */}
        <p className="text-3xl font-bold">Zone of</p>
        <p className="text-8xl font-bold">Advance Platforms</p>-
        <p className="text-3xl font-semibold tracking-[1.43rem] ">
          AND TECH APPLICATIONS
        </p>
        <p className="text-2xl "> Custom Software Design & Development</p>
        <div className="py-32">
          {" "}
          {/* Button parent div  */}
          <div className="flex justify-center text-white font-semibold border rounded-lg  w-80 h-16 hover:bg-customBlue transition duration-[1.5s]">
            <button> Book a Consultation - it’s free </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeImg;
