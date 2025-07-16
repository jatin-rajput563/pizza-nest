import React from "react";
import CustomDescription from "./common/CustomDescription";
import { QUICK_LINKS, SOCIAL_ICON, SUPPORT_LINKS } from "../utils/helper";
import CustomHeading from "./common/CustomHeading";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="px-5 pt-[20px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex max-md:flex-col justify-between gap-10 md:gap-20">
            <div className="md:max-w-[400px] lg:max-w-[558px] mb-[5px]">
              <CustomHeading
                headClass={
                  "text-prime-gradient font-medium !text-[42px] !leading-[63px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent "
                }
                headText="Pizza Nest"
              />
              <CustomDescription
                DescClass="text-[#575757] pt-3 !text-base !leading-[160%]"
                descText=" At Pizza Nest, we believe every slice should bring joy. Whether
                you're ordering for one or feeding a crowd, our pizzas are baked
                with care, topped with love, and delivered hot to your doorstep.
                You just taste the difference."
              />
              <div className="flex items-center gap-5 mt-4 sm:mt-6">
                {SOCIAL_ICON.map((item, index) => (
                  <a
                    key={index}
                    className="size-[52px] bg-prime rounded-full flex justify-center items-center"
                    href={item.socialLink}
                    target="_blank"
                  >
                    {<item.icon />}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex max-w-[312px] gap-2 w-full justify-between">
              <ul>
                <li className="text-[#010101] leading-[26px] mb-1">
                  Quick Links
                </li>
                {QUICK_LINKS.map((link, i) => {
                  const path =
                    link.toLowerCase() === "home"
                      ? "/"
                      : "/" + link.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <li key={i} className="relative group mt-2 link-hover">
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `relative text-base 
              ${
                isActive
                  ? "text-prime-gradient after:w-full"
                  : "text-muted-gray"
              }
              after:content-[''] after:absolute after:left-0 after:bottom-[4px] after:h-[1px] after:rounded-full
              after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] max-w-max
              after:w-0 after:transition-all after:duration-300 group-hover:after:w-full `
                        }
                      >
                        {link}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <li className="text-[#010101] leading-[160%] mb-1">Support</li>
                {SUPPORT_LINKS.map((link, i) => (
                  <li className="relative group mt-2 link-hover" key={i}>
                    {" "}
                    <a
                      className='text-muted-gray leading-[160%] relative text-base group-hover:text-prime-gradient after:content-[""] after:absolute after:left-0 after:bottom-[4px] after:h-[1px] after:rounded-full after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] max-w-max
                  after:w-0 after:transition-all after:duration-300 group-hover:after:w-full'
                      href=""
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-3 border-[#D1D1D166] w-full mt-6 sm:mt-8"></div>
          <CustomDescription className="text-[#575757] max-sm:text-sm py-4 text-center">
            Copyright Pizza Nest © 2025, All rights reserved{" "}
          </CustomDescription>
        </div>
      </div>
    </>
  );
};

export default Footer;
