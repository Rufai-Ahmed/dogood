"use client";
import React from "react";
import Container from "./re-usables/Container";
import { Heebo } from "next/font/google";
import Button from "./re-usables/Button";
const heebo = Heebo({ subsets: ["latin"] });

const NewsLetter = () => {
  return (
    <Container id="newsletter" className="flex justify-center min-h-[500px]">
      <div className="w-full h-[410px] bg-[#f6f6f6] flex justify-center">
        <div className="h-full w-[80%] flex-col flex justify-center">
          <div className="space-y-4">
            <h1 className="text-[50px] sm:text-[60px] font-normal uppercase">
              subscribe to newsletter
            </h1>

            <div className={`w-full xl:w-[80%] relative`}>
              <input
                type="email"
                name="email"
                className={`w-full ${heebo.className}  outline-none bg-transparent border-none h-full pl-3`}
                placeholder="E-mail"
              />

              <div className=" absolute right-0 bottom-2">
                <Button
                  width="100%"
                  lineColor="black"
                  className="bg-transparent px-0 text-black"
                >
                  subscribe
                </Button>
              </div>

              <div className="w-full bg-black h-[1px] mt-2" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
