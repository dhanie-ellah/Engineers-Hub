import React from 'react'
import NavBar from '../components/nav/NavActive'
import Footer from '../components/Footer'
import PostJobBody from '../components/PostJobs/PostJobBody'

const postJobPage = () => {
  return (
    <div>
      <NavBar />
      <PostJobBody />
      <Footer/>
    </div>
  )
}

export default postJobPage