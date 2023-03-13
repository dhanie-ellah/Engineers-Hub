import React from 'react'
import Nav from '../components/nav/NavActive'
import SearchBar from '../components/SearchBar/SearchBar'
import Profiledetail from '../components/EngineersProfile/Profiledetail'
import Footer from '../components/Footer'

const ProfileDetail = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Nav />
      <SearchBar/>
      <Profiledetail />
      <Footer/>
    </div>
  )
}

export default ProfileDetail