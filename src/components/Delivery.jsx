import React from "react";
import CustomHeading from "./common/CustomHeading";
import CustomDescription from "./common/CustomDescription";
import CustombBtn from "./common/CustomBtn";
import { CircleTick } from "../utils/Icons";
import deliveryImg from "../assets/images/png/delivery-img.png";

const Delivery = () => {
  return (
    <>
      <div className="py-[30px] sm:py-[60px] md:py-[100px] bg-[url(./assets/images/png/bestsleer-bg-layer.png)] bg-cover bg-no-repeat bg-center">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-center lg:justify-between -mx-3">
            <div className="w-full lg:w-1/2 px-3 text-center lg:text-left">
              <div className="flex items-center gap-[6px] pt-[10px] justify-center lg:justify-start">
                <p className="font-bold text-lg leading-[120%] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
                  Food Delivery
                </p>
                <div className="gradient-border w-[60px] h-[1px]"></div>
              </div>
              <CustomHeading
                headClass="max-w-[463px] pt-[8px] text-2xl sm:text-3xl md:text-4xl mx-auto lg:mx-0"
                headText="Fast, Fresh & Always On Time"
              />
              <CustomDescription
                DescClass="max-w-[495px] leading-[160%] text-[#373737] text-sm sm:text-base mx-auto lg:mx-0"
                descText="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away."
              />
              <div className="max-lg:justify-center max-lg:flex">
                <div className="flex flex-col gap-[8px]">
                  {[
                    "30-Minute Delivery Promise",
                    "Hygienic, Contactless Delivery",
                    "Real-time Order Tracking",
                    "Eco-Friendly Packaging",
                  ].map((text, index) => (
                    <div
                      className="flex items-center gap-[6px] mt-3"
                      key={index}
                    >
                      <CircleTick />
                      <CustomDescription
                        DescClass="leading-[160%] text-[#373737] text-sm sm:text-base"
                        descText={text}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <CustombBtn
                  btnClass="mt-[24px] !px-[32.7px]"
                  btnText="Order Now"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-8 lg:mb-0 flex justify-center">
              <img
                className="w-full max-w-[612px] h-auto"
                src={deliveryImg}
                alt="delivery-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
