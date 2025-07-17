import React from "react";
import CustomHeading from "./common/CustomHeading";
import CustomDescription from "./common/CustomDescription";
import CustombBtn from "./common/CustomBtn";

const Craving = () => {
  return (
    <>
      <div className="sm:h-[430px] h-[366px] py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] bg-[url(../src/assets/images/png/Craving-bg-img.png)] bg-cover bg-no-repeat bg-center">
        <div className="max-w-[1440px] mx-auto lg:px-4">
          <CustomHeading
            headClass="text-white max-w-[750px] mx-auto text-center lowercase"
            spanClass="capitalize"
            spanText="Craving"
            headText=" something cheesy, spicy, or just straight-up delicious?"
          />
          <CustomDescription
            DescClass="max-w-[465px] text-white text-center mx-auto pt-4 text-[#E8E8E8] leading-[160%]"
            descText="Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time."
          />
          <div className="flex gap-6 mx-auto justify-center mt-8">
            <CustombBtn btnClass=" !px-[18px] !py-[8px] sm:!px-[26px] sm:!py-[12px] md:!px-[32.7px] md:!py-[15px]" btnText="Order Now" />
            <CustombBtn
              btnClass={
                "!bg-none max-sm:w-full btn-blur-opacity-1 !px-[16px] !py-[8px] sm:!px-[26px] sm:!py-[12px] md:!px-[31.4px] md:!py-[15.1px] border !border-white  active:scale-90 relative z-10 duration-300 text-base font-semibold rounded-xl cursor-pointer text-white !leading-[137%]"
              }
              btnText="View Full Menu"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Craving;
