import Image from "next/image";
import React from "react";
import { BookCard } from "../../interfaces/BookCard.interface";
import { urlFor } from "../../lib/client";
import AddButton from "./AddButton";

const BookCard = ({ products, main }: BookCard) => {
  const { name, author, price, image, details } = products;
  console.log(name);
  return (
    <div
      className={`w-[370px] h-[698px] bg-bg rounded-[50px] shadow-xl ${
        name === "Outliers" ? "flex" : " hidden lg:flex"
      } flex-col relative items-center justify-evenly`}
    >
      <Image
        src={urlFor(image).url()}
        alt="Book Cover"
        width={327}
        height={494}
        className="rounded-[50px] shadow-xl"
      ></Image>
      <div
        className={`h-[165px] w-[337px] flex flex-col justify-evenly ${
          main ? "bg-primary" : "bg-primary/40"
        } rounded-[40px] p-5 font-roboto ${main ? "text-bg" : "text-primary"}`}
      >
        <h4 className={`font-bold  text-4xl`}>{name}</h4>
        <p className="text-xl">{author}</p>
        <div className="h-1/3 mt-3 flex justify-between items-center">
          <p className="font-bold text-4xl">${price}</p>
          <AddButton filled={main ? true : false} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
