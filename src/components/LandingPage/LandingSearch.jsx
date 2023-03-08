import React from "react";
import landingSearch from "../../assets/landing-search.png";
import InputField from "../InputField";

const LandingSearch = () => {
  return (
    <div className="p-10 w-4/5 m-auto flex justify-between items-center md:flex-col-reverse lg:w-[90%] lg:p-5 lg:gap-5 md:gap-2">
      <div className="w-6/12 flex flex-col gap-1 px-12 py-5 lg:w-7/12 lg:px-0 md:w-full md:px-0">
        <h1 className="text-blue text-5xl font-semibold">
          The Engineers Community
        </h1>
        <p className="font-semi-bold text-dark-grey w-4/6 text-sm py-2 md:py-0">
          Your hub for Engineering Jobs, Internships, IT Placements
        </p>
        <InputField
          input_type="text"
          placeholder="Search by keyword “civil engineer”"
        />
        <input
          className="bg-orange w-fit text-xs rounded-full px-5 py-2.5 cursor-pointer text-white"
          type="submit"
          value="Find Job"
        />
      </div>

      <div className="w-4/12 relative flex items-center justify-center md:w-full lg:w-5/12">
        <img
          className="w-full flex items-center justify-center"
          src={landingSearch}
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingSearch;
