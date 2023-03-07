import React from 'react'
import { faBookmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobDescription = ({
  title,
  company,
  location,
  duration,
  salary,
  role,
  responsibilities,
  requirements,
  others,
}) => {
  return (
    <div className=" w-1/2 bg-ash2 rounded-lg p-4 flex flex-col gap-4 h-fit md:w-full text-xs">
      <p>
        <b>Job Details</b> • Posted 4 Days ago
      </p>
      <div className=" bg-white rounded-lg p-3 px-[30px] md:px-[10px]">
        <p className=" text-blue font-semibold text-sm">{title}</p>
        <p className=" text-orange-80">{company}</p>
        <p className=" text-blue font-semibold text-sm">
          {location} | {duration} | {salary}
        </p>
      </div>
      {/* buttons */}
      <div className="flex gap-2.5 justify-center md:flex-row md:justify-between w-[80%] m-auto">
        <button className=" border border-orange rounded-full py-2.5 px-10 bg-orange text-white text-xs flex items-center gap-1.5 w-[50%] justify-center">
          <FontAwesomeIcon icon={faBriefcase} className=" text-xs" />
          Apply
        </button>

        <button className=" border border-orange rounded-full py-2.5 px-10 text-orange text-xs flex items-center gap-1.5 w-[50%] justify-center">
          <FontAwesomeIcon icon={faBookmark} className=" text-xs text-orange" />
          Save
        </button>
      </div>
      <p className=" text-blue font-bold">{role}</p>
      {/* responsibilities */}
      <div>
        <h1 className=" text-blue font-bold">Responsibilities</h1>
        <p>{responsibilities}</p>
      </div>
      {/* requirements */}
      <div>
        <h1 className=" text-blue font-bold">Requirements</h1>
        <p>{requirements}</p>
      </div>
      {/* other details */}
      <div>
        <h1 className=" text-blue font-bold">Other Details</h1>
        <p>{others}</p>
      </div>
    </div>
  );
};

export default JobDescription