import React from "react";

function HomeImg() {
  return (
    <div className="pb-52">
      {" "}
      {/* parent div  */}
      <div className="relative h-screen">
        {" "}
        {/* image */}
        <img
          src="./src/assets/images/Homepage.webp" alt="Home image " />

        <div className="absolute inset-0 pt-28 px-8 md:pt-20 lg:pt-48 text-white">
          {" "}
          {/* Text  */}
          <p className="text-2xl lg:text-3xl font-bold">Zone of</p>
          <p className="text-6xl lg:text-8xl font-bold">Advance Platforms</p>
          <p className="text-1xl  lg:text-3xl font-semibold lg:tracking-[1.43rem] ">
            AND TECH APPLICATIONS
          </p>
          <p className="text-2xl "> Custom Software Design & Development</p>
          <div className="pt-10">
            {" "}
            {/* Button parent div  */}
            <div className="hidden  sm:hidden md:flex justify-center text-white font-semibold border rounded-lg  w-80 h-16 hover:bg-customBlue transition duration-[1.5s] ">
              <button> Book a Consultation - it’s free </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeImg;









