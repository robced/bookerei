import React, { useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import { SecondaryShape, TertiaryShape } from "../elements/Shapes";
import Filter from "../elements/Filter";
import BookCard from "../elements/BookCard";
import { LeftArrowIcon, RightArrowIcon } from "../elements/Icons";

const ShopSection = () => {
  const {
    productsData,
    filteringResults,
    filtering,
    filteringBy,
    setFilteringPrompt,
  } = useStateContext();

  const repeatedGenreList = productsData.map((product) => {
    return product.genre.toString();
  });

  const genreList = Array.from(new Set(repeatedGenreList));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = (direction: String) => {
    const container = containerRef.current;
    let scrollComplete = 0;
    const slideView = setInterval(() => {
      if (container === null) return;
      if (direction === "left") {
        container.scrollLeft -= 270;
      } else {
        container.scrollLeft += 270;
      }
      scrollComplete += 10;
      if (scrollComplete >= 100) {
        clearInterval(slideView);
      }
    });
  };

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
        <div className="font-roboto flex w-full gap-5 text-secondary font-medium">
          {filteringBy === "genre" ? (
            <div className="font-roboto flex w-full gap-5 text-secondary font-medium">
              {genreList.map((product, index) => (
                <button
                  onClick={() => setFilteringPrompt(product)}
                  key={index}
                  className=""
                >
                  {product}
                </button>
              ))}
            </div>
          ) : (
            <div className="font-roboto flex w-full gap-5 text-secondary font-medium">
              <button className="">Best Seller</button>
              <button className="">Category</button>
              <button className="">Explore</button>
            </div>
          )}
        </div>
        <h2 className="font-robcon text-7xl text-secondary font-bold mb-3">
          Top Books
        </h2>
        <div className="flex items-center w-full gap-5">
          <span
            onClick={() => handleScrollClick("left")}
            className="w-14 cursor-pointer"
          >
            <LeftArrowIcon />
          </span>
          <div
            ref={containerRef}
            className="flex w-fit h-full gap-14 overflow-hidden scroll-smooth py-5"
          >
            {filtering
              ? filteringResults.map((product) => (
                  <BookCard
                    products={product}
                    color="bg-secondary/30"
                    key={product._id}
                    text="text-bg"
                    buttonColor="bg-secondary"
                    buttonTextColor=""
                    shop
                  />
                ))
              : productsData.map((product) => (
                  <BookCard
                    products={product}
                    color="bg-secondary/30"
                    key={product._id}
                    text="text-bg"
                    buttonColor="bg-secondary"
                    buttonTextColor="text-bg"
                    shop
                  />
                ))}
          </div>
          <span
            onClick={() => handleScrollClick("right")}
            className="w-14 cursor-pointer"
          >
            <RightArrowIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
