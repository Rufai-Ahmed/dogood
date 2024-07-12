"use client";
import React, { useState } from "react";
import Container from "./re-usables/Container";
import { BsTriangleFill } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
import Script from "next/script";

const Video = () => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <Container className="pb-[100px]">
      {click && (
        <div className="w-full h-screen bg-black z-50 fixed top-0 left-0 flex items-center justify-center">
          <Script
            src="https://player.vimeo.com/api/player.js"
            strategy="lazyOnload"
          />
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://player.vimeo.com/video/156115907?h=469950fc82&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <FaX
            size={30}
            className="hover:rotate-90 duration-300 absolute top-20 right-10 text-white z-[90] cursor-pointer"
            onClick={() => setClick(false)}
          />
        </div>
      )}

      <div
        className="w-full h-[400px] lg:h-[700px] bg-cover bg-vid bg-no-repeat flex items-center justify-center group"
        onClick={() => setClick(true)}
      >
        {!click && (
          <div className="w-[100px] h-[100px] rounded-full group-hover:w-[120px] group-hover:h-[120px] bg-[#f0e8f8] duration-300 flex items-center justify-center rotate-90 cursor-pointer">
            <BsTriangleFill color="#9b8db7" size={24} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Video;
