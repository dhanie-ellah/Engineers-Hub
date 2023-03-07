import React from 'react'
import Checkbox from '../Checkbox'
import { Link } from 'react-router-dom';

const SearchingFor = () => {
  return (
    <form className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-[25px] my-5 flex flex-col gap-3 md:w-11/12 md:px-5 lg:w-3/5">
      <h1 className="text-blue text-center text-2xl font-semibold">
        Welcome Divine!
      </h1>
      <p className=" text-grey text-xs text-center px-12">
        Let us provide you with the best help, what are you searching for?
      </p>
      <div className=" flex flex-col gap-[15px]">
        <Checkbox id="job" text="I’m searching for a job" />
        <Checkbox id="internship" text="I’m searching for an internship" />
        <Checkbox
          id="it"
          text="I’m searching for a company to carry out my IT program"
        />
        <Checkbox id="hiring" text="I want to hire qualified Talents" />
        <Checkbox id="nothing" text="Nothing for now" />
      </div>

      <input
        type="submit"
        value="Confirm"
        className="w-10/12 m-auto bg-orange rounded-full p-2 text-xs cursor-pointer"
      />

      <Link to="" className=' text-blue text-xs text-center'>Skip</Link>
    </form>
  );
}

export default SearchingFor