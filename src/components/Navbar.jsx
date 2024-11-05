import React , {useState} from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <nav className="bg-transparent fixed z-10 bg-black text-white w-full  px-8 py-4 ">
      <div className="flex items-center justify-between">
        {/* parent div for Navbar  */}
        <div>
          {" "}
          {/* Logo div  */}
          logo
        </div>
        <div className="flex items-center gap-16">
          {" "}
          {/* Namebar and contect Us button */}
          <div className="space-x-16">
            <Link className="home hover:underline " to="/">
              {" "}
              Home
            </Link>
            <Link className="hover:underline " to="/About Us">
              About Us
            </Link>
            <Link className="hover:underline " to="/Services">
              Services
            </Link>
            <Link className="hover:underline " to="/Projects">
              Projects
            </Link>
            <Link className="hover:underline " to="/Blogs">
              Blogs
            </Link>
            <Link className="hover:underline " to="/Careers">
              Careers
            </Link>
          </div>

          {/* button */}
          <div className="">
            <button className="bg-customBlue rounded-md h-10 w-32 hover:bg-white transitoin duration-[1.5s] hover:text-customBlue ">
              Contect Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
