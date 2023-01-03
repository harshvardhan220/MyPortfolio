import React from "react";
import "../App.css";
import TicTacToe from "./TicTacToeGame/TicTacToe";

const HeroSection = () => {
  return (
    <div className=" h-[90vh] flex justify-evenly w-[100vw]">
      <div className="w-[50%] flex-wrap">
        <div className=" flex flex-col mt-[15%] w-[100%]  text-left pl-[29%] pt-[30px]">
          <span className="text-[18px] text-[#fff]">Hi all. I am</span>
          <span className="text-[60px] text-[#fff] mt-[-1px]">
            Harshvardhan Shete
          </span>
          <span className="text-[32px] text-[#4D5BCE] mt-[-3px]">
            {" "}
            &#62; Front-end developer
          </span>
          <span className="text-[16px] text-[#607B96] mt-[16px]">
            // complete the game to continue
          </span>
          <span className="text-[16px] text-[#607B96]">
            // you can also see it on my Github page
          </span>
          <div className="text-[6px] mt-[-1px] text-[#fff]">
            <span className="text-[16px] text-[#4D5BCE] ">const </span>
            <span className="text-[16px] text-[#43D9AD] ">githubLink </span>
            <span className="text-[16px] text-[#FFFFFF]">= </span>
            <a
              href="https://github.com/harshvardhan220"
              target={"_blank"}
              className="text-[16px] text-[#E99287] cursor-pointer"
            >
              “https://github.com/harshvardhan220”
            </a>
          </div>
        </div>
      </div>
      <div className="w-[50%] ml-[4px] relative flex-wrap">
        <div className="mt-[20%]">
          <TicTacToe />
        </div>
        {/* <img
          className="h-[642px] w-[779px] "
          src={"/public/assets/Background Blurs.png"}
          alt=""
        />
        <img
          src={"/public/assets/Snake Game.png"}
          style={{
            height: "475px",
            borderRadius: "3px",
            width: "510px",
            marginTop: "14%",
            position: "absolute",
            top: 0,
            left: "20px",
          }}
          alt=""
        /> */}
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
