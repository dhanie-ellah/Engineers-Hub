import { faBookmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const JobCard = ({ title, location, duration, salary, company, role }) => {
  const [isSaved, setIsSaved] = useState(false)
  const [isApplied, setIsApplied] = useState(false)
  
  return (
    <div className="flex w-full p-3 items-center justify-between gap-2 shadow-lg cursor-pointer bg-white rounded-lg md:flex-col">
      <div className="text-xs text-blue flex flex-col gap-[5px]">
        <p className="text-blue font-semibold text-sm">{title}</p>
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
        <p className="text-dark-grey text-sm">{company}</p>
        <p className="text-dark-grey text-xs font-semibold">
          Job Function: {role}
        </p>
      </div>

      <div className="flex flex-col gap-1 justify-center md:flex-row md:justify-between">
        <button
          className={`${isApplied?'bg-blue text-white border-transparent':''} border border-orange rounded-full py-2.5 px-10 bg-orange text-white text-xs flex items-center gap-1.5`}
          onClick={() => {
            setIsApplied(!isApplied);
          }}
        >
          <FontAwesomeIcon icon={faBriefcase} className={`${isApplied?'':''} text-xs`} />
          {isApplied ? "Applied" : "Apply"}
        </button>

        <button
          className={`${
            isSaved ? "bg-orange-40 text-white border-transparent" : ""
          } border border-orange rounded-full py-2.5 px-10 text-orange text-xs flex items-center gap-1.5`}
          onClick={() => {
            setIsSaved(!isSaved);
          }}
        >
          <FontAwesomeIcon
            icon={faBookmark}
            className={`${isSaved ? "text-white" : ""} text-xs text-orange`}
          />
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
