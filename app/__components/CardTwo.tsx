"use client";
import React from "react";
import { Heebo } from "next/font/google";
import { MdCheck } from "react-icons/md";
import Button from "./re-usables/Button";
import Image from "next/image";
const heebo = Heebo({ subsets: ["latin"] });

const CardTwo = () => {
  return (
    <div className="bg-[#f6f6f6] text-[#303030] p-10 flex flex-col justify-between">
      <Image
        src={"/assets/heart.png"}
        alt="heart"
        width={100}
        height={100}
        unoptimized
        className="w-[160px]"
      />

      <div className="space-y-5">
        <p className={`text-[28px] ${heebo.className}`}>
          <b>Saving lives</b>
        </p>
        <p className={`text-[16px] ${heebo.className}`}>
          Pri at novum urbanitas, ex cum lorem offendit volutpat. Qui no purto
          reform, vim ea labitur nemore detraxit ei mea.
        </p>

        <Button
          width="100%"
          lineColor="black"
          className="bg-transparent border-none px-0 text-black"
        >
          view more{" "}
        </Button>
      </div>
    </div>
  );
};

export default CardTwo;
