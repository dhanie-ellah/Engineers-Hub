import React from 'react'
import { Link } from 'react-router-dom';
import ProfileCard from '../ProfileCard'
import profilecover from '../../assets/coverphoto.jpg'
import biobele from '../../assets/biobele.jpeg'
import kenile from '../../assets/kenile.jpeg'
import golden from '../../assets/golden.jpeg'
import uzoamaka from '../../assets/uzoamaka.jpeg'

const TopEngineers = () => {
  return (
    <div className="w-1/2 md:w-full">
      <h1 className=" text-center text-3xl text-blue font-semibold mb-5">
        Top Engineers
      </h1>
      <div className="flex flex-wrap gap-[4%] md:flex-col">
        <ProfileCard
          profilecover={profilecover}
          profilephoto={biobele}
          name="Divine Orji"
          field="Civil Engineer"
          year="2020"
        />
        <ProfileCard
          profilecover={profilecover}
          profilephoto={kenile}
          name="Braide Daniella"
          field="Computer Engineer"
          year="2024"
        />
        <ProfileCard
          profilecover={profilecover}
          profilephoto={golden}
          name="King Sampson"
          field="Electrical Engineer"
          year="2019"
        />
        <ProfileCard
          profilecover={profilecover}
          profilephoto={uzoamaka}
          name="George Jeffrey"
          field="Chemical Engineer"
          year="2022"
        />
      </div>
      <p className=" text-center">
        <Link className="text-orange text-sm font-medium">See More</Link>
      </p>
    </div>
  );
}

export default TopEngineers