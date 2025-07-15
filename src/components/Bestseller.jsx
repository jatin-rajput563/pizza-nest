import React from "react";
import CustomHeading from "./common/CustomHeading";
import CustomDescription from "./common/CustomDescription";
import { Bestsleller_data } from "../utils/helper";
import CustomBtn from "./common/CustomBtn";

const Bestseller = () => {
  return (
    <>
      <div className="bg-[url(./assets/images/png/bestsleer-bg-layer.png)] bg-cover bg-no-repeat bg-center py-16">
        <div className="max-w-[1140px] px-4 mx-auto">
          <div className="flex items-center justify-center pb-2 gap-3 flex-wrap">
            <div className="gradient-border w-[60px] h-[1px]"></div>
            <p className="font-bold text-lg bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
              Best Sellers
            </p>
            <div className="custom-gradient-border w-[60px] h-[1px]"></div>
          </div>
          <CustomHeading
            headClass="text-center text-2xl sm:text-3xl md:text-4xl"
            headText="Pizzas You Can’t Say No To"
          />
          <CustomDescription
            DescClass="text-center pt-4 max-w-2xl mx-auto text-sm sm:text-base"
            descText="Tried, tested, and totally loved. These pizzas are always a crowd favorite."
          />
          <div className="flex max-[1024px]:flex-wrap justify-center items-stretch gap-6 mt-[80px]">
            {Bestsleller_data.map((items, index) => (
              <div
                key={index}
                className="w-full max-w-[267px] flex flex-col items-center shadow-lg p-6 border border-[#0000000F] rounded-tr-[12px] rounded-bl-[12px] bg-white max-[1024px]:mt-[50px]"
              >
                <img
                  className="size-[130px] rounded-full -translate-y-[65%]"
                  src={items.Image}
                  alt="pizza-img"
                />
                <p className="font-semibold text-2xl sm:text-3xl leading-[140%] text-center bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent pt-5 -mt-20">
                  {items.price}
                </p>
                <p className="font-semibold text-xl sm:text-2xl text-center leading-[140%] whitespace-nowrap">
                  {items.name}
                </p>
                <p className="max-w-[219px] text-center leading-[160%] text-[#5C5C5C] text-sm sm:text-base">
                  {items.details}
                </p>
                <CustomBtn
                  btnClass="mt-3 !py-[9px] !px-[16.7px]"
                  btnText="Order Now"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
