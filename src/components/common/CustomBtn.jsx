import React from "react";

const CustomBtn = ({ btnClass, btnText }) => {
  return (
    <div>
      <button
        className={`py-[15px] px-[33.7px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] text-white rounded-xl ${btnClass}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CustomBtn;
