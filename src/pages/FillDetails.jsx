import React from 'react'
import NavBar from "../components/nav/Nav";
import FillDetailsForm from '../components/forms/FillDetails'
import BgDesign from "../components/Bgdesign";
import Footer from "../components/Footer";

const FillDetails = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavBar />
      <FillDetailsForm/>
      <BgDesign />
      <Footer />
    </div>
  );
}

export default FillDetails