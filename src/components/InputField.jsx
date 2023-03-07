import React from 'react'

const inputField = ({input_type, placeholder, id}) => {
  return (
    <div>
      <input type={input_type} placeholder={placeholder} id={id} className='w-full rounded-full py-3 px-7 text-xs placeholder:text-dark-grey placeholder:text-xs border text-dark-grey outline-none border-dark-grey'/>
    </div>
  )
}

export default inputField