import React from "react";

const Projects = () => {
  const elements = [
    { name: "Tic" },
    { name: "Hola" },
    { name: "Namaste" },
    { name: "XYZ" },
    { name: "ABC" },
    { name: "Xyy" },
  ];
  return (
    <div className="h-[90vh] flex">
      <div className="border h-full w-[24%]">
        <div className="border h-[30px]"></div>
      </div>
      <div className="w-[76%] border h-full overflow-scroll">
        <div className="border h-[30px] "></div>
        <div className=" mt-[110px] px-[60px] flex h-auto flex-wrap ">
          {elements?.map((el, index) => {
            return (
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-[#5565E8] mb-[14px]">Project 1</span>
                  <span className="text-[#607B96] text-sm">&nbsp;// _UI-Animations</span>
                </div>
                <div
                  key={index}
                  className="border flex flex-col  w-[280px] h-[220px] mr-[60px] mb-[20px]  text-white "
                >
                  <div className="w-full h-[50%]">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <div className=" w-full h-[50%] flex justify-center items-center">
                    {el?.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
