import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserIcon from "../../assets/user-icon.png";
import InputField from "../InputField";
import Checkbox from "../Checkbox";
import SubmitBtn from "../SubmitBtn";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import supabase from "../../Config/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FillDetails from "./FillDetails";
import {
  SignupPublicService,
  signupPrivateService,
} from "../../service/auth_service/signup_service";
import { User } from "../../redux/state/action";
import { connect } from "react-redux";

const RegisterForm = ({ appState, loginUser }) => {
  const User = appState.userData;

  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const [page, setPage] = useState(1);

  const Navigate = useNavigate();

  const supabaseConnect = supabase();

  const [register, setRegister] = useState({});

  // const signup = () => {
  //   supabase();
  //   console.log("start");
  //   if (!register) {
  //     alert("Error");
  //   } else {
  //     signupPrivateService({
  //       email: register.email,
  //       password: register.password,
  //     })
  //     .then((response) => {
  //       // console.log(response);
  //       if (response.error) {
  //         console.log("error")
  //       }

  //       SignupPublicService({
  //         uuid: response.data.user.id,
  //         email: register.email,

  //       }).then((response2) => {
  //         if (response2.error) {
  //           console.log("error")
  //         }
  //         let loginData = {
  //           uuid: response.data.user.id,
  //           email: register.email,
  //           // password: register.password,
  //           profileUpdated: false,
  //         };
  //         loginUser(loginData);
  //         // assuming there's no error
  //         console.log("done")
  //         // Navigate("/fillDetails");
  //       });
  //     });
  //   }
  // };

  const signup = () => {
    console.log("start");
    if (!register) {
      alert("Error: Registration data is missing");
      return; // Exit the function early if registration data is missing
    }
  
    signupPrivateService({
      email: register.email,
      password: register.password,
    }).then((response) => {
      if (response.error) {
        console.error("Error signing up:", response.error.message);
        alert("Error signing up: " + response.error.message);
        return; // Exit the function if there's an error signing up
      }
  
      SignupPublicService({
        uuid: response.data.user.id,
        email: register.email,
      }).then((response2) => {
        if (response2.error) {
          console.error("Error signing up publicly:", response2.error.message);
          alert("Error signing up publicly: " + response2.error.message);
          return; // Exit the function if there's an error signing up publicly
        }
  
        let loginData = {
          uuid: response.data.user.id,
          email: register.email,
          profileUpdated: false,
        };
        loginUser(loginData);
        console.log("Signup successful");
        // Navigate("/fillDetails");
      });
    }).catch((error) => {
      console.error("Error in signup:", error.message);
      alert("Error in signup: " + error.message);
    });
  };
  

  React.useEffect(() => {
    console.log(User);
  }, []);

  return User != null ? (
    Navigate("/fillDetails")
  ) : (
    <>
      <form
        className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-4 md:w-11/12 md:px-5 lg:w-3/5"
        onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}
      >
        {page == 1 && (
          <>
            {/* User Icon Image */}
            <div className="flex justify-center">
              <img src={UserIcon} alt="" />
            </div>
            {/* Form heading */}
            <h1 className="text-blue text-center text-2xl font-semibold">
              Register <span className="text-grey">in seconds</span>
            </h1>
            {/* Form input fields */}
            <InputField
              placeholder="Email"
              input_type="email"
              name="email"
              value={register.email}
              onchange={(e) => {
                setRegister({
                  ...register,
                  email: e.target.value,
                });
              }}
            />
            {/* password input */}
            <div className=" relative">
              <InputField
                placeholder="Password"
                input_type={seePassword ? "text" : "password"}
                name="password"
                value={register.password}
                onchange={(e) => {
                  setRegister({
                    ...register,
                    password: e.target.value,
                  });
                }}
              />
              <FontAwesomeIcon
                icon={seePassword ? faEye : faEyeSlash}
                className=" font-medium text-xs absolute right-[20px] top-[35%] text-dark-grey cursor-pointer"
                onClick={() => {
                  setSeePassword(!seePassword);
                }}
              />
            </div>
            {/* confirm password field */}
            <div className=" relative">
              <InputField
                placeholder="Confirm password"
                input_type={seeConfirmPassword ? "text" : "password"}
              />
              <FontAwesomeIcon
                icon={seeConfirmPassword ? faEye : faEyeSlash}
                className=" font-medium text-xs absolute right-[20px] top-[35%] text-dark-grey cursor-pointer"
                onClick={() => {
                  setSeeConfirmPassword(!seeConfirmPassword);
                }}
              />
            </div>
            {/* Terms of service and privacy policy agreement checkbox */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="acceptance"
                text="Joining means you are okay with our Terms of Service and Privacy Policy."
                styling=" border border-orange outline-none focus:ring-0 focus:ring-transparent checked:bg-orange"
              />
            </div>
            {/* submission button */}
            <SubmitBtn title="Register" />
            {/* Horizontal divider */}
            <div className="flex items-center justify-between">
              <hr className="w-2/5 border-1 border-dark-grey outline-none" />
              <p className="text-dark-grey text-sm">Or</p>
              <hr className="w-2/5 border-1 border-dark-grey outline-none" />
            </div>
            {/* Login option */}
            <h1 className="text-blue text-center font-semibold text-xs">
              Already a member?{" "}
              <Link to="/login" className="text-orange">
                Sign In
              </Link>
            </h1>
            {/* Alternative signup options */}
            <button className="access-btn">
              <img src={googleLogo} alt="" className="w-3" /> Sign up with
              Google
            </button>
            <button className="access-btn">
              <img src={facebookLogo} alt="" className="w-3" /> Sign up with
              Facebook
            </button>
          </>
        )}
      </form>
      {page == 2 && (
        <FillDetails
          register={register}
          setRegister={setRegister}
          setPage={setPage}
          signUp1={signup}
        />
      )}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
