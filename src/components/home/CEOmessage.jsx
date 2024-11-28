import React from "react";

const CEOmessage = () => {
  return (
    <div className=" ">
      <div className=" px-8 py-16 md:flex justify-between items-center  text-white team-Bg   bg-slate-400">
        {/* text  */}
        <div>
          <div>
            <p className="text-xl tracking-wider font-thin">
              “ZAPTA's meticulous attention to detail and unwavering commitment to{" "}
              <br />
              deadlines fueled a fantastic project collaboration. Each deliverable{" "}
              <br />
              exceeded expectations, highlighting their impressive technical
              skills and <br />
              creative problem-solving. Their consistent quality output showcases
              their <br />
              new Promis reliability and deep understanding of the project, making
              them a <br /> true partner, not just a vendor. Bravo, ZAPTA!”
            </p>
          </div>


          <div className="pt-9">
            <h2 className="text-2xl font-bold"> Muhammad Awais </h2>
            <p className="tracking-wider"> Founder & CEO of DrBroker.com </p>
          </div>
        </div>

        <div className="">
          {" "}
          {/* Parent div  */}
          {/* image  */}
          <div className="">
            <img
              className=""
              src="./src/assets/images/TeamMember.webp"
              alt="Image team member "
            />
          </div>
          {/* Button */}
          <div className=" h-16 w-16 hover:scale-105 duration-0.10s ">
            <button className="bg-customBlue rounded-full h-16 w-16 hover:bg-white transitoin duration-[1.5s] hover:text-customBlue ">
              play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOmessage;
