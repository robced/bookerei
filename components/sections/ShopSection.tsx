import React from "react";
import { useStateContext } from "../../context/StateContext";
import BookCard from "../elements/BookCard";
import { SecondaryShape, TertiaryShape } from "../elements/Shapes";
import Filter from "../elements/Filter";

const ShopSection = () => {
  const { productsData } = useStateContext();
  return (
    <div className="h-full w-full  relative overflow-hidden px-[230px] flex items-center justify-center bg-bg">
      <div className="absolute left-[10px] z-0">
        <SecondaryShape />
      </div>
      <div className="absolute right-[10px] bottom-0 z-0">
        <TertiaryShape />
      </div>
      <div className="w-full h-full z-20 py-10 flex flex-col items-start justify-evenly gap-3">
        <div className="h-[10vh] w-1/2">
          <Filter />
        </div>
        <div className="">
          <button className="">Best Seller</button>
          <button className="">Category</button>
          <button className="">Explore</button>
        </div>
        <h2 className="font-robcon text-7xl text-secondary font-bold mb-3">
          Top Books
        </h2>
        <div className="flex w-full h-full gap-10 overflow-y-scroll">
          <BookCard
            products={productsData[0]}
            color="bg-secondary/30"
            text="text-bg"
            shop
          />
          <BookCard
            products={productsData[1]}
            color="bg-secondary/30"
            text="text-bg"
            shop
          />
          <BookCard
            products={productsData[0]}
            color="bg-secondary/30"
            text="text-bg"
            shop
          />
          <BookCard
            products={productsData[0]}
            color="bg-secondary/30"
            text="text-bg"
            shop
          />
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
