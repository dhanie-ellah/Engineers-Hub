import React from 'react'

const ProfileCard = ({profilecover, profilephoto, name, field, year}) => {
  return (
    <div className='rounded-3xl overflow-hidden shadow w-[48%] relative cursor-pointer mb-[25px] md:w-[100%]'>
      <div className='w-full'>
        <img className='w-full' src={profilecover} alt="" />
      </div>
      <div className='w-[150px] h-[150px] rounded-full m-auto relative -mt-20 overflow-hidden'>
        <img src={profilephoto} alt="" className=' mx-auto my-auto'/>
      </div>
      <div className='text-center text-xs flex flex-col gap-1.5 p-8 px-4 pt-0 md:px-8'>
        <h1 className='text-blue text-base font-bold'>{ name}</h1>
        <p className='text-blue'>{ field}</p>
        <p className='text-blue'>Bsc, Phd, MSc, Coren certified</p>
        <p className='text-blue'>Joined { year}</p>
        <button className='w-full rounded-full border border-orange font-semibold bg-orange text-white p-2.5'>Hire</button>
        <button className='w-full rounded-full border border-orange font-semibold text-orange p-2.5'>Follow</button>
      </div>
    </div>
  )
}

export default ProfileCard