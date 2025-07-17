import React from "react";
import CustomDescription from "./common/CustomDescription";
import CustomHeading from "./common/CustomHeading";
import CustomBtn from "./common/CustomBtn";
import { ArrowIcon, Line } from "../utils/Icons";
import { HOW_IT_WORKS_DATA } from "../utils/helper";

const PerfectPizza = () => {
  return (
    <>
      <div id="hlo" className="px-5 py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1140px] mx-auto">
          <div className=" flex justify-center items-center gap-1.5">
            <div className="">
              <Line />
            </div>
            <h4 className="text-prime text-lg font-bold leading-[22px]">
              How It Works
            </h4>
            <div className=" rotate-[180deg]">
              <Line />
            </div>
          </div>
          <CustomHeading
            headClass=" text-center mx-auto max-w-[569px]  mt-2"
            headText="Your Perfect Pizza in Just 3 Easy Steps!"
          />
          <div className="pt-10 relative flex flex-wrap justify-center items-center gap-20 min-[776px]:gap-5 lg:gap-6 ">
            <div className="absolute max-[776px]:rotate-90 top-[34%] min-[1180px]:left-[279px] min-[776px]:top-[100px]">
              <ArrowIcon />
            </div>
            <div className="absolute max-[776px]:rotate-90 max-[776px]:block max-[1180px]:hidden top-[50%] min-[776px]:right-[279px] max-[776px]:top-[68%] min-[1180px]:top-[100px]">
              <ArrowIcon />
            </div>
            {HOW_IT_WORKS_DATA.map((item, index) => (
              <div
                className="max-w-[358px] lg:max-w-[364px] w-full p-4 lg:p-6"
                key={index}
              >
                <div className="bg-[#FCECE2] size-[70px] rounded-full flex items-center justify-center mx-auto">
                  {<item.icon />}
                </div>
                <h3 className="leading-[150%] text-2xl font-semibold text-center mt-3">
                  {item.title}
                </h3>
                <p className="text-center !text-[#373737] pt-2 !leading-[26px]">
                  {item.description}
                </p>
                <div className="flex justify-center">
                  <CustomBtn
                    btnClass="!py-2.5 !mt-3 !px-4"
                    btnText="View Menu"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfectPizza;
