import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Input from '../DynamicInput'
import Textbox from '../Textbox'

const ProfileBodyRight = () => {
  const [isAboutMe, setIsAboutMe] = useState(false)
  const [isExperience, setIsExperience] = useState(false)
  const [isEducation, setIsEducation] = useState(false)
  const [isSkills, setIsSkills] = useState(false)

  return (
    <div className=" w-1/2 flex flex-col gap-3 lg:w-full">
      {/* about me */}
      <form className=" flex flex-col gap-5">
        {/* about me header */}
        <div className=" flex justify-between items-center">
          <h1 className=" text-blue font-medium text-2xl">About Me</h1>
          <FontAwesomeIcon
            icon={isAboutMe ? faCaretLeft : faCaretDown}
            className=" cursor-pointer"
            onClick={() => {
              setIsAboutMe(!isAboutMe);
            }}
          />
        </div>
        {/* about me details */}
        <div className={`${isAboutMe ? "hidden" : "flex"} flex-col gap-2`}>
          <Input label="Full Name" placeholder="Divine Orji" id="name" />
          <Input
            label="Specialization"
            placeholder="Civil Engineer"
            id="Specialization"
          />
          <Input
            label="Certifications"
            placeholder="Bsc, PHD, Msc, COREN"
            id="Certifications"
          />
          <Input
            label="Date of Birth"
            placeholder="26 - December - 1999"
            id="DOB"
          />
          <Input
            label="Location"
            placeholder="Port-harcourt, Rivers State"
            id="Location"
          />
          <Textbox
            label="Brief Description"
            placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
            id="Description"
          />
        </div>
      </form>
      {/* Experience */}
      <form className=" flex flex-col gap-5">
        {/* Experience header */}
        <div className=" flex justify-between items-center">
          <h1 className=" text-blue font-medium text-2xl">Experience</h1>
          <FontAwesomeIcon
            icon={isExperience ? faCaretLeft : faCaretDown}
            className=" cursor-pointer"
            onClick={() => {
              setIsExperience(!isExperience);
            }}
          />
        </div>
        {/* Experience details */}
        <div className={`${isExperience ? "hidden" : "flex"} flex-col gap-2`}>
          <Input label="Position" placeholder="Project Manager" id="Position" />
          <Input label="Company" placeholder="Shell SPDC" id="Company" />
          <Input
            label="Period"
            placeholder="January 2019 - Present"
            id="Period"
          />
          <Textbox
            label="Work Description"
            placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
            id="Description"
          />

          <input
            type="submit"
            value="Add Another Experience"
            className=" border-[1.5px] border-orange rounded-full bg-transparent p-2 text-xs text-orange cursor-pointer"
          />
        </div>
      </form>
      {/* Education */}
      <form className=" flex flex-col gap-5">
        {/* Education header */}
        <div className=" flex justify-between items-center">
          <h1 className=" text-blue font-medium text-2xl">Education</h1>
          <FontAwesomeIcon
            icon={isEducation ? faCaretLeft : faCaretDown}
            className=" cursor-pointer"
            onClick={() => {
              setIsEducation(!isEducation);
            }}
          />
        </div>
        {/* Education details */}
        <div className={`${isEducation ? "hidden" : "flex"} flex-col gap-2`}>
          <Input
            label="School"
            placeholder="University of portharcourt"
            id="School"
          />
          <Input
            label="Course of study"
            placeholder="BSC Civil Engineering"
            id="course"
          />
          <Input label="Date" placeholder="2016 - Present" id="Date" />
          <input
            type="submit"
            value="Add Another Education"
            className=" border-[1.5px] border-orange rounded-full bg-transparent p-2 text-xs text-orange cursor-pointer"
          />
        </div>
      </form>
      {/* Skills */}
      <form className=" flex flex-col gap-2">
        {/* Skills header */}
        <div className=" flex justify-between items-center">
          <h1 className=" text-blue font-medium text-2xl">Skills</h1>
          <FontAwesomeIcon
            icon={isSkills ? faCaretLeft : faCaretDown}
            className=" cursor-pointer"
            onClick={() => {
              setIsSkills(!isSkills);
            }}
          />
        </div>
        {/* Skills details */}
        <div className={`${isSkills ? "hidden" : "flex"} flex-col gap-2`}>
          <Input
            label="Softwares"
            placeholder="Add proficient softwares"
            id="Softwares"
          />
          <Input label="Hard Skill" placeholder="Add a hard skill" id="Hard" />
          <Input label="Soft Skills" placeholder="Add a soft skill" id="Soft" />
        </div>
      </form>
    </div>
  );
}

export default ProfileBodyRight