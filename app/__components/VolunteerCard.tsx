import React, { FC } from "react";
import { Heebo } from "next/font/google";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { iVolunteer } from "@/public/interfaces";
const heebo = Heebo({ subsets: ["latin"] });

const VolunteerCard: FC<iVolunteer> = ({ img, name }) => {
  return (
    <div
      className={`w-full min-h-[300px] group ${heebo.className} bg-[#f6f6f6]`}
    >
      <div className="w-full h-[60%] overflow-hidden">
        <Image
          src={`/assets${img}`}
          alt={name!}
          width={100}
          unoptimized
          height={100}
          className="w-full group-hover:scale-105 duration-300 h-full object-center object-cover"
        />
      </div>

      <div className="w-full h-[40%] p-10 py-5 flex flex-col justify-center space-y-3">
        <u className="text-[16px]">Volunteer</u>
        <p className="text-[28px] font-semibold capitalize">{name}</p>

        <div className="flex items-center gap-5 text-[20px]">
          <FaFacebook />
          <BsTwitterX />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
