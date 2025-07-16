import React from "react";
import { Gallery_Data } from "../utils/helper";

const Gallery = () => {
  const widthClasses = [
    "max-w-[267px]", // 1
    "max-w-[558px]", // 2
    "max-w-[267px]", // 3
    "max-w-[267px]", // 4
    "max-w-[340px]", // 5
    "max-w-[194px]", // 6
    "max-w-[267px]", // 7
  ];

  const heightClasses = [
    "h-[291px]", // 1
    "h-[329px]", // 2
    "h-[235px]", // 3
    "h-[248px]", // 4
    "h-[210px]", // 5
    "h-[210px]", // 6
    "h-[304px]", // 7
  ];

  const firstRow = Gallery_Data.slice(0, 3);
  const secondRow = Gallery_Data.slice(3);

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-[1440px] mx-auto px-4 space-y-6">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className={`w-full ${widthClasses[index]} ${heightClasses[index]} rounded-[12px] overflow-hidden`}
            >
              <img
                src={item.Image}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {secondRow.map((item, index) => {
            const overallIndex = index + 3;

            // Add conditional negative margin
            const applyNegativeMargin =
              overallIndex === 3
                ? "-mt-[38px]"
                : overallIndex === 6
                ? "-mt-[93px]"
                : "";

            return (
              <div
                key={overallIndex}
                className={`w-full ${widthClasses[overallIndex]} ${heightClasses[overallIndex]} rounded-[12px] overflow-hidden ${applyNegativeMargin}`}
              >
                <img
                  src={item.Image}
                  alt={`gallery-${overallIndex}`}
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
