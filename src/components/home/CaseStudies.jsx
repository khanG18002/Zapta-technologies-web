import React from "react";

const CaseStudies = () => {
  return (
    <div className=" px-7">
      {/* Heading */}
      <div className="pt-16">
        <h1 className="font-bold text-4xl">
          Case <span className="text-customBlue">Studies</span>
        </h1>
        <p className="pt-4 text-xl">
          Real world success stories showcasing our expertise.
        </p>
      </div>

      {/* Parent div which having 6 vedeos */}
      <div className="">
        {/* Parent div having only 2 vedeos */}
        <div className="md:flex items-start gap-5 pt-16 h-full">
          {/* First Video */}
          <div className="">
            <video
              className="rounded-lg"
              src="./src/assets/videos/video1.mp4"
              type="video/mp4"
              muted
              controlsList="nodownload nofullscreen noremoteplayback"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}>
              Your browser does not support the video tag.
            </video>
            <div className="pb-7 md:pt-7">
              {/* Text for vedeo */}
              <h1 className="font-bold text-2xl  md:text-4xl text-customBlue">InvestME</h1>
              <p className="py-3 md:text-xl pt-4 font-thin">
                Investme offers smart insights and tools to help users make
                confident investment decisions.
              </p>
            </div>
          </div>

          {/* Second Video */}
          <div className="">
            <video
              className=" rounded-lg"
              src="./src/assets/videos/video2.mp4"
              type="video/mp4"
              muted
              controlsList="nodownload nofullscreen noremoteplayback"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Second Parent div having only 2 vedeos */}
        <div className="md:flex items-start gap-5 pt-16 h-full">
          {/* First Video (3)*/}
          <div className="pb-16">
            <video
              className=" rounded-lg"
              src="./src/assets/videos/video3.mp4"
              type="video/mp4"
              muted
              controlsList="nodownload nofullscreen noremoteplayback"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}>
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Second Video (4) */}
          <div className="">
            <video
              className="rounded-lg"
              src="./src/assets/videos/video4.mp4"
              type="video/mp4"
              muted
              controlsList="nodownload nofullscreen noremoteplayback"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}>
              Your browser does not support the video tag.
            </video>
            <div className=" md:pt-7">
              {/* Text for vedeo */}
              <h1 className="font-bold text-2xl md:text-4xl text-customBlue">LUXURI</h1>
              <p className="pt-4  md:text-xl font-thin">
                Luxuro offers premium automotive services, from luxury car
                rentals to seamless vehicle shifts.
              </p>
            </div>
          </div>
        </div>

        {/* Second Parent div having only 2 vedeos */}
        <div className="md:flex items-start gap-5 pt-16 h-full">
          {/* First Video (5)*/}
          <div className="">
            <video
              className=" rounded-lg"
              src="./src/assets/videos/video5.mp4"
              type="video/mp4"
              muted
              controlsList="nodownload nofullscreen noremoteplayback"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}>
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Second Video (6) */}
          <div className="">
            <video
              className="rounded-lg"
              src="./src/assets/videos/video6.mp4"
              type="video/mp4"
              muted
              controlsList="nodownload nofullscreen noremoteplayback"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}>
              Your browser does not support the video tag.
            </video>
            {/* Text for vedeo */}
            <div className="pb-7 md:pt-7">
              <h1 className="font-bold text-2xl md:text-4xl text-customBlue">SUCASA</h1>
              <p className="pt-4 md:text-xl font-thin">
                Sucasa provides exceptional hospitality experiences, ensuring
                comfort and elegance at every stay.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="text-center py-14">
        <button
          className="bg-customBlue border border-customBlue rounded-md h-10 w-32
         hover:bg-white transitoin duration-[1.5s] hover:text-customBlue ">
          View More
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
