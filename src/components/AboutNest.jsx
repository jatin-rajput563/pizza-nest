import React from "react";
import { AboutNest_Data } from "../utils/helper";
import pizzaManimg from "../assets/images/png/nestpizaman-img.png";
import LeftPizza from "../assets/images/png/about-left-pizza.png";
import CustomHeading from "./common/CustomHeading";

const AboutNest = () => {
  return (
    <>
      <div
        id="about"
        className="py-[40px] sm:py-[60px] md:py-[80px] lg:py-[80px] relative"
      >
        <div className="max-w-[1140px] px-4 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 text-center lg:text-left">
            <div className="lg:w-[60%] flex py-[22px] sm:py-[44px] md:py-[77px] flex-col">
              <div className="flex items-center gap-2">
                <p className="font-bold text-lg leading-[120%] text-prime">
                  About Us
                </p>
                <div className="w-[60px] h-[1px] bg-prime"></div>
              </div>
              <CustomHeading
                headText="Welcome to the Nest"
                headClass="pt-2 text-left"
              />
              <ul className="list-disc marker:text-dark-gray pt-4 pl-[25px]">
                <li>
                  <p className="max-w-[518px] text-sm sm:text-base leading-[160%] text-dark-gray text-left">
                    At PizzaNest, we believe that pizza is more than just food —
                    it’s an emotion, a celebration, and comfort all rolled into
                    one delicious slice. Founded with a passion for real
                    ingredients and big flavors, we set out to bring
                    handcrafted, oven-fresh pizzas to every corner of India.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="max-w-[548px] text-sm sm:text-base leading-[160%] text-dark-gray text-left">
                    Whether you're craving spicy paneer, a creamy cheese burst,
                    or a fully loaded custom pizza made your way, we've got you
                    covered. Each pizza is baked with love, topped with the
                    freshest veggies, premium cheese, and authentic sauces — all
                    delivered hot and fast, right to your doorstep.
                  </p>
                </li>
              </ul>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 -ml-[3px]">
                {AboutNest_Data.map((item, index) => (
                  <div
                    key={index}
                    className={`sm:w-auto ${
                      index === 1 ? "min-[1050px]:mt-3" : ""
                    }`}
                  >
                    <div className="w-[150px] sm:w-[170px] p-5 bg-white items-center flex flex-col shadow-lg rounded-xl border-2 border-dashed border-[#F67A21]/20 hover:translate-y-2 transition-all duration-300">
                      <item.icon />
                      <p className="pt-2 ff-nunito leading-[160%] text-dark-gray text-center text-sm whitespace-nowrap">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:w-[40%]">
              <img
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[383px] pointer-events-none float-animation"
                src={pizzaManimg}
                alt="pizza-man-img"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute left-0 bottom-0 w-full max-w-[90px] sm:max-w-[150px] pointer-events-none animate-pizzaFloat"
          src={LeftPizza}
          alt="left-pizza"
        />
      </div>
    </>
  );
};

export default AboutNest;
