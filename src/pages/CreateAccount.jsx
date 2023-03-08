import React from 'react'
import NavBar from '../components/nav/NavActive'
import CreateAccountBody from '../components/CreateCompanyAccount/CreateAccountBody'
import Footer from '../components/Footer'

const CreateAccount = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavBar />
      <CreateAccountBody/>
      <Footer/>
    </div>
  )
}

export default CreateAccount