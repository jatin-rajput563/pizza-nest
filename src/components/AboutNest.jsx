import React from "react";
import { AboutNest_Data } from "../utils/helper";
import pizzaManimg from "../assets/images/png/nestpizaman-img.png";
import LeftPizza from "../assets/images/png/about-left-pizza.png";

const AboutNest = () => {
  return (
    <>
      <div id="about" className="pt-16 md:pb-[48px] md:pt-[100px] relative">
        <div className="max-w-[1140px] px-4 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 text-center lg:text-left">
            <div className="lg:w-1/2 flex py-[22px] sm:py-[44px] md:py-[77px] flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <p className="font-bold text-lg leading-[120%] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] bg-clip-text text-transparent">
                  About Us
                </p>
                <div className="w-[60px] h-[1px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)]"></div>
              </div>
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[120%] pt-2">
                Welcome to the Nest
              </h2>
              <ul className="lg:list-disc pt-4 pl-[25px] text-left">
                <li>
                  <p className="max-w-[518px] text-sm sm:text-base leading-[160%] text-center lg:text-left text-[#4D4D4D]">
                    At PizzaNest, we believe that pizza is more than just food —
                    it’s an emotion, a celebration, and comfort all rolled into
                    one delicious slice. Founded with a passion for real
                    ingredients and big flavors, we set out to bring
                    handcrafted, oven-fresh pizzas to every corner of India.
                  </p>
                </li>
                <li className="pt-3">
                  <p className="max-w-[528px] text-sm sm:text-base leading-[160%] text-center lg:text-left text-[#4D4D4D]">
                    Whether you're craving spicy paneer, a creamy cheese burst,
                    or a fully loaded custom pizza made your way, we've got you
                    covered. Each pizza is baked with love, topped with the
                    freshest veggies, premium cheese, and authentic sauces — all
                    delivered hot and fast, right to your doorstep.
                  </p>
                </li>
              </ul>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                {AboutNest_Data.map((item, index) => (
                  <div
                    key={index}
                    className={`sm:w-auto ${index === 1 ? "mt-3" : ""}`}
                  >
                    <div className="max-w-[170px] p-5 bg-white items-center flex flex-col shadow-lg rounded-xl border-2 border-dashed border-[#F67A21]/20 hover:translate-y-2 transition-all duration-300">
                      <item.icon />
                      <p className="pt-2 ff-nunito leading-[160%] text-[#474747] text-center text-sm whitespace-nowrap">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:w-1/2">
              <img
                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[383px] pointer-events-none float-animation"
                src={pizzaManimg}
                alt="pizza-man-img"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute left-0 bottom-0 w-full max-w-[90px] sm:max-w-[150px] animate-pizzaFloat"
          src={LeftPizza}
          alt="left-pizza"
        />
      </div>
    </>
  );
};

export default AboutNest;
