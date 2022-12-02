import React from "react";
import { NavLink } from "react-router-dom";

let textStyle = "text-[7px] text-[#607B96] active:border-b-[#FEA55F]";

const Header = () => {
  return (
    <div className="w-full">
      <ul className="flex h-[7vh]">
        <NavLink
          className={({ isActive }) => {
            return `${textStyle} border-[0.5px] border-[#1E2D3D] w-[24%] px-2 py-1 cursor-pointer`;
          }}
        >
          micheal-weaver
        </NavLink>
        <div className="flex left-[60px] w-[60%] ">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return `${textStyle} ${
                isActive && "border-b-[#FEA55F]"
              } border-[0.5px] border-l-0 border-r-0 border-t-[#1E2D3D] border-b-[#1E2D3D] px-2 py-1 cursor-pointer`;
            }}
          >
            _hello
          </NavLink>
          <NavLink
            exact
            activeClassName="about_me"
            to="/about"
            className={({ isActive }) => {
              return `${textStyle} ${
                isActive && "border-b-[#FEA55F]"
              } border-[0.5px] border-l-[#1E2D3D] border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] px-2 py-1 cursor-pointer `;
            }}
          >
            _about_me
          </NavLink>
          <NavLink
            exact
            activeClassName="projects"
            to="/projects"
            className={({ isActive }) => {
              return `${textStyle} ${
                isActive && "border-b-[#FEA55F]"
              } border-[0.5px] border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] px-2 py-1 cursor-pointer`;
            }}
          >
            _projects
          </NavLink>
          <li
            className={`${textStyle} border-[0.5px]  border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D]  px-2 py-1 w-[100%]`}
          ></li>
        </div>
        <NavLink
          exact
          activeClassName="contact"
          to="/contact"
          className={({ isActive }) => {
            return `${textStyle} ${
              isActive && "border-b-[#FEA55F]"
            } border-[0.5px] border-l-0 border-r-[#1E2D3D] border-t-[#1E2D3D] border-b-[#1E2D3D] w-[16%] pl-2 py-1 cursor-pointer`;
          }}
        >
          _contact_me
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
