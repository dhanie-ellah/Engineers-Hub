import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FillDetails from './pages/FillDetails'
import ConfirmMail from './pages/ConfirmMail'
import Search from './pages/SearchingForCheckbox'
import AddPhoto from './pages/AddPhoto'
import CompaniesPage from './pages/CompaniesPage'
import PostJobPage from './pages/PostJobPage'
import FindJobPage from './pages/FindJobPage'
import EngineerProfile from "./pages/EngineerProfile";
import ProfileDetail from "./pages/ProfileDetail";
import UploadPost from './pages/UploadPost'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/fillDetails" element={<FillDetails/>}/>
          <Route path="/confirmMail" element={<ConfirmMail/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/addPhoto" element={<AddPhoto/>}/>
          <Route path="/companies" element={<CompaniesPage/>}/>
          <Route path="/postjob" element={<PostJobPage/>}/>
          <Route path="/findjob" element={<FindJobPage/>}/>
          <Route path="/engineerprofile" element={<EngineerProfile />} />
          <Route path="/profiledetail" element={<ProfileDetail />} />
          <Route path="/uploadpost" element={<UploadPost/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
