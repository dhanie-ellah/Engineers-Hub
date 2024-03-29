import React from 'react'
import NavBar from "../components/nav/Nav";
import AddProfilePicture from '../components/forms/ProfilePicture'
import BgDesign from "../components/Bgdesign";
import Footer from "../components/Footer";

const AddPhoto = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavBar />
      <AddProfilePicture/>
      <BgDesign />
      <Footer />
    </div>
  );
}

export default AddPhoto