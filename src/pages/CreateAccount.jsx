import React from 'react'
import NavBar from '../components/nav/NavActive'
import CreateAccountBody from '../components/CreateCompanyAccount/CreateAccountBody'
import Footer from '../components/Footer'

const CreateAccount = () => {
  return (
    <div>
      <NavBar />
      <CreateAccountBody/>
      <Footer/>
    </div>
  )
}

export default CreateAccount