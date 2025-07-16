import React from "react";

const CustomBtn = ({ btnClass, btnText }) => {
  return (
    <div>
      <button
        className={`py-[15px] px-[32.7px] bg-prime text-white rounded-xl ${btnClass}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CustomBtn;
