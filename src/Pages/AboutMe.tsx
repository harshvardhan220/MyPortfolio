import React, { useState } from "react";
import HobbiesIcon from "../assets/Icons/HobbiesIcon";
import PersonalInfoIcon from "../assets/Icons/PersonalInfoIcon";
import ProfessionalIcon from "../assets/Icons/ProfessionalIcon";
import RedFolder from "../assets/Icons/RedFolder";
import RightArrow from "../assets/Icons/RightArrow";

const AboutMe = () => {
  const [personalInfo, setPersonalInfo] = useState(false);
  return (
    <div className=" h-[85vh] flex justify-evenly w-[100vw]">
      <div className="w-[5%] h-[84vh] border-[0.5px] border-[#1E2D3D] flex flex-col items-center gap-2 pt-[8px]">
        <div>
          <ProfessionalIcon
            style={{ height: "10px", width: "10px", cursor: "pointer" }}
          />
        </div>
        <div
          className={`${personalInfo ? "" : "opacity-[0.5]"}`}
          onClick={() => {
            setPersonalInfo(!personalInfo);
          }}
        >
          <PersonalInfoIcon
            style={{ height: "10px", width: "10px", cursor: "pointer" }}
          />
        </div>
        <div>
          <HobbiesIcon
            style={{
              height: "10px",
              width: "10px",
              cursor: "pointer",
              opacity: "0.5",
            }}
          />
        </div>
      </div>
      <div className="w-[15%] h-[84vh] border-[0.5px] border-[#1E2D3D]">
        <div
          id="professionalInfo"
          className={`${personalInfo ? "" : "hidden"} `}
        >
          <div className={`w-full flex`}>
            <RightArrow className="h-[6px] w-[6px] ml-[2px] mt-[3px] hover:rotate-90 hover:transition-transform cursor-pointer" />{" "}
            <RedFolder className="h-[6px] w-[6px] ml-[2px] mt-[3px] " />
            <span className="text-[#fff] ml-[2px] mt-[2px] text-[6px]">
              bio
            </span>
          </div>
          <div className="w-full flex">
            <RightArrow className="h-[6px] w-[6px] ml-[2px] mt-[3px] hover:rotate-90 hover:transition-transform cursor-pointer" />{" "}
            <RedFolder className="h-[6px] w-[6px] ml-[2px] mt-[3px] " />
            <span className="text-[#fff] ml-[2px] mt-[2px] text-[6px]">
              interests
            </span>
          </div>
          <div className="w-full flex">
            <RightArrow className="h-[6px] w-[6px] ml-[2px] mt-[3px] hover:rotate-90 hover:transition-transform cursor-pointer" />{" "}
            <RedFolder className="h-[6px] w-[6px] ml-[2px] mt-[3px] " />
            <span className="text-[#fff] ml-[2px] mt-[2px] text-[6px]">
              education
            </span>
          </div>
        </div>
      </div>
      <div className="w-[35%] h-[84vh] border-[0.5px] border-[#1E2D3D]"></div>
      <div className="w-[45%] h-[84vh] border-[0.5px] border-[#1E2D3D]"></div>
    </div>
  );
};

export default AboutMe;
