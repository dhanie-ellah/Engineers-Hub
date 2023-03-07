import React from 'react'
import NavBar from "../components/nav/Nav";
import SearchingFor from '../components/forms/SearchingFor'
import BgDesign from "../components/Bgdesign";
import Footer from "../components/Footer";

const searchingForCheckbox = () => {
  return (
    <div>
      <NavBar />
      <SearchingFor/>
      <BgDesign />
      <Footer />
    </div>
  );
}

export default searchingForCheckbox