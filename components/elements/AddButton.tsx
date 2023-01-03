import React from "react";
import { Button } from "../../interfaces/Button.interface";
import { AddIcon } from "./Icons";

const AddButton = ({ filled }: Button) => {
  return (
    <button
      className={`h-12 w-12 flex items-center justify-center rounded-[15px] ${
        filled ? "bg-[#EECABF]" : "bg-primary"
      } ${filled ? "text-primary" : "text-[#EECABF]"}`}
    >
      <AddIcon />
    </button>
  );
};

export default AddButton;
