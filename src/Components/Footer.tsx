import React from "react";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import TwitterIcon from "../assets/Icons/TwitterIcon";

const Footer = () => {
  let textStyle = "text-[16px] text-[#607B96] active:border-b-[#FEA55F]";
  return (
    <div className=" h-[4vh] text-[16px]">
      <ul className="flex justify-center">
        <li
          className={`${textStyle}  border-[0.5px] border-[#1E2D3D] w-[24%] px-2 py-1 cursor-pointer`}
        >
          find me in:
        </li>
        <div className="flex   left-[60px] w-[60%] ">
          <li
            className={`${textStyle} border-[0.5px] border-l-0 border-r-0 border-t-[#1E2D3D] border-b-[#1E2D3D] px-2 py-1 cursor-pointer`}
          >
            <TwitterIcon height="12px" style={{marginTop:"5px"}}/>
          </li>
          <li
            className={`${textStyle} border-[0.5px] border-l-[#1E2D3D] border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] px-2 py-1 cursor-pointer`}
          >
            <FacebookIcon  height="16px" style={{marginTop:"4px"}} />
          </li>
          <li
            className={`${textStyle} border-[0.5px] border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D]  px-2 py-1 w-[100%]`}
          ></li>
        </div>
        <li
          className={`${textStyle} border-[0.5px] border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] w-[16%] pl-2 py-1 cursor-pointer`}
        >
          @username
        </li>
      </ul>
    </div>
  );
};

export default Footer;
