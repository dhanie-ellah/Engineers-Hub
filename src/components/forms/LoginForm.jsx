import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/user-icon.png'
import InputField from '../InputField'
import SubmitBtn from '../SubmitBtn'
import googleLogo from '../../assets/googleLogo.png'
import facebookLogo from '../../assets/facebookLogo.png'

const loginForm = () => {
  return (
    <div className='border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-4 md:w-11/12 md:px-5 lg:w-3/5'>
      <div className='flex justify-center'>
        <img src={UserIcon} alt="" />
      </div>
      <h1 className='text-blue text-center text-2xl font-semibold'>Login</h1>
      <InputField placeholder='Email' input_type='email' />
      <InputField placeholder='Password' input_type='password' />
      <SubmitBtn title='Login' />
      <div className='flex items-center justify-between'>
        <hr className='w-2/5 border-1 border-dark-grey outline-none'/>
        <p className='text-dark-grey text-sm'>Or</p>
        <hr className='w-2/5 border-1 border-dark-grey outline-none'/>
      </div>

      <h1 className='text-blue text-center font-semibold text-xs'>Not a member? <Link to='/register' className='text-orange'>Join now</Link></h1>

      <button className='access-btn'><img src={googleLogo} alt="" className='w-3' /> Sign in with Google</button>
      <button className='access-btn'><img src={facebookLogo} alt="" className='w-3' /> Sign in with Facebook</button>
    </div>
  )
}

export default loginForm