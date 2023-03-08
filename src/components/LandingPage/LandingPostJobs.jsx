import React from 'react'
import { Link } from 'react-router-dom'
import landingPostJobs from '../../assets/landing-postjob.png'

const LandingPostJobs = () => {
  return (
    <div className='p-10 w-4/5 m-auto flex justify-between items-center lg:w-[90%] lg:px-0 md:flex-col md:w-full md:p-5 lg:gap-5'>
      <div className='w-4/12 relative flex items-center justify-center lg:w-[50%] md:w-full'>
        <img src={landingPostJobs} alt="" />
      </div>
      <div className='w-7/12 flex flex-col py-5 md:w-full md:gap-3 lg:w-[50%]'>
        <h1 className='text-blue text-4xl md:text-2xl font-semibold'>Find the right talent for your organization</h1>
        <p className='font-semi-bold text-dark-grey text-sm py-5 md:py-0'>Post a job and get access to qualified talents that can help your  team grow, we make it easy, fast and simple to gain access to verified and competent engineers</p>
        <Link to='/postjob' className='border rounded-full px-4 py-2.5 w-fit text-orange border-orange text-xs font-semibold hover:bg-orange hover:text-white'>Post Job</Link>
      </div>
    </div>
  )
}

export default LandingPostJobs