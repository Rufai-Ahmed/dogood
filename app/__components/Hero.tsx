"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./re-usables/Container";
import Button from "./re-usables/Button";
import { heroData } from "@/public/data/data";
import { iHero } from "@/public/interfaces";

const Hero = () => {
  const [index, setIndex] = useState<number>(0);
  const intervalRef: any = useRef<number | null>(null);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current!);
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % heroData.length);
    }, 4000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  const handleHover = (isHovering: boolean) => {
    if (isHovering) {
      stopInterval();
    } else {
      startInterval();
    }
  };

  const currentHero: iHero = heroData[index];

  const onAdd = () => {
    setIndex((prevIndex: number) => (prevIndex + 1) % heroData.length);
  };
  const onSub = () => {
    setIndex((prevIndex: number) => (prevIndex + 1) % heroData.length);
  };

  return (
    <Container
      className="h-[80vh] md:h-[calc(100vh-20px)] bg-no-repeat px-0 bg-cover bg-center flex items-center max-w-[325px] bg-black overflow-hidden justify-center"
      style={{
        backgroundImage: `url(${currentHero.img})`,
      }}
    >
      <div
        className="w-full h-full bg-black bg-opacity-25 flex items-center justify-center relative"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div className="w-[85%] md:w-[80%] flex flex-col justify-center space-y-5">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${index}`}
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-[70%] text-white text-[60px] md:text-[110px] leading-[1] uppercase"
            >
              {currentHero.h1}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`button-div-${index}`}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 150, opacity: 0 }}
              transition={{ duration: 1 }}
              className="md:flex space-y-4 md:space-y-0 items-center gap-4"
            >
              <Button>donate now</Button>
              <Button
                lineColor="white"
                className="text-white border border-white bg-transparent"
              >
                view more
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex absolute -right-[45px] -rotate-90 items-center">
          <Button onClick={onAdd} className="text-[12px] px-5">
            Next
          </Button>
          <Button onClick={onSub} className="text-[12px] px-5">
            Prev
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
