import React from "react";
import { BiAnchor } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";

const Slide = () => {
  return (
    <div className="w-full py-[20px] md:py-[30px] bg-[#ffe2da] text-[#ff9471] flex items-center overflow-hidden">
      <div className="flex animate-slide whitespace-nowrap gap-16">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-[60px] md:text-[150px] lg:text-[200px] gap- uppercase whitespace-nowrap"
          >
            <p>volunteer</p>
            <LuArrowUpRight fontWeight={900} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
