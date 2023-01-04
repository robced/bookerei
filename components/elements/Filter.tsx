import React from "react";
import BookCard from "./BookCard";
import { SearchIcon } from "./Icons";

const Filter = () => {
  // TODO: BOOK FILTER
  return (
    <div className="h-14 w-full bg-secbase rounded-2xl flex items-center justify-between">
      <div className="w-2/3 pl-5 text-secondary flex items-center gap-5">
        <SearchIcon />
        <input
          type="text"
          className="bg-transparent h-full w-full font-roboto text-xl"
          placeholder="Search..."
        />
      </div>
      <div className="w-1/3 flex items-center justify-evenly font-roboto text-xl">
        <button className="text-secondary">All</button>
        <button className="text-secondary">Genre</button>
        <button className="text-secondary">Authors</button>
      </div>
    </div>
  );
};

export default Filter;
