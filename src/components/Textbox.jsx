import React from 'react'

const Textbox = ({ placeholder, label, id }) => {
  return (
    <div className=" text-xs flex flex-col relative">
      <label htmlFor={id} className=" bg-[#ffffff] px-1 -mb-3 z-[2] ml-6 w-fit">
        {label}
      </label>
      <textarea
        cols="30"
        rows="5"
        placeholder={placeholder}
        id={id}
        className=" w-full border-[1.5px] border-dark-grey rounded-lg mt-1 placeholder:text-blue placeholder:text-xs px-5 py-4 outline-none text-dark-grey resize-none"
      ></textarea>
    </div>
  );
};

export default Textbox