import React from 'react'

const Input = ({placeholder, label, id}) => {
  return (
    <div className=' text-xs flex flex-col relative'>
      <label htmlFor={id} className=' bg-[#ffffff] px-1 -mb-3 z-[2] ml-6 w-fit rounded-full'>{label}</label>
      <input type="text" placeholder={placeholder} id={id} className=' border-[1.5px] border-dark-grey rounded-lg mt-1 placeholder:text-blue px-5 py-2.5 outline-none text-dark-grey' />
    </div>
  );
}

export default Input