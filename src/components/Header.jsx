import React, { useState } from "react";
import { nav_Links } from "../utils/helper";
import CustomBtn from "../components/common/CustomBtn";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className=" pt-6 pb-[22px] w-full relative z-50 px-4">
      <div className="container mx-auto max-w-[1140px] flex items-center justify-between">
        <a
          href="/"
          className="font-semibold text-[34px] z-10 bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent"
        >
          Pizza Nest
        </a>
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-base">
          {nav_Links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-[#787878] leading-[160%] ">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <CustomBtn btnClass={"capitalize"} btnText={"Contact Us"} />
        </div>
        <div
          onClick={toggleNavbar}
          className="lg:hidden flex flex-col gap-[5px] z-20 cursor-pointer"
        >
          <span
            className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${
              open ? "rotate-[40deg] origin-left" : ""
            }`}
          ></span>
          <span
            className={`w-[30px] h-[5px] rounded transition-all ${
              open
                ? "bg-transparent"
                : "bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)]"
            }`}
          ></span>
          <span
            className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${
              open ? "-rotate-[44deg] origin-left" : ""
            }`}
          ></span>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold transition-all duration-300 lg:hidden ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        {nav_Links.map((link, index) => (
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
