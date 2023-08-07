import React from 'react'

const Checkbox = ({id, text, styling}) => {
  return (
    <div className="flex gap-[5px] items-center">
      <input type="checkbox" id={id} className={styling} />
      <label htmlFor={id} className=" text-blue text-xs">
        {text}
      </label>
    </div>
  );
}

export default Checkbox