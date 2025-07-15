import React from "react";
import { Delicious_Data } from "../utils/helper";
import pizzaPrice from "../assets/images/svg/pizza-price.svg";
import tomato from "../assets/images/png/right-tomato-img.png";
import CustomBtn from "../components/common/CustomBtn";

const Delicious = () => {
  return (
    <>
      <div className="py-[100px] relative">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex max-lg:flex-wrap justify-center items-center gap-4 sm:gap-6">
            {Delicious_Data.map((item, index) => (
              <div
                key={index}
                className="bg-[url(../src/assets/images/png/Delicious-bg-1.png)] w-[558px] rounded-[12px] relative sm:pb-[63px] pb-[33px] sm:pt-[60px] pt-[30px] pl-[32px] overflow-hidden"
              >
                <img
                  className="absolute right-0 -bottom-[10px] max-w-[180px] sm:max-w-[385px]"
                  src={item.Image}
                  alt="piza-images"
                />
                <img
                  className="absolute 
                  top-[53px] right-[8px] max-w-[100px]
                  sm:top-[23px] sm:max-w-[200px]"
                  src={pizzaPrice}
                  alt="pizza-price"
                />
                <p className="text-xl sm:text-2xl md:text-[28px] leading-[160%] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
                  {item.heading}
                </p>
                <h2 className="text-white uppercase font-semibold text-2xl sm:text-3xl md:text-[36px] leading-[160%] ">
                  {item.name}
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-[160%] text-[#E9E9E9]">
                  {item.time}
                </p>
                <CustomBtn
                  btnClass="font-semibold !py-[9px] !px-[16.1px] mt-[16px]"
                  btnText={"Order Now"}
                />
              </div>
            ))}
          </div>
        </div>
        <img
          className="absolute -bottom-[150px] -right-[232px] animate-spinScale"
          src={tomato}
          alt="tomato-img"
        />
      </div>
    </>
  );
};

export default Delicious;
