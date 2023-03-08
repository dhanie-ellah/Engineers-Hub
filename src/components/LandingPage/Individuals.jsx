import React from "react";
import TopEngineers from "./TopEngineers";
import JobList from "./JobList";

const Individuals = () => {
  return (
    <div className="flex gap-5 w-4/5 m-auto my-[50px] lg:flex-col lg:w-11/12">
      <TopEngineers />
      <JobList />
    </div>
  );
};

export default Individuals;
