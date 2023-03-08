import React from 'react'
import { Link } from "react-router-dom";
import CompanyProfileCard from '../CompanyProfileCard';
import coverphoto from "../../assets/Rectangle 14.png";
import shell from '../../assets/shell.png'
import chevron from '../../assets/chevron.png'

const TopCompanies = () => {
  return (
    <div className="w-1/2 lg:w-full">
      <h1 className=" text-center text-3xl text-blue font-semibold mb-5">
        Top Companies
      </h1>
      <div className="flex flex-wrap gap-[4%] md:flex-col">
        <CompanyProfileCard
          companyprofilecover={coverphoto}
          companyprofilephoto={shell}
          companyname="Shell"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={coverphoto}
          companyprofilephoto={chevron}
          companyname="Chevron"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={coverphoto}
          companyprofilephoto={shell}
          companyname="Shell"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={coverphoto}
          companyprofilephoto={chevron}
          companyname="Chevron"
          field="Upstream oil and gas"
          year="2022"
        />
      </div>
      <p className=" text-center">
        <Link className="text-orange text-sm font-medium">See More</Link>
      </p>
    </div>
  );
}

export default TopCompanies