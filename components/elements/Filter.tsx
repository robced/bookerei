import Link from "next/link";
import React, { useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { SearchIcon } from "./Icons";

const Filter = () => {
  const {
    filteringBy,
    setFilteringBy,
    filteringPrompt,
    filteringResults,
    setFilteringResults,
    setFilteringPrompt,
    productsData,
    filtering,
    setFiltering,
  } = useStateContext();

  const handleFilteringAll = () => {
    setFilteringBy("all");
    setFilteringPrompt("");
  };

  const handleFilteringAuthors = () => {
    setFilteringBy("authors");
    setFilteringPrompt("");
  };

  const handleFilteringGenre = () => {
    setFilteringBy("genre");
    setFilteringPrompt("");
  };

  useEffect(() => {
    if (!filteringPrompt) setFiltering(false);
    if (filteringPrompt) {
      setFiltering(true);
      switch (filteringBy) {
        case "all": {
          const results = productsData.filter((value) => {
            return (
              value.name
                .toLowerCase()
                .includes(filteringPrompt.toLowerCase()) ||
              value.author.toLowerCase().includes(filteringPrompt.toLowerCase())
            );
          });
          setFilteringResults(results);
          break;
        }
        case "genre": {
          const results = productsData.filter((value) => {
            return value.genre
              .toLowerCase()
              .includes(filteringPrompt.toLowerCase());
          });
          setFilteringResults(results);
          break;
        }
        case "authors": {
          const results = productsData.filter((value) => {
            return value.author
              .toLowerCase()
              .includes(filteringPrompt.toLowerCase());
          });
          setFilteringResults(results);
          break;
        }
      }
    }
  }, [
    filteringPrompt,
    productsData,
    filteringBy,
    setFilteringBy,
    setFilteringResults,
    setFiltering,
  ]);

  // TODO: BOOK FILTER
  return (
    <div className="h-14 w-full bg-secbase rounded-2xl flex items-center justify-between relative">
      <div className="w-2/3 pl-5 text-secondary flex items-center gap-5">
        <SearchIcon />
        <input
          onChange={(e) => setFilteringPrompt(e.target.value)}
          value={filteringPrompt}
          type="text"
          className="bg-transparent h-full w-full font-roboto text-xl"
          placeholder="Search..."
        />
      </div>
      <div className="w-1/3 flex items-center justify-evenly font-roboto text-xl font-medium">
        <button
          onClick={handleFilteringAll}
          className={` h-8 w-fit px-3 rounded-lg ${
            filteringBy === "all"
              ? "bg-secondary/50 text-bg"
              : "bg-transparent text-secondary"
          }`}
        >
          All
        </button>
        <button
          onClick={handleFilteringGenre}
          className={` h-8 w-fit px-3 rounded-lg ${
            filteringBy === "genre"
              ? "bg-secondary/50 text-bg"
              : "bg-transparent text-secondary"
          }`}
        >
          Genre
        </button>
        <button
          onClick={handleFilteringAuthors}
          className={` h-8 w-fit px-3 rounded-lg ${
            filteringBy === "authors"
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
