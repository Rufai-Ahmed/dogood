import React from "react";
import Container from "./re-usables/Container";
import VolunteerCard from "./VolunteerCard";
import { volunteerData } from "@/public/data/data";
import { iVolunteer } from "@/public/interfaces";

const Volunteers = () => {
  return (
    <Container className="min-h-[750px] pb-[100px] md:px-20">
      <h1 className="text-[60px] md:text-[80px] lg:text-[110px] text-[#9b8db7] uppercase">
        our volunteers
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {volunteerData.map((el: iVolunteer, i: number) => (
          <VolunteerCard key={i} img={el.img!} name={el.name} />
        ))}
      </div>
    </Container>
  );
};

export default Volunteers;
