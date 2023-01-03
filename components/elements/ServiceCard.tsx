import React from "react";
import { ServiceCard } from "../../interfaces/ServiceCard.interface";

const ServiceCard = ({ service }: ServiceCard) => {
  const { name, description } = service;
  return (
    <div className="w-[211px] h-[130px] bg-secbase rounded-[20px] flex flex-col justify-center font-roboto items-center text-center">
      <h5 className="font-semibold text-lg text-secondary">{name}</h5>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default ServiceCard;
