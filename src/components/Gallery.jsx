import React from "react";
import CustomHeading from "./common/CustomHeading";
import { Line } from "../utils/Icons.jsx";
import { Gallery_Data } from "../utils/helper.js";
import CustomBtn from "./common/CustomBtn.jsx";

import LeftPizza from "../assets/images/png/left-pizza.png";

const Gallery = () => {
  return (
    <>
      <div className="px-5 py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px] relative">
        <div className="max-w-[1140px] w-full mx-auto flex justify-center items-center flex-col">
          <div className=" flex justify-center items-center gap-1.5 mb-2">
            <div className="">
              <Line />
            </div>
            <h4 className="text-prime-gradient text-lg font-bold leading-[22px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
              Our Gallery
            </h4>
            <div className=" rotate-[180deg]">
              <Line />
            </div>
          </div>
          <CustomHeading
            headClass="text-center mt-2 !leading-[120%] mb-10 max-w-[550px] w-full"
            headText="A Glimpse Into Our Pizza World"
          />
          <div className="flex xl:flex-row flex-col items-center md:gap-6 gap-4">
            <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
              {Gallery_Data.slice(0, 2).map((image, i) => (
                <img
                  className="object-cover rounded-xl"
                  key={i}
                  src={image}
                  alt="image"
                />
              ))}
            </div>
            <div className="flex items-center md:gap-6 gap-4 w-full flex-col max-w-[558px]">
              {Gallery_Data.slice(2, 3).map((image, i) => (
                <img
                  className="object-cover rounded-xl"
                  key={i}
                  src={image}
                  alt="image"
                />
              ))}
              <div className="xl:flex hidden justify-center items-center w-full md:gap-6 gap-4">
                {Gallery_Data.slice(3, 5).map((image, i) => (
                  <img
                    className="object-cover rounded-xl w-full h-auto"
                    key={i}
                    src={image}
                    alt="image"
                  />
                ))}
              </div>
            </div>
            <div className="xl:flex hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
              {Gallery_Data.slice(5, 8).map((image, i) => (
                <img
                  className="object-cover rounded-xl"
                  key={i}
                  src={image}
                  alt="image"
                />
              ))}
            </div>
            <div className="max-sm:hidden flex xl:hidden justify-center items-center w-full md:gap-6 gap-4">
              {Gallery_Data.slice(3, 5).map((image, i) => (
                <img
                  className="object-cover rounded-xl"
                  key={i}
                  src={image}
                  alt="image"
                />
              ))}
            </div>
            <div className="flex sm:hidden justify-center items-center w-full md:gap-6 gap-4">
              {Gallery_Data.slice(3, 4).map((image, i) => (
                <img
                  className="object-cover w-full rounded-xl"
                  key={i}
                  src={image}
                  alt="image"
                />
              ))}
            </div>
            <div className="flex xl:hidden md:gap-6 gap-4 justify-center items-center">
              <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
                {Gallery_Data.slice(0, 2).map((image, i) => (
                  <img
                    className="object-cover rounded-xl"
                    key={i}
                    src={image}
                    alt="image"
                  />
                ))}
              </div>
              <div className="flex xl:hidden items-center md:gap-6 gap-4 flex-col w-full max-w-[267px]">
                {Gallery_Data.slice(5, 8).map((image, i) => (
                  <img
                    className="object-cover rounded-xl"
                    key={i}
                    src={image}
                    alt="image"
                  />
                ))}
              </div>
            </div>
          </div>
          <CustomBtn
            btnClass="mt-[10px] sm:mt-[20px] md:mt-[32px] !px-[33.2px]"
            btnText="View More"
          />
        </div>
        <img
          className="absolute right-0 -top-[47px] sm:top-0 w-full max-w-[90px] sm:max-w-[150px] pointer-events-none animate-pizzaFloat"
          src={LeftPizza}
          alt="left-pizza"
        />
      </div>
    </>
  );
};

export default Gallery;
