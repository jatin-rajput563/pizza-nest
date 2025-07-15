import React from "react";

const CustomDescription = ({ descText, DescClass }) => {
  return (
    <div>
      <p className={`leading-[120%]  ${DescClass}`}>{descText}</p>
    </div>
  );
};

export default CustomDescription;
