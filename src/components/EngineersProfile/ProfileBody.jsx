import React from 'react'
import ProfileBodyLeft from '../EngineersProfile/ProfileBodyLeft'
import ProfileBodyRight from '../EngineersProfile/ProfileBodyRight'

const ProfileBody = () => {
  return (
    <div className=' flex gap-10 w-[80%] m-auto p-10 md:flex-col md:w-[90%] md:px-0'>
      <ProfileBodyLeft />
      <ProfileBodyRight/>
    </div>
  )
}

export default ProfileBody