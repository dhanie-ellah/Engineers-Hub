import React from "react";
import TopCompanies from "./TopCompanies";
import CompanyList from "./CompanyList";

const Companies = () => {
  return (
    <div className="flex gap-5 w-4/5 m-auto my-[50px] md:flex-col md:w-11/12">
      <TopCompanies />
      <CompanyList />
    </div>
  );
};

export default Companies;
