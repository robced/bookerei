import Image from "next/image";
import React from "react";
import { BookCard } from "../../interfaces/BookCard.interface";
import { urlFor } from "../../lib/client";
import AddButton from "./AddButton";

const BookCard = ({
  products,
  main,
  shop,
  color,
  text,
  buttonColor,
  buttonTextColor,
}: BookCard) => {
  const { name, author, price, image, details } = products;
  return (
    <div
      className={`${
        shop ? "w-[320px] h-[638px]" : "w-[350px] h-[698px]"
      } bg-bg rounded-[50px] shadow-xl flex-shrink-0 ${
        name === "Outliers" ? "flex" : " hidden lg:flex"
      } flex-col relative items-center justify-evenly`}
    >
      <Image
        src={urlFor(image).url()}
        alt="Book Cover"
        width={shop ? 287 : 327}
        height={shop ? 454 : 494}
        className="rounded-[40px] shadow-md"
      ></Image>
      <div
        className={`${
          shop ? "h-[165px] w-[297px]" : "h-[175px] w-[337px]"
        } flex flex-col justify-evenly shadow-md ${color} ${text} ${
          shop ? "rounded-b-[45px]" : "rounded-b-[45px]"
        } rounded-t-[30px] p-5 font-roboto 
        }`}
      >
        <h4 className={`font-bold  ${shop ? "text-3xl" : "text-4xl"}`}>
          {name}
        </h4>
        <p className={`${shop ? "text-lg" : "text-xl"}`}>{author}</p>
        <div className="h-1/3 mt-3 flex justify-between items-center">
          <p className={`font-bold ${shop ? "text-3xl" : "text-4xl"}`}>
            ${price}
          </p>
          <AddButton color={buttonColor} textColor={buttonTextColor} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
