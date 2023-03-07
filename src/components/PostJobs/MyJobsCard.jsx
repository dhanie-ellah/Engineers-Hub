import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MyJobsCard = ({title, location, duration, salary, company, role}) => {
  return (
    <div>
      <div className="flex w-full p-3 md:p-0 items-center justify-between gap-2 cursor-pointer md:flex-col">
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
        <div className="flex flex-col gap-1 justify-center md:flex-row md:justify-between md:gap-10">
          <button className=" rounded-full py-2.5 text-dark-grey text-xs flex items-center gap-1.5">
            <FontAwesomeIcon
              icon={faTrashCan}
              className=" text-xs text-dark-grey"
            />
            Delete Job
          </button>
          <button className=" rounded-full py-2.5 text-dark-grey text-xs flex items-center gap-1.5">
            <FontAwesomeIcon icon={faEye} className=" text-xs text-dark-grey" />{" "}
            See Applicants
          </button>
        </div>
      </div>
      <hr className=' bg-orange h-[3px]' />
    </div>
  );
}

export default MyJobsCard