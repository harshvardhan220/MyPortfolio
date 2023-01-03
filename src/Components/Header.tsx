import React from "react";
import { NavLink } from "react-router-dom";

let textStyle = "text-[16px] text-[#607B96] active:border-b-[#FEA55F]";

const Header = () => {
  return (
    <div className="w-full">
      <div className="min-[376px]:hidden max-[376px]:w-full max-[376px]:flex max-[376px]:justify-between px-[10px] max-[376px]:text-[#607B96] max-[376px]:h-[5vh] max-[376px]:items-center">
        <div>Harshvardhan Shete</div>
        <div>X</div>
      </div>
      <ul className="flex justify-center items-center h-[5vh] max-[376px]:hidden">
        <NavLink
          to={""}
          className={({ isActive }) => {
            return `${textStyle} border-[0.5px] border-[#1E2D3D] w-[24%] px-5 py-1 cursor-pointer max-[376px]:w-[60%] `;
          }}
        >
          Harshvardhan Shete
        </NavLink>
        <div className="flex left-[60px] w-[60%] ">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return `${textStyle} ${
                isActive && "border-b-[#FEA55F]"
              } border-[0.5px] border-l-0 border-r-0 border-t-[#1E2D3D] border-b-[#1E2D3D] px-5 py-1 cursor-pointer `;
            }}
          >
            _hello
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return `${textStyle} ${
                isActive && "border-b-[#FEA55F]"
              } border-[0.5px] border-l-[#1E2D3D] border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] px-5 py-1 cursor-pointer  `;
            }}
          >
            _about_me
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => {
              return `${textStyle} ${
                isActive && "border-b-[#FEA55F]"
              } border-[0.5px] border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] px-5 py-1 cursor-pointer `;
            }}
          >
            _projects
          </NavLink>
          <li
            className={`${textStyle} border-[0.5px]  border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D]  px-5 py-1 w-[100%]`}
          ></li>
        </div>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return `${textStyle} ${
              isActive && "border-b-[#FEA55F]"
            } border-[0.5px] border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] w-[16%] pl-2 py-1 cursor-pointer `;
          }}
        >
          _contact_me
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
