import React from 'react'
import JobCard from '../JobCard'

const JobList = () => {
  return (
    <div className="w-1/2 bg-ash2 rounded-lg p-4 flex flex-col gap-4 h-fit lg:w-full">
      <p className=' text-dark-grey text-xs text-center'>Jobs based on your profile • Updated 10 min ago</p>
      <div className=" flex flex-col gap-[25px]">
        <JobCard
          title="IT Training - Centre Manager"
          location="Lagos"
          duration="Full Time"
          salary="NGN 150,000 - 250,000"
          company="CDDtech Academy"
          role="Engineering & Technology"
        />
        <JobCard
          title="Maintenance Engineer"
          location="Lagos"
          duration="Full Time"
          salary="NGN Confidential"
          company="RUTH'RFORD SERVICES LIMITED"
          role="Engineering & Technology"
        />
        <JobCard
          title="IT Support Officer"
          location="Lagos"
          duration="Full Time"
          salary="NGN Confidential"
          company="Opticom Finance Limited"
          role="Engineering & Technology"
        />
        <JobCard
          title="IT Training - Centre Manager"
          location="Lagos"
          duration="Full Time"
          salary="NGN 150,000 - 250,000"
          company="CDDtech Academy"
          role="Engineering & Technology"
        />
        <JobCard
          title="Maintenance Engineer"
          location="Lagos"
          duration="Full Time"
          salary="NGN Confidential"
          company="RUTH'RFORD SERVICES LIMITED"
          role="Engineering & Technology"
        />
        <JobCard
          title="IT Support Officer"
          location="Lagos"
          duration="Full Time"
          salary="NGN Confidential"
          company="Opticom Finance Limited"
          role="Engineering & Technology"
        />
      </div>
    </div>
  );
}

export default JobList