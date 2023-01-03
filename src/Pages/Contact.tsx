import React, { useState } from "react";
import MailIcon from "../assets/Icons/MailIcon";
import PhoneIcon from "../assets/Icons/PhoneIcon";
import RedirectIcon from "../assets/Icons/RedirectIcon";
import RightArrow from "../assets/Icons/RightArrow";
import SubmitCodeSnippet from "../Components/SubmitCodeSnippet";

const Contact = () => {
  const [submit, setSubmit] = useState(true);
  const [showContact, setShowContact] = useState(true);
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // let code =
  //   "const button = document.querySelector('#sendBtn');const message = {name: 'Jonathan Davis',email: '',message: '',date: 'Thu 21 Apr'}button.addEventListener('click', () => {form.send(message);})";

  let code = [
    "const button = document.querySelector('#sendBtn');",
    "const message = {",
    " name: 'Jonathan Davis',",
    "email: '',",
    "message: '',",
    " date: 'Thu 21 Apr'",
    "}",
    "button.addEventListener('click', () => {",
    "form.send(message);",
    " })",
  ];

  console.log(formData);

  return (
    <div className="h-[90vh] flex">
      <div className="border border-[#1E2D3D] h-full w-[24%]">
        <div className=" border border-[#1E2D3D] h-[30px]">
          <span
            className="text-white cursor-pointer flex"
            onClick={(e) => {
              e.stopPropagation();
              setShowContact(!showContact);
            }}
          >
            <RightArrow
              className={`h-[15px] w-[14px] ml-[2px] mt-[3px] ${
                showContact ? "rotate-90 transition-transform" : ""
              } cursor-pointer`}
            />
            <p className="ml-[10px]">contacts</p>
          </span>
        </div>
        <div
          className={`border border-[#1E2D3D] h-[80px] ${
            showContact ? "" : "hidden"
          } flex flex-col justify-center items-left`}
        >
          <div className="flex flex-col text-[#607B96] ml-[10px] ">
            <div className="flex  items-center">
              <MailIcon />
              <a
                href={`mailto: harshvardhanshete6@gmail.com`}
                className="hover:text-[#fff] cursor-pointer ml-[10px]"
              >
                harshvardhanshete6@gmail.com
              </a>
            </div>
            <div className="flex  items-center">
              <PhoneIcon />
              <a
                href={`tel:+8830848420`}
                className="hover:text-[#fff] cursor-pointer ml-[10px]"
              >
                8830848420
              </a>
            </div>
          </div>
        </div>
        <div className="border border-[#1E2D3D] h-[30px] ">
          <span
            className="text-white cursor-pointer flex "
            onClick={(e) => {
              setShow(!show);
            }}
          >
            <RightArrow
              className={`h-[15px] w-[14px] ml-[2px] mt-[3px]  ${
                show ? "rotate-90 transition-transform" : ""
              } cursor-pointer`}
            />
            <p className="ml-[10px]">find-me-also-in</p>
          </span>
        </div>
        <div
          className={`border border-[#1E2D3D] h-[80px] ${
            show ? "" : "hidden"
          } flex flex-col justify-center items-left `}
        >
          <div className="flex flex-col text-[#607B96] ml-[10px]">
            <div className="flex items-center">
              <RedirectIcon />
              <a
                href="https://www.linkedin.com/in/harshvardhan-shete-040a0b176/"
                target="_blank"
                className="hover:text-[#fff] cursor-pointer ml-[10px]"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <RedirectIcon />
              <a
                href="https://www.instagram.com/harshvardhan.shete._/"
                target="_blank"
                className="hover:text-[#fff] cursor-pointer ml-[10px]"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center">
              <RedirectIcon />
              <a
                href="https://www.facebook.com/hvshete"
                target="_blank"
                className="hover:text-[#fff] cursor-pointer ml-[10px]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[76%] border border-[#1E2D3D] h-full overflow-scroll">
        <div className="border border-[#1E2D3D] h-[30px] text-[#607B96]">
          contacts
        </div>
        <div className=" flex h-[95%]  ">
          <div className="grid-flow-col w-[50%]  px-[85px] py-[70px] ">
            <div className="  h-[80%] flex flex-col justify-between">
              <div className="flex flex-col h-[65px] justify-between">
                <span className="text-[#607B96] mb-[5px]">_name:</span>
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, name: e?.target.value });
                  }}
                  type="text"
                  className="border border-[#607B96] text-[#465E77] h-[50px] px-[10px]  w-[70%] rounded-lg focus:ring-0  focus:outline-[#465E77] "
                />
              </div>
              <div className="flex flex-col  h-[65px] justify-between">
                <span className="text-[#607B96] mb-[5px]">_email:</span>
                <input
                  onChange={(e) => {
                    setFormData({ ...formData, email: e?.target.value });
                  }}
                  type="text"
                  className="border border-[#607B96] text-[#465E77] h-[50px] px-[10px]  w-[70%] rounded-lg"
                />
              </div>
              <div className="flex flex-col  h-[90px] justify-between ">
                <span className="text-[#607B96] mb-[5px]">_message:</span>
                <textarea
                  onChange={(e) => {
                    setFormData({ ...formData, message: e?.target.value });
                  }}
                  className="border border-[#607B96] rounded-lg px-[10px] py-[2px] text-[#465E77] w-[70%]"
                />
              </div>
              <div className="flex flex-col ">
                <button className="text-[#FFFFFF] border border-[#1C2B3A] mt-[15px] rounded-lg text-left bg-[#1C2B3A]  w-[156px] py-[5px] px-[7px]">
                  submit-message
                </button>
              </div>
            </div>
          </div>
          <div className="grid pl-[10px] w-[50%] border border-[#1E2D3D] border-b-0 ">
            <SubmitCodeSnippet formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
