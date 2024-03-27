import React from "react";
import Nav from "../components/nav/NavActive";
import SearchBar from "../components/SearchBar/SearchBar";
import Profiledetail from "../components/EngineersProfile/Profiledetail";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { User } from "../redux/state/action";
import { useNavigate } from "react-router-dom";

const ProfileDetail = ({ appState }) => {
  const User = appState.userData;

  const Navigate = useNavigate();
  window.scroll(0, 0);
  React.useEffect(() => {
    console.log(User);
  }, []);
  return !User.profileUpdated ? (
    Navigate("/fillDetails")
  ) : (
    <div>
      <Nav />
      <SearchBar />
      <Profiledetail />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appState: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    loginUser: (payload) => dispatch(User(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);
