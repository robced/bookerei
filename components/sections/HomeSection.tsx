import React from "react";
import { HomeSection } from "../../interfaces/HomeSection.interface";
import BookCard from "../elements/BookCard";
import ServiceCard from "../elements/ServiceCard";
import { PrimaryShape } from "../elements/Shapes";

const HomeSection = ({ products, services }: HomeSection) => {
  return (
    <div className="h-full w-full  relative overflow-hidden px-[200px] flex items-center justify-center">
      <div className="absolute right-[-15px] z-0">
        <PrimaryShape />
      </div>
      <div className="w-full h-full z-20 relative flex items-center justify-between ">
        <div className="w-1/2  h-full z-10 flex justify-center flex-col gap-5">
          <h2 className="w-2/3 font-bold text-8xl font-robcon text-secondary">
            Find your next great read here.
          </h2>
          <p className="font-roboto text-2xl w-2/3 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="w-2/3 flex mt-4">
            <button className="h-12 w-full bg-primary/40 font-roboto text-2xl font-bold mr-20 rounded-[12px] text-secondary">
              Shop Now
            </button>
          </div>
          <div className="w-2/3 flex gap-4">
            <ServiceCard service={services[0]} />
            <ServiceCard service={services[1]} />
            <ServiceCard service={services[2]} />
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center z-10 gap-5 relative">
          <BookCard products={products[0]} main />
          <BookCard products={products[1]} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
