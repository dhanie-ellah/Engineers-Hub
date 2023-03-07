import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from './Checkbox';
import React from 'react'

const FilterOptions = () => {
  return (
    <div
      className={`hidden z-20 fixed left-0 top-[90px] h-full w-full bg-navy-blue-20`}
    >
      <form className="  bg-white py-[20px] px-[100px] flex flex-col gap-7">
        <div className=" flex items-center justify-between">
          <h1 className=" font-medium text-4xl text-blue">Filter search</h1>
          <FontAwesomeIcon
            icon={faClose}
            className=" text-blue text-2xl cursor-pointer"
          />
        </div>

        <div className=" flex items-center gap-4">
          <div className=" flex flex-col gap-1.5 w-[30%]">
            <label
              htmlFor="specialization"
              className=" text-blue font-semibold text-sm"
            >
              Specialization
            </label>
            <input
              type="text"
              placeholder="Civil Engineer"
              id="specialization"
              className=" bg-transparent border border-dark-grey rounded-full text-sm outline-none p-1.5 px-3 placeholder:text-xs"
            />
          </div>

          <div className=" flex flex-col gap-1.5 w-[30%]">
            <label
              htmlFor="location"
              className=" text-blue font-semibold text-sm"
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Port harcourt, River state"
              id="location"
              className=" bg-transparent border border-dark-grey rounded-full text-sm outline-none p-1.5 px-3 placeholder:text-xs"
            />
          </div>
        </div>

        <div className=" flex justify-between ">
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-sm text-blue">Date posted</h1>
            <Checkbox text="Recent" id="recent" />
            <Checkbox text="Last week" id="week" />
            <Checkbox text="Last month" id="mont" />
            <Checkbox text="Any time" id="time" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-sm text-blue">Position level</h1>
            <Checkbox text="Manager" id="manager" />
            <Checkbox text="Senior" id="senior" />
            <Checkbox text="Junior" id="junior" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-sm text-blue">Type of workspace</h1>
            <Checkbox text="Remote" id="remote" />
            <Checkbox text="Hybrid" id="hybrid" />
            <Checkbox text="Onsite" id="onsite" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-sm text-blue">
              Years of experience
            </h1>
            <Checkbox text="0 -3 years" id="initialYears" />
            <Checkbox text="4 - 6 years" id="midYears" />
            <Checkbox text="7 - 10 years" id="expertYears" />
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-sm text-blue">Salary Range</h1>
          </div>
        </div>

        <input
          type="submit"
          value="Apply"
          className="w-fit m-auto text-white px-10 bg-orange rounded-full p-1.5 text-sm cursor-pointer"
        />
      </form>
    </div>
  );
}

export default FilterOptions