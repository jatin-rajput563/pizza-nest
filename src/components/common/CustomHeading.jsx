import React from "react";

const CustomHeading = ({ headText, headClass, spanText, spanClass }) => {
  return (
    <div>
      <h2
        className={`font-semibold text-5xl leading-[120%] capitalize ${headClass}`}
      >
        <span className={`${spanClass}`}>{spanText}</span>
        {headText}
      </h2>
    </div>
  );
};

export default CustomHeading;
