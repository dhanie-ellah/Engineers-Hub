import React from 'react'
import ProfileBodyLeft from '../EngineersProfile/ProfileBodyLeft'
import ProfileBodyRight from '../EngineersProfile/ProfileBodyRight'

const ProfileBody = ({
  Data
}) => {
  return (
    <div className=' flex gap-10 w-[80%] m-auto p-10 lg:flex-col lg:w-[75%] md:w-[90%] md:px-0'>
      <ProfileBodyLeft Data={Data} />
      <ProfileBodyRight/>
    </div>
  )
}

export default ProfileBody