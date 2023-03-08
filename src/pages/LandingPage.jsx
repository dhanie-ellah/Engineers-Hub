import React from "react";
import NavBar from "../components/nav/Nav";
import LandingSearch from "../components/LandingPage/LandingSearch";
import LandingPostJobs from "../components/LandingPage/LandingPostJobs";
import LandingFindJobs from "../components/LandingPage/LandingFindJobs";
import Individuals from "../components/LandingPage/Individuals";
import Companies from "../components/LandingPage/Companies";
import Footer from "../components/Footer";

const LandingPage = () => {
  window.scroll(0, 0);
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
