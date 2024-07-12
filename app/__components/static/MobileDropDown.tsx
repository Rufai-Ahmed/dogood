import { navData } from "@/public/data/data";
import { iMobile } from "@/public/interfaces";
import React, { FC } from "react";
import { FaAngleRight } from "react-icons/fa6";

const MobileDropDown: FC<iMobile> = ({
  siderState,
  handleMouseEnter,
  handleMouseLeave,
  hoverIndex,
}) => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`w-full md:hidden ${siderState ? "z-[99999]" : "hidden"}`}>
      <div className="mt-10 space-y-2">
        {navData.map((el: string, i: number) => (
          <nav
            className={`text-[15px] uppercase relative justify-between cursor-pointer flex`}
            key={i}
            onClick={() => handleNavClick(el)}
            onMouseEnter={() => handleMouseEnter!(i)}
            onMouseLeave={handleMouseLeave}
          >
            {el}
            <div
              className={`duration-300 h-[1px] bottom-0 absolute bg-black ${
                hoverIndex === i || el === "home" ? "w-[50px]" : "w-0"
              }`}
            />
            <FaAngleRight size={20} />
          </nav>
        ))}
      </div>
    </div>
  );
};

export default MobileDropDown;
