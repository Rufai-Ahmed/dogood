import React from "react";
import Container from "../re-usables/Container";
import Image from "next/image";
import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer
      className={`w-full bg-[#f6f6f6] flex justify-center items-center min-h-[500px] py-24 ${heebo.className}`}
    >
      <Container className="md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 grid gap-9">
        <Image
          src={"/assets/logo.png"}
          alt="dogood logo"
          width={100}
          className="w-[200px] h-full object-contain"
          height={100}
        />

        <div className="space-y-4">
          <p className="text-[28px]">
            <b>Our Info</b>
          </p>

          <ul className="space-y-3">
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
        <div className="space-y-4">
          <p className="text-[28px]">
            <b>Latest News</b>
          </p>

          <ul className="space-y-3">
            {["Gathering Ideas", "Let's Do Goold", "Do Things For Others!"].map(
              (el: string, i: number) => (
                <li key={i}>
                  <p>
                    <small className="text-[12px]">
                      April 12, 2022 / <u>Donations</u>
                    </small>
                  </p>
                  <p className="text-[16px]">
                    <b>{el}</b>
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-[28px]">
            <b>About Us</b>
          </p>

          <ul className="space-y-7">
            {[
              "Change the world one donation at a time. DoGood is always here for your charities and fundraising.",
              "© 2022 Qode Interactive",
            ].map((el: string, i: number) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
