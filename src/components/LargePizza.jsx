import React from "react";
import CustomHeading from "./common/CustomHeading";
import CustomBtn from "./common/CustomBtn";
import LargePizzaImg from "../assets/images/png/tasty-pizza-img.png";

const LargePizza = () => {
  return (
    <>
      <div className="bg-[url(../src/assets/images/png/tasty-bg-img.png)] bg-cover px-3">
        <div className="max-w-[1194px] mx-auto">
          <div className="pt-[17px] pb-[33px] flex max-sm:flex-wrap justify-center gap-5 lg:gap-[44px] items-center">
            <div className="md:max-w-[400px] lg:max-w-[597px]">
              <p className="bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent pb-0.5 font-semibold text-2xl md:text-[28px] leading-[140%] ">
                Buy 1 Pizza, Get 1 Free!
              </p>
              <CustomHeading
                headClass="text-white !text-[30px] md:!text-[40px] lg:!text-[56px]"
                headText="Medium & Large pizzas"
              />

              <p className="bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent font-semibold text-2xl md:text-[28px] leading-[140%] pt-1 w-full">
                Limited Offer
              </p>
              <CustomBtn
                btnClass="!px-[32.7px] mt-3"
                btnText="Order Now"
              />
            </div>
            <div className="relative flex items-center">
              <img
                className="max-w-[400px] pointer-events-none lg:max-w-[553px] w-full"
                src={LargePizzaImg}
                alt="pizza-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargePizza;
