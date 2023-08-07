import React from 'react'

const RadioButton = ({label, id, name}) => {
  return (
    <div className=" border-[1px] border-dark-grey rounded-xl p-[1rem] flex justify-between items-center text-xs text-dark-grey">
      <label htmlFor={id}>{label}</label>
      <input
        type="radio"
        name={name}
        id={id}
        className="border border-orange outline-none focus:ring-0 focus:ring-transparent checked:bg-orange"
      />
    </div>
  );
}

export default RadioButton