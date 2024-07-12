import { iButton } from "@/public/interfaces";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const Button: FC<iButton> = ({
  children,
  className,
  lineColor,
  width,
  y,
  ...props
}) => {
  const [animate, setAnimate] = useState<boolean>(false);

  const handleHover = () => {
    setAnimate(true);
    const timeout: NodeJS.Timeout = setTimeout(() => {
      setAnimate(false);
      clearTimeout(timeout);
    }, 500);
  };

  return (
    <button
      {...props}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={twMerge(
        "px-8 text-[20px] uppercase py-2 bg-[#f0e8f8] text-[#a18db7] group flex justify-start items-center relative",
        className
      )}
    >
      {children}
      <div
        style={{
          backgroundColor: lineColor,
          width: animate ? "2px" : width,
          bottom: y ? y : "5px",
        }}
        className={`absolute duration-300 h-[3px] bg-[#a18db7] ${
          animate ? "w-1" : "w-[calc(100%-65px)]"
        }`}
      />
    </button>
  );
};

export default Button;
