import React from "react";
import { useStateContext } from "../../context/StateContext";
import { SearchIcon } from "./Icons";

const Filter = () => {
  const {
    setFilteringAll,
    setFilteringAuthors,
    setFilteringGenre,
    filteringAll,
    filteringAuthors,
    filteringGenre,
  } = useStateContext();

  const handleFilteringAll = () => {
    setFilteringAll(true);
    setFilteringAuthors(false);
    setFilteringGenre(false);
  };

  const handleFilteringAuthors = () => {
    setFilteringAll(false);
    setFilteringAuthors(true);
    setFilteringGenre(false);
  };

  const handleFilteringGenre = () => {
    setFilteringAll(false);
    setFilteringAuthors(false);
    setFilteringGenre(true);
  };
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
      <div className="w-1/3 flex items-center justify-evenly font-roboto text-xl font-medium">
        <button
          onClick={handleFilteringAll}
          className={` h-8 w-fit px-3 rounded-lg ${
            filteringAll
              ? "bg-secondary/50 text-bg"
              : "bg-transparent text-secondary"
          }`}
        >
          All
        </button>
        <button
          onClick={handleFilteringGenre}
          className={` h-8 w-fit px-3 rounded-lg ${
            filteringGenre
              ? "bg-secondary/50 text-bg"
              : "bg-transparent text-secondary"
          }`}
        >
          Genre
        </button>
        <button
          onClick={handleFilteringAuthors}
          className={` h-8 w-fit px-3 rounded-lg ${
            filteringAuthors
              ? "bg-secondary/50 text-bg"
              : "bg-transparent text-secondary"
          }`}
        >
          Authors
        </button>
      </div>
    </div>
  );
};

export default Filter;
