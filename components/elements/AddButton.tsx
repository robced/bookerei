import React from "react";
import { Button } from "../../interfaces/Button.interface";
import { AddIcon } from "./Icons";

const AddButton = ({ filled, shop, color, textColor }: Button) => {
  return (
    <button
      className={`${
        shop ? "h-10 w-10" : "h-12 w-12"
      } flex items-center justify-center rounded-[15px] ${color} ${textColor}`}
    >
      <AddIcon />
    </button>
  );
};

export default AddButton;
