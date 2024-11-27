import React from "react";

const OurVision = () => {
    return (

        <>
            {/* Parent */}
            <div className="flex justify-between items-center px-8 py-14 bg-customDarkBlue  text-white flex-col-reverse md:flex-row">

                {/* text */}
                <div>
                    <h1 className="text-4xl font-bold"> Our Vision </h1>
                    <p className="pt-5 text-lg ">
                        We are committed to deliver exceptional software solutions for businesses  <br />
                        while nurturing a culture of positivity, collaboration, and personal growth<br />
                        among our team members. Our success is defined by our clients growth and<br />
                        our employees’ well-being.
                    </p>
                </div>

                {/* image */}
                <div>
                    <img src="./src/assets/images/OurVision.webp" alt="" />
                </div>
            </div>

        </>

    );
};

export default OurVision;
