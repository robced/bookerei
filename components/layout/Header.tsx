import React from "react";
import { ShopIcon } from "../elements/Icons";
import Search from "../elements/Search";

const Header = () => {
  return (
    <div className="h-[4rem] w-full flex items-center justify-between font-roboto z-10 absolute">
      <h3 className="w-2/8 text-3xl font-bold  text-primary">
        Book<b className="font-bold text-primary/70">erei</b>
      </h3>
      <Search />
      <nav className="w-2/8 flex items-center justify-center gap-5 uppercase text-base">
        <a href="" className="">
          Home
        </a>
        <a href="" className="">
          Shop
        </a>
        <a href="" className="">
          <ShopIcon />
        </a>
      </nav>
    </div>
  );
};

export default Header;
