"use client";
import React from "react";
import Container from "./re-usables/Container";
import { Heebo } from "next/font/google";
import { MdCheck } from "react-icons/md";
import Button from "./re-usables/Button";
import CardOne from "./CardOne";
import Image from "next/image";
import CardTwo from "./CardTwo";
const heebo = Heebo({ subsets: ["latin"] });

const Donation = () => {
  return (
    <Container className="min-h-[800px] flex flex-col justify-center px-0 py-[50px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full gap-10">
        <CardOne />

        <Image
          src={"/assets/donation.jpg"}
          alt="lady holding a cardboard"
          width={100}
          height={100}
          unoptimized
          className="w-full object-cover h-full"
        />

        <CardTwo />
      </div>
    </Container>
  );
};

export default Donation;
