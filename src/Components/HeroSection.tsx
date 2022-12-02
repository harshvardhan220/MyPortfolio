import React from "react";
import SnakeGame from "./SnakeGame/SnakeGame";

const HeroSection = () => {
  return (
    <div className=" h-[85vh] flex justify-evenly w-[100vw]">
      <div className="w-[50%]  ">
        <div className="flex flex-col mt-[15%] w-[100%]  text-left pl-[43%] pt-[30px]">
          <span className="text-[4px] text-[#fff]">Hi all. I am</span>
          <span className="text-[10px] text-[#fff] mt-[-1px]">
            Harshvardhan Shete
          </span>
          <span className="text-[6px] text-[#4D5BCE] mt-[-3px]">
            {" "}
            &#62; Front-end developer
          </span>
          <span className="text-[4px] text-[#607B96] mt-[16px]">
            // complete the game to continue
          </span>
          <span className="text-[4px] text-[#607B96]">
            // you can also see it on my Github page
          </span>
          <div className="text-[6px] mt-[-1px] text-[#fff]">
            <span className="text-[4px] text-[#4D5BCE] ">const </span>
            <span className="text-[4px] text-[#43D9AD] ">githubLink </span>
            <span className="text-[4px] text-[#FFFFFF]">= </span>
            <a
              href="https://github.com/harshvardhan220"
              className="text-[4px] text-[#E99287] cursor-pointer"
            >
              “https://github.com/harshvardhan220”
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50%] ml-[4px] relative">
        <img
          className="h-[206px] w-[240px] "
          src={"/public/assets/Background Blurs.png"}
          alt=""
        />
        <img
          className="h-[206px] w-[240px] "
          src={"/public/assets/Snake Game.png"}
          style={{
            height: "auto",
            borderRadius: "3px",
            width: "150px",
            marginTop: "14%",
            position: "absolute",
            top: 0,
            left: "20px",
          }}
          alt=""
        />
        {/* <div
          style={{
            background:
              "linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)",
            height: "auto",
            border: "1px solid #0C1616",
            borderRadius: "3px",
            width: "150px",
            marginTop: "14%",
            position: "absolute",
            top: 0,
            left: "20px",
          }}
        >
          <div className="h-[100px]"></div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
