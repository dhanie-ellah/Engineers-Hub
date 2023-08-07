import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserIcon from "../../assets/user-icon.png";


const ConfirmMail = () => {
  const Navigate = useNavigate();

  return (
    <form
      className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-4 md:w-11/12 md:px-5 lg:w-3/5"
      onSubmit={(e) => {
        e.preventDefault();
        Navigate("/search");
      }}
    >
      {/* User Icon Image */}
      <div className="flex justify-center">
        <img src={UserIcon} alt="" />
      </div>
      {/* Form heading */}
      <h1 className="text-blue text-center text-2xl font-semibold">
        Confirm Email
      </h1>
      <p className=" text-grey text-xs text-center">
        Please input the confirmation code sent to di********@gmail.come to
        Proceed
      </p>
      {/* Form input fields */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-grey rounded-2xl w-[65px] h-[65px] outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-grey rounded-2xl w-[65px] h-[65px] outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-grey rounded-2xl w-[65px] h-[65px] outline-none"
        />
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-grey rounded-2xl w-[65px] h-[65px] outline-none"
        />
      </div>

      <input
        type="submit"
        value="Confirm"
        className="w-full bg-orange rounded-full p-2 text-white text-sm cursor-pointer"
      />

      <h1 className="text-blue text-center font-semibold text-xs">
        Didn’t Receive any code?
        <Link to="" className="text-orange">
          Send again
        </Link>
      </h1>
    </form>
  );
}

export default ConfirmMail