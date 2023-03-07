import React from 'react'

const CompanyProfileCard = ({ companyprofilecover, companyprofilephoto, companyname, field, year }) => {
  return (
    <div className="rounded-3xl overflow-hidden shadow w-[48%] relative cursor-pointer mb-[25px] md:w-[100%]">
      <div className="w-full">
        <img className="w-full" src={companyprofilecover} alt="" />
      </div>
      <div className="w-fit m-auto relative -mt-20 rounded-full">
        <img src={companyprofilephoto} alt="" />
      </div>
      <div className="text-center text-xs flex flex-col gap-2 p-8 px-4 pt-0 md:px-8">
        <h1 className="text-blue text-base font-bold">{companyname}</h1>
        <p className="text-blue">{ field} </p>
        <p className="text-blue">Joined {year}</p>
        <button className="w-full rounded-full border border-orange font-semibold text-orange p-2.5">
          Follow
        </button>
      </div>
    </div>
  );
};

export default CompanyProfileCard