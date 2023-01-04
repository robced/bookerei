import React from "react";
import { useStateContext } from "../../context/StateContext";
import BookCard from "../elements/BookCard";
import ServiceCard from "../elements/ServiceCard";
import { PrimaryShape } from "../elements/Shapes";

const HomeSection = () => {
  const { servicesData, productsData } = useStateContext();
  return (
    <div className="h-full w-full  relative overflow-hidden px-[230px] flex items-center justify-center">
      <div className="absolute right-[-10px] z-0">
        <PrimaryShape />
      </div>
      <div className="w-full h-full z-20 relative flex items-center justify-between ">
        <div className="w-1/2  h-full z-10 flex justify-center flex-col gap-5">
          <h2 className="w-2/3 font-bold text-[6rem] tracking-wide font-robcon text-secondary">
            Find your next great read here.
          </h2>
          <p className="font-roboto text-[1.3rem] w-2/3 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="w-2/3 flex">
            <button className="h-12 w-full bg-primary/40 font-roboto text-2xl font-bold rounded-[12px] text-secondary">
              Shop Now
            </button>
          </div>
          <div className="w-2/3 flex gap-4 mt-5">
            <ServiceCard service={servicesData[0]} />
            <ServiceCard service={servicesData[1]} />
            <ServiceCard service={servicesData[2]} />
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center z-10 gap-5 relative">
          <BookCard
            products={productsData[0]}
            color="bg-primary"
            text="text-bg"
          />
          <BookCard
            products={productsData[1]}
            color="bg-primary/40"
            text="text-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
