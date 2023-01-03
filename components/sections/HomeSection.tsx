import React from "react";
import { Herobanner } from "../../interfaces/Herobanner.interface";
import { PrimaryShape } from "../elements/Shapes";

const HomeSection = ({ data }: Herobanner) => {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="absolute right-[-15px] z-0">
        <PrimaryShape />
      </div>
      <div className="w-full h-full z-20 relative flex">
        <div className="w-1/2 h-full z-10 flex items-center justify-center flex-col">
          <h2 className="">Find your next great read here.</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button className="">Shop Now</button>
        </div>
        <div className="w-1/2 z-10">s</div>
      </div>
    </div>
  );
};

export default HomeSection;
