import React from 'react'
import NavBar from '../components/nav/CompanyNav'
import Footer from '../components/Footer'
import PostJobBody from '../components/PostJobs/PostJobBody'

const postJobPage = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavBar />
      <PostJobBody />
      <Footer/>
    </div>
  )
}

export default postJobPage