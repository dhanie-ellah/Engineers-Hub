import React from 'react'
import Input from '../DynamicInput';
import Textbox from '../Textbox'

const PostJobForm = () => {
  return (
    <form className=" w-1/2 flex flex-col gap-4 lg:w-full">
      <h1 className=" text-2xl text-blue font-medium">Post a Job</h1>
      <p className=" text-xs text-dark-grey">
        Fill in details you want applicants to see before applying for this job
      </p>
      <Input
        placeholder="Civil Engineer"
        id="specialization"
        label="Specialization"
      />
      <Input
        placeholder="Port Harcourt, Rivers state"
        id="Location"
        label="Location"
      />
      <Input
        placeholder="BSc, Coren Certified"
        id="Qualifications"
        label="Qualifications Needed"
      />
      <Input
        placeholder="N150,000 - N200,000 per month"
        id="Salary"
        label="Salary Range"
      />
      <Textbox
        placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
        id="Responsibilities"
        label="Responsibilities"
      />
      <Textbox
        placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
        id="Requirements"
        label="Requirements"
      />
      <Textbox
        placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
        id="Others"
        label="Other Details"
      />

      <input type="submit" value="Post Job"  className=' bg-orange text-white rounded-full p-2.5 text-xs w-[75%] m-auto'/>
    </form>
  );
}

export default PostJobForm