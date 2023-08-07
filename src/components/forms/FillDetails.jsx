import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserIcon from '../../assets/user-icon.png'
import InputField from '../InputField'
import SubmitBtn from '../SubmitBtn'
import supabase from '../../Config/supabase'

const FillDetails = ({register, setRegister, setPage, signUp1}) => {
  const Navigate = useNavigate();

  const supabaseConnect = supabase()

  const signup = () => {
    console.log('start')
    supabaseConnect
      .from("Register Table")
      .insert({
        first_name: register.first_name,
        middle_name: register.middle_name,
        last_name: register.last_name,
        country: register.country,
        city: register.city,
      });
    console.log('end')
  }

  return (
    <form
      className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-4 md:w-11/12 md:px-5 lg:w-3/5"
      onSubmit={(e) => {
        e.preventDefault();
        signup();
        Navigate("/confirmMail");
      }}
    >
      <div className="flex justify-center">
        <img src={UserIcon} alt="" />
      </div>
      <h1 className="text-blue text-center text-2xl font-semibold">
        Please fill your details
      </h1>
      {/* first_name */}
      <InputField
        placeholder="First Name"
        input_type="text"
        name="first_name"
        value={register.first_name}
        onchange={(e) => {
          setRegister({
            ...register,
            first_name: e.target.value,
          });
        }}
      />
      {/* middle_name */}
      <InputField
        placeholder="Middle Name"
        input_type="text"
        name="middle_name"
        value={register.middle_name}
        onchange={(e) => {
          setRegister({
            ...register,
            middle_name: e.target.value,
          });
        }}
      />
      {/* last_name */}
      <InputField
        placeholder="Last Name"
        input_type="text"
        name="last_name"
        value={register.last_name}
        onchange={(e) => {
          setRegister({
            ...register,
            last_name: e.target.value,
          });
        }}
      />
      {/* country */}
      <InputField
        placeholder="Country"
        input_type="text"
        name="country"
        value={register.country}
        onchange={(e) => {
          setRegister({
            ...register,
            country: e.target.value,
          });
        }}
      />
      {/* city */}
      <InputField
        placeholder="City"
        input_type="text"
        name="city"
        value={register.city}
        onchange={(e) => {
          setRegister({
            ...register,
            city: e.target.value,
          });
        }}
      />
      {/* submit button */}
      <SubmitBtn title="Save" />

      <h1 className="text-blue text-center font-semibold text-xs">
        Are you a recruiter?
        <Link to="" className="text-orange">
          Register here
        </Link>
      </h1>
    </form>
  );
}

export default FillDetails