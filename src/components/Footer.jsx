import React from "react";
import CustomDescription from "./common/CustomDescription";
import { QUICK_LINKS, SOCIAL_ICON, SUPPORT_LINKS } from "../utils/helper";
import CustomHeading from "./common/CustomHeading";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-5 pt-[20px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px]">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex max-md:flex-col justify-between gap-10 md:gap-20">
          <div className="md:max-w-[400px] lg:max-w-[558px] mb-[5px]">
            <CustomHeading
              headClass="text-prime-gradient font-medium !text-[42px] !leading-[63px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent"
              headText="Pizza Nest"
            />
            <CustomDescription
              DescClass="text-[#575757] pt-3 !text-base !leading-[160%]"
              descText="At Pizza Nest, we believe every slice should bring joy. Whether you're ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference."
            />
            <div className="flex items-center gap-5 mt-4 sm:mt-6">
              {SOCIAL_ICON.map((item, index) => (
                <a
                  key={index}
                  className="size-[52px] bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] rounded-full flex justify-center items-center"
                  href={item.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
          <div className="flex max-w-[312px] gap-2 w-full justify-between">
            <ul>
              <li className="text-[#010101] leading-[26px] mb-1 font-semibold">
                Quick Links
              </li>
              {QUICK_LINKS.map((link, i) => (
                <li key={i} className="relative group mt-2">
                  <NavLink
                    to={link.href}
                    className="relative z-10 text-base leading-[160%] text-muted-gray transition-all duration-300 
                    group-hover:bg-clip-text group-hover:text-transparent 
                    group-hover:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] 
                    after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[2px] after:w-0 
                    after:transition-all after:duration-300 group-hover:after:w-full 
                    after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)]"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <ul>
              <li className="text-[#010101] leading-[160%] mb-1 font-semibold">
                Support
              </li>
              {SUPPORT_LINKS.map((link, i) => (
                <li className="relative group mt-2" key={i}>
                  <a
                    href="#"
                    className="relative z-10 text-base leading-[160%] text-muted-gray transition-all duration-300 
                    group-hover:bg-clip-text group-hover:text-transparent 
                    group-hover:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] 
                    after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[2px] after:w-0 
                    after:transition-all after:duration-300 group-hover:after:w-full 
                    after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border border-[#D1D1D166] w-full mt-6 sm:mt-8"></div>
        <CustomDescription
          DescClass="text-[#575757] max-sm:text-sm py-4 text-center"
          descText="Copyright Pizza Nest © 2025, All rights reserved "
        />
      </div>
    </div>
  );
};

export default Footer;
