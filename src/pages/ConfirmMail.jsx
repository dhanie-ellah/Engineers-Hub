import React from 'react'
import NavBar from "../components/nav/Nav";
import ConfirmMailForm from '../components/forms/ConfirmMail'
import BgDesign from "../components/Bgdesign";
import Footer from "../components/Footer";

const ConfirmMail = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavBar />
      <ConfirmMailForm/>
      <BgDesign />
      <Footer />
    </div>
  );
}

export default ConfirmMail