import React from 'react'
import Nav from '../components/nav/Nav'
import Bgdesign from '../components/Bgdesign'
import LoginForm from '../components/forms/LoginForm'
import Footer from '../components/Footer'

const loginPage = () => {
  return (
    <div>
      <Nav />
      <LoginForm/>
      <Bgdesign />
      <Footer/>
    </div>
  )
}

export default loginPage