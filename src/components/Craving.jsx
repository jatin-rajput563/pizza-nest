import React from "react";
import CustomHeading from "./common/CustomHeading";
import CustomDescription from "./common/CustomDescription";
import CustombBtn from "./common/CustomBtn";

const Craving = () => {
  return (
    <>
      <div className="h-[430px] py-[80px] bg-[url(../src/assets/images/png/Craving-bg-img.png)] bg-cover bg-no-repeat bg-center">
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
            <CustombBtn btnClass="!px-[32.7px]" btnText="Order Now" />
            <CustombBtn btnText="View Full Menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Craving;
