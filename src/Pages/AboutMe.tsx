import React, { useState } from "react";
import CrossIcon from "../assets/Icons/CrossIcon";
import HobbiesIcon from "../assets/Icons/HobbiesIcon";
import PersonalInfoIcon from "../assets/Icons/PersonalInfoIcon";
import ProfessionalIcon from "../assets/Icons/ProfessionalIcon";
import RedFolder from "../assets/Icons/RedFolder";
import RightArrow from "../assets/Icons/RightArrow";
import Typed from "react-typed";
import BioTextComponent from "../Components/BioTextComponent";
import ExperienceTextComponent from "../Components/Experience/ExperienceTextComponent";
import EducationTextComponent from "../Components/Education/EducationTextComponent";
import LogiDescription from "../Components/Experience/LogiDescription";
import FnCallbackDescription from "../Components/Experience/FnCallbackDescription";

const AboutMe = () => {
  const [personalInfo, setPersonalInfo] = useState(true);
  const [personalInfoItems, setPersonalInfoItems] = useState(true);
  const [bio, setBio] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  return (
    <div className=" h-[90vh] flex justify-evenly w-[100vw]">
      <div className="w-[5%] h-[90vh] border-[0.5px] border-[#1E2D3D] flex flex-col items-center gap-2 pt-[8px]">
        <div className="mb-[33px]">
          <ProfessionalIcon
            style={{ height: "24px", width: "24px", cursor: "pointer" }}
          />
        </div>
        <div
          className={`${personalInfo ? "" : "opacity-[0.5]"} mb-[33px]`}
          onClick={() => {
            setPersonalInfo(!personalInfo);
          }}
        >
          <PersonalInfoIcon
            style={{ height: "24px", width: "24px", cursor: "pointer" }}
          />
        </div>
        <div>
          <HobbiesIcon
            style={{
              height: "24px",
              width: "24px",
              cursor: "pointer",
              opacity: "0.5",
            }}
          />
        </div>
      </div>
      <div className="w-[15%] h-[90vh] border-[0.5px] border-[#1E2D3D]">
        <div
          className={`w-full  border-[0.5px] border-b-[#1E2D3D] border-l-0 border-r-0 border-t-0 ${
            personalInfo ? "" : "hidden"
          } flex items-center cursor-pointer`}
          onClick={(e) => {
            e.preventDefault();
            setPersonalInfoItems(!personalInfoItems);
          }}
        >
          <RightArrow
            className={`h-[15px] w-[14px] ml-[2px] mt-[3px] ${
              personalInfoItems ? "rotate-90 transition-transform" : ""
            } cursor-pointer`}
          />{" "}
          <span className="text-white ml-[4px]"> personal-info</span>
        </div>
        <div
          id="professionalInfo"
          className={`${personalInfoItems && personalInfo ? "" : "hidden"} `}
        >
          <div className={`w-full flex`}>
            {/* <RightArrow className="h-[15px] w-[14px] ml-[2px] mt-[22px] hover:rotate-90 hover:transition-transform cursor-pointer" />{" "} */}
            <RedFolder className="h-[13px] w-[14px] ml-[8px] mt-[23px] " />
            <span
              onClick={(e) => {
                setBio(!bio);
                setExperience(false);
                setEducation(false);
              }}
              className="text-[#fff] ml-[8px] mt-[19px] text-[16px] cursor-pointer"
            >
              bio
            </span>
          </div>
          <div className="w-full flex">
            {/* <RightArrow className="h-[15px] w-[14px] ml-[2px] mt-[12px] hover:rotate-90 hover:transition-transform cursor-pointer" />{" "} */}
            <RedFolder className="h-[13px] w-[14px] ml-[8px] mt-[12px] " />
            <span
              className="text-[#fff] ml-[8px] mt-[8px] text-[16px] cursor-pointer"
              onClick={(e) => {
                setExperience(!experience);
                setBio(false);
                setEducation(false);
              }}
            >
              experience
            </span>
          </div>
          <div className="w-full flex">
            {/* <RightArrow className="h-[15px] w-[14px] ml-[2px] mt-[12px] hover:rotate-90 hover:transition-transform cursor-pointer" />{" "} */}
            <RedFolder className="h-[13px] w-[14px] ml-[8px] mt-[12px] " />
            <span
              className="text-[#fff] ml-[8px] mt-[8px] text-[16px] cursor-pointer"
              onClick={(e) => {
                setExperience(false);
                setBio(false);
                setEducation(!education);
              }}
            >
              education
            </span>
          </div>
        </div>
      </div>
      {/* Middle Section Personal Info  */}
      <div className="w-[35%] h-[90h] border-[0.5px] border-[#1E2D3D] flex flex-col">
        <div className="w-full border border-t-0 border-l-0 border-r-0 border-b-[#1E2D3D]">
          <div
            className={`w-[250px]   border-[0.5px] border-b-0 border-l-0 border-r-[#1E2D3D] border-t-0 ${
              personalInfo ? "" : "hidden"
            } flex items-center justify-between px-[5px]`}
            // onClick={() => {
            //   setPersonalInfoItems(!personalInfoItems);
            // }}
          >
            <span className="text-[#607B96] ml-[4px]"> personal-info</span>
            <span className="text-[#607B96] ml-[4px] cursor-pointer">
              {" "}
              <CrossIcon />
            </span>
          </div>
        </div>
        <div className=" h-auto text-[#607B96] py-[50px] pl-[20px]">
          {bio && personalInfo && (
            <>
              <BioTextComponent />
            </>
          )}
          {experience && personalInfo && (
            <div className="flex flex-col">
              <div>
                <ExperienceTextComponent
                  companyName={"Logibricks Technologies, Pune"}
                  timeSpan={"(September 2021 - Present)"}
                  designation={"React Developer"}
                  descriptionComponent={<LogiDescription />}
                />
              </div>
              <div className="mt-[40px]">
                <ExperienceTextComponent
                  companyName={"fnCallback Technologies, Pune"}
                  timeSpan={"(September 2020 - Feb 2021)"}
                  designation={"Angular Developer"}
                  descriptionComponent={<FnCallbackDescription />}
                />{" "}
              </div>
            </div>
          )}
          {education && personalInfo && (
            <div className="">
              <div>
                <ExperienceTextComponent
                  companyName={
                    "SKN Sinhgad Institutes of Technology & Science, Lonavala"
                  }
                  timeSpan={""}
                  designation={
                    "Bachelor Of Engineering - Information Technology (7.21 CGPA)"
                  }
                  descriptionComponent={
                    <p className="text-[#4D5BCE]">
                      Savitribai Phule Pune University
                    </p>
                  }
                />
              </div>
              <div className="mt-[40px]">
                <ExperienceTextComponent
                  companyName={"Annasaheb Waghire College, Otur, Pune"}
                  timeSpan={""}
                  designation={"Higher Secondary Certificate - PCM"}
                  descriptionComponent={
                    <p className="text-[#4D5BCE]">
                      Maharashtra State Board of Secondary and Higher Secondary
                      Certificate.
                    </p>
                  }
                />
              </div>
              <div className="mt-[40px]">
                <ExperienceTextComponent
                  companyName={"Holy Cross High School, Kurla, Mumbai"}
                  timeSpan={""}
                  designation={"Secondary School Certificate - PCM"}
                  descriptionComponent={
                    <p className="text-[#4D5BCE]">
                      Maharashtra State Board of Secondary and Higher Secondary
                      Certificate.
                    </p>
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Code Snippet Showcase Section  */}
      <div className="w-[45%] h-[90vh] border-[0.5px] border-[#1E2D3D] overflow-y-scroll">
        <div className="w-full h-[25px] border border-t-0 border-l-0 border-r-0 border-b-[#1E2D3D]"></div>
        <div className="text-[#607B96] mt-[17px] ml-[40px]">
          <span>// Code snippet showcase:</span>
        </div>
        {/* TODO: Make this reuseable  */}
        <div className="w-[604px] h-[264px]  ml-[40px] mt-[38px] ">
          <div className="flex">
            <div>
              <img
                src="/public/assets/user image 2.png"
                className="rounded-[50%] h-[36px] w-[36px]"
                alt=""
              />
            </div>
            <div className="flex flex-col ml-[10px]">
              <span className="text-[#5565E8] text-[14px]">
                @harshvardhan220
              </span>
              <span className="text-[12px] text-[#607B96]">
                Created 5 months ago
              </span>
            </div>
          </div>
          <div className="border rounded-lg border-[#1E2D3D] bg-[#011221] h-auto mt-[12px]">
            <div className="p-[13px]">
              <img
                src="/public/assets/validation.jpg"
                alt=""
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-[604px] h-[264px]  ml-[40px] mt-[58px] ">
          <div className="flex">
            <div>
              <img
                src="/public/assets/user image 2.png"
                className="rounded-[50%] h-[36px] w-[36px]"
                alt=""
              />
            </div>
            <div className="flex flex-col ml-[10px]">
              <span className="text-[#5565E8] text-[14px]">
                @harshvardhan220
              </span>
              <span className="text-[12px] text-[#607B96]">
                Created 5 months ago
              </span>
            </div>
          </div>
          <div className="border rounded-lg border-[#1E2D3D] bg-[#011221] h-auto mt-[12px]">
            <div className="p-[13px]">
              <img
                src="/public/assets/flatmap.jpg"
                alt=""
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
