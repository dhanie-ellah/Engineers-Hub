import { faCaretDown, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Input from "../DynamicInput";
import Textbox from "../Textbox";
import { User } from "../../redux/state/action";
import { connect } from "react-redux";
import supabase from "../../Config/supabase";
import {
  updateAboutPublic,
  updateDetails,
  updateEducationPublic,
  updateExperiencePublic,
  updateSkillPublic,
} from "../../service/user_service/update_details_service";

const ProfileBodyRight = ({ addDetails, appState }) => {
  const User = appState.userData;
  const [isAboutMe, setIsAboutMe] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isSkills, setIsSkills] = useState(false);
  const [userData, setUserData] = useState();


  // const supabaseConnect = supabase();

  const [details, setDetails] = useState({});
  const [experience, setExperience] = useState({});
  const [education, setEducation] = useState({});
  const [skills, setSkills] = useState({});

  const upDateAboutSection = () => {
    console.log("loading");
    let data = {
      specialization: details.specialization,
      certification: details.certification,
      dateOfBirth: details.dateOfBirth,
      location: details.location,
      description: details.description,
    };

    updateDetails(data)
      .then((response) => {
        // console.log(response)
        updateAboutPublic({ data, email: User.email }).then((response2) => {
          console.log(response2.data)

          // prepare a payload
          let aboutDetails = {
            ...response.data.user.user_metadata,
            about: response.data.user.about,
            // email: response.data.user.email,
            // profileUpdated: true,
            // joined: response.data.user.created_at,
          };
          addDetails(aboutDetails);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const upDateExperienceSection = () => {
    console.log("loading");
    let data = {
      position: experience.position,
      company: experience.company,
      period: experience.period,
      description: experience.description,
    };

    updateDetails(data)
      .then((response) => {
        if (response.error) {
          // console.error(error.message)
          //  return false
        }
        updateExperiencePublic({ data, email: User.email }).then((response2) => {
          if (response2.error) {
            // handle error
            //  return false
          }

          // prepare a payload
          // let userPayload = {
          //   ...response.data.user.user_metadata,
          //   uuid: response.data.user.id,
          //   email: response.data.user.email,
          //   profileUpdated: true,
          //   joined: response.data.user.created_at,
          // };
          // loginUser(userPayload);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const upDateEducationSection = () => {
    console.log("loading");
    let data = {
      school: education.school,
      course: education.course,
      date: education.date,
    };

    updateDetails(data)
      .then((response) => {
        if (response.error) {
          // console.error(error.message)
          //  return false
        }
        updateEducationPublic({ data, email: User.email }).then((response2) => {
          if (response2.error) {
            // handle error
            //  return false
          }

          // prepare a payload
          // let userPayload = {
          //   ...response.data.user.user_metadata,
          //   uuid: response.data.user.id,
          //   email: response.data.user.email,
          //   profileUpdated: true,
          //   joined: response.data.user.created_at,
          // };
          // loginUser(userPayload);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const upDateSkillsSection = () => {
    console.log("loading");
    let data = {
      software: skills.software,
      softSkill: skills.softSkill,
      hardSkill: skills.dateOfBirth,
    };

    updateDetails(data)
      .then((response) => {
        if (response.error) {
          // console.error(error.message)
          //  return false
        }
        updateSkillPublic({ data, email: User.email }).then((response2) => {
          if (response2.error) {
            // handle error
            //  return false
          }

          // prepare a payload
          // let userPayload = {
          //   ...response.data.user.user_metadata,
          //   uuid: response.data.user.id,
          //   email: response.data.user.email,
          //   profileUpdated: true,
          //   joined: response.data.user.created_at,
          // };
          // loginUser(userPayload);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" w-1/2 flex flex-col gap-3 lg:w-full">
      {/* about me */}
      <form
        className=" flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          upDateAboutSection();
          // Navigate("/confirmMail");
        }}
      >
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
          {/* <Input label="Full Name" placeholder="Divine Orji" id="name" /> */}
          <Input
            label="Specialization"
            placeholder="Civil Engineer"
            name="Specialization"
            value={details.specialization}
            onchange={(e) => {
              setDetails({ ...details, specialization: e.target.value });
            }}
          />
          <Input
            label="Certifications"
            placeholder="Bsc, PHD, Msc, COREN"
            name="Certifications"
            value={details.certification}
            onchange={(e) => {
              setDetails({ ...details, certification: e.target.value });
            }}
          />
          <Input
            label="Date of Birth"
            placeholder="26 - December - 1999"
            name="dateOfBirth"
            value={details.dateOfBirth}
            onchange={(e) => {
              setDetails({ ...details, dateOfBirth: e.target.value });
            }}
          />
          <Input
            label="Location"
            placeholder="Port-harcourt, Rivers State"
            name="location"
            value={details.location}
            onchange={(e) => {
              setDetails({ ...details, location: e.target.value });
            }}
          />
          <Textbox
            label="Brief Description"
            placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
            name="description"
            value={details.description}
            onchange={(e) => {
              setDetails({ ...details, description: e.target.value });
            }}
          />
          <input
            type="submit"
            value="Save"
            className=" border-[1.5px] border-orange rounded-full bg-transparent p-2 text-xs text-orange cursor-pointer"
          />
        </div>
      </form>

      {/* Experience */}
      <form
        className=" flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          upDateExperienceSection();
        }}
      >
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
          <Input
            label="Position"
            placeholder="Project Manager"
            name="position"
            value={experience.position}
            onchange={(e) => {
              setExperience({ ...experience, position: e.target.value });
            }}
          />
          <Input
            label="Company"
            placeholder="Shell SPDC"
            name="company"
            value={experience.company}
            onchange={(e) => {
              setExperience({ ...experience, company: e.target.value });
            }}
          />
          <Input
            label="Period"
            placeholder="January 2019 - Present"
            name="period"
            value={experience.period}
            onchange={(e) => {
              setExperience({ ...experience, period: e.target.value });
            }}
          />
          <Textbox
            label="Work Description"
            placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
            name="description"
            value={experience.description}
            onchange={(e) => {
              setExperience({ ...experience, description: e.target.value });
            }}
          />

          <input
            type="submit"
            value="Save"
            className=" border-[1.5px] border-orange rounded-full bg-transparent p-2 text-xs text-orange cursor-pointer"
          />
        </div>
      </form>

      {/* Education */}
      <form
        className=" flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          upDateEducationSection();
        }}
      >
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
            name="school"
            value={education.school}
            onchange={(e) => {
              setEducation({ ...education, school: e.target.value });
            }}
          />
          <Input
            label="Course of study"
            placeholder="BSC Civil Engineering"
            name="course"
            value={education.course}
            onchange={(e) => {
              setEducation({ ...education, course: e.target.value });
            }}
          />
          <Input
            label="Date"
            placeholder="2016 - Present"
            name="date"
            value={education.date}
            onchange={(e) => {
              setEducation({ ...education, date: e.target.value });
            }}
          />
          <input
            type="submit"
            value="Save"
            className=" border-[1.5px] border-orange rounded-full bg-transparent p-2 text-xs text-orange cursor-pointer"
          />
        </div>
      </form>

      {/* Skills */}
      <form
        className=" flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          upDateSkillsSection();
        }}
      >
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
            name="software"
            value={skills.software}
            onchange={(e) => {
              setSkills({ ...skills, software: e.target.value });
            }}
          />
          <Input
            label="Hard Skill"
            placeholder="Add a hard skill"
            name="hardSkill"
            value={skills.hardSkill}
            onchange={(e) => {
              setSkills({ ...skills, hardSkill: e.target.value });
            }}
          />
          <Input
            label="Soft Skills"
            placeholder="Add a soft skill"
            name="softSkill"
            value={skills.softSkill}
            onchange={(e) => {
              setSkills({ ...skills, softSkill: e.target.value });
            }}
          />
          <input
            type="submit"
            value="Save"
            className=" border-[1.5px] border-orange rounded-full bg-transparent p-2 text-xs text-orange cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appState: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addDetails: (payload) => dispatch(User(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileBodyRight);
