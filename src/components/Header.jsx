import React, { useState } from "react";
import { navLinks } from "../utils/helper";
import CustomBtn from "../components/common/CustomBtn";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="bg-[#00243C] text-white py-6 w-full relative z-50">
      <div className="container mx-auto px-4 max-w-[1140px] flex items-center justify-between">
        <a href="/" className="font-semibold text-lg z-10">
          Pizza Nest
        </a>
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-base">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-gray-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <CustomBtn btnClass={"capitalize "} btnText={"Contact Us"} />
        </div>
        <div
          onClick={toggleNavbar}
          className="lg:hidden flex flex-col gap-[5px] z-20 cursor-pointer"
        >
          <span
            className={`w-[30px] h-[5px] bg-white rounded transition-all ${
              open ? "rotate-[40deg] origin-left" : ""
            }`}
          ></span>
          <span
            className={`w-[30px] h-[5px] rounded transition-all ${
              open ? "bg-transparent" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-[30px] h-[5px] bg-white rounded transition-all ${
              open ? "-rotate-[44deg] origin-left" : ""
            }`}
          ></span>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-[#00243C] flex flex-col items-center justify-center gap-6 text-lg font-semibold transition-all duration-300 lg:hidden ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-gray-300"
            onClick={toggleNavbar}
          >
            {link.label}
          </a>
        ))}
        <CustomBtn />
      </div>
    </header>
  );
};

export default Header;
