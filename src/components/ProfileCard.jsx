import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profilecover, profilephoto, name, field, year }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHiring, setIsHiring] = useState(false);
  return (
    <div className="rounded-3xl overflow-hidden shadow w-[48%] relative cursor-pointer mb-[25px] md:w-[100%]">
      <Link to="/profiledetail">
        <div className="w-full">
          <img className="w-full" src={profilecover} alt="" />
        </div>
        <div className="w-[150px] h-[150px] rounded-full m-auto relative -mt-20 overflow-hidden">
          <img src={profilephoto} alt="" className=" mx-auto my-auto" />
        </div>
        <div className="text-center text-xs flex flex-col gap-1.5 p-8 px-4 pt-0 md:px-8">
          <h1 className="text-blue text-base font-bold">{name}</h1>
          <p className="text-blue">{field}</p>
          <p className="text-blue">Bsc, Phd, MSc, Coren certified</p>
          <p className="text-blue">Joined {year}</p>
        </div>
      </Link>
      <div className="text-center text-xs flex flex-col gap-1.5 p-8 px-4 pt-0 md:px-8">
        <button
          className={`${
            isHiring ? "bg-blue border-transparent" : ""
          } w-full rounded-full border border-orange font-semibold bg-orange text-white p-2.5`}
          onClick={() => {
            setIsHiring(!isHiring);
          }}
        >
          {isHiring ? "Hired" : "Hire"}
        </button>
        <button
          className={`${
            isFollowing
              ? "bg-orange-40 text-white border-transparent"
              : "bg-transparent text-orange border-orange"
          } w-full rounded-full border font-semibold p-2.5`}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
