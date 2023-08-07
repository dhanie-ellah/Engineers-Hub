import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

const ProfilePicture = () => {
  return (
    <form className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-3 md:w-11/12 md:px-5 lg:w-3/5">
      <h1 className="text-blue text-center text-xl font-semibold">
        Add a photo to your profile
      </h1>
      <p className=" text-grey text-xs text-center px-12">
        Make it easy for people to identify you
      </p>
      <div className=" w-[150px] h-[150px] flex justify-center items-center m-auto border-2 border-grey rounded-xl">
        <FontAwesomeIcon
          icon={faCamera}
          className="text-4xl fill-grey text-grey"
        />
      </div>
      <button className="w-full bg-orange rounded-full p-2 text-xs text-white cursor-pointer text-center">
        Take a selfie
      </button>
      <label
        htmlFor="import"
        className="w-full bg-orange rounded-full p-2 text-xs text-white cursor-pointer text-center"
      >
        Import from Gallery
      </label>
      <input type="file" id="import" className=" hidden" />
      <Link className=" text-center text-black text-xs">Skip</Link>
    </form>
  );
}

export default ProfilePicture