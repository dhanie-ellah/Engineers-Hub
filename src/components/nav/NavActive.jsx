import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faBell, faBriefcase, faClose, faGear, faMessage } from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from '../../assets/Ellipse 47.png'

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <nav className=" z-10">
      {/* Desktop navbar */}
      <div className="flex bg-blue justify-between px-[120px] py-5 items-center lg:px-5 md:px-[120px] text-xs md:hidden">
        <div className="w-1/6 z-20">
          <Link to="/" className="w-1/12">
            <img src={logo} alt="Engineer's hub logo" className="w-full" />
          </Link>
        </div>

        <div className="flex justify-between w-4/6">
          <div className="flex gap-10">
            <Link
              to="/findjob"
              className="link-hover p-1 border-b-2 border-transparent"
            >
              Find job
            </Link>
            <Link
              to="/postjob"
              className="link-hover p-1 border-b-2 border-transparent"
            >
              Post a job
            </Link>
            <Link
              to="/companies"
              className="link-hover p-1 border-b-2 border-transparent"
            >
              Companies
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faMessage}
              className=" bg-white rounded-full p-2 text-blue cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faBell}
              className=" bg-white rounded-full p-2 text-blue cursor-pointer"
            />
            <div
              className=" flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              <div className=" w-[30px] h-[30px] rounded-full overflow-hidden border-white border-2">
                <img src={ProfilePicture} alt="" />
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-xs text-white"
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            dropDown ? "flex" : "hidden"
          } flex-col gap-5 items-center bg-white rounded-lg p-5 absolute right-[100px] top-[75px] lg:right-[25px] z-20`}
        >
          <div className=" flex items-center gap-2 cursor-pointer">
            <div className=" w-[20px] h-[20px] rounded-full overflow-hidden border-dark-grey">
              <img src={ProfilePicture} alt="" />
            </div>
            <Link to="/engineerprofile">
              <p className=" font-semibold text-blue">Divine Orji</p>
            </Link>
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBriefcase} className=" text-dark-grey" />
            {/* <Link to=''> */}
            <p className=" font-semibold text-blue">My Jobs</p>
            {/* </Link> */}
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faGear} className="text-dark-grey" />
            <p className=" font-semibold">Settings</p>
          </div>
        </div>
      </div>

      {/* Mobile links */}
      <div className="hidden bg-blue justify-between px-12 py-5 items-center text-xs md:flex lg:px-5 lg:text-base">
        <div className="w-1/6 lg:w-2/5 lg:z-50">
          <Link to="/" className="w-1/12">
            <img
              src={logo}
              alt="Engineer's hub logo"
              className="w-full lg:z-20"
            />
          </Link>
        </div>

        <div
          className={`${
            openNav ? "flex" : "hidden"
          } lg:fixed lg:top-0 lg:flex-col lg:justify-center lg:items-center lg:h-full lg:bg-blue lg:w-full lg:left-0 lg:gap-10 md:gap-2.5 lg:text-center lg:z-20 lg:text-3xl md:text-lg`}
        >
          <div className="flex gap-10 lg:flex-col lg:gap-4">
            <Link
              to="/findjob"
              className="link-hover p-1 border-b-2 border-transparent"
            >
              Find job
            </Link>
            <Link
              to="/postjob"
              className="link-hover p-1 border-b-2 border-transparent"
            >
              Post a job
            </Link>
            <Link
              to="/companies"
              className="link-hover p-1 border-b-2 border-transparent"
            >
              Companies
            </Link>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className=" flex gap-2 items-center">
              {/* <FontAwesomeIcon
                icon={faMessage}
                className=" bg-white rounded-full p-2 text-blue"
              /> */}
              <p className=" text-white">Messages</p>
            </div>
            <div className=" flex gap-2 items-center">
              {/* <FontAwesomeIcon
                icon={faBell}
                className=" bg-white rounded-full p-2 text-blue"
              /> */}
              <p className=" text-white">Notifications</p>
            </div>
            <Link to="/engineerprofile" className=" flex gap-2 items-center">
              {/* <div className=" w-[30px] h-[30px] rounded-full overflow-hidden border-white border-2">
                <img src={ProfilePicture} alt="" />
              </div> */}
              <p>Profile</p>
            </Link>
          </div>
        </div>

        {/* <FontAwesomeIcon icon={openNav ? faClose : faBars} onClick={()=>{setOpenNav(!openNav);}} /> */}

        <FontAwesomeIcon
          className="hidden lg:block z-20 text-2xl text-orange"
          icon={openNav ? faClose : faBars}
          onClick={() => {
            setOpenNav(!openNav);
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
