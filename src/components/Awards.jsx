import React from "react";

const Awards = () => {
  return (
    <div className="px-7 pt-10 h-screen">
      {/* Parent div having title , certificate and awards   */}
      <div className="">
        <h1 className="font-bold text-4xl">
          Excellence <span className="text-customBlue">Unveiled Awards</span>
        </h1>
        <p className="pt-4 text-xl ">
          Preferred by Entrepreneurs and Business Innovators.
        </p>
      </div>

      {/* Parent div have the awards image */}
      <div className="pt-14 ">
        <div className="flex justify-center gap-16">
          <div className="h-40 w-40">
            <img src="./src/assets/images/Award1.webp" alt="award" />
          </div>
          <div className="h-40 w-40">
            <img src="./src/assets/images/Award2.webp" alt="award" />
          </div>
          <div className="h-40 w-40">
            <img src="./src/assets/images/Award3.webp" alt="award" />
          </div>
          <div className="h-40 w-40">
            <img src="./src/assets/images/Award4.webp" alt="award" />
          </div>
        </div>

        <div className="flex justify-center gap-16 pt-20 ">
          <div className="h-40 w-40">
            <img src="./src/assets/images/Award5.webp" alt="award" />
          </div>
          <div className="h-40 w-40">
            <img src="./src/assets/images/Award6.webp" alt="award" />
          </div>
          <div className="h-40 w-40">
            <img src="./src/assets/images/Award7.webp" alt="award" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
