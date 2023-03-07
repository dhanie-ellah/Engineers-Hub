import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "../DynamicInput";
import Textbox from "../Textbox";

const CreateAccountBody = () => {
  return (
    <form className=" w-[35%] m-auto py-5 md:w-[90%] flex flex-col gap-4">
      <div>
        <h1 className=" text-blue text-3xl font-medium">
          Create a Company Account
        </h1>
        <p className=" text-dark-grey text-xs">
          To post a job you need to create a company account{" "}
        </p>
      </div>
      <div>
        <h1 className=" text-sm font-medium text-blue">Upload Company Logo</h1>
        <p className=" text-dark-grey text-xs">
          Make it easy for people to identify you
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <div className=" w-[150px] h-[150px] rounded-lg flex items-center justify-center border-[1.5px] border-dark-grey">
          <FontAwesomeIcon
            icon={faCamera}
            className="text-dark-grey text-2xl"
          />
        </div>
        <label
          htmlFor="logoUpload"
          className=" text-xs bg-orange text-white rounded-full p-2 px-5 w-fit cursor-pointer"
        >
          Import from Gallery
        </label>
        <input type="file" id="logoUpload" className=" hidden" />
      </div>
      <div className=" flex flex-col gap-5">
        <Input placeholder="Shell SPDC" label="Company Name" id="company" />
        <Input
          placeholder="Shell SPDC"
          label="Your First Name and last name"
          id="name"
        />
        <div className=" flex flex-col gap-1">
          <Input
            placeholder="Ad Agency"
            label="Organization Type"
            id="organizationType"
          />
          <p className=' text-xs text-dark-grey'>Please select if you are hiring directly or for an organization</p>
        </div>
        <Input
          placeholder="Port Harcourt, Rivers state"
          label="Location"
          id="Location"
        />
        <Input placeholder="www.shelllspdc.com" label="Website" id="Website" />
        <Input
          placeholder="divineorji72@shellspdc.com"
          label="Official Email"
          id="officialEmail"
        />
        <div className=" flex flex-col gap-1">
          <Input
            placeholder="+234 909 746 8473"
            label="Your Phone Number"
            id="number"
          />
          <p className=' text-xs text-dark-grey'>
            For account management communication, not visible to job seekers
          </p>
        </div>
        <div className=" flex flex-col gap-1">
          <Input
            placeholder="RC4846824"
            label="Registration Number"
            id="regNumber"
          />
          <p className=' text-xs text-dark-grey'>For Verification purposes only</p>
        </div>
        <Textbox
          placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
          label="Breif Description"
          id="description"
        />
      </div>
      <input type="submit" value="Save and Continue" className=" bg-orange text-white rounded-full text-xs w-[80%] m-auto p-2.5" />
    </form>
  );
};

export default CreateAccountBody;
