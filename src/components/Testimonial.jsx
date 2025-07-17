import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LeftArrow, Line, RightArrow } from "../utils/Icons";
import pizzaImg from "../assets/images/png/testimonial-pizza-img.png";
import { Testimonials_Avatar, Testimonials_Data } from "../utils/helper";
import CustomHeading from "./common/CustomHeading";

const Testimonial = () => {
  const [activeAvatar, setActiveAvatar] = useState(1);

  return (
    <>
      <div className="py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px] bg-[url(./assets/images/png/bestsleer-bg-layer.png)] bg-cover bg-no-repeat bg-center">
        <div className="max-w-[1140px] mx-auto px-4  relative">
          <div className=" flex justify-center items-center gap-1.5">
            <div className="">
              <Line />
            </div>
            <h4 className="text-prime-gradient text-lg font-bold leading-[22px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent ">
              Testimonial
            </h4>
            <div className=" rotate-[180deg]">
              <Line />
            </div>
          </div>
          <CustomHeading
            headClass="text-center pt-2"
            headText="What Our Customers Say"
          />
          <div className="flex flex-col md:flex-row max-lg:justify-center max-lg:items-center relative gap-10">
            <div className="relative w-full max-w-[523px] sm:ml-[37px] sm:pb-[76px] pb-10 ">
              <img
                src={pizzaImg}
                alt="Pizza"
                className="w-full sm:flex hidden rounded-xl object-cover"
              />
              <div className="sm:absolute left-[-36px] top-[145px] flex sm:flex-col max-sm:w-full justify-center  items-center size-[74px] gap-3">
                {Testimonials_Avatar.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`avatar-${i}`}
                    onClick={() => setActiveAvatar(i)}
                    className={`cursor-pointer rounded-full transition-all mt-[40px] sm:mt-0 duration-300 ${
                      i === activeAvatar
                        ? "sm:size-[74px] size-25"
                        : "sm:size-15 size-20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
            }}
            className="lg:!absolute lg:bottom-0 lg:left-[42%] max-w-[680px] w-full"
          >
            {Testimonials_Data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 w-full relative">
                  <p className="text-gray-700 mb-4 !leading-[26px]">
                    {item.text}
                  </p>
                  <h4 className="font-semibold text-2xl text-black mt-4 mb-0.5">
                    {item.name}
                  </h4>
                  <p className="text-base leading-[26px] mb-6">{item.role}</p>
                  <div className="flex items-center gap-1">
                    <button className="prevBtn bg-prime rounded-[4px] !px-[15px] !py-3.5 flex items-center justify-center transition">
                      <RightArrow />
                    </button>
                    <button className="nextBtn bg-prime rounded-[4px] text-white flex items-center justify-center !px-[15px] !py-3.5 transition">
                      <LeftArrow />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
