import React from 'react'
import MyJobsCard from './MyJobsCard'

const MyJobList = () => {
  return (
    <div className=" w-1/2 flex flex-col gap-5 lg:w-full">
      <MyJobsCard
        title="IT Training – Centre Manager"
        location="Lagos"
        duration="Full Time "
        salary="NGN 150,000 - 250,000"
        company="CDDtech Academy"
        role="Job Function: Engineering & Technology"
      />
      <MyJobsCard
        title="IT Training – Centre Manager"
        location="Lagos"
        duration="Full Time "
        salary="NGN 150,000 - 250,000"
        company="CDDtech Academy"
        role="Job Function: Engineering & Technology"
      />
    </div>
  );
}

export default MyJobList