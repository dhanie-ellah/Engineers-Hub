import React from "react";
import CoverPhoto from "../../assets/coverphoto.jpg";
import ProfilePhoto from "../../assets/Ellipse 47.png";
import Input from "../DynamicInput";

const ProfileBodyLeft = ({ Data }) => {
  return (
    <div className=" w-1/2 border-[1.5px] border-dark-grey rounded-3xl overflow-hidden pb-8 h-fit lg:w-full">
      <div className=" w-full h-[200px] overflow-hidden">
        <img src={CoverPhoto} alt="" className="w-full" />
      </div>
      <div className=" w-[90%] m-auto relative -mt-[100px] flex flex-col gap-2.5">
        <div className=" w-[175px] h-[175px] overflow-hidden">
          <img src={ProfilePhoto} alt="" className=" w-full" />
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" font-medium text-3xl text-blue">{`${Data.firstname} ${Data.lastname}`}</h1>
          <p className=" text-dark-grey font-medium text-sm">
            {/* Bsc, Phd, MSc, Coren certified */}
            {Data.certification && Data.certification}
          </p>
          <p className=" text-dark-grey text-xs">Joined 2022</p>
        </div>
        <div className=" flex flex-col gap-3">
          <Input
            disabled={true}
            label="Email"
            placeholder={Data.email}
            id="Email"
          />
          <Input
            disabled={true}
            label="Phone Number"
            placeholder={Data.phone}
            id="number"
          />
          <Input
            label="Country"
            placeholder={Data.country}
            disabled={true}
            id="Country"
          />
          <Input
            label="State"
            placeholder={Data.city}
            disabled={true}
            id="State"
          />
        </div>

        {/* <div>
          <h1 className=" font-medium text-blue text-2xl">Certifications</h1>
        </div>

        <div>
          <h1 className=" font-medium text-blue text-2xl">Publications</h1>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileBodyLeft;
