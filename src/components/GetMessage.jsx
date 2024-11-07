import React from "react";

const GetMessage = () => {
  return (
    <div className="relative">
      {/* image */}
      <div className="absolute ml-3 mt-48 bg-customDarkBlue w-[25rem] ">
        <div className="relative">
          <img
            className="h-[40rem] "
            src="./src/assets/images/Offices.webp"
            alt=""
          />
          {/* text */}
          <div className="absolute top-0 pt-6 pl-8">
            <h1 className="text-white text-3xl">Offices</h1>
            {/* USA */}
            <div>
              <h1>USA</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Parent div Having 2 div  */}
      <div className="flex h-[60rem]">
        {/* first section (image) */}
        <div className="bg-customBlue2 w-[40%]"></div>

        {/* Second section Message section */}
        <div className="bg-customLightGray  w-full">
          {/*  */}
          <div className="pl-16 pt-20 ">
            <h1 className="font-bold text-5xl">
              We’re just a
              <span className="text-customBlue  "> message away!</span>
            </h1>
            <p className="pt-6 font-light"> I am looking to </p>

            {/* div for 4 option */}
            <div className="flex font-semibold gap-8 pt-4">
              {/* 1 */}
              <p
                className="border border-black px-4 py-1 rounded-2xl"
                onClick={(e) => {
                  e.target.classList.toggle("bg-customBlue");
                  e.target.classList.toggle("text-white");
                }}>
                Start a new project
              </p>
              {/* 2 */}
              <p
                className="border border-black px-4 py-1 rounded-2xl"
                onClick={(e) => {
                  e.target.classList.toggle("bg-customBlue");
                  e.target.classList.toggle("text-white");
                }}>
                Revamp Existing Development
              </p>
              {/* 3 */}
              <p
                className="border border-black px-4 py-1 rounded-2xl"
                onClick={(e) => {
                  e.target.classList.toggle("bg-customBlue");
                  e.target.classList.toggle("text-white");
                }}>
                Consultation
              </p>
              {/* 4 */}
              <p
                className="border border-black px-4 py-1 rounded-2xl"
                onClick={(e) => {
                  e.target.classList.toggle("bg-customBlue");
                  e.target.classList.toggle("text-white");
                }}>
                Dedicated Team
              </p>
            </div>

            {/* div for 11 option */}
            <div className="font-semibold">
              <p className="pt-10 font-light"> Service I need </p>
              {/* having 5 optioin */}
              <div className="flex gap-5 pt-4">
                {/* 1 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  UI UX Design
                </p>
                {/* 2 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Web Development
                </p>
                {/* 3 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Quality Assurance
                </p>
                {/* 4 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Mobile Development
                </p>
                {/* 5 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Mobile D
                </p>
              </div>

              {/*Second having 4 optioin */}
              <div className="flex gap-4 pt-4">
                {/* 1 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Dedicated Teams
                </p>
                {/* 2 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Hybrid Applications Development
                </p>
                {/* 3 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Data Analytics
                </p>
                {/* 4 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  Software Automation
                </p>
              </div>

              {/*Second having 5 optioin */}
              <div className="flex gap-5 pt-4">
                {/* 1 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  No-Code & Low-Code Development
                </p>
                {/* 2 */}
                <p
                  className="border border-black px-4 py-1 rounded-2xl"
                  onClick={(e) => {
                    e.target.classList.toggle("bg-customBlue");
                    e.target.classList.toggle("text-white");
                  }}>
                  AI Embedded Applications
                </p>
              </div>
            </div>

            {/*Parent div => Form (Name ,Email , Estimated Budget and Message) */}
            <div className=" pt-10 ">
              <form>
                <div className="flex justify-start gap-20 items-center">
                  {/* Name */}
                  <label>
                    <p>
                      Names<span className="text-red-600">*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Muhammad Awais "
                      className="w-full bg-customLightGray border-b border-gray-300 p-2 mt-1 focus:outline-none focus:border-blue-500"
                    />
                  </label>

                  {/* Email */}
                  <label>
                    <p>
                      Email<span className="text-red-600">*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="example@xyz.com"
                      className="w-64 border-b bg-customLightGray  p-2 mt-1 focus:outline-none focus:border-blue-500"
                    />
                  </label>

                  {/* Estimated Budget */}
                  <label>
                    <p>
                      Estimated Budget<span className="text-red-600">*</span>
                    </p>
                    <select className="w-full border-b bg-customLightGray p-2 mt-1 focus:outline-none focus:border-blue-500">
                      <option value="<5000 USD"> Please Select</option>
                      <option value="<5000 USD"> Above 5000 USD</option>
                      <option value="5000-10000 USD"> 50000-10000 USD</option>
                      <option value="10000-20000 USD"> 10000-200000 USD</option>
                      <option value="<20000 USD"> Above 20000 USD</option>
                    </select>
                  </label>
                </div>

                {/* Message  */}
                <div className="pt-8">
                  <label>
                    <p>
                      Message<span className="text-red-600">*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Tell us what you're looking for"
                      className="w-4/5 border-b bg-customLightGray focus:outline-none p-2 mt-1 focus:border-blue-500"
                    />
                  </label>
                </div>
                {/* check box  */}
                <div className=" flex gap-2 pt-6">
                  <div className="">
                    <label>
                      <input type="checkbox" />
                    </label>
                  </div>
                  <div>
                    <p> This project requires an NDA</p>
                  </div>
                </div>

                {/* Upload Document  */}
                <div className="pt-6">
                  <p>Upload Document (Optional)</p>

                  <div class="flex items-center pr-5 pt-2 space-x-4">
                    <label
                      for="file-upload"
                      class="border border-gray-400 bg-gray-100 px-4 py-2 rounded cursor-pointer w-full text-gray-600 text-center">
                      Click here to upload file
                    </label>
                    <input id="file-upload" type="file" class="hidden" />
                    <label
                      for="file-upload"
                      class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                      Browse
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* button */}
          <div className="text-center pt-14">
            <button
              className="bg-customBlue border border-customBlue rounded-md h-12 w-48
         hover:bg-white transitoin duration-[1.5s] hover:text-customBlue ">
              Send us a message!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMessage;
