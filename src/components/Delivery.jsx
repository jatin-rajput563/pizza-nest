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
          <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-between -mx-3">
            <div className="w-full lg:w-1/2 px-3 text-left">
              <div className="flex items-center gap-[6px] pt-[10px]">
                <p className="font-bold text-lg leading-[120%] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
                  Food Delivery
                </p>
                <div className="gradient-border w-[60px] h-[1px]"></div>
              </div>
              <CustomHeading
                headClass="max-w-[463px] pt-[8px] text-2xl sm:text-3xl md:text-4xl"
                headText="Fast, Fresh & Always On Time"
              />
              <CustomDescription
                DescClass="max-w-[495px] leading-[160%] text-[#373737] text-sm sm:text-base"
                descText="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away."
              />
              <div className="flex flex-col gap-[8px] mt-4">
                {[
                  "30-Minute Delivery Promise",
                  "Hygienic, Contactless Delivery",
                  "Real-time Order Tracking",
                  "Eco-Friendly Packaging",
                ].map((text, index) => (
                  <div className="flex items-center gap-[6px]" key={index}>
                    <CircleTick />
                    <CustomDescription
                      DescClass="leading-[160%] text-[#373737] text-sm sm:text-base"
                      descText={text}
                    />
                  </div>
                ))}
              </div>
              <CustombBtn
                btnClass="mt-[24px] !px-[32.7px]"
                btnText="Order Now"
              />
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-8 lg:mb-0">
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
