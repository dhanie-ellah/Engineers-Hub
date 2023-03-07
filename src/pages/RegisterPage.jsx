import React from 'react'
import NavBar from '../components/nav/Nav'
import RegisterForm from '../components/forms/RegisterForm'
import BgDesign from '../components/Bgdesign'
import Footer from '../components/Footer'

const registerPage = () => {
  return (
    <div>
      <NavBar />
      <RegisterForm />
      <BgDesign />
      <Footer/>
    </div>
  )
}

export default registerPage