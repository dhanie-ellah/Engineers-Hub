import React from 'react'
import landingFindJob from '../../assets/landing-findjob.png'
import { Link } from 'react-router-dom'

const LandingFindJobs = () => {
  return (
    <div className='p-10 w-4/5 m-auto flex justify-between items-center md:flex-col-reverse md:w-full md:p-5 md:gap-5'>
      <div className='w-7/12 flex flex-col py-5 md:w-full md:gap-3'>
        <h1 className='text-blue text-4xl md:text-2xl font-semibold'>Get hired by top companies which offer value</h1>
        <p className='font-semi-bold text-dark-grey text-sm py-5 md:py-0'>Nulla lorem mauris, lacus, nec tristique ac. Laoreet dictumst porta molestie arcu diam mi, purus semper at. Id ullamcorper arcu turpis phasellus ut. Feugiat mauris, tempus diam sollicitudin mi suspendisse purus nulla.</p>
        <Link to='/findjob' className='border rounded-full px-4 py-2.5 w-fit text-orange border-orange text-xs font-semibold hover:bg-orange hover:text-white'>Find Jobs</Link>
      </div>
      <div className='w-4/12 relative flex items-center justify-center md:w-full'>
        <img src={landingFindJob} alt="" />
      </div>
    </div>
  )
}

export default LandingFindJobs