import React from "react";
import CustomHeading from "./common/CustomHeading";
import CustomDescription from "./common/CustomDescription";
import { Bestsleller_data } from "../utils/helper";
import CustomBtn from "./common/CustomBtn";
import { Line } from "../utils/Icons.jsx";

const Bestseller = () => {
  return (
    <>
      <div
        id="bestsller"
        className="bg-[url(./assets/images/png/bestsleer-bg-layer.png)] bg-cover bg-no-repeat bg-center py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px]"
      >
        <div className="max-w-[1140px] px-4 xl:px-0 mx-auto">
          <div className="flex items-center justify-center pb-2 gap-3 flex-wrap">
            <div className=" flex justify-center items-center gap-1.5 mb-2">
              <div className="">
                <Line />
              </div>
              <h4 className="text-prime-gradient text-lg font-bold leading-[22px] text-prime">
                Best Sellers
              </h4>
              <div className=" rotate-[180deg]">
                <Line />
              </div>
            </div>
          </div>
          <CustomHeading
            headClass="text-center text-2xl sm:text-3xl md:text-4xl"
            headText="Pizzas You Can’t Say No To"
          />
          <CustomDescription
            DescClass="text-center pt-4 max-w-2xl mx-auto text-sm sm:text-base"
            descText="Tried, tested, and totally loved. These pizzas are always a crowd favorite."
          />
          <div className="flex max-[1024px]:flex-wrap justify-center items-stretch gap-6 mt-[40px] sm:mt-[80px] md:mt-[110px]">
            {Bestsleller_data.map((items, index) => (
              <div
                key={index}
                className="w-full max-w-[267px] min-h-[297px] sm:min-h-[329px] flex flex-col items-center p-6 border border-[#0000000F] rounded-tr-[12px] rounded-bl-[12px] bg-white max-[1024px]:mt-[50px]"
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
                  btnClass="mt-3 !py-[6px] !px-[12px] sm:!py-[8px] sm:!px-[14px] md:!py-[9px] md:!px-[16.7px]"
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
