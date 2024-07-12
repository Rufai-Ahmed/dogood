"use client";
import { Heebo } from "next/font/google";
import React from "react";
import Container from "../re-usables/Container";
import Button from "../re-usables/Button";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
const heebo = Heebo({ subsets: ["latin"] });

const LittleHeader = () => {
  return (
    <section
      className={`${heebo.className} hidden bg-[#f6f6f6] lg:flex justify-center h-[40px] items-center`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <p className="bg-transparent px-0 text-gray-800 text-[10px] py-0">
            156-677-124-442-2887
          </p>
          <p className="bg-transparent px-0 text-gray-800 text-[10px] py-0">
            dogood@qodeinteractive.com
          </p>
          <p className="bg-transparent px-0 text-gray-800 text-[10px] py-0">
            184 Main Collins Street Victoria 8007
          </p>
        </div>

        <div className="flex items-center gap-5 text-[15px]">
          <FaFacebook />
          <BsTwitterX />
          <BsInstagram />
        </div>
      </Container>
    </section>
  );
};

export default LittleHeader;
