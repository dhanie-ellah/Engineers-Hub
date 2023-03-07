import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '../../assets/user-icon.png'
import InputField from '../InputField'
import SubmitBtn from '../SubmitBtn'

const fillDetails = () => {
  return (
    <div className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-4 md:w-11/12 md:px-5 lg:w-3/5">
      <div className="flex justify-center">
        <img src={UserIcon} alt="" />
      </div>
      <h1 className="text-blue text-center text-2xl font-semibold">
        Please fill your details
      </h1>
      <InputField placeholder="First Name" input_type="text" />
      <InputField placeholder="Middle Name" input_type="text" />
      <InputField placeholder="Last Name" input_type="text" />
      <InputField placeholder="Country" input_type="text" />
      <InputField placeholder="City" input_type="text" />
      <SubmitBtn title="Login" />

      <h1 className="text-blue text-center font-semibold text-xs">
        Are you a recruiter?
        <Link to="" className="text-orange">
          Register here
        </Link>
      </h1>
    </div>
  );
}

export default fillDetails