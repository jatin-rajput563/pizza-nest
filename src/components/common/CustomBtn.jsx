import React from "react";

const CustomBtn = ({ btnClass, btnText }) => {
  return (
    <div>
      <button className={`py-[15px] px-[33.7px] bg-white text-black rounded-xl ${btnClass}`}>{btnText}</button>
    </div>
  );
};

export default CustomBtn;
