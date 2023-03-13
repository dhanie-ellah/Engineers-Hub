import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import chevron from '../assets/chevron.png'

const CompanyCard = ({ CompanyPicture }) => {
  const [isFollowing, setIsFollowing] = useState(false)
  return (
    <div className="flex flex-col gap-3 w-full p-5 shadow-lg cursor-pointer bg-white rounded-lg md:flex-col">
      <button
        className={`${isFollowing?'bg-orange text-[#fff]':''} w-fit text-center rounded-full border border-orange font-semibold text-orange text-sm p-2 px-14`}
        onClick={() => {
          setIsFollowing(!isFollowing);
        }}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
      <header className="flex items-center justify-between">
        <div className=" w-[45px] h-[45px] rounded-full overflow-hidden">
          <img src={chevron} alt="" />
        </div>
        <div>
          <h1 className=" text-blue text-xs font-bold">Chevron</h1>
          <p className=" text-dark-grey text-xs">
            Mechanical engineering recruitment firm
          </p>
        </div>
        <p className=" text-dark-grey text-xs">12:23am</p>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className=" text-blue text-sm"
        />
      </header>
      <p className=" text-dark-grey text-sm">
        Lörem ipsum bejiren ötrede. Trins odade medborgarforskning. Autoktig
        krortad, låtisade yktig ost. Spev kvasis, prorade fassade. Biocism dev
        ber. Telepyn res. Bilig oning fadinde, preplaktigt. Makrode tretenas
        även om exoning.{" "}
      </p>
      <div className="w-full overflow-hidden rounded-lg">
        <img src={CompanyPicture} alt="" className="w-[100%]" />
      </div>
    </div>
  );
}

export default CompanyCard