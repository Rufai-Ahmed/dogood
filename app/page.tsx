"use client";
import { FaAngleUp } from "react-icons/fa6";
import Contact from "./__components/Contact";
import Donation from "./__components/Donation";
import GridCards from "./__components/GridCards";
import Hero from "./__components/Hero";
import NewsLetter from "./__components/NewsLetter";
import Plant from "./__components/Plant";
import Slide from "./__components/Slide";
import Video from "./__components/Video";
import Volunteers from "./__components/Volunteers";
import { useEffect, useState } from "react";

const Page = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollMonitor = () => {
    setShowScrollTop(window.scrollY > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollMonitor);
    return () => window.removeEventListener("scroll", scrollMonitor);
  }, []);

  return (
    <div className="bg-black">
      <Hero />
      <Donation />
      <GridCards />
      <NewsLetter />
      <Video />
      <Plant />
      <Volunteers />
      <Contact />
      <Slide />

      {showScrollTop && (
        <div
          className="w-14 h-14 fixed bottom-10 right-10 rounded-full flex items-center justify-center bg-[#dcd4ed] text-[#6d62aa] cursor-pointer"
          onClick={scrollToTop}
        >
          <FaAngleUp size={24} />
        </div>
      )}
    </div>
  );
};

export default Page;
