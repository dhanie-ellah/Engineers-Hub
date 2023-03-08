import React from 'react'
import NavBar from "../components/nav/Nav";
import SearchingFor from '../components/forms/SearchingFor'
import BgDesign from "../components/Bgdesign";
import Footer from "../components/Footer";

const searchingForCheckbox = () => {
  window.scroll(0, 0)
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