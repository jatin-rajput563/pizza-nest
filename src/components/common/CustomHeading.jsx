import React from "react";

const CustomHeading = ({ headText, headClass }) => {
  return (
    <div>
      <h2
        className={`font-semibold text-5xl leading-[120%] capitalize ${headClass}`}
      >
        {headText}
      </h2>
    </div>
  );
};

export default CustomHeading;
