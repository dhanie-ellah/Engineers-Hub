import React from 'react'
import NavBar from '../components/nav/NavActive'
import Footer from '../components/Footer'
import ProfileBody from '../components/EngineersProfile/ProfileBody'
import { connect } from 'react-redux'

const EngineerProfile = ({ appState }) => {
  const User = appState.userData;
  window.scroll(0, 0);

  React.useEffect(() => {
    console.log(User);
  })
  return (
    <div>
      <NavBar />
      <ProfileBody Data={User} />
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
    // loginUser: (payload) => dispatch(User(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EngineerProfile);
 