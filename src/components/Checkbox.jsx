import React from 'react'

const Checkbox = ({id, text}) => {
  return (
    <div className='flex gap-[5px] items-center'>
      <input type="checkbox" id={id}/>
      <label htmlFor={id} className=' text-blue text-xs'>{text}</label>
    </div>
  )
}

export default Checkbox