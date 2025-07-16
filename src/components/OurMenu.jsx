import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Line } from "../utils/Icons";
import CustomHeading from "./common/CustomHeading";
import { Tabs_Data } from "../utils/helper";

const OurMenu = () => {
  const menuItems = Tabs_Data;
  const categories = Object.keys(menuItems);

  return (
    <div className=" pt-[100px] pb-[300px] bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex justify-center items-center gap-1.5">
          <Line />
          <h4 className="text-lg font-bold leading-[22px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
            Our Menu
          </h4>
          <div className="rotate-180">
            <Line />
          </div>
        </div>
        <CustomHeading
          headClass="text-center mx-auto pt-2 max-w-[568px]"
          headText="Explore Flavours, Pick Your Cravings"
        />
        <Tabs>
          <TabList className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat, idx) => (
              <Tab
                key={idx}
                className="cursor-pointer react-tabs__tab !w-[170px] !h-[42px] !rounded-[12px] !border !border-[#C1C1C1] !px-4 !py-2 text-center hover:border-orange-400 transition-all duration-150 !font-semibold !text-base !text-[#C1C1C1]"
                selectedClassName="bg-orange-500 !text-white !border-orange-500 "
              >
                {cat}
              </Tab>
            ))}
          </TabList>
          {categories.map((cat, index) => (
            <TabPanel key={index}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {menuItems[cat].map((item, index) => (
                  <div key={index} className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-[364px]"
                    />
                    <div className="shadow-lg max-w-[324px] p-5 border bg-white border-[#EBEBEB] rounded-[8px] absolute -bottom-[160px] left-[20px]">
                      <p className="text-orange-500 font-semibold text-2xl leading-[140%] text-center">
                        {item.price}
                      </p>
                      <h3 className="font-semibold text-2xl leading-[140%] text-center pt-[2px]">
                        {item.name}
                      </h3>
                      <p className="max-w-[284px] leading-[160%] text-center mx-auto text-[#5C5C5C]">
                        {item.desc}
                      </p>
                      <div className="pt-2 mx-auto flex justify-center">
                        <item.icon />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default OurMenu;
