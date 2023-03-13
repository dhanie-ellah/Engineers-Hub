import React from 'react'
import NavBar from '../components/nav/NavActive'
import SearchBar from '../components/SearchBar/SearchBar'
import CompaniesBody from '../components/Companies/CompaniesBody'
import Footer from '../components/Footer'

const CompaniesPage = () => {
  window.scroll(0, 0);
  return (
    <div>
      <NavBar />
      <SearchBar />
      <CompaniesBody />
      <Footer />
    </div>
  );
}

export default CompaniesPage