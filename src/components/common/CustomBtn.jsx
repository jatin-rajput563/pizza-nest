import React from "react";

const CustomBtn = ({ btnClass, btnText }) => {
  return (
    <div>
      <button className={`  ${btnClass}`}>{btnText}</button>
    </div>
  );
};

export default CustomBtn;
