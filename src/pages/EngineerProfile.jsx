import React from 'react'
import NavBar from '../components/nav/NavActive'
import Footer from '../components/Footer'
import ProfileBody from '../components/EngineersProfile/ProfileBody'

const EngineerProfile = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavBar />
      <ProfileBody/>
      <Footer/>
    </div>
  )
}

export default EngineerProfile