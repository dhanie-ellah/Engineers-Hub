import React from "react";
import ProfileCard from "../ProfileCard";
import ProfileCover from "../../assets/coverphoto.jpg";
import ProfilePicture from "../../assets/Ellipse 47.png";
import CoverPhoto from "../../assets/coverphoto.jpg";
import ProfilePhoto from "../../assets/Ellipse 47.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const ProfileDetail = () => {
  return (
    <div>
      <h1 className=" text-center text-2xl text-blue font-medium">
        Top Engineers
      </h1>
      <div className=" w-[80%] m-auto p-5 flex gap-10 lg:w-[90%] px-0 lg:flex-col-reverse">
        <div className=" w-1/2 flex flex-wrap gap-[4%] lg:w-full">
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
          <ProfileCard
            profilecover={ProfileCover}
            profilephoto={ProfilePicture}
            name="Divine Orji"
            year="2022"
          />
        </div>
        <div className=" w-1/2 rounded-3xl overflow-hidden pb-8 h-fit lg:w-full">
          <div className=" w-full h-[200px] overflow-hidden">
            <img src={CoverPhoto} alt="" className="w-full" />
          </div>
          <div className=" w-[90%] m-auto relative -mt-[100px] flex flex-col gap-2.5">
            <div className=" w-[175px] h-[175px] overflow-hidden">
              <img src={ProfilePhoto} alt="" className=" w-full" />
            </div>
            <div className=" flex flex-col gap-3">
              <h1 className=" font-medium text-3xl text-blue">Divine Orji</h1>
              <p className=" text-dark-grey font-medium text-sm">
                Civil Engineer
              </p>
              <p className=" text-dark-grey text-xs">
                University of Port - Harcourt
              </p>
              <p className=" text-dark-grey text-xs">Joined 2022</p>
              <p className=" text-dark-grey font-medium text-sm">
                Bsc, Phd, MSc, Coren certified
              </p>
              <p className=" text-dark-grey font-medium text-sm">
                <FontAwesomeIcon icon={faLocation} />
                Port - Harcourt, Rivers State, Nigeria
              </p>
              <p>
                Lörem ipsum kavis ressade eftersom agen för bepument. Exodade
                memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad
                spebeligt.{" "}
              </p>

              <button className="w-full rounded-full border border-orange font-semibold bg-orange text-white p-2.5">
                Hire
              </button>
              <button className="w-full rounded-full border border-orange font-semibold text-orange p-2.5">
                Follow
              </button>
            </div>

            <div>
              <h1 className=" font-medium text-blue text-2xl">
                Certifications
              </h1>
            </div>

            <div>
              <h1 className=" font-medium text-blue text-2xl">Publications</h1>
            </div>
            <div>
              <h1 className=" font-medium text-blue text-2xl">Experience</h1>
            </div>
            <div>
              <h1 className=" font-medium text-blue text-2xl">Skills</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
