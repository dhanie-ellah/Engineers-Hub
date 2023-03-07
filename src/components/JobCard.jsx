import { faBookmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const JobCard = ({title, location, duration, salary, company, role}) => {
  return (
    <div className="flex w-full p-3 items-center justify-between gap-2 shadow-lg cursor-pointer bg-white rounded-lg md:flex-col">
      <div className="text-xs text-blue flex flex-col gap-[5px]">
        <p className="text-blue font-semibold text-sm">
          {title}
        </p>
        <p className=" flex gap-1.5">
          <span className="text-dark-grey bg-ash2 rounded-xl p-1 px-2">
            {location}
          </span>
          <span className="text-dark-grey bg-ash2 rounded-xl p-1 px-2">
            {duration}
          </span>
          <span className="text-dark-grey bg-ash2 rounded-xl p-1 px-2">
            {salary}
          </span>
        </p>
        <p className="text-dark-grey text-sm">{ company}</p>
        <p className="text-dark-grey text-xs font-semibold">
          Job Function: {role}
        </p>
      </div> 

      <div className="flex flex-col gap-1 justify-center md:flex-row md:justify-between">
        <button className=" border border-orange rounded-full py-2.5 px-10 bg-orange text-white text-xs flex items-center gap-1.5">
          <FontAwesomeIcon icon={faBriefcase} className=" text-xs" />
          Apply
        </button>

        <button className=" border border-orange rounded-full py-2.5 px-10 text-orange text-xs flex items-center gap-1.5">
          <FontAwesomeIcon
            icon={faBookmark}
            className=" text-xs text-orange"
          />
          Save
        </button>
      </div>
    </div>
  );
};

export default JobCard;
