import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/user-icon.png'
import InputField from '../InputField'
import SubmitBtn from '../SubmitBtn'
import googleLogo from '../../assets/googleLogo.png'
import facebookLogo from '../../assets/facebookLogo.png'

const registerForm = () => {
  return (
    <form className='border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-4 md:w-11/12 md:px-5 lg:w-3/5'>
      {/* User Icon Image */}
      <div className='flex justify-center'>
        <img src={UserIcon} alt="" />
      </div>
      {/* Form heading */}
      <h1 className='text-blue text-center text-2xl font-semibold'>Register <span className='text-grey'>in seconds</span></h1>
      {/* Form input fields */}
      <InputField placeholder='Email' input_type='email' />
      <InputField placeholder='Password' input_type='password' />
      <InputField placeholder='Confirm password' input_type='password' />
      {/* Terms of service and privacy policy agreement checkbox */}
      <div className='flex items-center gap-2'>
        <InputField input_type='checkbox' id='acceptance' className='w-fit accent-orange'/>
        <label for='acceptance' className='text-blue text-xs'>Joining means you are okay with our <Link className='text-orange'>Terms of Service</Link> and <Link className='text-orange'>Privacy Policy</Link>.</label>
      </div>
      {/* submission button */}
      <SubmitBtn title='Register' />
      {/* Horizontal divider */}
      <div className='flex items-center justify-between'>
        <hr className='w-2/5 border-1 border-dark-grey outline-none'/>
        <p className='text-dark-grey text-sm'>Or</p>
        <hr className='w-2/5 border-1 border-dark-grey outline-none'/>
      </div>
      {/* Login optio */}
      <h1 className='text-blue text-center font-semibold text-xs'>Already a member? <Link to='/login' className='text-orange'>Sign In</Link></h1>
      {/* Alternative signup options */}
      <button className='access-btn'><img src={googleLogo} alt="" className='w-3'/> Sign up with Google</button>
      <button className='access-btn'><img src={facebookLogo} alt="" className='w-3' /> Sign up with Facebook</button>
    </form>
  )
}

export default registerForm