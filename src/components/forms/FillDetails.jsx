import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserIcon from "../../assets/user-icon.png";
import InputField from "../InputField";
import SubmitBtn from "../SubmitBtn";
import supabase from "../../Config/supabase";
import { useParams } from "react-router-dom";
import {
  updateDetails,
  updateuserPublic,
} from "../../service/user_service/update_details_service";
import { connect } from "react-redux";
import { User } from "../../redux/state/action";

const FillDetails = ({ loginUser, appState }) => {
  const User = appState.userData;
  const Navigate = useNavigate();
  const [register, setRegister] = useState({});
  const [userData, setUserData] = useState();

  const [setPage, signUp1] = useState({});

  const supabaseConnect = supabase();

  function updateDetailsController() {
    console.log("loading");
    let data = {
      firstname: register.first_name,
      lastname: register.last_name,
      phone: register.phone,
      country: register.country,
      city: register.city,
    };

    updateDetails(data)
      .then((response) => {
        if (response.error) {
          // handle error
          //  return false
        }
        updateuserPublic({ data, email: User.email }).then((response2) => {
          if (response2.error) {
            // handle error
            //  return false
          }

          // prepare a payload
          let userPayload = {
            ...response.data.user.user_metadata,
            uuid: response.data.user.id,
            email: response.data.user.email,
            profileUpdated: true,
            joined: response.data.user.created_at,
          };
          loginUser(userPayload);
          Navigate("/engineerprofile");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    console.log(User);
  }, []);

  return (
    <form
      className="border-2 border-grey rounded-2xl w-2/6 m-auto p-5 px-14 my-5 flex flex-col gap-4 md:w-11/12 md:px-5 lg:w-3/5"
      onSubmit={(e) => {
        e.preventDefault();
        updateDetailsController();
        // Navigate("/confirmMail");
      }}
    >
      <div className="flex justify-center">
        <img src={UserIcon} alt="" />
      </div>
      <h1 className="text-blue text-center text-2xl font-semibold">
        Please fill your details
      </h1>
      {/* first_name */}
      <InputField
        placeholder="First Name"
        input_type="text"
        name="first_name"
        value={register.first_name}
        onchange={(e) => {
          setRegister({
            ...register,
            first_name: e.target.value,
          });
        }}
      />

      {/* last_name */}
      <InputField
        placeholder="Last Name"
        input_type="text"
        name="last_name"
        value={register.last_name}
        onchange={(e) => {
          setRegister({
            ...register,
            last_name: e.target.value,
          });
        }}
      />

      {/* middle_name */}
      <InputField
        placeholder="Phone number"
        input_type="numeric"
        name="phone"
        value={register.phone}
        onchange={(e) => {
          setRegister({
            ...register,
            phone: e.target.value,
          });
        }}
      />

      {/* country */}
      <InputField
        placeholder="Country"
        input_type="text"
        name="country"
        value={register.country}
        onchange={(e) => {
          setRegister({
            ...register,
            country: e.target.value,
          });
        }}
      />
      {/* city */}
      <InputField
        placeholder="City"
        input_type="text"
        name="city"
        value={register.city}
        onchange={(e) => {
          setRegister({
            ...register,
            city: e.target.value,
          });
        }}
      />
      {/* submit button */}
      <SubmitBtn title="Save" />

      <h1 className="text-blue text-center font-semibold text-xs">
        Are you a recruiter?
        <Link to="" className="text-orange">
          Register here
        </Link>
      </h1>
    </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(FillDetails);
