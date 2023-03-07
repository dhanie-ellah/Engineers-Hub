import React from "react";
import CompanyCard from "../CompanyCard";
import { Link } from "react-router-dom";

const CompanyList = () => {
  return (
    <div className="w-1/2 bg-ash2 rounded-lg p-4 flex flex-col gap-4 h-fit md:w-full">
      <div className=" flex flex-col gap-[25px]">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
      <p className=" text-center">
        <Link className="text-orange text-sm font-medium">See More</Link>
      </p>
    </div>
  );
};

export default CompanyList;
