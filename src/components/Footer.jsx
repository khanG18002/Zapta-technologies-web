import React from "react";

const Footer = () => {
  return (
    <div className=" bg-customDarkNavy text-white">
      {/*  Parent div have 4 child div  */}
      <div className="flex justify-between    pt-10  px-8 ">
        {/* First div having Company detail  */}
        <div className=" ">
          <div className="h-30 w-30"> Logo </div>
          <div>
            <p className="tracking-tighter font-light text-slate-400 w-[26rem] pt-7">
              ZAPTA Technologies is a leading software design and development
              company working in HealthCare, FinTech, Education, ERP, eCommerce,
              Compliance Management, Telecommunication, MarketPlace, Logistics
              and Supply Chain Management domains. We are specialised in AI
              embedded software solutions and Enterprise Business Solutions.
            </p>
          </div>
        </div>

        {/* Second div having services  */}
        <div className="">
          <h1 className="text-xl font-semibold">Services</h1>
          <div className="font-light text-slate-400 pt-7 space-y-3 w-[10rem] ">
            <p className="hover:text-white duration-[0.2s]">UI UX Design</p>
            <p className="hover:text-white duration-[0.2s]"> Web Development</p>
            <p className="hover:text-white duration-[0.2s]">
              Mobile Development
            </p>
            <p className="hover:text-white duration-[0.2s]">
              Quality Assurance
            </p>
            <p className="hover:text-white duration-[0.2s]">MVP Builder</p>
            <p className="hover:text-white duration-[0.2s]">Dedicated Teams</p>
          </div>
        </div>

        {/* Third div having Quick Links  */}
        <div className="">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <div className="font-light text-slate-400  pt-7 w-[10rem] space-y-3 ">
            <p className="hover:text-white duration-[0.2s]">About Us</p>
            <p className="hover:text-white duration-[0.2s]">Services</p>
            <p className="hover:text-white duration-[0.2s]">Projects</p>
            <p className="hover:text-white duration-[0.2s]">Blogs</p>
            <p className="hover:text-white duration-[0.2s]">Careers</p>
            <p className="hover:text-white duration-[0.2s]">Contact Us</p>
          </div>
        </div>

        {/* Fourth div having Contact Us*/}
        <div className=" w-[16rem] ">
          <h1 className="text-xl font-semibold">Contact Us </h1>
          <div className="font-light text-slate-400  pt-7 w-[10rem] space-y-3 ">
            {/* phone number  */}
            <div className="flex gap-2">
              <img src="./src/assets/images/Phone.svg" alt="" />
              <p className="hover:text-white duration-[0.2s]">
                +1 (480) 920-1123
              </p>
            </div>
            {/* Email */}
            <div className="flex gap-2">
              <img src="./src/assets/images/Email.svg" alt="" />
              <p className="hover:text-white duration-[0.2s]">
                contact@brightlabcode.com
              </p>
            </div>
            {/* Location  */}
            <div className="flex gap-2 w-[13rem] ">
              <img src="./src/assets/images/Location.svg" alt="" />
              <p className="hover:text-white duration-[0.2s]">
              11133 Shady Trail, Dallas, TX 75229, USA              
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* last div have end line and copyright */}
      <div className="pt-16 text-center pb-8">
        <hr className="mx-8" />
        <p className=" text-slate-400  pt-4">
          © 2023 Copyrights ZAPTA Technologies. All rights are reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
