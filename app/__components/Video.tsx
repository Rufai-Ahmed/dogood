"use client";
import React, { useState } from "react";
import Container from "./re-usables/Container";
import Head from "next/head";
import { BsPlayBtn, BsTriangleFill } from "react-icons/bs";
import { SiX } from "react-icons/si";
import { FaX } from "react-icons/fa6";

const Video = () => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <Container className="pb-[100px]">
      <div
        className={
          click
            ? "w-full h-screen bg-black z- fixed top-0 left-0 flex items-center justify-center"
            : "hidden"
        }
      >
        <Head>
          <script src="https://player.vimeo.com/api/player.js" />
        </Head>
        <div className="" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full "
            src="https://player.vimeo.com/video/156115907?h=469950fc82&loop=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <FaX
          size={30}
          className="hover:rotate-90 duration-300 absolute top-20 right-10 text-white z-[90]"
          onClick={() => setClick(false)}
        />
      </div>

      <div
        className="w-full h-[400px] lg:h-[700px] bg-cover bg-vid bg-no-repeat flex items-center justify-center group"
        onClick={() => setClick(true)}
      >
        {!click && (
          <div className="w-[100px] h-[100px] rounded-full group-hover:w-[120px] group-hover:h-[120px] bg-[#f0e8f8] duration-300 flex items-center justify-center rotate-90">
            <BsTriangleFill color="#9b8db7" size={24} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Video;
