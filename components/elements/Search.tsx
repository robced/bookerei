import React from "react";
import { SearchIcon } from "./Icons";

const Search = () => {
  return (
    <div className="w-3/6 h-full flex items-center justify-center">
      <div className="w-4/5 h-3/5 flex items-center justify-between px-4 bg-[#F1E1DC] rounded-lg">
        <input
          type="text"
          className="bg-transparent text-base placeholder-primary"
          placeholder="Search..."
        />

        <button className="text-primary">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
