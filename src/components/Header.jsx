import React, { useEffect, useState } from "react";
import { nav_Links } from "../utils/helper";
import CustomBtn from "../components/common/CustomBtn";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 pb-[12px] sm:pb-4 md:pb-5 lg:pb-[22px] w-full relative z-50 px-4">
      <div className="container mx-auto max-w-[1140px] flex items-center justify-between">
        <a
          href="/"
          className="font-medium text-[25px] sm:text-[28px] md:text-[34px] z-10 bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent"
        >
          Pizza Nest
        </a>
        <ul className="hidden lg:flex items-center gap-6 font-semibold text-base">
          {nav_Links.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                className="relative z-10 text-base leading-[160%] text-muted-gray transition-all duration-300 
                   group-hover:bg-clip-text group-hover:text-transparent 
                   group-hover:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)]"
              >
                {link.label}
              </a>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)]"></span>
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
        <CustomBtn btnClass={"capitalize"} btnText={"Contact Us"} />
      </div>
    </header>
  );
};

export default Header;
