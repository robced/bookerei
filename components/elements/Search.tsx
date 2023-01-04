import Link from "next/link";
import React, { useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { SearchIcon } from "./Icons";

const Search = () => {
  const {
    searching,
    setSearching,
    searchPrompt,
    setSearchPrompt,
    searchResults,
    setSearchResults,
    productsData,
  } = useStateContext();

  const handleSearch = (e: any) => {
    const searchWord = e.target.value;
    const results = productsData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchResults(results);
  };

  useEffect(() => {
    if (!searchPrompt) setSearching(false);
    if (searchPrompt) {
      setSearching(true);
      const results = productsData.filter((value) => {
        return value.name.toLowerCase().includes(searchPrompt.toLowerCase());
      });
      setSearchResults(results);
    }
  }, [searchPrompt, productsData, setSearchResults, setSearching]);
  return (
    <div className="w-3/6 h-full flex items-center justify-center relative">
      <div className="w-4/5 h-3/5 flex items-center justify-between px-4 bg-[#F1E1DC] rounded-lg">
        <input
          onChange={(e) => setSearchPrompt(e.target.value)}
          value={searchPrompt}
          type="text"
          className="bg-transparent text-base font-roboto placeholder-primary w-full"
          placeholder="Search..."
        />

        <button className="text-primary">
          <SearchIcon />
        </button>
      </div>
      {searching && (
        <div className="absolute w-4/5 h-fit max-h-40 bg-secbase top-[4rem] rounded-lg overflow-y-scroll">
          {searchResults.map((result) => (
            <Link
              href="/"
              target="_blank"
              className="h-10 w-full flex items-center px-4 hover:bg-bg/50 hover:cursor-pointer"
              key={result._id}
            >
              {result.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
