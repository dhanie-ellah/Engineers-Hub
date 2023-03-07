import React from 'react'
import Logo from '../assets/logo.png'
import InputField from './InputField'
// import SubmitBtn from './submitBtn';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

const footer = () => {
  return (
    <div className="bg-blue px-32 py-8 flex flex-col gap-4 text-sm lg:p-5">
      {/* Top section of footer */}
      <div className="flex mb-10 lg:flex-col lg:gap-3 lg:mb-0">
        {/* Left */}
        <div className="flex flex-col gap-3 w-7/12 lg:w-auto">
          <Link to="/">
            <img src={Logo} alt="" className="w-fit" />
          </Link>
          <div className="flex justify-between md:flex-col md:gap-5">
            {/* Column1 */}
            <div className="flex flex-col gap-3 text-xs">
              <h1 className="font-bold text-sm text-white">Company</h1>
              <Link className="flex items-center gap-1">
                About us <FaExternalLinkAlt />
              </Link>
              <Link className="flex items-center gap-1">
                Privacy policy <FaExternalLinkAlt />
              </Link>
              <Link className="flex items-center gap-1">
                Terms and conditions <FaExternalLinkAlt />
              </Link>
            </div>
            {/* Column2 */}
            <div className="flex flex-col gap-3 text-xs">
              <h1 className="font-bold text-sm text-white">Quick Links</h1>
              <Link to="/postjob">Post a Job</Link>
              <Link to="/findjob">Find Jobs / IT Placements</Link>
              <Link to="/companies">Read About Companies</Link>
            </div>
            {/* Column3 */}
            <div className="flex flex-col gap-3 text-xs">
              <h1 className="font-bold text-sm text-white">Contact Us</h1>
              <a href="mailto:">Send Us a Mail</a>
              <a href="wa.me/">Whatsapp</a>
              <a href="tel:+">Voice Call</a>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-5/12 pl-24 flex flex-col gap-2 lg:w-auto lg:p-0">
          <h1 className="text-lg font-bold text-white">Newsletter</h1>
          <p className="text-white">
            Be the first to hear about latest updates, opportunities and
            freebies from Engineers Hub when you subscribe to our News letter
          </p>
          <InputField
            field_type="email"
            placeholder="Enter Email Address"
            className="p-2"
          />
          {/* <SubmitBtn title='Submit' className='text-sm w-fit'/> */}
          <input
            type="submit"
            value="Submit"
            className="w-fit bg-orange rounded-full p-1.5 px-10 text-xs cursor-pointer text-white"
          />
        </div>
      </div>
      {/* Horizontal divider */}
      <hr className="w-11/12 m-auto" />
      {/* Bottom section of footer */}
      <div className="flex justify-around items-center text-xs lg:flex-col lg:gap-3">
        <p className="text-white">© 2022 Engineers Hub. All rights reserved</p>
        {/* Social-media links */}
        <div className="flex gap-5">
          <a
            href="https://www.facebook.com/engineershubng"
            rel="noreferrer"
            target="_blank"
            className="social-media-icon"
          >
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com/in/" className="social-media-icon">
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/engineershubng?s=21&t=m6DpcDOHb9mdwt5CnsXqJg"
            rel="noreferrer"
            target="_blank"
            className="social-media-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/engineershubng?igshid=YmMyMTA2M2Y="
            rel="noreferrer"
            target="_blank"
            className="social-media-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default footer