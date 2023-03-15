import {
  faCamera,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../Textbox'
import React from 'react'
import chevron from "../../assets/chevron.png";
import CompanyPicture from '../../assets/CompanyPicture.png'

const UploadPost = () => {
  return (
    <div className=" w-[80%] m-auto py-5 flex gap-5 lg:w-[95%] md:flex-col">
      <div className=" w-[50%] flex flex-col gap-5 md:w-full">
        <h1 className=" text-2xl text-blue">Upload a post</h1>
        <form action="" className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-3">
            <p className=" text-xs">Upload Image / Video</p>
            <label
              htmlFor="upload"
              className=" flex justify-center items-center h-[300px] w-[300px] rounded-lg border border-dark-grey"
            >
              <FontAwesomeIcon
                icon={faCamera}
                className=" text-dark-grey text-2xl"
              />
            </label>
            <input type="file" id="upload" className=" hidden" />
            <input
              type="submit"
              value="Import from Gallery"
              className=" text-xs bg-orange rounded-full text-white py-3 w-fit px-20"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <Input
              label="Add Comment"
              id="comment"
              placeholder="Lörem ipsum kavis ressade eftersom agen för bepument. Exodade memil. Sorade huktig, fasons oment. Hypor trigyn våd fast kartad spebeligt. "
            />
            <input
              type="submit"
              value="Post"
              className=" text-xs bg-orange rounded-full text-white py-3 w-fit px-20"
            />
          </div>
        </form>
      </div>

      <div className=" w-[50%] flex flex-col gap-10 md:w-full">
        <p>My Posts</p>
        <div className=" flex flex-col gap-3">
          <div className="flex flex-col gap-3 w-full p-5 shadow-lg cursor-pointer bg-white rounded-lg md:flex-col">
            <header className="flex items-center justify-between lg:gap-2">
              <div className=" w-[45px] h-[45px] rounded-full overflow-hidden">
                <img src={chevron} alt="" />
              </div>
              <div>
                <h1 className=" text-blue text-xs font-bold">Chevron</h1>
                <p className=" text-dark-grey text-xs">
                  Mechanical engineering recruitment firm
                </p>
              </div>
              <p className=" text-dark-grey text-xs">12:23am</p>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className=" text-blue text-sm"
              />
            </header>
            <p className=" text-dark-grey text-sm">
              Lörem ipsum bejiren ötrede. Trins odade medborgarforskning.
              Autoktig krortad, låtisade yktig ost. Spev kvasis, prorade
              fassade. Biocism dev ber. Telepyn res. Bilig oning fadinde,
              preplaktigt. Makrode tretenas även om exoning.{" "}
            </p>
            {/* <div className="w-full overflow-hidden rounded-lg">
              <img src={CompanyPicture} alt="" className="w-[100%]" />
            </div> */}
          </div>

          <div className="flex flex-col gap-3 w-full p-5 shadow-lg cursor-pointer bg-white rounded-lg md:flex-col">
            <header className="flex items-center justify-between lg:gap-2">
              <div className=" w-[45px] h-[45px] rounded-full overflow-hidden">
                <img src={chevron} alt="" />
              </div>
              <div>
                <h1 className=" text-blue text-xs font-bold">Chevron</h1>
                <p className=" text-dark-grey text-xs">
                  Mechanical engineering recruitment firm
                </p>
              </div>
              <p className=" text-dark-grey text-xs">12:23am</p>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className=" text-blue text-sm"
              />
            </header>
            <p className=" text-dark-grey text-sm">
              Lörem ipsum bejiren ötrede. Trins odade medborgarforskning.
              Autoktig krortad, låtisade yktig ost. Spev kvasis, prorade
              fassade. Biocism dev ber. Telepyn res. Bilig oning fadinde,
              preplaktigt. Makrode tretenas även om exoning.{" "}
            </p>
            <div className="w-full overflow-hidden rounded-lg">
              <img src={CompanyPicture} alt="" className="w-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPost