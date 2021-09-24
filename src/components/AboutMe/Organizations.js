import { OrganizationCard } from "./OrganizationCard";
import React from "react";
import { organizationsData } from "../../data/organizations";

export default function Organizations() {
  return (
    <div className="mb-8 mt-20">
      <h1 className="text-center mt-2 mb-10 font-primary font-black text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
        Organizations
      </h1>
      <div className="flex flex-wrap w-full">
        {organizationsData.map((organization, index) => (
          <OrganizationCard organization={organization} key={index} />
        ))}
      </div>
    </div>
  );
}
