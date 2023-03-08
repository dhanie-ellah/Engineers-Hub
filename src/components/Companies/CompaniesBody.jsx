import React from 'react'
import CompanyProfileCard from '../CompanyProfileCard'
import CompanyCard from '../CompanyCard'
import ProfileCover from '../../assets/Rectangle 14.png'
import Chevron from '../../assets/chevron.png'
import Shell from '../../assets/shell.png'
import CompanyPicture from '../../assets/CompanyPicture.png'

const CompaniesBody = () => {
  return (
    <div className=" w-[80%] m-auto flex gap-5 lg:w-[90%] lg:flex-col">
      <div className=" w-1/2 flex flex-wrap gap-[4%] lg:w-full">
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Chevron}
          companyname="Chevron"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Shell}
          companyname="Shell"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Chevron}
          companyname="Chevron"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Shell}
          companyname="Shell"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Chevron}
          companyname="Chevron"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Shell}
          companyname="Shell"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Chevron}
          companyname="Chevron"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Shell}
          companyname="Shell"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Chevron}
          companyname="Chevron"
          field="Upstream oil and gas"
          year="2022"
        />
        <CompanyProfileCard
          companyprofilecover={ProfileCover}
          companyprofilephoto={Shell}
          companyname="Shell"
          field="Upstream oil and gas"
          year="2022"
        />
      </div>
      <div className=" w-1/2 bg-ash2 rounded-lg p-4 flex flex-col gap-5 lg:w-full">
        <CompanyCard />
        <CompanyCard CompanyPicture={CompanyPicture} />
        <CompanyCard CompanyPicture={CompanyPicture} />
      </div>
    </div>
  );
}

export default CompaniesBody