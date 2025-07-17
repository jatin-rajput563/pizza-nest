import React from "react";

const CustomBtn = ({ btnClass, btnText }) => {
  return (
    <div>
      <button
        className={`py-[15px] px-[32.7px] bg-prime cursor-pointer hover:scale-105 transition-all duration-300 text-white rounded-xl ${btnClass}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CustomBtn;
