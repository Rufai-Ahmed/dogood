"use client";
import React from "react";
import Container from "./re-usables/Container";
import Image from "next/image";
import { Heebo } from "next/font/google";
import Button from "./re-usables/Button";
const heebo = Heebo({ subsets: ["latin"] });

const Plant = () => {
  return (
    <Container className="min-h-[750px] pb-[100px] items-center gap-7 md:grid-cols-2 grid">
      <Image
        src={"/assets/plant.jpg"}
        alt="plant"
        width={100}
        height={100}
        unoptimized
        className="w-full col-span-2 lg:col-span-1 h-full object-cover"
      />

      <div className="w-full col-span-2 lg:col-span-1 bg-[#f6f6f6] h-full p-5 md:p-16 flex flex-col justify-between">
        <div className="w-full md:w-[80%] space-y-3">
          <h1 className="text-[45px] md:text-[60px] ">
            CHANGE THE <br className="hidden md:block " />
            WORLD WITH US
          </h1>
          <p className={`${heebo.className} text-[16px]`}>
            Lorem ipsum dolor sit amet, te cum quem albucius, ea sed libris
            laoreet ut equidem abhorreant nam ex usu suas.
          </p>
        </div>

        <div className="w-full md:w-[80%] space-y-4">
          <div className={`w-full relative`}>
            <input
              type="text"
              name="name"
              className={`w-full ${heebo.className}  outline-none bg-transparent border-none h-full pl-3`}
              placeholder="Name"
            />
            <div className="w-full bg-black h-[1px] mt-2" />
          </div>
          <div className={`w-full relative`}>
            <input
              type="email"
              name="name"
              className={`w-full ${heebo.className}  outline-none bg-transparent border-none h-full pl-3`}
              placeholder="E-mail"
            />
            <div className="w-full bg-black h-[1px] mt-2" />
          </div>

          <Button
            width="100%"
            lineColor="black"
            className="bg-transparent px-0 text-black"
          >
            subscribe
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Plant;
