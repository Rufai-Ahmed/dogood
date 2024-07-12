import { Heebo } from "next/font/google";
import React from "react";
import Container from "./re-usables/Container";
import Image from "next/image";
import { gridData } from "@/public/data/data";
import { iGrid } from "@/public/interfaces";
const heebo = Heebo({ subsets: ["latin"] });

const GridCards = () => {
  return (
    <Container
      className={`${heebo.className} text-[21px] pb-[70px] lg:pb-0 lg:p-12 xl:p-20 2xl:p-28 min-h-[500px] grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7`}
    >
      {gridData.map((el: iGrid, i: number) => (
        <div
          key={i}
          className="gap-4 items-center justify-center grid grid-cols-2"
        >
          <div className="w-full h-full overflow-hidden">
            <Image
              src={`/assets/${el.img}`}
              alt={el.img!}
              width={100}
              height={100}
              className="w-full h-full object-contain duration-300 cursor-pointer hover:scale-110"
              unoptimized
            />
          </div>

          <div className="h-full space-y-4">
            <p className="text-[13px]">31 April, 2022</p>
            <p className="text-[21px]">{el.b}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default GridCards;
