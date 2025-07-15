import React from "react";
import CustomHeading from "./common/CustomHeading";

const Bestseller = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-[1140px] px-4 mx-auto ">
          <div className="flex items-center justify-center pb-[8px]">
            <div className="gradient-border w-[60px] h-[1px]"></div>
            <p className="font-bold text-lg leading-[120%] text-center bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
              Best Sellers
            </p>
            <div className="custom-gradient-border w-[60px] h-[1px]"></div>
          </div>
          <CustomHeading
            headClass="text-center"
            headText="Pizzas You Can’t Say No To"
          />
          
        </div>
      </div>
    </>
  );
};

export default Bestseller;
