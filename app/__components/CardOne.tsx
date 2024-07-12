"use client";
import React from "react";
import { Heebo } from "next/font/google";
import { MdCheck } from "react-icons/md";
import Button from "./re-usables/Button";
const heebo = Heebo({ subsets: ["latin"] });

const CardOne = () => {
  return (
    <div className="bg-[#ffe2da] text-[#ff9370] md:col-span-2 xl:col-span-1">
      <div className="p-8">
        <h1 className="uppercase mb-3 text-[40px]">help the cause</h1>

        <p className={`text-[19px] ${heebo.className} mb-10`}>
          Pri ea porro maluisset, ad duo proprie oratio voluptua per cibo eriput
          ex eos.
        </p>

        <ul className="grid grid-cols-2 gap-4 mb-10">
          {[
            " Nec id impetus",
            " Pri natum malis",
            "Qui no purto",
            "Ne nulla decore",
            "His illud loborti",
          ].map((el: string, i: number) => (
            <li
              key={i}
              className={`${heebo.className} flex items-center gap-3 text-[16px]`}
            >
              <MdCheck size={19} />

              {el}
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          <div className="-space-y-3">
            <h1 className="uppercase text-[60px]">68%</h1>
            <div className="w-full h-[4px] rounded-md bg-[#ffcaba] relative">
              <div className="w-[68%] bg-[#ff9370] h-full absolute" />
            </div>
          </div>
          <div
            className={`${heebo.className} font-[500] w-full text-[19px] flex justify-between `}
          >
            <p>Raised: 30,315$</p>
            <p>Goal: 45,000$</p>
          </div>
        </div>
      </div>

      <Button
        width="100px"
        y="27px"
        lineColor="white"
        className="w-full h-[80px] bg-[#ff9370] justify-center text-white"
      >
        donate now
      </Button>
    </div>
  );
};

export default CardOne;
