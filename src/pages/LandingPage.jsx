import React from "react";
import NavBar from "../components/nav/Nav";
import LandingSearch from "../components/LandingPage/LandingSearch";
import LandingPostJobs from "../components/LandingPage/LandingPostJobs";
import LandingFindJobs from "../components/LandingPage/LandingFindJobs";
import Individuals from "../components/LandingPage/Individuals";
import Companies from "../components/LandingPage/Companies";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <LandingSearch />
      <LandingPostJobs />
      <LandingFindJobs />
      <Individuals />
      <Companies />
      <Footer />
    </div>
  );
};

export default LandingPage;
