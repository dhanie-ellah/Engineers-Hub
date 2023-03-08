import React from 'react'
import NavActive from '../components/nav/NavActive'
import SearchBar from '../components/SearchBar'
import FindJobsBody from '../components/FindJobs/FindJobsBody'
import Footer from '../components/Footer'

const FindJobPage = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavActive />
      <SearchBar />
      <FindJobsBody/>
      <Footer />
    </div>
  )
}

export default FindJobPage