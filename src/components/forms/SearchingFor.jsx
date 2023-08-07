import React from 'react'
// import Checkbox from '../Checkbox'
import RadioButton from '../RadioButton'
import { useNavigate } from 'react-router-dom';

const SearchingFor = () => {
  const Navigate = useNavigate();

  return (
    <form
      className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-[25px] my-5 flex flex-col gap-3 md:w-11/12 md:px-5 lg:w-3/5"
      onSubmit={(e) => {
        e.preventDefault();
        Navigate("/addPhoto");
      }}
    >
      <h1 className="text-blue text-center text-2xl font-semibold">
        Welcome Divine!
      </h1>
      <p className=" text-grey text-xs text-center px-12">
        Let us provide you with the best help, what are you searching for?
      </p>
      <div className=" flex flex-col gap-[15px] w-[75%] m-auto">
        <RadioButton label="I'm searching for a job" id="searching" name="" />
        <RadioButton label="I want to hire qualified Talents" id="hiring" name="" />
      </div>

      <input
        type="submit"
        value="Confirm"
        className="w-10/12 m-auto bg-orange rounded-full p-2 text-xs text-white cursor-pointer"
      />
    </form>
  );
}

export default SearchingFor