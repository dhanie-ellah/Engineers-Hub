import React from 'react'

const submitBtn = ({title}) => {
  return (
    <div>
      <input type="submit" value={title} className="w-full text-white bg-orange rounded-full p-2 text-sm cursor-pointer"/>
    </div>
  )
}

export default submitBtn