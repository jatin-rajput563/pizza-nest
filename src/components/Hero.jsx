import React from "react";
import { Hero_Data } from "../utils/helper";
import CustomBtn from "../components/common/CustomBtn";
import PriceBadge from "../assets/images/svg/price-badge.svg";
import LotiLine from "../assets/images/svg/loti-line-svg.svg";
import AboutNest from "./AboutNest";
const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[url(./assets/images/png/bg-layer.png)] bg-center bg-no-repeat bg-cover"
    >
      <div className="md:px-[40px] px-6 2xl:px-0">
        <div className="mx-auto max-w-[1360px] rounded-3xl max-md:px-4 bg-[url(./assets/images/png/hero-bg.png)] pt-[40px] pb-[40px] sm:pt-[80px] sm:pb-[120px] md:pt-[100px] md:pb-[150px] lg:pt-[131px] lg:pb-[192px] md:pl-[110px] relative">
          {Hero_Data.map((item, index) => (
            <div key={index}>
              <h1 className="text-white max-w-[644px] font-bold text-4xl lg:text-[64px] leading-[120%] ff-nunito">
                {item.heading}
              </h1>
              <p className="max-w-[588px] mt-4 leading-[160%] text-[#EFEFEF]">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <CustomBtn btnClass="whitespace-nowrap" btnText={"Order Now"} />
                <CustomBtn
                  btnClass="backdrop-blur-[30.9px] whitespace-nowrap bg-black"
                  btnText={"View Full Menu"}
                />
              </div>
              <div className="text-white flex gap-4 pt-[24px]">
                <div className="max-w-[140px] w-full">
                  <p className="text-center">{item.number1}</p>
                  <p className="text-center">{item.numberText1}</p>
                </div>
                <div className="bg-white h-[39px] w-[0.5px] items-center flex justify-center mt-1"></div>
                <div className="max-w-[145px] w-full">
                  <p className="text-center">{item.number2}</p>
                  <p className="text-center">{item.numberText2}</p>
                </div>
              </div>
            </div>
          ))}
          <img
            className="absolute top-[137px] right-[283px]"
            src={PriceBadge}
            alt="price-badge"
          />
          <p className="absolute">₹ 299</p>
          <img
            className="absolute top-[173px] right-[394px]"
            src={LotiLine}
            alt="lotiline"
          />
        </div>
      </div>
      <AboutNest />
    </div>
  );
};

export default Hero;
