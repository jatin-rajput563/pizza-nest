import React from "react";
import { Delicious_Data } from "../utils/helper";
import pizzaPrice from "../assets/images/svg/pizza-price.svg";
import tomato from "../assets/images/png/right-tomato-img.png";
import CustomBtn from "../components/common/CustomBtn";

const Delicious = () => {
  return (
    <>
      <div className="py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] relative ">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <div className="flex max-lg:flex-wrap justify-center items-center gap-4 sm:gap-6">
            {Delicious_Data.map((item, index) => (
              <div
                key={index}
                className="bg-[url(../src/assets/images/png/Delicious-bg-1.png)] max-w-[558px] w-full h-[220px] sm:h-[319px] rounded-[12px] relative sm:pb-[63px] pb-[33px] sm:pt-[60px] pt-[30px] pl-[32px] overflow-hidden"
              >
                <img
                  className="absolute right-0 pointer-events-none -bottom-[10px] max-w-[180px] sm:max-w-[385px]"
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
                <p className="text-xl sm:text-2xl md:text-[28px] leading-[160%] text-prime">
                  {item.heading}
                </p>
                <h2 className="text-white uppercase font-semibold text-2xl sm:text-3xl md:text-[36px] leading-[160%] ">
                  {item.name}
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-[160%] text-[#E9E9E9]">
                  {item.time}
                </p>
                <CustomBtn
                  btnClass="font-semibold !py-[6px] !px-[12px] sm:!py-[8px] sm:!px-[14px] md:!py-[9px] md:!px-[16.1px] max-sm:!rounded-[6px] mt-[16px]"
                  btnText={"Order Now"}
                />
              </div>
            ))}
          </div>
        </div>
        <img
          className="absolute -bottom-[100px] sm:-bottom-[150px] -right-[120px] sm:-right-[232px] max-w-[209px] sm:max-w-[409px] w-full animate-spinScale"
          src={tomato}
          alt="tomato-img"
        />
      </div>
    </>
  );
};

export default Delicious;
