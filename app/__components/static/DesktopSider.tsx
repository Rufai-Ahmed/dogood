import { iSider } from "@/public/interfaces";
import { Heebo } from "next/font/google";
import React, { Dispatch, FC, SetStateAction } from "react";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaX } from "react-icons/fa6";
const heebo = Heebo({ subsets: ["latin"] });

const DesktopSider: FC<iSider> = ({ setSiderState, siderState, toggle }) => {
  return (
    <aside
      className={`w-[400px] bg-[#f6f6f6] z-[99999] top-0 p-[60px] fixed h-screen right-0 border-l duration-700 ${
        siderState ? "md:right-0 -right-[2000px]" : "-right-[2000px]"
      }`}
    >
      <FaX
        className="top-12 cursor-pointer right-12 absolute"
        onClick={() => setSiderState!(false)}
        size={17}
      />

      <h1 className="text-[50px] uppercase mb-">hello!</h1>
      <p className={`text-[14px] mb-5 ${heebo.className}`}>
        DoGood theme is especially made for charities & fundraising. Making the
        WP world a better place!
      </p>

      <div className={`${heebo.className} space-y-3`}>
        <p className="text-[18px]">
          <b>Our info</b>
        </p>
        <ul className="space-y-2 text-[13px]">
          {[
            "+0012 34 567 89",
            "+0098 76 543 21",
            "dogood@example.com",
            "23 Fridderich Moulin Rode, Vienna AU",
          ].map((el: string, i: number) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <div className={`${heebo.className} mt-5 space-y-3`}>
        <p className="text-[18px]">
          <b>Follow Us</b>
        </p>

        <div className="flex items-center gap-5 text-[20px]">
          <FaFacebook />
          <BsTwitterX />
          <BsInstagram />
        </div>
      </div>
    </aside>
  );
};

export default DesktopSider;
