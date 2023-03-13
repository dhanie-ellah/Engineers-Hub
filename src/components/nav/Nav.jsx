import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className='z-10 sticky top-0'>
      {/* Desktop navbar */}
      <div className="flex bg-blue justify-between px-[120px] py-5 items-center text-xs lg:hidden">
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

          <div className="flex items-center gap-5">
            <Link to="/register" className="btn border border-orange">
              Register
            </Link>
            <Link to="/login" className="bg-orange btn border border-orange">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile links */}
      <div className="hidden bg-blue justify-between px-12 py-5 items-center text-xs lg:flex lg:px-5 lg:text-base">
        <div className="w-1/6 lg:w-2/5 lg:z-20">
          <Link to="/" className="w-1/12">
            <img src={logo} alt="Engineer's hub logo" className="w-full lg:z-20" />
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

          <div className="flex items-center gap-5 lg:flex-col lg:gap-4">
            <Link to="/register" className="btn border border-orange">
              Register
            </Link>
            <Link to="/login" className="bg-orange btn border border-orange">
              Login
            </Link>
          </div>
        </div>

        {/* <FontAwesomeIcon icon={openNav ? faClose : faBars} onClick={()=>{setOpenNav(!openNav);}} /> */}

        <FontAwesomeIcon
          className="hidden lg:block z-20 text-xl text-orange"
          icon={openNav ? faClose : faBars}
          onClick={() => {
            setOpenNav(!openNav);
          }}
        />
      </div>
    </nav>
  );
}

export default Nav